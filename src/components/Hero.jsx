import { useState, useEffect } from "react";
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid — 1.28fr expands image width slightly while keeping text beautifully balanced */}
        <div className="grid items-center gap-10 pb-20 pt-28 lg:grid-cols-[1fr_1.28fr] lg:gap-14 lg:pb-28 lg:pt-36">
          
          {/* Left column text */}
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
              <a 
                href="#contact"
                className="inline-flex
