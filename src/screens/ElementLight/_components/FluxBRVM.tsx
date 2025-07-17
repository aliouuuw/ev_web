import React, { useMemo, useRef, useState, useEffect } from 'react';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';

import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

// Stock data interface for better type safety
interface StockItem {
  symbol: string;
  price: number | null;
  change: number | null;
  changeType: 'up' | 'down' | 'neutral' | 'nd';
  isin: string;
}

// Stock market data for BRVM ticker
const initialStockData: StockItem[] = [
  {
    symbol: "ONTBF",
    price: 2690,
    change: 1.51,
    changeType: "up",
    isin: "BF0000000117",
  },
  {
    symbol: "BOABF",
    price: 3480,
    change: -0.57,
    changeType: "down",
    isin: "BF0000000133",
  },
  {
    symbol: "CBIBF",
    price: 10000,
    change: 0.0,
    changeType: "neutral",
    isin: "BF0000000604",
  },
  {
    symbol: "BOABF.DA1",
    price: null,
    change: null,
    changeType: "nd",
    isin: "BF0000003236",
  },
  {
    symbol: "BOAB",
    price: 4495,
    change: 6.77,
    changeType: "up",
    isin: "BJ0000000048",
  },
  {
    symbol: "LNBB",
    price: 4500,
    change: -4.26,
    changeType: "down",
    isin: "BJ0000002275",
  },
  {
    symbol: "SGB",
    price: 7800,
    change: 0.0,
    changeType: "neutral",
    isin: "CI0000000102",
  },
  {
    symbol: "ETIT",
    price: 19,
    change: 0.53,
    changeType: "up",
    isin: "NG0000000136",
  },
  {
    symbol: "NSIA",
    price: 4000,
    change: -1.25,
    changeType: "down",
    isin: "CI0000000110",
  },
  {
    symbol: "PALM",
    price: 5200,
    change: 0.0,
    changeType: "neutral",
    isin: "CI0000000128",
  },
];

// Utility function to generate random market changes
const getRandomChange = (): { change: number; changeType: StockItem['changeType'] } => {
  const types: StockItem['changeType'][] = ["up", "down", "neutral"];
  const type = types[Math.floor(Math.random() * types.length)];
  
  if (type === "up") {
    return { change: +(Math.random() * 3).toFixed(2), changeType: "up" };
  }
  if (type === "down") {
    return { change: -+(Math.random() * 3).toFixed(2), changeType: "down" };
  }
  return { change: 0.0, changeType: "neutral" };
};

export const FluxBRVM: React.FC = () => {
  // Session timing calculation
  const now = useMemo(() => new Date(), []);
  const SESSION_OPEN_HOUR = 9;
  const SESSION_CLOSE_HOUR = 15;
  const sessionOpen = now.getHours() >= SESSION_OPEN_HOUR && now.getHours() < SESSION_CLOSE_HOUR;
  
  const timeInfo = useMemo(() => {
    if (sessionOpen) {
      const close = new Date(now);
      close.setHours(SESSION_CLOSE_HOUR, 0, 0, 0);
      const diff = Math.max(0, Math.floor((close.getTime() - now.getTime()) / 60000));
      return `(-${diff} min)`;
    } else {
      const open = new Date(now);
      if (now.getHours() < SESSION_OPEN_HOUR) {
        open.setHours(SESSION_OPEN_HOUR, 0, 0, 0);
      } else {
        open.setDate(open.getDate() + 1);
        open.setHours(SESSION_OPEN_HOUR, 0, 0, 0);
      }
      const diff = Math.max(0, Math.floor((open.getTime() - now.getTime()) / 60000));
      return `(+${diff} min)`;
    }
  }, [now, sessionOpen, SESSION_OPEN_HOUR, SESSION_CLOSE_HOUR]);

  // State management
  const tickerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [stockData, setStockData] = useState<StockItem[]>(initialStockData);

  // Smooth scrolling animation
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    setOffset(0);
    setShouldScroll(ticker.scrollWidth > ticker.clientWidth);
    
    if (!shouldScroll) return;

    let animationFrame: number;
    let position = 0;
    
    const scroll = () => {
      position -= 0.5; // Slower, smoother scroll
      if (Math.abs(position) > ticker.scrollWidth) {
        position = ticker.clientWidth;
      }
      setOffset(position);
      animationFrame = requestAnimationFrame(scroll);
    };
    
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldScroll, stockData.length]);

  // Periodic data updates (simulating real-time market data)
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prevData) =>
        prevData.map((item) => {
          if (item.price === null) return item;
          
          const { change, changeType } = getRandomChange();
          const newPrice = Math.max(1, +(item.price * (1 + change / 100)).toFixed(2));
          
          return {
            ...item,
            price: newPrice,
            change,
            changeType,
          };
        })
      );
    }, 15000); // Update every 15 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Format price with proper localization
  const formatPrice = (price: number | null): string => {
    if (price === null) return "ND";
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  // Format change percentage
  const formatChange = (change: number | null, changeType: StockItem['changeType']): string => {
    if (changeType === "nd" || change === null) return "ND";
    return `${change > 0 ? "+" : ""}${change.toFixed(2)}%`;
  };

  // Get change icon based on type
  const getChangeIcon = (changeType: StockItem['changeType']) => {
    switch (changeType) {
      case 'up':
        return <TrendingUpIcon className="w-3 h-3" />;
      case 'down':
        return <TrendingDownIcon className="w-3 h-3" />;
      default:
        return <MinusIcon className="w-3 h-3" />;
    }
  };

  // Get badge variant based on change type
  const getBadgeVariant = (changeType: StockItem['changeType']): 'default' | 'secondary' | 'destructive' => {
    switch (changeType) {
      case 'up':
        return 'default';
      case 'down':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <section className="w-full bg-white border-b border-gray-200 shadow-sm">
      <Card className="rounded-none border-x-0 border-t-0">
        <div className="flex flex-col lg:flex-row w-full min-h-16">
          {/* Session Information */}
          <div className="lg:w-1/3 xl:w-1/4 bg-[#435933] px-4 py-3 lg:py-0 flex items-center justify-center lg:justify-start">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 text-center lg:text-left">
              <div className="text-white">
                <div className="text-sm font-bold">
                  Séance du {now.toLocaleDateString('fr-FR')}
                </div>
                <div className="text-xs opacity-90">
                  {now.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge 
                  variant={sessionOpen ? 'default' : 'destructive'}
                  className={`text-xs font-medium ${
                    sessionOpen 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {sessionOpen ? 'Ouverte' : 'Fermée'}
                </Badge>
                <span className="text-white text-xs opacity-75">
                  {timeInfo}
                </span>
              </div>
            </div>
          </div>

          {/* Stock Ticker */}
          <div className="flex-1 bg-[#26351f] relative overflow-hidden min-h-12 lg:min-h-16">
            <div 
              ref={tickerRef}
              className="flex items-center h-full transition-transform duration-100 ease-linear"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {stockData.map((item, index) => (
                <a
                  key={`${item.symbol}-${index}`}
                  href={`https://macafricansgi.com/fiche-valeur/?isin=${item.isin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border-r border-gray-600 hover:bg-white/5 transition-colors duration-200 min-w-[200px] lg:min-w-[240px] h-full group"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm group-hover:text-[#AD7F00] transition-colors">
                        {item.symbol}
                      </span>
                      <span className="text-white/80 text-xs">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    
                    <Badge 
                      variant={getBadgeVariant(item.changeType)}
                      className={`flex items-center gap-1 text-xs font-medium ${
                        item.changeType === 'up' 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : item.changeType === 'down'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                      }`}
                    >
                      {getChangeIcon(item.changeType)}
                      {formatChange(item.change, item.changeType)}
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};