"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, ChevronRight, Phone, MessageCircle } from "lucide-react";

const eventTypes = [
  {
    icon: "🏢",
    title: "Corporate Events",
    subtitle: "Transform meetings into memories",
    desc: "Impress clients and energize your team with a spread that&apos;s anything but ordinary. We handle everything from setup to cleanup so you can focus on what matters.",
    features: ["Custom menus for any size", "Professional setup & cleanup", "Dietary accommodations", "Optional service staff", "On-time delivery guaranteed"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    accent: "from-amber-500 to-orange-600",
    glow: "shadow-amber-200",
  },
  {
    icon: "💍",
    title: "Weddings & Celebrations",
    subtitle: "Make it unforgettable",
    desc: "Your celebration deserves a feast to match. Our wedding catering brings the full Royal Biryani House experience — elegant presentation, stunning flavors — to your special day.",
    features: ["Chef consultation included", "Custom menu design", "Elegant presentation", "Professional service staff", "Beverage options available"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    accent: "from-orange-500 to-red-600",
    glow: "shadow-orange-200",
  },
  {
    icon: "🎉",
    title: "Private Parties",
    subtitle: "Your event, your way",
    desc: "Birthday dinners, family gatherings, game nights — whatever the occasion, we bring the flavor. Choose from family-style spreads or individually plated options.",
    features: ["Flexible delivery & setup", "Family-style or plated", "Takeout containers available", "Customizable spice levels", "No minimum headcount"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    accent: "from-yellow-500 to-amber-600",
    glow: "shadow-yellow-200",
  },
];

const highlights = [
  { icon: "👨‍🍳", label: "Expert Chefs", desc: "Trained in traditional Hyderabadi cooking" },
  { icon: "🌿", label: "Fresh Ingredients", desc: "Sourced locally, spices flown from India" },
  { icon: "📅", label: "1,000+ Events", desc: "Over a decade of catering experience" },
  { icon: "🚚", label: "All 5 Locations", desc: "TX, WA, and VA service areas" },
  { icon: "🍛", label: "Full Menu", desc: "Any dish from our menu, at scale" },
  { icon: "⭐", label: "5-Star Rated", desc: "Consistently top-reviewed catering" },
];

const menuHighlights = [
  { name: "Chicken Dum Biryani", price: "From $12/person", img: "https://royalbiryanihouse.com/wp-content/uploads/2025/09/Craving-Hyderabadi-Biryani-Discover-Royal-Taste-in-Bothell-Katy-Lake-Stevens-1.webp" },
  { name: "Goat Biryani", price: "From $15/person", img: "https://royalbiryanihouse.com/wp-content/uploads/2026/02/Why-Goat-Dum-Biryani-Is-a-Must-Try-for-True-Biryani-Lovers-at-Royal-Biryani-House.webp" },
  { name: "Butter Chicken", price: "From $11/person", img: "https://images.unsplash.com/photo-1588166524542-b1e27a3b09e0?auto=format&fit=crop&w=400&q=80" },
  { name: "Neelgiri Mutton Curry", price: "From $14/person", img: "https://royalbiryanihouse.com/wp-content/uploads/2026/02/Why-Andhra-Goat-Curry-Is-a-Must-Try-for-True-Spice-Lovers-at-Royal-Biryani-House-1.webp" },
];

export default function CateringPage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://royalbiryanihouse.com/wp-content/uploads/2025/03/top_IMG-1.png"
          alt="Catering spread"
          fill
          unoptimized
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-[#1A0A00]" />

        {/* Animated glow orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block bg-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            🍛 Catering Services
          </span>
          <h1
            className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="text-white">Feed Your </span>
            <span className="text-gradient">Crowd</span><br />
            <span className="text-white">Royally</span>
          </h1>
          <p className="text-amber-100/80 text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto mb-10">
            From intimate gatherings to grand celebrations — we bring authentic Hyderabadi flavors to your event, no matter the size.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a
              href="https://wa.me/18324374847?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+18324374847"
              className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              (832) 437-4847
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 80 720 0 0 60L0 80Z" fill="#FFFBF5" />
          </svg>
        </div>
      </section>

      {/* ── Highlights Strip ─────────────────────────────────── */}
      <section className="bg-[#FFFBF5] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="reveal text-center group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {h.icon}
                </div>
                <div className="font-bold text-amber-900 text-sm">{h.label}</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-tight">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Types ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-3 reveal">
              What We Cater
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-amber-900 reveal delay-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Every Occasion,<br />
              <span className="text-gradient">One Royal Feast</span>
            </h2>
          </div>

          <div className="space-y-16">
            {eventTypes.map((event, i) => (
              <div
                key={event.title}
                className={`reveal grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div className={`card-3d rounded-3xl overflow-hidden shadow-xl h-72 md:h-auto md:aspect-video relative ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className={`bg-gradient-to-r ${event.accent} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                      {event.icon} {event.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <p className="text-amber-500 text-sm font-semibold mb-2">{event.subtitle}</p>
                  <h3
                    className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {event.desc.replace(/&apos;/g, "'")}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {event.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-gray-700">
                        <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${event.accent} flex items-center justify-center shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/18324374847?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20${encodeURIComponent(event.title)}%20catering.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${event.accent} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl hover:${event.glow} transition-all duration-300`}
                  >
                    Request a Quote
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu Highlights ──────────────────────────────────── */}
      <section className="py-24 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-3 reveal">
              Popular Catering Picks
            </p>
            <h2
              className="text-4xl font-bold text-amber-900 reveal delay-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Crowd Favorites
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {menuHighlights.map((item, i) => (
              <div
                key={item.name}
                className="reveal card-3d rounded-2xl overflow-hidden bg-white border border-amber-100 shadow-sm hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    unoptimized={item.img.includes("royalbiryanihouse")}
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-900 text-sm mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.name}
                  </h4>
                  <p className="text-amber-600 text-sm font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Full Menu
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#1A0A00] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <div className="text-6xl mb-6 animate-float">🍛</div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ready to Plan Your<br />
              <span className="text-gradient">Royal Feast?</span>
            </h2>
            <p className="text-amber-200/60 text-lg mb-10 leading-relaxed">
              Contact us today and let&apos;s build the perfect menu for your event. We&apos;ll handle the food — you enjoy the party.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/18324374847?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+18324374847"
                className="inline-flex items-center justify-center gap-2.5 border border-amber-700 hover:border-amber-400 text-amber-300 hover:text-amber-100 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                (832) 437-4847
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
