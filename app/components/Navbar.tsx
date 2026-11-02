"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/airport-transfer", label: "Airport" },
  { href: "/outstation", label: "Outstation" },
  { href: "/local-taxi", label: "Local" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-5 lg:py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-all ${scrolled ? "bg-[#1B4332] text-[#F5B800]" : "bg-[#F5B800] text-black shadow-gold"}`}>
            <span className="tracking-tight font-extrabold">WGA</span>
          </div>
          <div>
            <div className={`font-display font-bold leading-none tracking-tight text-[17px] sm:text-[19px] flex items-center gap-1.5 ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}>
              <span>WILD GREEN</span><span className="text-[#F5B800]">ADVENTURE</span>
            </div>
            <div className={`text-[8.5px] tracking-[0.2em] font-bold mt-0.5 ${scrolled ? "text-emerald-700" : "text-emerald-300"}`}>
              TRAVEL &amp; HOTEL BOOKING
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? scrolled
                      ? "bg-[#F5B800] text-black"
                      : "bg-white text-black"
                    : scrolled
                    ? "text-zinc-700 hover:bg-zinc-100"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:7319068773"
            className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full border transition ${scrolled ? "border-zinc-200 text-zinc-800 hover:bg-zinc-50" : "border-white/30 text-white hover:bg-white/10"}`}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            7319068773
          </a>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 transition ${scrolled ? "bg-zinc-900 text-white" : "bg-white text-black"}`}
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-current transition ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] border-t border-zinc-100" : "max-h-0"}`}>
        <nav className="p-6 grid grid-cols-2 gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium text-center transition ${pathname === l.href ? "bg-[#F5B800] text-black font-bold" : "bg-zinc-50 text-zinc-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="col-span-2 mt-2 bg-black text-white px-4 py-3 rounded-xl text-sm font-bold text-center">BOOK TRAVEL &amp; HOTEL →</Link>
          <a href="tel:7319068773" className="col-span-2 bg-[#F5B800] text-black px-4 py-3 rounded-xl text-sm font-bold text-center">CALL 7319068773</a>
        </nav>
      </div>
    </header>
  );
}
