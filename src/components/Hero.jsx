import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Award, Users, Briefcase } from "lucide-react";

function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return count;
}

function CounterStat({ value, suffix, label }) {
  const count = useCounter(value, 2000);

  return (
    <div className="text-center sm:text-left">
      <p className="font-serif text-3xl font-semibold text-primary">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

const stats = [
  { value: 19, label: "Years Track Record", suffix: "+" },
  { value: 90, label: "Success Velocity", suffix: "%" },
  { value: 2000, label: "Approved Portfolios", suffix: "+" },
  { value: 50, label: "Global Accessways", suffix: "+" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar Layout (Reduced bottom padding via pb-2) */}
        <nav className="flex animate-fade-in-up items-center justify-between pt-6 pb-2">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.webp" 
              alt="Accurate Consultancy Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground uppercase tracking-wider text-xs font-bold">
              Services
            </a>
            <a href="#destinations" className="transition-colors hover:text-foreground uppercase tracking-wider text-xs font-bold">
              Destinations
            </a>
            <a href="#about" className="transition-colors hover:text-foreground uppercase tracking-wider text-xs font-bold">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground uppercase tracking-wider text-xs font-bold">
              Contact
            </a>
          </div>

          <Button
            variant="outline-gold"
            size="sm"
            className="hidden md:inline-flex animate-shimmer uppercase tracking-wider text-xs font-bold"
          >
            Book Consultation
          </Button>
        </nav>

        {/* Hero content grid (Reduced top padding to pt-2 and lg:pt-4) */}
        <div className="grid items-center gap-12 pb-20 pt-2 lg:grid-cols-[1fr_1.12fr] lg:gap-16 lg:pb-28 lg:pt-4">
          {/* Left column text inputs */}
          <div className="max-w-xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              <Award className="h-4 w-4 text-primary" />
              Trusted Since 2006 • Visa &amp; Immigration Excellence
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 mt-6 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] text-balance">
              Visa, Immigration
              <br />
              <span className="text-primary">&amp; Study Abroad</span> Experts.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
              Empowering students, ambitious professionals, and families to transcend borders
              through impeccably tailored consultancy, corporate relocation, and international
              academic access paths.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">
              <Button variant="premium" size="lg" className="animate-shimmer uppercase tracking-wider text-xs font-black">
                <Phone className="h-4 w-4" />
                Schedule a Confidential Session
              </Button>
              <Button variant="outline-gold" size="lg" className="uppercase tracking-wider text-xs font-black">
                <Briefcase className="h-4 w-4" />
                Explore Services
              </Button>
            </div>

            {/* Live Counter Metrics Box */}
            <div className="animate-fade-in-up animation-delay-400 mt-10 grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:grid-cols-4">
              {stats.map((stat) => (
                <CounterStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right column imagery canvas */}
          <div className="relative mx-auto w-full max-w-lg animate-scale-in animation-delay-200 lg:max-w-none">
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-foreground/5">
              <img
                src="/managing-director-visa-portrait.jpg"
                alt="Accurate Consultancy Executive Workspace Overview"
                width={1024}
                height={1365}
                className="hover-zoom aspect-[3/4] w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
            </div>

            {/* Frame accentuation element */}
            <div className="pointer-events-none absolute -right-5 -top-5 -z-10 h-full w-full rounded-2xl border-2 border-primary/30" />

            {/* Dynamic visual verification tags */}
            <div className="animate-fade-in-up animation-delay-500 absolute -left-4 top-1/4 hidden rounded-xl border border-border bg-card p-4 shadow-xl shadow-foreground/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Visa Status</p>
                  <p className="font-serif text-lg font-semibold text-foreground">Approved</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-600 absolute -right-4 bottom-16 hidden rounded-xl border border-border bg-card p-4 shadow-xl shadow-foreground/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Global Reach</p>
                  <p className="font-serif text-lg font-semibold text-foreground">50+ Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
