"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock, ExternalLink, ChevronRight } from "lucide-react";

const locations = [
  {
    city: "Katy",
    state: "TX",
    address: "4747 FM 1463 #100",
    cityState: "Katy, TX 77494",
    phone: "(832) 437-4847",
    tel: "+18324374847",
    hours: "11:00 AM – 10:00 PM",
    days: "Daily",
    mapsUrl: "https://maps.google.com/?q=4747+FM+1463+%23100,+Katy,+TX+77494",
    accent: "from-amber-500 to-orange-600",
    badge: "⭐ Featured",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    city: "Bothell",
    state: "WA",
    address: "20611 Bothell Everett Hwy",
    cityState: "Bothell, WA",
    phone: "(425) 481-6900",
    tel: "+14254816900",
    hours: "11:00 AM – 10:00 PM",
    days: "Daily",
    mapsUrl: "https://maps.google.com/?q=20611+Bothell+Everett+Hwy,+Bothell,+WA",
    accent: "from-orange-500 to-red-500",
    badge: "🏠 Original",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    city: "Redmond",
    state: "WA",
    address: "8102 161st Ave NE, Suite 150",
    cityState: "Redmond, WA 98052",
    phone: "(425) 448-9109",
    tel: "+14254489109",
    hours: "11:00 AM – 10:00 PM",
    days: "Daily",
    mapsUrl: "https://maps.google.com/?q=8102+161st+Ave+NE,+Redmond,+WA+98052",
    accent: "from-yellow-500 to-amber-600",
    badge: null,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    city: "Lake Stevens",
    state: "WA",
    address: "303 91st Ave NE",
    cityState: "Lake Stevens, WA",
    phone: "(425) 212-9186",
    tel: "+14252129186",
    hours: "11:00 AM – 10:00 PM",
    days: "Daily",
    mapsUrl: "https://maps.google.com/?q=303+91st+Ave+NE,+Lake+Stevens,+WA",
    accent: "from-amber-600 to-yellow-500",
    badge: null,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
  },
  {
    city: "Herndon",
    state: "VA",
    address: "12976 Highland Crossing Dr, Suite A",
    cityState: "Herndon, VA",
    phone: "(703) 385-9264",
    tel: "+17033859264",
    hours: "11:00 AM – 10:00 PM",
    days: "Daily",
    mapsUrl: "https://maps.google.com/?q=12976+Highland+Crossing+Dr,+Herndon,+VA",
    accent: "from-red-500 to-orange-600",
    badge: null,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function LocationsPage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#1A0A00]" />
        <div className="relative z-10 text-center px-6">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            5 Locations · Growing
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold text-white animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Find <span className="text-gradient">Us</span>
          </h1>
          <p className="text-amber-200/80 mt-3 animate-fade-in-up delay-200 text-lg">
            Royal Biryani House is closer than you think
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="#FFFBF5" />
          </svg>
        </div>
      </section>

      {/* ── Location Cards ───────────────────────────────────── */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className="reveal card-3d bg-white rounded-3xl overflow-hidden border border-amber-100/60 shadow-md hover:shadow-2xl transition-shadow duration-500 flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image src={loc.image} alt={loc.city} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`bg-gradient-to-r ${loc.accent} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow`}>
                      {loc.state}
                    </span>
                    {loc.badge && (
                      <span className="bg-white/90 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full shadow">
                        {loc.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h2
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {loc.city}
                    </h2>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
                    <span>{loc.address}<br />{loc.cityState}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Phone className="w-4 h-4 shrink-0 text-amber-500" />
                    <a href={`tel:${loc.tel}`} className="hover:text-amber-700 transition-colors font-medium">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Clock className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>{loc.hours} · {loc.days}</span>
                  </div>

                  <div className="flex gap-2 mt-auto pt-3 border-t border-amber-50">
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-amber-700 hover:bg-amber-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Directions
                    </a>
                    <a
                      href={`tel:${loc.tel}`}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-amber-200 hover:border-amber-400 text-amber-800 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-amber-50"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon */}
            <div className="reveal card-3d bg-gradient-to-br from-amber-900 to-[#1A0A00] rounded-3xl overflow-hidden border border-amber-800/40 shadow-md flex flex-col" style={{ transitionDelay: "0.5s" }}>
              <div className="relative h-44 overflow-hidden flex items-center justify-center bg-gradient-to-br from-amber-800/40 to-black/60">
                <div className="text-7xl animate-float-slow">📍</div>
              </div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">Coming Soon</span>
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Ashburn, VA
                </h2>
                <p className="text-amber-200/50 text-sm">
                  Royal Biryani House is expanding to Ashburn, VA. Stay tuned for the grand opening!
                </p>
                <div className="mt-auto pt-3 border-t border-amber-800/40">
                  <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-900/40 border border-amber-700/30">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-amber-400 text-sm font-semibold">Opening Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours Banner ─────────────────────────────────────── */}
      <section className="bg-[#1A0A00] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <Clock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h2
              className="text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              We&apos;re Open Every Day
            </h2>
            <p className="text-amber-200/60 text-lg mb-8">
              All locations · 11:00 AM – 10:00 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/40"
              >
                Order Online
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 border border-amber-700 hover:border-amber-400 text-amber-300 hover:text-amber-100 px-8 py-3.5 rounded-full font-semibold transition-all"
              >
                Book Catering
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
