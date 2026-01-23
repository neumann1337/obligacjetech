"use client";

import React, { useState, useRef } from 'react';
import { TrendingUp, ChevronDown, ArrowRight } from 'lucide-react';



const SECTIONS = [
  {
    id: 'bezpieczenstwo',
    title: 'Czy obligacje są bezpieczne?',
    content: [
      'Tak. To najbezpieczniejszy instrument finansowy w Polsce, bo gwarantuje je Skarb Państwa.',
      'Żebyś stracił pieniądze, państwo musiałoby zbankrutować — a to skrajnie mało prawdopodobne.'
    ]
  },
  {
    id: 'sprzedaz',
    title: 'Czy mogę sprzedać obligacje przed terminem?',
    content: [
      'Tak. Większość obligacji można wykupić wcześniej.',
      'Jedyna „kara” to opłata: np. 70 groszy od obligacji COI/EDO. To koszt wcześniejszego wyjścia, ale dalej wychodzisz na plus, jeśli trzymałeś je dłużej niż parę miesięcy.'
    ]
  },
  {
    id: 'podatek',
    title: 'Kiedy płacę podatek Belki?',
    content: [
      'Zawsze, gdy otrzymujesz odsetki — 19% od zysku.',
      'Wyjątek: EDO i COI. Tam odsetki są reinwestowane, więc płacisz podatek dopiero na końcu, co działa na Twoją korzyść dzięki procentowi składanemu.'
    ]
  },
  {
    id: 'inflacja_marza',
    title: 'Jak działa „inflacja + marża” w COI i EDO?',
    content: [
      'W kolejnych latach oprocentowanie = inflacja z GUS za poprzedni rok + stała marża (np. 1%).',
      'Jeśli inflacja wynosi 4%, a marża 1%, to dostajesz 5% oprocentowania w danym roku.',
      'Mechanizm utrzymuje realną wartość kapitału i chroni przed spadkiem siły nabywczej.'
    ]
  },
  {
    id: 'coi_vs_edo',
    title: 'COI czy EDO — które wybrać?',
    content: [
      'COI – 4 lata, dobre jeśli nie chcesz zamrażać kapitału na długi termin.',
      'EDO – 10 lat, najwyższe realne zyski, pełna moc procentu składanego, idealne „emerytalne oszczędzanie”.',
      'Najczęściej stosuje się miks — część COI na średni okres, część EDO na długi termin.'
    ]
  },
  {
    id: 'odsetki',
    title: 'Czy obligacje wypłacają odsetki co roku?',
    content: [
      'To zależy od rodzaju:',
      '- OTS, ROR, DOR — wypłacają odsetki na bieżąco.',
      '- COI i EDO — odsetki są dopisywane do kapitału (kapitalizacja), więc nie dostajesz gotówki, ale kapitał rośnie szybciej.'
    ]
  },
  {
    id: 'czy_moge_stracic',
    title: 'Czy mogę stracić na obligacjach?',
    content: [
      'Przy trzymaniu do terminu wykupu — praktycznie nie.',
      'Jedynym realnym ryzykiem jest wcześniejsze wyjście z obligacji w bardzo krótkim czasie, gdzie opłata za wykup może zjeść część zysku.',
      'Długoterminowo obligacje indeksowane inflacją (COI, EDO) są projektowane tak, by nie tracić realnej wartości.'
    ]
  },
  {
    id: 'jak_liczy_sie_zysk',
    title: 'Jak oblicza się zysk z obligacji?',
    content: [
      'Zysk to suma odsetek (po opodatkowaniu) minus ewentualne opłaty za wcześniejszy wykup.',
      'W obligacjach z kapitalizacją (COI, EDO) odsetki są dopisywane do kapitału, więc każde kolejne oprocentowanie działa na większą kwotę — to działa jak turbo dla procentu składanego.'
    ]
  },
  {
    id: 'najlepsze_na_start',
    title: 'Które obligacje są najlepsze dla początkującego?',
    content: [
      'Najczęściej poleca się COI i EDO, bo chronią przed inflacją.',
      'Jeśli boisz się długich terminów, część kapitału można dać w OTS lub ROR jako „płynny bufor”.',
      'Najważniejsze jest rozłożenie kapitału, a nie trafienie w jeden „najlepszy” produkt.'
    ]
  },
  {
    id: 'czy_moge_pol_na_pol',
    title: 'Czy mogę kupić obligacje i sprzedać po połowie czasu?',
    content: [
      'Tak — w każdej chwili możesz je wykupić.',
      'W połowie okresu po prostu zapłacisz opłatę za wcześniejszy wykup, ale reszta odsetek zostaje u Ciebie.',
      'To daje elastyczność, jeśli coś się zmieni w Twoim życiu.'
    ]
  }
];

const AccordionItem = ({ title, content }: { title: string, content: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <article className="mb-4 rounded-3xl overflow-hidden shadow-sm border border-transparent transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex justify-between items-center p-6 text-left transition-colors duration-300
          ${isOpen 
            ? 'bg-white text-gray-900' 
            : 'bg-gradient-to-r from-blue-600 to-teal-500 text-white'
          }
        `}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-bold pr-4 leading-snug">{title}</h3>
        <ChevronDown 
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={24} 
        />
      </button>
      

      <div
        ref={contentRef}
        className="bg-white text-gray-600 transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-6 pt-2 leading-relaxed border-t border-gray-100">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-3 last:mb-0 text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function PoradnikPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20 selection:bg-blue-100">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-center p-4 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="w-full max-w-3xl flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 font-semibold text-gray-900 hover:opacity-80 transition-opacity">
            <TrendingUp className="text-blue-600" size={20} />
            <span>Obligacje.tech</span>
          </a>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Poradnik</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-5 py-12">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Wiedza w pigułce
          </h1>
          <p className="text-gray-500 text-lg">
            Kliknij w kafelek, aby poznać szczegóły inwestowania.
          </p>
        </header>

        <section className="space-y-2">
          {SECTIONS.map((section) => (
            <AccordionItem 
              key={section.id} 
              title={section.title} 
              content={section.content} 
            />
          ))}
        </section>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 text-sm font-medium">
            Masz już teorię? Przejdź do praktyki.
          </p>
          
          <a href="/kalkulator" className="inline-block group">
            <button className="
              flex items-center gap-3 px-8 py-4 rounded-2xl
              bg-gradient-to-r from-blue-600 to-teal-500
              text-white font-bold text-lg
              shadow-lg shadow-blue-500/20
              transition-all duration-300
              group-hover:scale-[1.02] group-hover:shadow-blue-500/40 active:scale-95
            ">
              Uruchom Kalkulator <ArrowRight size={20} />
            </button>
          </a>
        </div>

      </main>
    </div>
  );
}