import Link from "next/link";

export const metadata = {
  title: "North Bengal Outstation & Tour Cabs | Travel Again (Wild Green Adventure)",
  description: "Outstation cabs and holiday tour packages across North Bengal, Darjeeling, Kalimpong, Dooars, Sikkim and Gangtok. Call 7319068773.",
};

export default function Outstation() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[400px] flex items-center bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/car-5.jpg" alt="North Bengal Outstation" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">OUTSTATION &amp; SIGHTSEEING CABS</div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            EXPLORE THE WONDERS OF <br /><span className="text-[#F5B800]">NORTH BENGAL &amp; HILLS</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            Travel Again (Wild Green Adventure) offers reliable outstation journeys across Darjeeling, Kalimpong, Dooars, and beyond — one-way drops, multi-day circuits, and round trips.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["One-Way Hill Drops", "Direct point-to-point drop from Bagdogra/NJP to your hotel in Darjeeling, Kalimpong or Dooars."],
              ["Multi-Day Round Trips", "Car and dedicated mountain driver at your disposal for your complete vacation itinerary."],
              ["Wildlife Safari Circuit", "Dooars forest circuit covering Lataguri, Gorumara, Jaldapara and Chilapata."],
              ["Hill Station Hop", "Seamless connector between Darjeeling, Kurseong, Mirik, and Kalimpong."],
              ["Group Excursions", "Innova Crysta, Ertiga and Tempo Traveller options for groups and extra luggage."],
              ["Sikkim / Gangtok Extension", "Permit assistance and safe cross-border mountain rides to Gangtok, Pelling & Ravangla."],
            ].map(([t, d]) => (
              <div key={t} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                <h3 className="font-bold text-sm text-zinc-900">{t}</h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mt-12 text-zinc-900">Popular Holiday Destinations</h2>
          <p className="text-xs text-zinc-400 mt-1">Book a cab or complete holiday package with stay included. Call 7319068773.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "Darjeeling", desc: "Queen of the Hills • Tiger Hill", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" },
              { n: "Kalimpong", desc: "Deolo Hill • Orchid Nurseries", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80" },
              { n: "Dooars (Lataguri)", desc: "Gorumara Rhino Safari • Murti", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80" },
              { n: "Jaldapara & Buxa", desc: "Elephant Safari & Buxa Fort", img: "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=600&q=80" },
              { n: "Mirik Lake", desc: "Sumendu Lake & Pine Forests", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
              { n: "Lava & Rishyap", desc: "Canopy Walk & Neora Valley", img: "https://images.unsplash.com/photo-1476514525535-07fb6b4ae8d1?w=600&q=80" },
              { n: "Gangtok / Sikkim", desc: "MG Marg, Tsomgo & Nathula", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80" },
              { n: "Siliguri & NJP", desc: "Gateway to North Bengal", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80" },
            ].map((d) => (
              <div key={d.n} className="group relative overflow-hidden rounded-2xl h-44 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.n} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <div className="text-white font-bold text-base">{d.n}</div>
                  <div className="text-white/70 text-xs">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-black rounded-[24px] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-display text-2xl font-bold">Ready to travel in North Bengal?</h3>
              <p className="text-white/70 text-sm mt-1">Get an instant quote for your custom itinerary via Call or WhatsApp.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="/book" className="bg-[#F5B800] text-black px-6 py-3.5 rounded-full font-bold text-sm text-center">
                Book Outstation Tour
              </Link>
              <a href="tel:7319068773" className="border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-sm text-center hover:bg-white hover:text-black transition">
                Call 7319068773
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
