import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Star, ChevronRight, Quote } from "lucide-react";

const FEATURED = [
  {
    name: "Chicken Dum Biryani",
    desc: "Slow-cooked aromatic basmati rice layered with tender chicken in true Hyderabadi dum style",
    price: "$18.99",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Butter Chicken",
    desc: "Tender chicken simmered in a rich, velvety tomato-cream sauce with aromatic spices",
    price: "$17.99",
    tag: "Most Loved",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goat Biryani",
    desc: "Succulent goat meat slow-cooked with saffron-infused basmati and caramelised onions",
    price: "$21.99",
    tag: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=600&q=80",
];

const REVIEWS = [
  {
    name: "Sankalp M.",
    text: "Special shoutout to the team for taking such great care of us — the hospitality truly made the experience even better.",
    stars: 5,
  },
  {
    name: "Nitin M.",
    text: "Excellent food and service! The Paneer Tikka, Kofta, and Jalebi Falooda were outstanding. Authentic flavors, generous portions.",
    stars: 5,
  },
  {
    name: "Andrew M.",
    text: "The Gobi Manchurian was crunchy on the outside and soft inside. The Chicken Tikka Masala was absolutely divine.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=90"
            alt="Authentic Indian cuisine spread"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-amber-300 text-sm ml-1 font-medium">
                4.6 · 1,156 Reviews
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Royal
              <br />
              <span className="text-amber-400">Biryani</span>
              <br />
              House
            </h1>

            <p className="text-lg text-amber-100/90 mb-3 font-light tracking-wide uppercase text-sm">
              ── Authentic Hyderabadi Cuisine ──
            </p>
            <p className="text-gray-300 text-base mb-10 max-w-lg leading-relaxed">
              Every layer has love. Every pinch has purpose. Slow-cooked, bold
              Hyderabadi flavors made fresh daily in Katy, Texas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
              >
                Order Online <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+18324374847"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" /> Call to Order
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── Info strip ───────────────────────────────────────── */}
      <section className="bg-amber-800 text-amber-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-amber-700/50 gap-0">
          {[
            { icon: <MapPin className="w-5 h-5 shrink-0 text-amber-400" />, label: "4747 FM 1463 #100, Katy, TX 77494" },
            { icon: <Clock className="w-5 h-5 shrink-0 text-amber-400" />, label: "Open Daily · 11:00 AM – 10:00 PM" },
            { icon: <Phone className="w-5 h-5 shrink-0 text-amber-400" />, label: "(832) 437-4847 · Dine-in · Pickup · Delivery" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-6 py-3 justify-center text-sm">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-amber-900 leading-snug mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Some things can&apos;t
            <br />
            be rushed.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Royal Biryani House, every dish is made with patience, passion, and
            authentic Hyderabadi tradition. From fragrant basmati rice to rich layers
            of spice, every step is crafted to bring out that deep aroma, bold flavor,
            and unforgettable taste you crave.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This is more than just food — it&apos;s tradition served fresh, flavorful,
            and royal. Our recipes have been passed through generations, and every plate
            tells a story of the vibrant streets of Hyderabad.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800" style={{ fontFamily: "var(--font-serif)" }}>5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Locations</div>
            </div>
            <div className="w-px h-10 bg-amber-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800" style={{ fontFamily: "var(--font-serif)" }}>1,156</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Reviews</div>
            </div>
            <div className="w-px h-10 bg-amber-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800" style={{ fontFamily: "var(--font-serif)" }}>4.6★</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Rating</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=85"
              alt="Royal Biryani House kitchen"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium">Rated #1 Indian Restaurant</p>
            <p className="text-xs text-gray-400">in Katy, Texas</p>
          </div>
        </div>
      </section>

      {/* ── Signature Dishes ─────────────────────────────────── */}
      <section className="bg-amber-900/5 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              From Our Kitchen
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-amber-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Signature Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED.map((dish) => (
              <div
                key={dish.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dish.img}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {dish.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-amber-900 mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {dish.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700" style={{ fontFamily: "var(--font-serif)" }}>
                      {dish.price}
                    </span>
                    <Link
                      href="/menu"
                      className="text-sm bg-amber-800 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-800 hover:text-white transition-all"
            >
              Explore Full Menu <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-amber-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A Feast for the Eyes
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-square"}`}
            >
              <Image
                src={src}
                alt={`Food photo ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-amber-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-3">
              What Guests Say
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Guests Love Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-amber-800/50 rounded-3xl p-8 border border-amber-700/40">
                <Quote className="w-8 h-8 text-amber-400 mb-4 opacity-60" />
                <p className="text-amber-100 leading-relaxed mb-6 text-sm">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-amber-400">Google Review</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1920&q=80"
            alt="Indian food background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-amber-900/85" />
        </div>
        <div className="relative text-center px-6">
          <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Ready to Eat?
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Taste the Royal Difference
          </h2>
          <p className="text-amber-200 mb-10 max-w-lg mx-auto">
            Browse our full menu and order online for delivery or pickup.
            Available daily 11 AM – 10 PM.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Order Now <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
