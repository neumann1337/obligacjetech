import { Hero } from '@/components/sections/home/Hero';
import { Features } from '@/components/sections/home/Features';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Hero />
      <Features />
    </main>
  );
}



















/**
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, BookOpen, MessageCircle, ArrowRight, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  delay: number;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans overflow-x-hidden selection:bg-blue-100">
      
      <nav className="fixed top-0 z-50 w-full flex justify-center px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 transition-all">
        <span className="font-semibold text-lg flex items-center gap-2 tracking-tight text-gray-900 cursor-default">
          <TrendingUp className="text-blue-600" size={20} strokeWidth={2.5} /> 
          Obligacje<span className="text-blue-600">.</span>tech
        </span>
      </nav>

      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gray-900 leading-[1.1]">
            Zadbaj o swoją <br/>
            <span className="text-blue-600">przyszłość finansową.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Proste narzędzia. Mądre decyzje. <br className="hidden md:inline"/>
            Zero chaosu, sama esencja inwestowania.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/kalkulator" className="w-full sm:w-auto no-underline">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
              >
                Otwórz kalkulator
              </motion.button>
            </a>

            <a href="/poradnik" className="w-full sm:w-auto no-underline">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.02)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all"
              >
                Przeglądaj poradniki
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

            <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Kalkulator Obligacji"
            desc="Symulacja zysków z matematyczną precyzją. Silnik oparty na Java Spring Boot."
            icon={<Calculator size={24} className="text-blue-600" />}
            href="/kalkulator"
            delay={0.1}
          />

          <FeatureCard
            title="Przegląd obligacji"
            desc="Zobacz, które obligacje dają dziś najwięcej. Opisy, indeksacja, data emisji i harmonogramy."
            icon={<BookOpen size={24} className="text-orange-500" />}
            href="/obligacje"
            delay={0.2}
          />

          <FeatureCard
            title="Wiadomości rynkowe"
            desc="Nowe emisje, zmiany oprocentowania, komentarze rządu i analiza inflacji."
            icon={<MessageCircle size={24} className="text-purple-600" />}
            href="/wiadomosci"
            delay={0.3}
          />
        </div>
      </section>

      <footer className="w-full bg-white border-t border-gray-100 py-12 text-center">
        <p className="text-sm text-gray-500 font-medium">
          Precyzja silnika oparta na <strong className="text-gray-900">Java Spring Boot</strong>. Design by Next.js.
        </p>
      </footer>

    </div>
  );
}

const FeatureCard = ({ title, desc, icon, href, delay }: FeatureCardProps) => {
  return (
    <a href={href} className="block no-underline h-full group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: delay + 0.2, duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
      >
        <div>
          <div className="mb-6 bg-gray-50 w-fit p-3 rounded-xl border border-gray-100 group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            {desc}
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
          Sprawdź <ArrowRight size={16} strokeWidth={2.5} />
        </div>
      </motion.div>
    </a>
  );
};
**/