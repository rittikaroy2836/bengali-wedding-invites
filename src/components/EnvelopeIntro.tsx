import { useEffect, useState } from "react";
import mandala from "@/assets/mandala.png";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onOpen(); // trigger music + reveal underlying page
    setTimeout(() => setHidden(true), 1600);
  };

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[hsl(0_70%_18%)] via-[hsl(0_65%_25%)] to-[hsl(0_70%_15%)] transition-opacity duration-700 ${
        opening ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <img src={mandala} alt="" width={1024} height={1024} className="w-[140%] max-w-none animate-spin-slow" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
        <p className="font-bengali text-secondary text-sm tracking-widest mb-2 animate-fade-up">শুভ বিবাহ</p>
        <p className="font-display text-[10px] tracking-[0.4em] text-secondary/80 mb-8 animate-fade-up">YOU ARE INVITED</p>

        {/* Envelope */}
        <div
          onClick={handleOpen}
          className={`relative w-72 h-52 cursor-pointer transition-transform duration-700 ${
            opening ? "scale-110 -translate-y-10" : "hover:scale-[1.02] animate-float"
          }`}
          style={{ perspective: "1200px" }}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40_50%_94%)] to-[hsl(40_45%_88%)] rounded-md shadow-elegant border-2 border-secondary/60 overflow-hidden">
            {/* Inner letter peeking out */}
            <div
              className={`absolute left-4 right-4 bottom-3 bg-card rounded-sm border border-secondary/50 shadow-md transition-all duration-1000 ${
                opening ? "translate-y-[-180px] rotate-2" : "translate-y-0"
              }`}
              style={{ height: "78%" }}
            >
              <div className="h-full w-full flex flex-col items-center justify-center p-3 text-center">
                <p className="font-bengali text-primary text-xs">রিয়া ❀ শুভজিৎ</p>
                <p className="font-script text-2xl text-gradient-gold leading-none mt-1">Ria & Subhojit</p>
                <p className="font-display text-[8px] tracking-widest text-secondary mt-2">5 • DEC • 2026</p>
              </div>
            </div>
          </div>

          {/* Envelope back flap (bottom triangle) — static */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, hsl(0 70% 28%), hsl(0 65% 35%))",
              clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
              borderRadius: "0 0 6px 6px",
            }}
          />

          {/* Top opening flap — animates open */}
          <div
            className={`absolute inset-x-0 top-0 h-1/2 origin-top transition-transform duration-1000 ease-out ${
              opening ? "[transform:rotateX(180deg)]" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, hsl(0 75% 32%), hsl(0 65% 22%))",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              borderRadius: "6px 6px 0 0",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Gold seal */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-gold border-2 border-[hsl(0_70%_22%)] shadow-gold flex items-center justify-center transition-opacity ${
                opening ? "opacity-0" : "opacity-100"
              }`}
              style={{ top: "calc(50% - 24px - 8px)" }}
            >
              <span className="font-bengali text-primary text-lg leading-none">ও</span>
            </div>
          </div>

          {/* Decorative gold corners */}
          <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-secondary/60 rounded-tl-md pointer-events-none" />
          <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-secondary/60 rounded-tr-md pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-secondary/60 rounded-bl-md pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-secondary/60 rounded-br-md pointer-events-none" />
        </div>

        <button
          onClick={handleOpen}
          className="mt-10 px-8 py-3 bg-gradient-gold text-primary font-display text-xs tracking-[0.3em] rounded-full shadow-gold hover:scale-105 transition-transform animate-shimmer"
        >
          TAP TO OPEN
        </button>
        <p className="font-bengali text-secondary/80 text-xs mt-3 animate-shimmer">আমন্ত্রণ খুলুন</p>
      </div>
    </div>
  );
};
