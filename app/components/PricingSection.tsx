"use client";
import { useState } from "react";
import Link from "next/link";

const pricing = [
  {
    name: "Executive Sedan",
    model: "Swift Dzire / Similar",
    tag: "City & Sightseeing Comfort",
    icon: "⬢",
    perKm: 12,
    base: 300,
    driver: 500,
    capacity: "4 Pax • 2 Bags",
    bestFor: "Couples, small families, Bagdogra-NJP transfers",
    features: ["AC Comfort", "Hill-Experienced Driver", "Smooth Suspension"],
    popular: false,
  },
  {
    name: "Family MPV",
    model: "Maruti Ertiga / Similar",
    tag: "Spacious Family Touring",
    icon: "◈",
    perKm: 16,
    base: 350,
    driver: 500,
    capacity: "6-7 Pax • 4 Bags",
    bestFor: "Families, groups with extra luggage",
    features: ["Spacious 3-Row Seating", "Individual AC Vents", "Luggage Friendly"],
    popular: false,
  },
  {
    name: "Hill & Safari SUV",
    model: "Innova Crysta / Scorpio",
    tag: "Mountain & Forest King",
    icon: "✦",
    perKm: 20,
    base: 450,
    driver: 600,
    capacity: "6-7 Pax • 5 Bags",
    bestFor: "Darjeeling hills, Kalimpong & Dooars jungle safari",
    features: ["High Ground Clearance", "Premium Mountain Power", "Supreme Comfort"],
    popular: true,
  },
  {
    name: "Luxury Traveller",
    model: "Tempo Traveller / Urbania",
    tag: "Group Holiday Expedition",
    icon: "❖",
    perKm: 30,
    base: 800,
    driver: 800,
    capacity: "12-17 Pax • Large Luggage",
    bestFor: "Corporate offsites, extended family tours, college groups",
    features: ["Reclining Pushback Seats", "Ample Luggage Bay", "Full Group Together"],
    popular: false,
  },
];

export default function PricingSection({ compact = false }: { compact?: boolean }) {
  const [km, setKm] = useState(100);
  const [trip, setTrip] = useState<"oneway" | "round">("oneway");

  return (
    <section className={`${compact ? "py-10" : "py-14 lg:py-20"} bg-white`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-800">
              <span className="w-1.5 h-1.5 bg-[#F5B800] rounded-full animate-pulse" />
              TRANSPARENT PRICING &amp; PREMIUM FLEET
            </div>
            <h2 className="font-display text-[26px] sm:text-4xl font-bold mt-4 leading-tight">
              Curated Vehicles for <span className="text-[#D4A000]">Hills &amp; Dooars</span>
            </h2>
            <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
              Transparent per-km and package rates. Clean, sanitized and mountain-tested vehicles with verified professional drivers.
            </p>
          </div>
        )}

        {/* Trip Toggle + km slider - only on full section */}
        {!compact && (
          <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex bg-white border border-zinc-200 rounded-full p-1 w-full sm:w-auto">
              <button
                onClick={() => setTrip("oneway")}
                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition ${
                  trip === "oneway" ? "bg-black text-white shadow" : "text-zinc-600"
                }`}
              >
                One Way Transfer
              </button>
              <button
                onClick={() => setTrip("round")}
                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-bold transition ${
                  trip === "round" ? "bg-black text-white shadow" : "text-zinc-600"
                }`}
              >
                Round Trip / Sightseeing
              </button>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-bold text-zinc-500 whitespace-nowrap">EST. DISTANCE</span>
              <div className="flex items-center gap-2 flex-1 sm:flex-none">
                <button
                  onClick={() => setKm(Math.max(20, km - 20))}
                  className="w-9 h-9 rounded-full bg-white border border-zinc-200 font-bold shrink-0 text-sm hover:bg-zinc-100"
                >
                  −
                </button>
                <div className="flex-1 sm:w-[110px] text-center bg-white border border-zinc-200 rounded-full py-2.5 font-black text-sm">
                  {km} KM
                </div>
                <button
                  onClick={() => setKm(km + 20)}
                  className="w-9 h-9 rounded-full bg-black text-white font-bold shrink-0 text-sm hover:bg-zinc-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pricing.map((p) => {
            const est = p.perKm * km + p.base + (trip === "round" ? p.driver : 0);
            return (
              <div
                key={p.name}
                className={`relative bg-white rounded-[20px] sm:rounded-[24px] border-2 overflow-hidden flex flex-col justify-between transition hover:shadow-premium ${
                  p.popular ? "border-[#F5B800] shadow-premium lg:-translate-y-1" : "border-zinc-100"
                }`}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#F5B800] text-black text-[11px] font-extrabold tracking-[0.12em] px-4 py-1 rounded-b-xl whitespace-nowrap">
                    HILL &amp; SAFARI FAVOURITE
                  </div>
                )}
                <div className={`p-5 sm:p-6 flex-1 flex flex-col ${p.popular ? "pt-8" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            p.popular ? "bg-[#F5B800] text-black" : "bg-zinc-900 text-white"
                          }`}
                        >
                          {p.icon}
                        </span>
                        <h3 className="font-display font-black text-lg">{p.name}</h3>
                      </div>
                      <div className="text-xs font-semibold text-emerald-700 mt-1">{p.model}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{p.tag}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-baseline gap-0.5 justify-end">
                        <span className="text-[11px] font-bold text-zinc-400">₹</span>
                        <span className="font-black text-[24px] leading-none text-zinc-900">{p.perKm}</span>
                        <span className="text-xs font-bold text-zinc-500">/km</span>
                      </div>
                    </div>
                  </div>

                  {!compact && (
                    <div className="mt-4 bg-zinc-50 rounded-2xl p-3.5 border border-zinc-100">
                      <div className="flex justify-between items-center text-xs font-bold text-zinc-500">
                        <span>EST. FOR {km} KM</span>
                        <span className="text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded-full">Approx</span>
                      </div>
                      <div className="font-black text-xl text-zinc-900 mt-1">₹{est.toLocaleString("en-IN")}</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {p.perKm} × {km}km + base ₹{p.base}
                        {trip === "round" ? ` + driver allowance ₹${p.driver}` : ""}
                      </div>
                    </div>
                  )}

                  <div className="mt-3.5 flex gap-1.5 flex-wrap">
                    <span className="bg-zinc-900 text-white text-[11px] px-2.5 py-1 rounded-full font-bold">
                      {p.capacity}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.features.map((f) => (
                      <span key={f} className="text-[10px] bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium text-zinc-700">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/book?vehicle=${p.name}`}
                      className={`block text-center py-3 rounded-full font-bold text-xs sm:text-sm transition min-h-[44px] flex items-center justify-center ${
                        p.popular ? "bg-[#F5B800] text-black hover:bg-[#E6AC00]" : "bg-black text-white hover:bg-zinc-800"
                      }`}
                    >
                      Book {p.name} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-emerald-950">
          <div>
            <span className="font-bold">Service Areas:</span> North Bengal • Darjeeling • Kalimpong • Dooars (Lataguri, Jaldapara, Gorumara) • Siliguri • Bagdogra Airport • NJP. Toll, permits, and parking charged as per actuals.
          </div>
          <a
            href="tel:7319068773"
            className="shrink-0 text-center bg-zinc-900 text-white px-5 py-2.5 rounded-full font-bold text-xs whitespace-nowrap min-h-[40px] flex items-center justify-center"
          >
            Call Desk 7319068773
          </a>
        </div>
      </div>
    </section>
  );
}
