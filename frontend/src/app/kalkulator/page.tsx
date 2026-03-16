"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import { Obligacja, ObliczeniaWynik } from '@/types/calculator';
import { CalculatorForm } from '@/components/features/calculator/CalculatorForm';
import { ResultDisplay } from '@/components/features/calculator/ResultDisplay';
import { TimelineTable } from '@/components/features/calculator/TimelineTable';

export default function KalkulatorPage() {
  const [kwota, setKwota] = useState<number | ''>(1000);
  const [wybranySymbol, setWybranySymbol] = useState<string>('');
  const [listaObligacji, setListaObligacji] = useState<Obligacja[]>([]);
  const [wyniki, setWyniki] = useState<ObliczeniaWynik | null>(null); 
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingObligacje, setLoadingObligacje] = useState(true);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080/api";

  useEffect(() => {
    const fetchObligacje = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/obligacje`);
        if (!response.ok) throw new Error('Nie udało się pobrać listy obligacji.');
        const data: Obligacja[] = await response.json();
        setListaObligacji(data);
        if (data.length > 0) setWybranySymbol(data[0].symbol);
      } catch (e) {
        console.error(e);
        setError('Nie udało się połączyć z backendem. Upewnij się, że aplikacja Spring Boot działa.');
      } finally {
        setLoadingObligacje(false);
      }
    };
    fetchObligacje();
  }, [BACKEND_URL]);

  const handleOblicz = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setWyniki(null);

    if (!kwota || Number(kwota) <= 0) {
      setError('Podaj poprawną kwotę inwestycji.');
      return;
    }
    if (!wybranySymbol) {
        setError('Wybierz rodzaj obligacji.');
        return;
    }

    setLoading(true);
    
    try {
      const url = `${BACKEND_URL}/calc?kwota=${kwota}&symbol=${wybranySymbol}`;
      const response = await fetch(url);

      if (!response.ok) {
        let errorMessage = `Błąd serwera: ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData && errorData.error) {
                errorMessage = errorData.error;
            }
        } catch (jsonError) {
            console.error("Nie udało się sparsować błędu JSON", jsonError);
        }
        throw new Error(errorMessage);
      }

      const data: ObliczeniaWynik = await response.json();
      setWyniki(data);

    } catch (e: any) {
      setError(e.message || 'Wystąpił nieznany błąd połączenia.');
    } finally {
      setLoading(false);
    }
  };

  const formatPLN = (value: number | undefined) => {
    if (value === undefined || isNaN(value)) return '-';
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', minimumFractionDigits: 2 }).format(value);
  };

  const wybranaObligacjaInfo = listaObligacji.find(o => o.symbol === wybranySymbol);

  return (
    <div className="min-h-screen pb-20 bg-[#F5F5F7] text-[#1D1D1F] font-sans">
      
      <nav className="sticky top-0 z-50 flex justify-center p-5 bg-white/80 backdrop-blur-[20px] border-b border-black/5">
        <div className="w-full max-w-[980px] flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-[#1D1D1F] text-sm font-medium no-underline hover:opacity-70 transition-opacity">
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
          <h1 className="text-[2.5rem] font-bold tracking-tight mb-2 text-[#1D1D1F]">
            Symulacja zysków
          </h1>
          <p className="text-lg text-[#86868b]">
            Precyzyjne obliczenia uwzględniające podatek Belki (19%).
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm">
          <CalculatorForm 
            kwota={kwota}
            setKwota={setKwota}
            wybranySymbol={wybranySymbol}
            setWybranySymbol={setWybranySymbol}
            listaObligacji={listaObligacji}
            wybranaObligacjaInfo={wybranaObligacjaInfo}
            loading={loading}
            loadingObligacje={loadingObligacje}
            error={error}
            handleOblicz={handleOblicz}
          />
        </div>

        {wyniki && (
          <>
            <ResultDisplay wyniki={wyniki} kwota={kwota} formatPLN={formatPLN} />
            <TimelineTable timeline={wyniki.timeline} kwota={kwota} formatPLN={formatPLN} />
          </>
        )}

      </div>
    </div>
  );
}