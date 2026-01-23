import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";



const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obligacje.tech",
  description: "Wszystko o obligacjach. Kalkulator zysków, poradniki i analizy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#F5F5F7] font-sans text-[#1D1D1F] antialiased">
        
        <NavBar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}