"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";
import { Star, MapPin, UtensilsCrossed, Heart, Sparkles, Award } from "lucide-react";

// Animated counter
function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const timeline = [
  {
    year: "2017",
    title: "The Spice Revolution Begins",
    desc: "Three biryani-obsessed friends — Pradeep Datla, Raghuveer Kanakamedala, and Sai Yalamanchili — open the first Royal Biryani House in Bothell, WA. The mission: serve Hyderabad's soul on an American plate.",
    icon: "🍛",
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "2023",
    title: "Growing the Kingdom",
    desc: "Two new locations open — Lake Stevens, WA and Katy, TX — bringing authentic Hyderabadi flavors to thousands of new taste buds across the country.",
    icon: "📍",
    color: "from-orange-500 to-red-600",
  },
  {
    year: "2024",
    title: "Crowned the Best",
    desc: "Named \"Best Indian Restaurant\" in Washington State by Local Food Enthusiasts Magazine. A recognition of the team's relentless dedication to authenticity and quality.",
    icon: "👑",
    color: "from-yellow-500 to-amber-600",
  },
  {
    year: "2025",
    title: "300,000 Biryanis Served",
    desc: "A milestone that says everything. Over 300,000 plates of biryani lovingly prepared and served — each one packed with the same care as the very first bowl in 2017.",
    icon: "🎉",
    color: "from-amber-600 to-yellow-500",
  },
];

const values = [
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Authenticity",
    desc: "Every recipe traces back to Hyderabad. We study regional traditions and employ traditional dum-style techniques — no shortcuts, ever.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    glow: "hover:shadow-amber-200/60",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Quality Ingredients",
    desc: "Locally sourced produce. Spices hand-selected and flown in directly from India. Premium basmati rice in every pot.",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    glow: "hover:shadow-orange-200/60",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Innovation",
    desc: "We honor tradition while embracing creativity — blending heritage recipes with bold new ideas to keep every visit exciting.",
    color: "bg-red-50 border-red-200 text-red-700",
    glow: "hover:shadow-red-200/60",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Inclusivity",
    desc: "A judgment-free zone for everyone — from biryani first-timers to seasoned spice lovers. Our staff guides every guest through the experience.",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    glow: "hover:shadow-yellow-200/60",
  },
];

const founders = [
  { name: "Pradeep Datla", role: "Co-Founder", initial: "P" },
  { name: "Raghuveer Kanakamedala", role: "Co-Founder", initial: "R" },
  { name: "Sai Yalamanchili", role: "Co-Founder", initial: "S" },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1600&q=80"
          alt="Biryani"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Deep dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1A0A00]" />

        {/* Floating spice particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["🌶", "⭐", "🍃", "✨", "🌿", "⚡"].map((s, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20 animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i}s`,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Est. 2017 · Bothell, WA
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="text-white">Our </span>
            <span className="text-gradient">Story</span>
          </h1>
          <p className="text-amber-100/80 text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Three friends. One obsession. A mission to serve Hyderabad&apos;s soul on an American plate.
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 80 720 0 0 60L0 80Z" fill="#FFFBF5" />
          </svg>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-[#FFFBF5] py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 300000, suffix: "+", label: "Biryanis Served" },
            { value: 5,      suffix: "",  label: "Locations" },
            { value: 1000,   suffix: "+", label: "Events Catered" },
            { value: 9,      suffix: " yrs", label: "Of Royal Taste" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold text-gradient mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
              <div className="w-8 h-0.5 bg-amber-400 mx-auto mt-3 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── The Story ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://royalbiryanihouse.com/wp-content/smush-webp/2025/01/about_img-807x1024.jpg.webp"
                alt="Royal Biryani House story"
                fill
                unoptimized
                className="object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 rounded-3xl ring-4 ring-amber-400/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-white text-sm font-medium">4.6 · 1,156 reviews · Katy, TX</p>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Biryani-obsessed.<br />
              <span className="text-gradient">Flavor-driven.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              Our story is simple: we&apos;re biryani-obsessed food lovers who couldn&apos;t find the perfect rice dish in America. So we made it ourselves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Since 2017, we&apos;ve been on a mission to make taste buds dance with locally sourced ingredients and spices frequently flown in from India. We serve Indian food as it&apos;s supposed to be — complex, layered, and diverse.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Royal Biryani House, we&apos;re not just serving food — we&apos;re serving edible happiness. Our secret? Love, laughter, and a dash of culinary magic that would make even your grandmother&apos;s cooking jealous.
            </p>

            {/* Founders */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Founded by</p>
              <div className="flex flex-wrap gap-4">
                {founders.map((f) => (
                  <div key={f.name} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {f.initial}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{f.name.split(" ")[0]}</div>
                      <div className="text-xs text-gray-400">{f.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A0A00] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 reveal">Our Journey</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white reveal delay-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              From One Dream to{" "}
              <span className="text-gradient">Five Locations</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-800/60 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} reveal`}
                  style={{ transitionDelay: `${i * 0.2}s` }}
                >
                  {/* Content card */}
                  <div className="flex-1 card-3d">
                    <div className="bg-white/5 backdrop-blur-sm border border-amber-800/30 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                        <span>{item.icon}</span>
                        <span>{item.year}</span>
                      </div>
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-amber-200/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 items-center justify-center text-2xl shadow-lg shadow-amber-500/30 shrink-0 timeline-dot z-10">
                    {item.icon}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────── */}
      <section className="py-24 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-3 reveal">What Drives Us</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-amber-900 reveal delay-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal card-3d border-2 rounded-2xl p-7 cursor-default hover:shadow-xl ${v.color} ${v.glow} transition-shadow duration-300`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="mb-4">{v.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80"
          alt="Biryani feast"
          fill
          className="object-cover parallax-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">The Flavor Awaits</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6 reveal delay-100"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What Are You<br />Waiting For?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <Link
              href="/menu"
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/40"
            >
              Order Now
            </Link>
            <Link
              href="/locations"
              className="border border-white/40 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:bg-white/10"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
