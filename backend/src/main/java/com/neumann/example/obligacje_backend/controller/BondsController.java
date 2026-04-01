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

import com.neumann.example.obligacje_backend.model.Bond;
import com.neumann.example.obligacje_backend.service.BondsService;

@RestController
@RequestMapping("/api")
@CrossOrigin(
    origins = {
        "http://localhost:3000",
    },
    maxAge = 3600
)
public class BondsController {

    @Autowired
    private BondsService bondsService;

    private static final BigDecimal BELKA_TAX_RATE = new BigDecimal("0.19");
    private static final BigDecimal NET_MULTIPLIER = BigDecimal.ONE.subtract(BELKA_TAX_RATE);
    private static final BigDecimal NOMINAL_VALUE = new BigDecimal("100");
    
    private static final BigDecimal MAX_AMOUNT = new BigDecimal("100000000"); 
    private static final BigDecimal MIN_AMOUNT = new BigDecimal("100");       
    private static final int MAX_MONTHS_SAFETY = 120; 

    private static final int CALC_SCALE = 10;
    private static final int RESULT_SCALE = 2;
    private static final RoundingMode ROUNDING = RoundingMode.HALF_UP;

    @GetMapping("/obligacje")
    public ResponseEntity<List<Bond>> getBonds() {
        System.out.println(">>> Fetching bonds list...");
        return ResponseEntity.ok(bondsService.getBondsList());
    }

    @GetMapping("/calc")
    public ResponseEntity<?> calculate(
            @RequestParam(name = "kwota") BigDecimal amount,
            @RequestParam String symbol
    ) {
        try {
            if (amount.stripTrailingZeros().scale() > 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Amount must be a whole number."));
            }

            if (amount.remainder(NOMINAL_VALUE).compareTo(BigDecimal.ZERO) != 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Amount must be a multiple of 100 PLN."));
            }

            if (amount.compareTo(MIN_AMOUNT) < 0 || amount.compareTo(MAX_AMOUNT) > 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Amount out of range (100 - 100,000,000 PLN)."));
            }

            Optional<Bond> bondOpt = bondsService.getBondsList().stream()
                    .filter(b -> b.getSymbol().equalsIgnoreCase(symbol))
                    .findFirst();

            if (bondOpt.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Bond not found with symbol: " + symbol));
            }

            Bond bond = bondOpt.get();
            String prefix = bond.getSymbol().substring(0, 3).toUpperCase();
            
            int totalMonths = switch (prefix) {
                case "OTS" -> 3;
                case "ROR" -> 12;
                case "DOS", "DOR" -> 24;
                case "TOZ", "TOS" -> 36;
                case "COI" -> 48;
                case "EDO" -> 120;
                default -> Math.min(Math.max(12, bond.getPeriodYears() * 12), MAX_MONTHS_SAFETY);
            };

            String durationString = switch (totalMonths) {
                case 3 -> "3 months";
                case 12 -> "1 year";
                default -> (totalMonths / 12) + " years";
            };

            BigDecimal interestRate = bond.getFirstYearInterestRate().divide(new BigDecimal(100), CALC_SCALE, ROUNDING);
            List<Map<String, Object>> timeline = new ArrayList<>(totalMonths);

            BigDecimal currentCapital = amount;
            BigDecimal accumulatedGrossInterest = BigDecimal.ZERO;

            for (int m = 1; m <= totalMonths; m++) {
                BigDecimal monthlyInterest = currentCapital
                        .multiply(interestRate)
                        .divide(new BigDecimal(12), CALC_SCALE, ROUNDING);

                accumulatedGrossInterest = accumulatedGrossInterest.add(monthlyInterest);
                
                if (bond.hasCapitalization() && m % 12 == 0 && m != totalMonths) {
                    currentCapital = currentCapital.add(accumulatedGrossInterest);
                    accumulatedGrossInterest = BigDecimal.ZERO;
                }
                
                BigDecimal totalGrossProfitNow = (currentCapital.subtract(amount)).add(accumulatedGrossInterest);
                BigDecimal totalNetProfitNow = totalGrossProfitNow.multiply(NET_MULTIPLIER).setScale(RESULT_SCALE, ROUNDING);
                
                Map<String, Object> row = new HashMap<>();
                row.put("month", m);
                row.put("totalValue", amount.add(totalNetProfitNow));
                row.put("accumulatedProfit", totalNetProfitNow);
                timeline.add(row);
            }

            BigDecimal totalNetProfit = (BigDecimal) timeline.get(timeline.size() - 1).get("accumulatedProfit");
            
            BigDecimal totalGrossProfit = totalNetProfit.divide(NET_MULTIPLIER, RESULT_SCALE, ROUNDING);
            BigDecimal taxPaid = totalGrossProfit.subtract(totalNetProfit);

            BigDecimal monthsDec = BigDecimal.valueOf(totalMonths);
            BigDecimal yearlyAvg = totalMonths < 12 ? totalNetProfit : totalNetProfit.divide(BigDecimal.valueOf(totalMonths / 12.0), RESULT_SCALE, ROUNDING);

            Map<String, Object> response = new HashMap<>();
            response.put("daily", totalNetProfit.divide(monthsDec.multiply(new BigDecimal("30.437")), RESULT_SCALE, ROUNDING));
            response.put("monthly", totalNetProfit.divide(monthsDec, RESULT_SCALE, ROUNDING));
            response.put("yearly", yearlyAvg);
            
            response.put("total", totalNetProfit);
            response.put("initialInvestment", amount);
            response.put("grossProfit", totalGrossProfit);
            response.put("taxPaid", taxPaid);
            response.put("duration", durationString);
            response.put("timeline", timeline);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.badRequest().body(Map.of("error", "Calculation error."));
        }
    }
}