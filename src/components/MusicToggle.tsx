import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  /** When true, attempts to start playing (fired by user gesture from envelope tap). */
  shouldPlay: boolean;
}

// Soft Indian sitar/shehnai instrumental — royalty-free, hosted on a public CDN
const TRACK_URL = "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3";

export const MusicToggle = ({ shouldPlay }: MusicToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!shouldPlay || !audioRef.current) return;
    audioRef.current.play().catch(() => {
      // Autoplay blocked — user can tap the toggle to start.
    });
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
