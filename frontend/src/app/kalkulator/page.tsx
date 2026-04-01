"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import { Bond, CalculationResult } from '@/types/calculator';
import { CalculatorForm } from '@/components/features/calculator/CalculatorForm';
import { ResultDisplay } from '@/components/features/calculator/ResultDisplay';
import { TimelineTable } from '@/components/features/calculator/TimelineTable';

export default function KalkulatorPage() {
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

  const formatPLN = (value: number | undefined) => {
    if (value === undefined || isNaN(value)) return '-';
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(value);
  };

  const selectedBondInfo = bondsList.find(b => b.symbol === selectedSymbol);

  return (
    <div className="min-h-screen pb-20 bg-[#F5F5F7] text-[#1D1D1F] font-sans">
      <nav className="sticky top-0 z-50 flex justify-center p-5 bg-white/80 backdrop-blur-[20px] border-b border-black/5">
        <div className="w-full max-w-[980px] flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-[#1D1D1F] text-sm font-medium no-underline hover:opacity-70">
                <ArrowLeft size={18} /> Powrót
            </a>
            <span className="flex items-center gap-2 text-xl font-semibold">
                <TrendingUp size={20} className="text-[#0071E3]" /> Kalkulator
            </span>
            <div className="w-[60px]"></div> 
        </div>
      </nav>

      <div className="max-w-[800px] mx-auto my-10 px-5">
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] font-bold tracking-tight mb-2">Symulacja zysków</h1>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm">
          <CalculatorForm 
            amount={amount}
            setAmount={setAmount}
            selectedSymbol={selectedSymbol}
            setSelectedSymbol={setSelectedSymbol}
            bondsList={bondsList}
            selectedBondInfo={selectedBondInfo}
            loading={loading}
            loadingBonds={loadingBonds}
            error={error}
            handleCalculate={handleCalculate}
          />
        </div>

        {results && (
          <>
            <ResultDisplay results={results} amount={amount} formatPLN={formatPLN} />
            <TimelineTable timeline={results.timeline} amount={amount} formatPLN={formatPLN as any} />
          </>
        )}
      </div>
    </div>
  );
}