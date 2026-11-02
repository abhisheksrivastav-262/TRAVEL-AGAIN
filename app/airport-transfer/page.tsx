import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Bagdogra Airport & NJP Transfer | Travel Again (Wild Green Adventure)",
  description: "Reliable airport and railway station pickup/drop for Bagdogra (IXB) & NJP to Darjeeling, Kalimpong and Dooars. Call 7319068773.",
};

export default function Airport() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[400px] flex items-center bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/car-4.jpg" alt="Bagdogra Airport Transfer" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] text-xs font-extrabold uppercase tracking-widest mb-2">
            BAGDOGRA (IXB) &amp; NJP TRANSFERS
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            STRESS-FREE TRANSFERS TO <br />
            <span className="text-[#F5B800]">DARJEELING, KALIMPONG &amp; DOOARS</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            On-time pickup and drop for Bagdogra International Airport (IXB) and New Jalpaiguri (NJP) Railway Station. Flight-aware tracking, spacious SUVs for mountain roads and direct hotel transfers.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-full">✓ Flight &amp; Train delay monitoring</span>
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-full">✓ Mountain SUVs &amp; Sedans</span>
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-full">✓ Door-to-resort drop</span>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-zinc-900">Bagdogra &amp; NJP Transfers</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                ["Bagdogra → Darjeeling", "Scenic 3.5 hrs ride through Kurseong tea hills in clean Innova / Ertiga."],
                ["Bagdogra → Kalimpong", "Smooth travel along the Teesta valley into Kalimpong hills."],
                ["Bagdogra / NJP → Dooars", "Direct drop to Lataguri, Gorumara and Murti forest resorts."],
                ["Luggage-Friendly Rides", "Spacious SUVs for winter woollens, luggage bags & family gear."],
              ].map(([t, d]) => (
                <div key={t} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <div className="font-bold text-sm text-zinc-900">{t}</div>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-zinc-900">How Airport / Station Pickup Works</h3>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {[
                  ["01", "Book"],
                  ["02", "Share Flight/Train"],
                  ["03", "Driver Details"],
                  ["04", "Pickup at Exit"],
                  ["05", "Hill Journey"],
                ].map(([n, l]) => (
                  <div key={n} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-black text-[#F5B800] flex items-center justify-center font-bold text-xs mx-auto">{n}</div>
                    <div className="text-[11px] font-bold mt-2 text-zinc-800">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <BookingForm variant="card" title="Book Bagdogra / NJP Transfer" />
            <p className="text-xs text-zinc-400 mt-3 text-center">Share your flight/train number for coordinated pickup. Call 7319068773.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
