package com.neumann.example.obligacje_backend.controller;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neumann.example.obligacje_backend.model.Obligacja;
import com.neumann.example.obligacje_backend.service.ObligacjeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(
    origins = {
        "http://localhost:3000",
    },
    maxAge = 3600
)
public class ObligacjeController {

    @Autowired
    private ObligacjeService obligacjeService;

    private static final BigDecimal BELKA_TAX_RATE = new BigDecimal("0.19");
    private static final BigDecimal NET_MULTIPLIER = BigDecimal.ONE.subtract(BELKA_TAX_RATE);
    private static final BigDecimal NOMINAL_VALUE = new BigDecimal("100");
    
    private static final BigDecimal MAX_KWOTA = new BigDecimal("100000000"); 
    private static final BigDecimal MIN_KWOTA = new BigDecimal("100");       
    private static final int MAX_MIESIACE_SAFETY = 120; 

    private static final int CALC_SCALE = 10;
    private static final int RESULT_SCALE = 2;
    private static final RoundingMode ROUNDING = RoundingMode.HALF_UP;

    @GetMapping("/obligacje")
    public ResponseEntity<List<Obligacja>> getObligacje() {
        System.out.println(">>> Pobieranie listy obligacji...");
        return ResponseEntity.ok(obligacjeService.getObligacjeList());
    }

    @GetMapping("/calc")
    public ResponseEntity<?> calc(
            @RequestParam BigDecimal kwota,
            @RequestParam String symbol
    ) {
        try {
            if (kwota.stripTrailingZeros().scale() > 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Kwota musi być liczbą całkowitą."));
            }

            if (kwota.remainder(NOMINAL_VALUE).compareTo(BigDecimal.ZERO) != 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Kwota musi być wielokrotnością 100 PLN."));
            }

            if (kwota.compareTo(MIN_KWOTA) < 0 || kwota.compareTo(MAX_KWOTA) > 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Kwota poza zakresem (100 - 100mln)."));
            }

            Optional<Obligacja> obligacjaOpt = obligacjeService.getObligacjeList().stream()
                    .filter(o -> o.getSymbol().equalsIgnoreCase(symbol))
                    .findFirst();

            if (obligacjaOpt.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Nie znaleziono obligacji o symbolu: " + symbol));
            }

            Obligacja ob = obligacjaOpt.get();
            String prefix = ob.getSymbol().substring(0, 3).toUpperCase();
            int miesiaceTotal = switch (prefix) {
                case "OTS" -> 3;
                case "ROR" -> 12;
                case "DOS", "DOR" -> 24;
                case "TOZ", "TOS" -> 36;
                case "COI" -> 48;
                case "EDO" -> 120;
                default -> Math.min(Math.max(12, ob.getOkresLata() * 12), MAX_MIESIACE_SAFETY);
            };

            String durationString = switch (miesiaceTotal) {
                case 3 -> "3 miesiące";
                case 12 -> "1 rok";
                default -> (miesiaceTotal / 12) + (miesiaceTotal / 12 < 5 ? " lata" : " lat");
            };

            BigDecimal oprocentowanie = ob.getOprocentowaniePierwszyRok().divide(new BigDecimal(100), CALC_SCALE, ROUNDING);
            List<Map<String, Object>> timeline = new ArrayList<>(miesiaceTotal);

            BigDecimal currentCapital = kwota;
            BigDecimal accumulatedGrossInterest = BigDecimal.ZERO;

            for (int m = 1; m <= miesiaceTotal; m++) {
                BigDecimal monthlyInterest = currentCapital
                        .multiply(oprocentowanie)
                        .divide(new BigDecimal(12), CALC_SCALE, ROUNDING);

                accumulatedGrossInterest = accumulatedGrossInterest.add(monthlyInterest);
                if (ob.isKapitalizacja() && m % 12 == 0 && m != miesiaceTotal) {
                    currentCapital = currentCapital.add(accumulatedGrossInterest);
                    accumulatedGrossInterest = BigDecimal.ZERO;
                }
                BigDecimal totalGrossProfitNow = (currentCapital.subtract(kwota)).add(accumulatedGrossInterest);
                BigDecimal totalNetProfitNow = totalGrossProfitNow.multiply(NET_MULTIPLIER).setScale(RESULT_SCALE, ROUNDING);
                
                Map<String, Object> row = new HashMap<>();
                row.put("month", m);
                row.put("totalValue", kwota.add(totalNetProfitNow));
                row.put("accumulatedProfit", totalNetProfitNow);
                timeline.add(row);
            }

            BigDecimal totalNetProfit = (BigDecimal) timeline.get(timeline.size() - 1).get("accumulatedProfit");
            
            BigDecimal totalGrossProfit = totalNetProfit.divide(NET_MULTIPLIER, RESULT_SCALE, ROUNDING);
            BigDecimal taxPaid = totalGrossProfit.subtract(totalNetProfit);

            BigDecimal monthsDec = BigDecimal.valueOf(miesiaceTotal);
            BigDecimal yearlyAvg = miesiaceTotal < 12 ? totalNetProfit : totalNetProfit.divide(BigDecimal.valueOf(miesiaceTotal / 12.0), RESULT_SCALE, ROUNDING);

            Map<String, Object> response = new HashMap<>();
            response.put("daily", totalNetProfit.divide(monthsDec.multiply(new BigDecimal("30.437")), RESULT_SCALE, ROUNDING));
            response.put("monthly", totalNetProfit.divide(monthsDec, RESULT_SCALE, ROUNDING));
            response.put("yearly", yearlyAvg);
            
            response.put("total", totalNetProfit);
            response.put("initialInvestment", kwota);
            response.put("grossProfit", totalGrossProfit);
            response.put("taxPaid", taxPaid);
            response.put("duration", durationString);
            response.put("timeline", timeline);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.badRequest().body(Map.of("error", "Błąd obliczeń."));
        }
    }
}