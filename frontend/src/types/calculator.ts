export interface TimelineItem {
    month: number;
    totalValue: number;
    accumulatedProfit: number;
  }
  
  export interface ObliczeniaWynik {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
    total: number;
    duration: string; 
    timeline: TimelineItem[];
  }
  
  export interface Obligacja {
    symbol: string;
    oprocentowaniePierwszyRok: number;
    okresLata: number;
    kapitalizacja: boolean;
  }