"use client";
import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";

const slides = [
  { url: "/cars/innova.jpg", title: "Toyota Innova for Darjeeling & Dooars" },
  { url: "/cars/traveller.jpg", title: "Luxury Tempo Traveller for Group Tours" },
  { url: "/cars/ertiga.jpg", title: "Maruti Ertiga for Family Travel" },
  { url: "/cars/dzire.jpg", title: "Comfortable Sedan for Hills & Airport" },
  { url: "/cars/car-6.jpg", title: "Kalimpong Hill Drive" },
  { url: "/cars/car-7.jpg", title: "Dooars Jungle Safari Trip" },
  { url: "/cars/car-8.jpg", title: "Darjeeling Tea Garden Route" },
  { url: "/cars/car-11.jpg", title: "Hotel & Resort Booking Services" },
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[auto] lg:min-h-[88vh] flex items-start lg:items-center overflow-visible lg:overflow-hidden bg-black pt-[72px] lg:pt-0 pb-8 lg:pb-0">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.url} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}

      {/* Dots - hidden on mobile to not overlap form, visible on lg */}
      <div className="hidden lg:flex absolute bottom-6 left-12 gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#F5B800]" : "w-3 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-12 lg:py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 rounded-full px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-6 text-emerald-300">
            <span className="w-2 h-2 bg-[#F5B800] rounded-full animate-pulse" />
            NORTH BENGAL • DARJEELING • KALIMPONG • DOOARS
          </div>
          <h1 className="font-display font-black text-[34px] sm:text-[52px] lg:text-[60px] leading-[1.0] sm:leading-[0.95] tracking-tight">
            WILD GREEN<br />
            <span className="text-[#F5B800] text-[28px] sm:text-[44px] lg:text-[50px] block font-extrabold tracking-normal mt-1">ADVENTURE</span>
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
            Complete <span className="text-[#F5B800] font-bold">Travel &amp; Hotel Booking</span> across North Bengal, Darjeeling, Kalimpong &amp; Dooars
          </p>
          <p className="mt-2 text-white/70 text-sm max-w-xl">
            Reliable cabs, mountain SUVs, curated tour packages, forest jungle safaris &amp; verified scenic hotel/resort stays. One-stop solution with 24/7 personalized support.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#book" className="bg-[#F5B800] text-black font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#E6AC00] transition shadow-gold text-center sm:text-left flex-1 sm:flex-none justify-center flex">
              BOOK TRAVEL &amp; HOTEL →
            </a>
            <a href="tel:7319068773" className="bg-white text-black font-bold px-6 py-3.5 rounded-full text-sm hover:bg-zinc-100 transition text-center flex-1 sm:flex-none">
              CALL 7319068773
            </a>
          </div>
          <div className="mt-8 hidden lg:grid grid-cols-4 gap-3 max-w-xl">
            {[
              ["Travel & Cab", "Rental"],
              ["Hotel & Resort", "Booking"],
              ["Darjeeling &", "Kalimpong"],
              ["Dooars Jungle", "Safari"],
            ].map(([a, b]) => (
              <div key={a} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                <div className="text-[#F5B800] text-[11px] font-bold tracking-wide">{a}</div>
                <div className="text-white text-xs font-semibold">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="book" className="w-full max-w-[520px] mx-auto lg:max-w-none lg:pt-6 scroll-mt-20">
          <BookingForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
