import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-05T19:00:00+05:30").getTime();

export const CountdownTimer = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ n, l }: { n: number; l: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-maroon shadow-soft flex items-center justify-center border border-secondary/50">
        <span className="font-display text-xl sm:text-2xl text-primary-foreground">{String(n).padStart(2, "0")}</span>
      </div>
      <span className="font-display text-[10px] tracking-widest text-primary mt-1.5">{l}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      <Box n={time.d} l="DAYS" />
      <Box n={time.h} l="HRS" />
      <Box n={time.m} l="MIN" />
      <Box n={time.s} l="SEC" />
    </div>
  );
};
