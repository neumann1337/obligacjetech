"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Activity, Newspaper, TrendingUp, Percent, Coins, RefreshCw, DollarSign, Euro, ChevronRight, Calendar, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface MarketIndicators {
  reference: number;
  lombard: number;
  deposit: number;
  inflation: number;
}

const CurrencyWidget = ({ code, icon: Icon, color }: { code: string, icon: any, color: string }) => {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRate = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`);
      if (!res.ok) throw new Error('Błąd NBP');
      const data = await res.json();
      setRate(data.rates[0].mid);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRate(); }, [code]);

  return (
    <div className={`bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between aspect-auto h-28 relative overflow-hidden group`}>
      <div className="flex justify-between items-start relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{code.toUpperCase()} / PLN</p>
        <Icon size={16} className={color} />
      </div>
      
      <div className="relative z-10">
        {loading ? (
          <div className="h-8 w-16 bg-gray-100 rounded animate-pulse" />
        ) : error ? (
          <button onClick={fetchRate} className="text-xs text-red-400 underline">Ponów</button>
        ) : (
          <div className="flex items-baseline gap-1 text-gray-900">
            <span className="text-2xl font-bold tracking-tight">
              {rate?.toFixed(4).replace('.', ',')}
            </span>
          </div>
        )}
      </div>
      <p className="text-[10px] text-gray-400 font-medium truncate relative z-10">Kurs średni NBP</p>
    </div>
  );
};


const GoldPriceWidget = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nbp.pl/api/cenyzlota?format=json')
      .then(res => res.json())
      .then(data => setPrice(data[0].cena))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl border border-yellow-200 shadow-sm flex flex-col justify-between aspect-auto h-28 relative overflow-hidden group">
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-600/80 mb-1">Złoto (1g)</p>
        <Coins size={16} className="text-yellow-500" />
      </div>
      <div className="relative z-10">
        {loading ? <div className="h-8 w-20 bg-yellow-50 rounded animate-pulse" /> : (
          <div className="flex items-baseline gap-1 text-yellow-900">
            <span className="text-2xl font-bold tracking-tight">{price?.toFixed(2).replace('.', ',')}</span>
            <span className="text-xs font-medium opacity-60">PLN</span>
          </div>
        )}
      </div>
      <p className="text-[10px] text-yellow-600/60 font-medium truncate relative z-10">Kurs NBP</p>
    </div>
  );
};


function IndicatorTile({ label, value, loading, desc, color }: { label: string, value: number | undefined, loading: boolean, desc: string, color: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between aspect-auto h-28">
      <div className="flex justify-between items-start">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
        {label.includes("Inflacja") ? <TrendingUp size={16} className={color.replace('text-', 'text-opacity-50 ')} /> : <Percent size={16} className="text-gray-200" />}
      </div>
      <div className={`text-2xl font-bold tracking-tight ${color}`}>
        {loading ? (
          <div className="h-8 w-16 bg-gray-100 rounded animate-pulse" />
        ) : (
          <div className="flex items-baseline gap-0.5">
            {value?.toFixed(2)}<span className="text-sm font-medium opacity-60">%</span>
          </div>
        )}
      </div>
      <p className="text-[10px] text-gray-400 font-medium truncate">{desc}</p>
    </div>
  );
}


export default function WiadomosciPage() {
  const [indicators, setIndicators] = useState<MarketIndicators | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [forecasts] = useState([
    {
      id: 1,
      date: "10.12.2025",
      tag: "Prognoza",
      color: "blue",
      title: "Czy marże obligacji EDO zostaną utrzymane?",
      content: "Analitycy przewidują, że mimo spadku inflacji, Ministerstwo Finansów utrzyma marżę 1,50% dla obligacji 10-letnich w styczniowej ofercie, aby zachęcić do długoterminowego oszczędzania."
    },
    {
      id: 2,
      date: "08.12.2025",
      tag: "Ryzyko",
      color: "red",
      title: "Możliwa obniżka oprocentowania stałego (TOS/DOS)",
      content: "W związku z oczekiwanymi obniżkami stóp procentowych przez RPP na początku 2026 roku, styczniowa oferta obligacji stałoprocentowych może być o 0.25-0.50 pp. niższa niż grudniowa. Eksperci sugerują zakup obecnych serii."
    },
    {
      id: 3,
      date: "05.12.2025",
      tag: "Kalendarz",
      color: "green",
      title: "Publikacja listu emisyjnego",
      content: "Oficjalne warunki emisji obligacji na styczeń 2026 zostaną podane do publicznej wiadomości przez Ministerstwo Finansów w okolicach 22 grudnia (przed przerwą świąteczną)."
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndicators({
        reference: 5.75,
        lombard: 6.25,
        deposit: 5.25,
        inflation: 4.50
      });
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 pb-20">
      
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex justify-center">
        <div className="w-full max-w-5xl flex justify-between items-center">
          <a href="/" style={{ textDecoration: 'none' }} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm">
            <ArrowLeft size={18} />
            Powrót
          </a>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Rynek Live
          </span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-10">

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-gray-800">
            <Coins size={18} />
            <h2 className="text-base font-bold">Notowania Live (NBP)</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GoldPriceWidget />
            <CurrencyWidget code="eur" icon={Euro} color="text-blue-600" />
            <CurrencyWidget code="usd" icon={DollarSign} color="text-green-600" />
            <CurrencyWidget code="chf" icon={RefreshCw} color="text-red-600" />
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-gray-800">
            <Activity size={18} />
            <h2 className="text-base font-bold">Stopy Procentowe (Grudzień 2025)</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <IndicatorTile 
              label="Stopa Ref." 
              value={indicators?.reference} 
              loading={loading} 
              desc="Główna stopa NBP"
              color="text-emerald-600"
            />
            <IndicatorTile 
              label="Inflacja (CPI)" 
              value={indicators?.inflation} 
              loading={loading} 
              desc="Wskaźnik GUS r/r"
              color="text-rose-600"
            />
            <IndicatorTile 
              label="Lombardowa" 
              value={indicators?.lombard} 
              loading={loading} 
              desc="Max kredyt"
              color="text-gray-900"
            />
            <IndicatorTile 
              label="Depozytowa" 
              value={indicators?.deposit} 
              loading={loading} 
              desc="Min depozyt"
              color="text-gray-500"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
            <div className="flex items-center gap-2 text-gray-900">
              <Calendar size={18} className="text-blue-600" />
              <h2 className="text-base font-bold text-blue-900">Oferta: Styczeń 2026 (Prognozy)</h2>
            </div>
            <span className="text-xs text-gray-400 font-medium">Aktualizacja: 11.12.2025</span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {forecasts.map((item, index) => (
              <div 
                key={item.id} 
                className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md 
                    ${item.color === 'red' ? 'bg-red-50 text-red-600' : item.color === 'green' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  {item.content}
                </p>

                {item.color === 'red' && (
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-red-600 font-medium">
                        <AlertTriangle size={12} />
                        Rozważ zakup w grudniu
                    </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}