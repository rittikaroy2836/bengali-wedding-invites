import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  shouldPlay: boolean;
}

const TRACK_URL = "/Kone Daykha Alo ( কন দখ আল )  Rupak Tiary  Qpid India  Canon India  Best Wedding Song 2025.mp3";
const START_TIME = 13; // 0:13 seconds

export const MusicToggle = ({ shouldPlay }: MusicToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audio.currentTime = START_TIME;

    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime < START_TIME) {
        audio.currentTime = START_TIME;
      }
    });

    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!shouldPlay || !audioRef.current) return;
    audioRef.current.currentTime = START_TIME;
    audioRef.current.play().catch(() => {});
  }, [shouldPlay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Play music" : "Pause music"}
      className="fixed top-4 right-4 z-40 w-11 h-11 rounded-full bg-gradient-maroon text-primary-foreground shadow-elegant border border-secondary/60 flex items-center justify-center hover:scale-105 transition-transform"
    >
      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </button>
  );
};
