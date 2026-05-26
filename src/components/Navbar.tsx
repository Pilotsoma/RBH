"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "@/components/LogoImage";
import { useCart } from "@/lib/cart-store";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/catering", label: "Catering" },
  { href: "/locations", label: "Locations" },
];

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const count = mounted ? itemCount() : 0;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-md backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-amber-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <LogoImage size={48} />
            <div className="leading-tight">
              <div
                className="font-bold text-amber-900 tracking-wide"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
              >
                Royal Biryani House
              </div>
              <div className="text-xs text-amber-600 tracking-widest uppercase hidden sm:block">
                Authentic Hyderabadi
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-lg group ${
                    active
                      ? "text-amber-700"
                      : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-amber-600 transition-transform origin-left duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[10px] rounded-full min-w-[18px] min-h-[18px] flex items-center justify-center font-bold px-1 animate-scale-in">
                  {count}
                </span>
              )}
            </button>

            {/* Auth */}
            {mounted && session ? (
              <div className="hidden sm:flex items-center gap-1">
                <Link
                  href="/account"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all"
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">{session.user?.name?.split(" ")[0]}</span>
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-3 py-1.5 text-xs text-gray-500 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                >
                  Sign out
                </button>
              </div>
            ) : mounted ? (
              <Link
                href="/login"
                className="hidden sm:block ml-1 text-sm font-medium bg-amber-800 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
              >
                Sign in
              </Link>
            ) : null}

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 ml-1 text-gray-700 hover:bg-amber-50 rounded-full transition-all"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden pb-5 border-t border-amber-100/60 mt-1 pt-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm tracking-wide uppercase transition-colors ${
                    active
                      ? "bg-amber-50 text-amber-800"
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="border-t border-amber-100/60 mt-2 pt-3">
              {session ? (
                <>
                  <Link
                    href="/account"
                    className="flex items-center gap-2 px-4 py-2.5 text-gray-700 text-sm hover:bg-amber-50 rounded-xl"
                  >
                    <User className="w-4 h-4" />
                    My Orders
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2.5 text-red-600 text-sm hover:bg-red-50 rounded-xl"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block px-4 py-2.5 bg-amber-800 text-white text-sm font-semibold rounded-xl text-center hover:bg-amber-700 transition-colors"
                >
                  Sign in / Register
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
