import React, { useMemo, useRef, useEffect, useState } from "react";

// Données fictives BRVM pour le ticker
const initialStockData = [
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

function getRandomChange() {
  const types = ["up", "down", "neutral"];
  const type = types[Math.floor(Math.random() * types.length)];
  if (type === "up") return { change: +(Math.random() * 3).toFixed(2), changeType: "up" };
  if (type === "down") return { change: -+(Math.random() * 3).toFixed(2), changeType: "down" };
  return { change: 0.0, changeType: "neutral" };
}

export const HeroSection = (): JSX.Element => {
  // Calcul dynamique de la session
  const now = useMemo(() => new Date(), []);
  const SESSION_OPEN_HOUR = 9;
  const SESSION_CLOSE_HOUR = 15;
  const sessionOpen = now.getHours() >= SESSION_OPEN_HOUR && now.getHours() < SESSION_CLOSE_HOUR;
  const timeInfo = sessionOpen
    ? (() => {
        const close = new Date(now);
        close.setHours(SESSION_CLOSE_HOUR, 0, 0, 0);
        const diff = Math.max(0, Math.floor((close.getTime() - now.getTime()) / 60000));
        return `(-${diff} min)`;
      })()
    : (() => {
        const open = new Date(now);
        if (now.getHours() < SESSION_OPEN_HOUR) {
          open.setHours(SESSION_OPEN_HOUR, 0, 0, 0);
        } else {
          open.setDate(open.getDate() + 1);
          open.setHours(SESSION_OPEN_HOUR, 0, 0, 0);
        }
        const diff = Math.max(0, Math.floor((open.getTime() - now.getTime()) / 60000));
        return `(+${diff} min)`;
      })();

  // --- Ticker dynamique ---
  const tickerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [stockData, setStockData] = useState(initialStockData);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    setOffset(0);
    setShouldScroll(ticker.scrollWidth > ticker.clientWidth);
    if (!shouldScroll) return;
    let frame: number;
    let pos = 0;
    const scroll = () => {
      pos -= 1;
      if (Math.abs(pos) > ticker.scrollWidth) {
        pos = ticker.clientWidth;
      }
      setOffset(pos);
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [shouldScroll, stockData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prev) =>
        prev.map((item) => {
          if (item.price === null) return item;
          const { change, changeType } = getRandomChange();
          const newPrice = +(item.price * (1 + change / 100)).toFixed(2);
          return {
            ...item,
            price: newPrice,
            change,
            changeType,
          };
        })
      );
    }, 10000); // toutes les 10 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Flux BRVM */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="flex w-full">
          {/* Left section with BRVM logo and session info */}
          <div className="w-1/4 bg-[#435933] shadow-[1px_0px_0px_#ffffff] relative min-h-[38px] flex items-center" style={{fontSize:12}}>
            <div className="flex items-center px-4 py-2 w-full">
              <span className="dap-tw-text widget-heading text-white font-bold">
                Séance du <span id="sessionDate">{now.toLocaleDateString()}</span> <span className="widget-subheading" id="sessionTime">{now.toLocaleTimeString()}</span> <span id="SessionState">
                  <span className={`badge ${sessionOpen ? 'bg-green-600' : 'bg-red-600'} text-white px-2 py-0.5 rounded ml-1`} style={{ fontSize: 12 }}>{sessionOpen ? 'Ouverte' : 'Fermée'}</span>
                </span>
              </span>
              <span className="ml-2 text-white">({timeInfo})</span>
            </div>
          </div>

          {/* Right section with stock ticker */}
          <div className="w-3/4 bg-[#26351f] relative h-[38px] overflow-hidden">
            <div 
              ref={tickerRef}
              className="flex items-center h-full"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {stockData.map((item) => (
                <a
                  key={item.symbol}
                  className="dap-tw-item flex items-center px-2 border-r border-[#555555] min-w-[160px] h-full hover:underline"
                  href={`https://macafricansgi.com/fiche-valeur/?isin=${item.isin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span className="dap-tw-name font-bold mr-1 text-white" style={{ fontSize: 12 }}>{item.symbol}</span> -
                  <span className="dap-tw-text ml-1 text-white" style={{ fontSize: 12 }}>
                    {item.price === null ? "ND" : item.price.toLocaleString("fr-FR")}
                    <span
                      className={`badge inline-flex items-center ml-2 px-2 py-0.5 rounded ${
                        item.changeType === "up"
                          ? "bg-green-600 text-white"
                          : item.changeType === "down"
                          ? "bg-red-600 text-white"
                          : item.changeType === "neutral"
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-400 text-white"
                      }`}
                      style={{ fontSize: 12 }}
                    >
                      {item.changeType === "up" && <i className="fas fa-arrow-up" style={{ marginRight: 4 }}></i>}
                      {item.changeType === "down" && <i className="fas fa-arrow-down" style={{ marginRight: 4 }}></i>}
                      {item.changeType === "nd" && "ND %"}
                      {item.changeType !== "nd" && item.change != null && `${item.change > 0 ? "+" : item.change < 0 ? "" : ""}${item.change.toFixed(2)} %`}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vidéo de fond supprimée */}

      {/* Bouton CTA en bas de la section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <button 
          className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Découvrir nos services
        </button>
      </div>

      <div className="relative h-full w-full flex flex-col">
        <div className="w-[120px] h-[80px] mt-[4px] ml-[347px] flex items-center justify-center">
          <img 
            src="/logo everest.png" 
            alt="Logo EVEREST Finance" 
            className="w-full h-full object-contain" 
            style={{maxWidth: '100%', maxHeight: '100%'}} 
          />
        </div>
        
        <div className="ml-[341px] mt-[30px] max-w-[1012px] flex flex-col items-center relative">
          <div 
            className="mt-[160px] font-macafricansgi-com-lato-bold font-[number:var(--macafricansgi-com-lato-bold-font-weight)] text-macafricansgicomwhite text-[70px] tracking-[var(--macafricansgi-com-lato-bold-letter-spacing)] leading-tight [font-style:var(--macafricansgi-com-lato-bold-font-style)]"
            style={{minHeight: '90px'}}
          >
            Des idées et des valeurs au service de vos ambitions<span className="inline-block animate-pulse">|</span>
          </div>
          
          <div className="mt-[40px] font-macafricansgi-com-lato-light font-[number:var(--macafricansgi-com-lato-light-font-weight)] text-macafricansgicomwhite text-[length:var(--macafricansgi-com-lato-light-font-size)] tracking-[var(--macafricansgi-com-lato-light-letter-spacing)] leading-[var(--macafricansgi-com-lato-light-line-height)] [font-style:var(--macafricansgi-com-lato-light-font-style)]">
          </div>
        </div>
      </div>
    </div>
  );
};
