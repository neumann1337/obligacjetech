"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ArrowLeft, 
  Calendar, 
  Wallet, 
  PieChart, 
  Percent, 
  Loader2,
  AlertCircle
} from 'lucide-react';

interface TimelineItem {
  month: number;
  totalValue: number;
  accumulatedProfit: number;
}

interface ObliczeniaWynik {
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
  total: number;
  duration: string; 
  timeline: TimelineItem[];
}

interface Obligacja {
  symbol: string;
  oprocentowaniePierwszyRok: number;
  okresLata: number;
  kapitalizacja: boolean;
}
const SimplePieChart = ({ capital, profit, formatPLN }: { capital: number, profit: number, formatPLN: (v: number) => string }) => {
  const total = capital + profit;
  const capitalPercent = total > 0 ? capital / total : 1;
  
  const angle = 2 * Math.PI * capitalPercent;
  const x = Math.cos(angle);
  const y = Math.sin(angle);
  const largeArcFlag = capitalPercent > 0.5 ? 1 : 0;

  const pathData = [`M 1 0`, `A 1 1 0 ${largeArcFlag} 1 ${x} ${y}`, `L 0 0`].join(' ');

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-full py-4">
      <div className="flex flex-col justify-center space-y-4 min-w-[160px]">
         <div>
            <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-[#0071E3] shadow-sm ring-2 ring-blue-50"></div>
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Wkład własny</span>
            </div>
            <p className="text-xl font-black text-gray-900 tracking-tight pl-5">{formatPLN(capital)}</p>
         </div>
         
         <div>
            <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-sm ring-2 ring-emerald-50"></div>
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Zysk netto</span>
            </div>
            <p className="text-xl font-black text-emerald-600 tracking-tight pl-5">+{formatPLN(profit)}</p>
         </div>

         <div className="pt-4 border-t border-black-100 mt-2">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Rentowność (ROI)</span>
            <div className="items-center gap-1 text-red-500 pl-5">
                <span className="text-2xl font-black tracking-tighter">
                    {((profit/total)*100).toFixed(1)}%
                </span>
            </div>
         </div>
      </div>
      <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
        <svg viewBox="-1.1 -1.1 2.2 2.2" className="w-full h-full -rotate-90 drop-shadow-lg transition-transform duration-500 hover:scale-105">
          <circle cx="0" cy="0" r="1" className="fill-[#10B981]" />
          <path d={pathData} className="fill-[#0071E3] transition-all duration-700" />
          <circle cx="0" cy="0" r="0.65" className="fill-white" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <PieChart size={24} className="text-gray-300 mb-1 opacity-50" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Struktura</span>
        </div>
      </div>
    </div>
  );
};

const SimpleAreaChart = ({ data, formatPLN }: { data: TimelineItem[], formatPLN: (v: number) => string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const width = 800;
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 20 };

  if (!data || data.length === 0) return null;

  const values = data.map(d => d.totalValue);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const getX = (index: number) => padding.left + (index * (width - padding.left - padding.right)) / (data.length - 1);
  const getY = (value: number) => height - padding.bottom - ((value - min) * (height - padding.top - padding.bottom)) / range;

  const points = data.map((d, i) => `${getX(i)},${getY(d.totalValue)}`).join(' ');
  const areaPoints = `${getX(0)},${height - padding.bottom} ${points} ${getX(data.length - 1)},${height - padding.bottom}`;

  return (
    <div className="relative w-full h-[300px] group select-none">
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0071E3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((p) => {
          const y = padding.top + p * (height - padding.top - padding.bottom);
          return <line key={p} x1={padding.left} y1={y} x2={width - padding.right} y2={y} className="stroke-[#F1F5F9] stroke-1" />;
        })}


        <polyline points={areaPoints} fill="url(#chartGradient)" />
        <polyline 
          points={points} 
          fill="none" 
          className="stroke-[#0071E3] stroke-[3px] drop-shadow-md stroke-round stroke-join-round" 
        />


        {data.map((d, i) => {
          const isCapitalizationPoint = d.month % 12 === 0 || i === data.length - 1 || i === 0;
          const isHovered = hoveredIndex === i;

          return (
            <g key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>

              <rect x={getX(i) - 10} y={0} width={20} height={height} className="fill-transparent cursor-pointer" />
              
              {isCapitalizationPoint && (
                <circle 
                    cx={getX(i)} 
                    cy={getY(d.totalValue)} 
                    r={4} 
                    className="fill-white stroke-[#0071E3] stroke-2 transition-all duration-300"
                />
              )}
              {isHovered && (
                <>
                  <line 
                    x1={getX(i)} y1={padding.top} x2={getX(i)} y2={height - padding.bottom} 
                    strokeDasharray="3,3" 
                    className="stroke-[#0071E3] stroke-1 opacity-50" 
                  />
                  <circle 
                    cx={getX(i)} cy={getY(d.totalValue)} r={6} 
                    className="fill-[#0071E3] stroke-white stroke-2 drop-shadow-lg" 
                  />
                </>
              )}
            </g>
          );
        })}
        {data.filter((_, i) => i % 12 === 0 || i === data.length - 1).map((d, i) => (
          <text 
            key={i} 
            x={getX(data.indexOf(d))} 
            y={height - 10} 
            textAnchor="middle" 
            className="text-[11px] fill-[#94A3B8] font-bold uppercase tracking-widest font-mono"
          >
            {d.month === 0 ? 'Start' : `${d.month}m`}
          </text>
        ))}
      </svg>
      {hoveredIndex !== null && (
        <div 
          className="absolute z-20 bg-white px-4 py-3 shadow-xl rounded-2xl pointer-events-none transition-all duration-100 ease-out border border-gray-200"
          style={{ 
            left: `${(getX(hoveredIndex) / width) * 100}%`, 
            top: `${(getY(data[hoveredIndex].totalValue) / height) * 100}%`,
            transform: 'translate(-50%, -150%)'
          }}
        >
          <div className="flex flex-col items-center whitespace-nowrap">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Miesiąc {data[hoveredIndex].month}</span>
            <span className="text-lg font-black text-gray-900 tabular-nums tracking-tight">{formatPLN(data[hoveredIndex].totalValue)}</span>
            <span className="text-[10px] text-emerald-600 font-bold mt-1">+{formatPLN(data[hoveredIndex].accumulatedProfit)} zysku</span>
          </div>
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-200"></div>
        </div>
      )}
    </div>
  );
};


function WynikGlownyKafelek({ wyniki, formatPLN }: { wyniki: ObliczeniaWynik, formatPLN: (value: number | undefined) => string }) {
    const [isOpen, setIsOpen] = useState(false);

    const gradientStyle = {
        background: 'linear-gradient(135deg, #0071E3 0%, #00C7BE 100%)',
    };

    return (
        <div className="w-full">
            <div 
                style={{ ...gradientStyle, transition: 'all 0.3s ease' }}
                className="p-6 md:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:shadow-2xl hover:scale-[1.01] transform"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex-grow mb-4 md:mb-0">
                    <p className="opacity-90 text-base md:text-lg mb-1 font-medium">
                        Zysk całkowity "na rękę" (netto)
                    </p>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {formatPLN(wyniki.total)}
                    </h3>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm text-sm font-semibold whitespace-nowrap">
                        <span className="opacity-100">Okres: {wyniki.duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
        setError('Nie udało się połączyć z backendem. Upewnij się, że aplikacja Spring Boot działa na porcie 8080.');
      } finally {
        setLoadingObligacje(false);
      }
    };
    fetchObligacje();
  }, []);


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
      
      {/* Navbar */}
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
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] font-bold tracking-tight mb-2 text-[#1D1D1F]">
            Symulacja zysków
          </h1>
          <p className="text-lg text-[#86868b]">
            Precyzyjne obliczenia uwzględniające podatek Belki (19%).
          </p>
        </div>

        {/* Karta Formularza */}
        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm">
          {loadingObligacje ? (
              <div className="p-10 text-center text-[#86868b] flex flex-col items-center">
                <Loader2 className="animate-spin mb-3 text-[#0071E3]" />
                Pobieranie oferty obligacji z API...
              </div>
          ) : (
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
              {loading ? (
                  <>
                      <Loader2 className="animate-spin" size={20}/> Obliczam...
                  </>
              ) : 'Oblicz potencjalny zysk'}
            </button>

            {error && (
              <div className="bg-[#FFF2F2] border border-[#FFD6D6] rounded-2xl p-4 mt-5 flex items-center gap-3 text-[#D32F2F] animate-[shake_0.5s_ease-in-out]">
                  <AlertCircle size={24} className="min-w-[24px]" />
                  <p className="m-0 text-sm font-medium">{error}</p>
              </div>
            )}
          </form>
          )}
        </div>

        {wyniki && (
          <div className="mt-10 animate-in fade-in duration-500 slide-in-from-bottom-4">
            <h2 className="text-2xl font-semibold mb-6 text-[#1D1D1F]">Twoja prognoza</h2>
            
            {/* Widgety liczbowe */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
               <ResultWidget label="Zysk Dzienny" value={formatPLN(wyniki.daily)} />
               <ResultWidget label="Zysk Miesięczny" value={formatPLN(wyniki.monthly)} />
               <ResultWidget label="Zysk Roczny (śr.)" value={formatPLN(wyniki.yearly)} />
               <div className="col-span-1 sm:col-span-3">
                   <WynikGlownyKafelek wyniki={wyniki} formatPLN={formatPLN} />
               </div>
            </div>

              <div className="flex flex-col gap-8">
                
                <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 pb-6">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-[#1D1D1F]">Progresja kapitału</h3>
                        <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Wzrost</div>
                    </div>
                    
                    <div className="h-[320px] w-full p-4 mt-auto">
                        <SimpleAreaChart data={wyniki.timeline} formatPLN={formatPLN} />
                    </div>
                </div>

                <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 p-8 flex flex-col group hover:shadow-lg transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black tracking-tighter text-[#1D1D1F]">Struktura portfela</h3>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mt-2">Analiza ROI</span>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-2xl text-gray-300 group-hover:text-[#0071E3] transition-all">
                            <PieChart size={24} strokeWidth={2.5} />
                        </div>
                    </div>
                    
                    <div className="flex-grow w-full">
                        <SimplePieChart capital={Number(kwota)} profit={wyniki.total} formatPLN={formatPLN} />
                    </div>
                </div>
            </div>

            <div className="mt-8 mx-auto overflow-hidden bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5">
              <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">Harmonogram wzrostu</h3>
              </div>
              
              <div className="w-full overflow-x-auto"> 
                  <table className="w-full border-collapse min-w-[500px]">
                      <thead>
                          <tr className="bg-[#F5F5F7] text-left text-[#86868b] text-xs uppercase tracking-wider">
                              <th className="py-3 px-4 font-semibold">Miesiąc</th>
                              <th className="py-3 px-4 font-semibold">Stan Konta</th>
                              <th className="py-3 px-4 font-semibold text-right">Zysk Netto</th>
                          </tr>
                      </thead>
                      <tbody className="text-sm">
                          <tr className="border-b border-gray-100 last:border-0">
                              <td className="py-3 px-4 text-gray-500">Start</td>
                              <td className="py-3 px-4 font-medium text-[#1D1D1F]">{formatPLN(Number(kwota))}</td>
                              <td className="py-3 px-4 text-right text-gray-500">-</td>
                          </tr>
                          {wyniki.timeline.map((item) => (
                              <tr key={item.month} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                  <td className="py-3 px-4 text-[#1D1D1F]">{item.month}</td>
                                  <td className="py-3 px-4 text-[#1D1D1F] font-medium break-words">{formatPLN(item.totalValue)}</td>
                                  <td className="py-3 px-4 text-right text-[#34C759] font-semibold break-words">
                                      +{formatPLN(item.accumulatedProfit)}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}


function ResultWidget({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/5 flex flex-col justify-center transition-transform hover:-translate-y-0.5">
            <span className="text-sm text-[#86868b] uppercase tracking-wider mb-2">
                {label}
            </span>
            <span className="text-2xl font-semibold text-[#1D1D1F]">
                {value}
            </span>
        </div>
    )
}