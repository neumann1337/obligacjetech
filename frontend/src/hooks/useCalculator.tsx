"use client"
import { useState, useEffect } from 'react';
import { Bond, CalculationResult } from '@/types/calculator';

export const useCalculator = () => {
  const [amount, setAmount] = useState<number | ''>(1000);
  const [selectedSymbol, setSelectedSymbol] = useState<string>('');
  const [bondsList, setBondsList] = useState<Bond[]>([]);
  const [results, setResults] = useState<CalculationResult | null>(null); 
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingBonds, setLoadingBonds] = useState(true);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080/api";

  useEffect(() => {
    const fetchBonds = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/obligacje`);
        if (!response.ok) throw new Error('Nie udało się pobrać listy obligacji.');
        const data: Bond[] = await response.json();
        setBondsList(data);
        if (data.length > 0) setSelectedSymbol(data[0].symbol);
      } catch (e) {
        setError('Błąd połączenia z backendem. Upewnij się, że serwer działa.');
      } finally {
        setLoadingBonds(false);
      }
    };
    fetchBonds();
  }, [BACKEND_URL]);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!amount || Number(amount) <= 0) return setError('Podaj poprawną kwotę.');
    
    setLoading(true);
    try {
      const url = `${BACKEND_URL}/calc?kwota=${amount}&symbol=${selectedSymbol}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Błąd serwera przy obliczeniach.');
      const data: CalculationResult = await response.json();
      setResults(data);
    } catch (e: any) {
      setError(e.message || 'Wystąpił nieznany błąd.');
    } finally {
      setLoading(false);
    }
  };

  const selectedBondInfo = bondsList.find(b => b.symbol === selectedSymbol);

  return {
    amount, setAmount,
    selectedSymbol, setSelectedSymbol,
    bondsList,
    results,
    loading,
    error,
    loadingBonds,
    selectedBondInfo,
    handleCalculate
  };
};