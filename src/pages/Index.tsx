import mandala from "@/assets/mandala.png";
import bridePhoto from "@/assets/bride-placeholder.jpg";
import groomPhoto from "@/assets/groom-placeholder.jpg";
import bgTexture from "@/assets/bg-texture.jpg";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RsvpForm } from "@/components/RsvpForm";

const Index = () => {
  return (
    <main
      className="min-h-screen w-full relative overflow-hidden"
      style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
    >
      {/* Floating petals */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-petal"
            style={{
              left: `${(i * 8.3) % 100}%`,
              animationDuration: `${15 + (i % 5) * 3}s`,
              animationDelay: `${(i * 1.5) % 12}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-8">
        {/* HERO */}
        <section className="relative pt-6 pb-10 text-center">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
            <img src={mandala} alt="" width={1024} height={1024} className="w-[120%] max-w-none animate-spin-slow" />
          </div>

          <p className="font-bengali text-2xl text-primary animate-fade-up">🐚 শুভ বিবাহ 🐚</p>
          <p className="font-display text-[10px] tracking-[0.3em] text-secondary mt-1 animate-fade-up">SHUBHO BIBAHO • WEDDING INVITATION</p>

          <div className="my-6 flex items-center justify-center gap-3 animate-fade-up">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-gold text-lg">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
          </div>

          <p className="font-bengali text-3xl text-primary animate-scale-in" style={{ animationDelay: "0.2s", opacity: 0 }}>রিয়া</p>
          <h1 className="font-script text-6xl sm:text-7xl text-gradient-gold leading-tight animate-scale-in -mt-1" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Ria
          </h1>
          <p className="font-display text-2xl text-primary my-3 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>~ ❀ ~</p>
          <p className="font-bengali text-3xl text-primary animate-scale-in" style={{ animationDelay: "0.6s", opacity: 0 }}>শুভজিৎ</p>
          <h1 className="font-script text-6xl sm:text-7xl text-gradient-gold leading-tight animate-scale-in -mt-1" style={{ animationDelay: "0.7s", opacity: 0 }}>
            Subhojit
          </h1>

          <p className="font-bengali text-base text-primary mt-6 px-4 animate-fade-up" style={{ animationDelay: "1s", opacity: 0 }}>
            "দুটি হৃদয়, একটি পথ — চিরকালের বন্ধন"
          </p>
          <p className="font-serif-elegant italic text-sm text-muted-foreground mt-2 px-4 animate-fade-up" style={{ animationDelay: "1.1s", opacity: 0 }}>
            Two souls, one journey — together forever.
          </p>
        </section>

        {/* PHOTOS */}
        <section className="py-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="animate-slide-left" style={{ opacity: 0 }}>
              <div className="photo-frame-bride animate-float">
                <div className="relative p-2 bg-gradient-gold rounded-lg shadow-elegant">
                  <div className="absolute inset-0 rounded-lg bg-gradient-gold animate-shimmer opacity-50 blur-md -z-10" />
                  <img
                    src={bridePhoto}
                    alt="Ria Roy Chowdhury, the bride"
                    width={768}
                    height={1024}
                    className="w-full aspect-[3/4] object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="font-display text-[10px] tracking-widest text-secondary">THE BRIDE • কনে</p>
                  <p className="font-bengali text-xl text-primary leading-tight mt-1">রিয়া</p>
                  <h2 className="font-script text-3xl text-primary leading-tight">Ria</h2>
                  <p className="font-serif-elegant text-xs text-muted-foreground">Roy Chowdhury</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-right" style={{ opacity: 0, animationDelay: "0.3s" }}>
              <div className="photo-frame-groom animate-float-delayed">
                <div className="relative p-2 bg-gradient-gold rounded-lg shadow-elegant">
                  <div className="absolute inset-0 rounded-lg bg-gradient-gold animate-shimmer opacity-50 blur-md -z-10" />
                  <img
                    src={groomPhoto}
                    alt="Subhojit Singh, the groom"
                    width={768}
                    height={1024}
                    className="w-full aspect-[3/4] object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="font-display text-[10px] tracking-widest text-secondary">THE GROOM • বর</p>
                  <p className="font-bengali text-xl text-primary leading-tight mt-1">শুভজিৎ</p>
                  <h2 className="font-script text-3xl text-primary leading-tight">Subhojit</h2>
                  <p className="font-serif-elegant text-xs text-muted-foreground">Singh</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DATE */}
        <section className="py-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-10 bg-secondary/60" />
            <p className="font-display text-[10px] tracking-[0.3em] text-secondary">SAVE THE DATE</p>
            <span className="h-px w-10 bg-secondary/60" />
          </div>
          <p className="font-bengali text-sm text-primary mb-3">শুভ তারিখ • ১৯শে অগ্রহায়ণ, ১৪৩৩</p>

          <div className="inline-flex items-center justify-center gap-5 my-3">
            <div className="text-right">
              <p className="font-display text-xs tracking-widest text-primary">SATURDAY</p>
              <p className="font-script text-4xl text-primary leading-none mt-1">December</p>
            </div>
            <div className="border-x-2 border-secondary px-4 py-1">
              <p className="font-display text-5xl text-primary leading-none">05</p>
            </div>
            <div className="text-left">
              <p className="font-display text-xs tracking-widest text-primary">2026</p>
              <p className="font-script text-4xl text-primary leading-none mt-1">7:00 PM</p>
            </div>
          </div>

          <p className="font-bengali text-base text-primary mt-2">সন্ধ্যা ৭টা থেকে</p>

          <div className="mt-8">
            <CountdownTimer />
          </div>
        </section>

        {/* VENUE */}
        <section className="py-8">
          <div className="bg-card/80 backdrop-blur-sm border border-secondary/40 rounded-2xl p-6 shadow-soft text-center">
            <div className="text-3xl mb-2">🪔</div>
            <p className="font-display text-[10px] tracking-[0.3em] text-secondary">THE VENUE • স্থান</p>
            <h3 className="font-script text-3xl text-primary mt-2">Janakalyan Club</h3>
            <p className="font-bengali text-lg text-primary mt-1">জনকল্যাণ ক্লাব</p>
            <p className="font-serif-elegant text-base text-foreground mt-2 leading-relaxed">
              Baguiati,<br />Kolkata — 700059
            </p>
            <p className="font-bengali text-sm text-muted-foreground">বাগুইআটি, কলকাতা</p>
            <a
              href="https://maps.google.com/?q=Janakalyan+Club+Baguiati+Kolkata+700059"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2.5 bg-gradient-maroon text-primary-foreground font-display text-xs tracking-widest rounded-full shadow-soft hover:opacity-95 transition"
            >
              VIEW ON MAP
            </a>
          </div>
        </section>

        {/* RSVP */}
        <section className="py-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-10 bg-secondary/60" />
              <span className="text-gold">✦</span>
              <span className="h-px w-10 bg-secondary/60" />
            </div>
            <h2 className="font-script text-5xl text-gradient-gold">RSVP</h2>
            <p className="font-serif-elegant italic text-sm text-muted-foreground mt-2 px-4">
              Your presence will make our day complete
            </p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-secondary/40 rounded-2xl p-5 shadow-soft">
            <RsvpForm />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-secondary/60" />
            <span className="text-gold text-xl">✦</span>
            <span className="h-px w-12 bg-secondary/60" />
          </div>
          <p className="font-script text-2xl text-primary">With love & blessings</p>
          <p className="font-serif-elegant text-sm text-muted-foreground mt-2">Ria & Subhojit</p>
          <p className="font-display text-[10px] tracking-widest text-secondary mt-4">শুভেচ্ছা সহ</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
