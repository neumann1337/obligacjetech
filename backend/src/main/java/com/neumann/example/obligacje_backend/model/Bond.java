package com.neumann.example.obligacje_backend.model;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Bond {

    private String symbol;
    private BigDecimal firstYearInterestRate;
    private int periodYears;
    private boolean capitalization;

    public Bond() {
    }

    public Bond(String symbol, BigDecimal firstYearInterestRate, int periodYears, boolean capitalization) {
        this.symbol = symbol;
        this.firstYearInterestRate = firstYearInterestRate;
        this.periodYears = periodYears;
        this.capitalization = capitalization;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public BigDecimal getFirstYearInterestRate() {
        return firstYearInterestRate;
    }

    public void setFirstYearInterestRate(BigDecimal firstYearInterestRate) {
        this.firstYearInterestRate = firstYearInterestRate;
    }

    public int getPeriodYears() {
        return periodYears;
    }

    public void setPeriodYears(int periodYears) {
        this.periodYears = periodYears;
    }

    public boolean hasCapitalization() {
        return capitalization;
    }

    public void setCapitalization(boolean capitalization) {
        this.capitalization = capitalization;
    }
}