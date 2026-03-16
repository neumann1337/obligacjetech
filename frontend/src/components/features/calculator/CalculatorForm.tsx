"use client";

import React from 'react';
import { Wallet, PieChart, Percent, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { Obligacja } from '@/types/calculator';

interface CalculatorFormProps {
  kwota: number | '';
  setKwota: (v: number | '') => void;
  wybranySymbol: string;
  setWybranySymbol: (s: string) => void;
  listaObligacji: Obligacja[];
  wybranaObligacjaInfo?: Obligacja;
  loading: boolean;
  loadingObligacje: boolean;
  error: string | null;
  handleOblicz: (e: React.FormEvent) => void;
}

export const CalculatorForm = ({
  kwota, setKwota, wybranySymbol, setWybranySymbol,
  listaObligacji, wybranaObligacjaInfo, loading,
  loadingObligacje, error, handleOblicz
}: CalculatorFormProps) => {

  if (loadingObligacje) {
    return (
      <div className="p-10 text-center text-[#86868b] flex flex-col items-center">
        <Loader2 className="animate-spin mb-3 text-[#0071E3]" />
        Pobieranie oferty obligacji z API...
      </div>
    );
  }

  return (
    <form onSubmit={handleOblicz}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">Kwota inwestycji (PLN)</label>
          <div className="relative group">
            <Wallet size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0071E3] transition-colors" />
            <input
              type="number"
              value={kwota}
              onChange={(e) => setKwota(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="1000"
              className="w-full bg-[#F5F5F7] rounded-2xl py-4 pl-12 pr-4 text-lg font-semibold outline-none focus:ring-4 focus:ring-[#0071E3]/10 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">Rodzaj Obligacji</label>
          <div className="relative group">
            <PieChart size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0071E3] transition-colors" />
            <select
              value={wybranySymbol}
              onChange={(e) => setWybranySymbol(e.target.value)}
              className="w-full bg-[#F5F5F7] rounded-2xl py-4 pl-12 pr-4 text-lg font-semibold outline-none appearance-none cursor-pointer focus:ring-4 focus:ring-[#0071E3]/10 transition-all"
            >
              {listaObligacji.map(o => (
                <option key={o.symbol} value={o.symbol}>{o.symbol}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {wybranaObligacjaInfo && (
        <div className="mt-6 p-5 rounded-2xl bg-[#F5F5F7] flex flex-wrap gap-5 justify-between items-center text-sm border border-gray-100">
          <div className="flex items-center gap-2">
            <Percent size={18} className="text-[#0071E3]" />
            <span>Oprocentowanie: <strong className="text-gray-900">{wybranaObligacjaInfo.oprocentowaniePierwszyRok}%</strong></span>
          </div>
          <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#0071E3]" />
              <span> Zapadalność: <strong className="text-gray-900">
                    {wybranaObligacjaInfo.okresLata === 0 ? "3 miesiące" : wybranaObligacjaInfo.okresLata === 1
                      ? "1 rok" : wybranaObligacjaInfo.okresLata <= 4
                        ? `${wybranaObligacjaInfo.okresLata} lata`
                          : `${wybranaObligacjaInfo.okresLata} lat`}
              </strong></span>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full py-4 bg-[#0071E3] text-white rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/30 hover:bg-[#0066cc] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all flex items-center justify-center gap-2"
      >
        {loading ? <><Loader2 className="animate-spin" size={20}/> Obliczam...</> : 'Oblicz potencjalny zysk'}
      </button>

      {error && (
        <div className="bg-[#FFF2F2] border border-[#FFD6D6] rounded-2xl p-4 mt-5 flex items-center gap-3 text-[#D32F2F] animate-[shake_0.5s_ease-in-out]">
            <AlertCircle size={24} className="min-w-[24px]" />
            <p className="m-0 text-sm font-medium">{error}</p>
        </div>
      )}
    </form>
  );
};