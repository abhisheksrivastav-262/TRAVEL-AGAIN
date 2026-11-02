import Link from "next/link";
import PricingSection from "../components/PricingSection";

export const metadata = {
  title: "Our Fleet | Wild Green Adventure",
  description: "Explore our fleet of Toyota Innova, Luxury Tempo Traveller, Maruti Ertiga and Swift Dzire for Darjeeling, Kalimpong, Dooars and North Bengal tours.",
};

const vehicles = [
  {
    name: "Toyota Innova",
    category: "Mountain & Safari SUV",
    tag: "HILL & JUNGLE SAFARI SPECIAL",
    img: "/cars/innova.jpg",
    cap: "6-7 Passengers",
    lug: "4-5 Bags",
    feats: ["Powerful Mountain Climb", "High Ground Clearance", "Rear AC Vents", "Plush Seating"],
    for: "Darjeeling steep roads, Kalimpong scenic circuits, Dooars forest safari",
  },
  {
    name: "Luxury Tempo Traveller",
    category: "Group Tour Minibus",
    tag: "GROUP EXPEDITION SPECIAL",
    img: "/cars/traveller.jpg",
    cap: "12-16 Passengers",
    lug: "12+ Large Bags",
    feats: ["Reclining Pushback Seats", "Audio & Mic System", "Dedicated Luggage Bay", "Full Group Together"],
    for: "Corporate retreats, extended family groups, college reunions, Dooars package tours",
  },
  {
    name: "Maruti Ertiga",
    category: "Family MPV",
    tag: "FAMILY COMFORT TOURING",
    img: "/cars/ertiga.jpg",
    cap: "6 Passengers",
    lug: "3-4 Bags",
    feats: ["3-Row Flexible Seating", "Comfortable Suspension", "Dual AC", "Fuel Efficient"],
    for: "Family sightseeing, NJP & Bagdogra airport pickups, multi-day tours",
  },
  {
    name: "Swift Dzire",
    category: "Executive AC Sedan",
    tag: "CITY & AIRPORT COMFORT",
    img: "/cars/dzire.jpg",
    cap: "4 Passengers",
    lug: "2 Large Bags",
    feats: ["Chilled AC", "Comfortable Cushioning", "Deep Boot Space", "Smooth Highway Ride"],
    for: "Couples, small families, Bagdogra Airport & Siliguri city transfers",
  },
];

export default function Fleet() {
  return (
    <div>
      <section className="relative py-14 sm:py-20 bg-black text-white text-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/innova.jpg" alt="Fleet hero" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">OUR CURATED FLEET</div>
          <h1 className="font-display text-3xl sm:text-5xl font-black leading-tight">
            PREMIUM VEHICLES FOR <br />
            <span className="text-[#F5B800]">HILLS &amp; FORESTS</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto text-xs sm:text-sm px-2 leading-relaxed">
            Wild Green Adventure offers top-tier, sanitized, hill-certified SUVs, Tempo Travellers, MPVs and Sedans. All vehicles driven by courteous, mountain-experienced drivers.
          </p>
        </div>
      </section>

      {/* Fleet Overview Section */}
      <PricingSection />

      <section className="py-10 sm:py-14 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <h2 className="font-display text-xl sm:text-3xl font-bold text-zinc-900">Vehicle Specifications</h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">Selected premium models suitable for North Bengal mountain roads and forest safaris.</p>
            </div>
            <a href="tel:7319068773" className="text-xs sm:text-sm font-bold text-black underline">Need guidance? Call 7319068773</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {vehicles.map((v) => (
              <div key={v.name} className="bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition flex flex-col justify-between">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.img} alt={v.name} className="h-48 w-full object-cover" />
                  <div className="p-5 sm:p-6">
                    <div className="text-[10px] font-bold tracking-[0.12em] text-emerald-800 uppercase">{v.tag}</div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mt-1 text-zinc-900">{v.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1">Best for: {v.for}</p>

                    <div className="mt-4 flex gap-2 flex-wrap">
                      <span className="bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-full font-semibold">{v.cap}</span>
                      <span className="bg-zinc-100 text-zinc-700 text-xs px-3 py-1.5 rounded-full font-semibold">{v.lug}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {v.feats.map((f) => (
                        <span key={f} className="text-[11px] bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full text-zinc-800 font-medium">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl py-2 px-3 text-center mb-3">
                    <span className="text-[11px] font-bold text-emerald-900">Custom Quote on Enquiry</span>
                  </div>
                  <Link href={`/book?vehicle=${v.name}`} className="block text-center bg-black hover:bg-zinc-800 text-white py-3 rounded-full font-bold text-xs sm:text-sm min-h-[44px] flex items-center justify-center transition">
                    Enquire / Book {v.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
