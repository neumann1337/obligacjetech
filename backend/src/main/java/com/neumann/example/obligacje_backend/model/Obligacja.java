package com.neumann.example.obligacje_backend.model;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Obligacja {

    private String symbol;
    private BigDecimal oprocentowaniePierwszyRok;
    private int okresLata;
    private boolean kapitalizacja;

    public Obligacja() {
    }

    public Obligacja(String symbol, BigDecimal oprocentowaniePierwszyRok, int okresLata, boolean kapitalizacja) {
        this.symbol = symbol;
        this.oprocentowaniePierwszyRok = oprocentowaniePierwszyRok;
        this.okresLata = okresLata;
        this.kapitalizacja = kapitalizacja;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public BigDecimal getOprocentowaniePierwszyRok() {
        return oprocentowaniePierwszyRok;
    }

    public void setOprocentowaniePierwszyRok(BigDecimal oprocentowaniePierwszyRok) {
        this.oprocentowaniePierwszyRok = oprocentowaniePierwszyRok;
    }

    public int getOkresLata() {
        return okresLata;
    }

    public void setOkresLata(int okresLata) {
        this.okresLata = okresLata;
    }

    public boolean isKapitalizacja() {
        return kapitalizacja;
    }

    public void setKapitalizacja(boolean kapitalizacja) {
        this.kapitalizacja = kapitalizacja;
    }
}