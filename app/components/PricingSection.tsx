"use client";
import Link from "next/link";

const fleet = [
  {
    name: "Toyota Innova",
    model: "Hill & Safari SUV",
    tag: "MOST POPULAR FOR HILLS",
    icon: "✦",
    img: "/cars/innova.jpg",
    capacity: "6-7 Passengers",
    luggage: "4-5 Bags",
    bestFor: "Darjeeling steep hills, Kalimpong roads & Dooars jungle safaris",
    features: [
      "High Ground Clearance",
      "Powerful Mountain Climb",
      "Plush Seating & Rear AC",
      "Spacious Boot for Woollens",
    ],
    popular: true,
  },
  {
    name: "Luxury Tempo Traveller",
    model: "Group Holiday Minibus",
    tag: "GROUP TOUR SPECIALIST",
    icon: "❖",
    img: "/cars/traveller.jpg",
    capacity: "12-16 Passengers",
    luggage: "12+ Large Bags",
    bestFor: "Corporate offsites, large family reunions, college groups & Dooars tour",
    features: [
      "Reclining Pushback Seats",
      "Dedicated Luggage Space",
      "Full Group Travels Together",
      "Chilled AC & Audio System",
    ],
    popular: false,
  },
  {
    name: "Maruti Ertiga",
    model: "Comfort Family MPV",
    tag: "FAMILY FAVOURITE",
    icon: "◈",
    img: "/cars/ertiga.jpg",
    capacity: "6 Passengers",
    luggage: "3-4 Bags",
    bestFor: "Family sightseeing, NJP & Bagdogra airport transfers",
    features: [
      "Spacious 3-Row Seating",
      "Individual AC Vents",
      "Smooth Mountain Suspension",
      "Comfortable Legroom",
    ],
    popular: false,
  },
  {
    name: "Swift Dzire",
    model: "Executive AC Sedan",
    tag: "AIRPORT & CITY TRANSFERS",
    icon: "⬢",
    img: "/cars/dzire.jpg",
    capacity: "4 Passengers",
    luggage: "2 Large Bags",
    bestFor: "Couples, small families, Bagdogra-NJP transfers & city day trips",
    features: [
      "Chilled Air Conditioning",
      "Comfortable Seating",
      "Deep Boot Space",
      "Smooth Highway Performance",
    ],
    popular: false,
  },
];

export default function PricingSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? "py-10" : "py-14 lg:py-20"} bg-white`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-800 uppercase">
              <span className="w-1.5 h-1.5 bg-[#F5B800] rounded-full animate-pulse" />
              WILD GREEN ADVENTURE FLEET
            </div>
            <h2 className="font-display text-[26px] sm:text-4xl font-bold mt-4 leading-tight">
              Curated Vehicles for <span className="text-[#D4A000]">Hills &amp; Dooars</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-3 leading-relaxed">
              Explore North Bengal with our verified, clean and sanitized vehicles. Driven by courteous, mountain-certified drivers with 24/7 travel desk support.
            </p>
          </div>
        )}

        {/* Fleet Cards (No car rates) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {fleet.map((p) => {
            return (
              <div
                key={p.name}
                className={`relative bg-white rounded-[22px] sm:rounded-[24px] border-2 overflow-hidden flex flex-col justify-between transition hover:shadow-premium ${
                  p.popular ? "border-[#F5B800] shadow-premium lg:-translate-y-1" : "border-zinc-100"
                }`}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#F5B800] text-black text-[10px] sm:text-[11px] font-extrabold tracking-[0.12em] px-4 py-1 rounded-b-xl whitespace-nowrap z-10 shadow-sm">
                    {p.tag}
                  </div>
                )}
                <div>
                  {/* Vehicle Image */}
                  <div className="relative overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-48 sm:h-52 w-full object-cover hover:scale-105 transition duration-500"
                    />
                    {!p.popular && (
                      <span className="absolute top-2.5 right-2.5 bg-black/85 text-[#F5B800] text-[9.5px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          p.popular ? "bg-[#F5B800] text-black" : "bg-zinc-900 text-white"
                        }`}
                      >
                        {p.icon}
                      </span>
                      <h3 className="font-display font-black text-lg text-zinc-900">{p.name}</h3>
                    </div>
                    <div className="text-xs font-semibold text-emerald-800 mt-1">{p.model}</div>
                    <div className="text-[11px] text-zinc-500 mt-1">{p.bestFor}</div>

                    <div className="mt-3.5 flex gap-1.5 flex-wrap">
                      <span className="bg-zinc-900 text-white text-[11px] px-2.5 py-1 rounded-full font-bold">
                        {p.capacity}
                      </span>
                      <span className="bg-zinc-100 text-zinc-700 text-[11px] px-2.5 py-1 rounded-full font-semibold">
                        {p.luggage}
                      </span>
                    </div>

                    <div className="mt-3.5 space-y-1.5">
                      {p.features.map((f) => (
                        <div key={f} className="text-[11px] text-zinc-600 flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl py-2 px-3 text-center mb-3">
                    <span className="text-[11px] font-bold text-emerald-900">Custom Quote on Enquiry</span>
                  </div>
                  <Link
                    href={`/book?vehicle=${p.name}`}
                    className={`block text-center py-3 rounded-full font-bold text-xs sm:text-sm transition min-h-[44px] flex items-center justify-center ${
                      p.popular
                        ? "bg-[#F5B800] text-black hover:bg-[#E6AC00]"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    Enquire / Book {p.name} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-emerald-950">
          <div>
            <span className="font-bold">Service Regions:</span> North Bengal • Darjeeling • Kalimpong • Dooars (Lataguri, Jaldapara, Gorumara) • Siliguri • Bagdogra Airport • NJP Railway Station.
          </div>
          <a
            href="tel:7319068773"
            className="shrink-0 text-center bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-full font-bold text-xs whitespace-nowrap min-h-[42px] flex items-center justify-center gap-1.5"
          >
            <span>☎</span> Call Desk 7319068773
          </a>
        </div>
      </div>
    </section>
  );
}
