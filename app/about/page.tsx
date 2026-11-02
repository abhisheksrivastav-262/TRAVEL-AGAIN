import Link from "next/link";

export const metadata = {
  title: "About Us | Travel Again (Wild Green Adventure)",
  description: "Learn about Travel Again (Wild Green Adventure) — premier Travel & Hotel Booking agency in North Bengal, Darjeeling, Kalimpong and Dooars. Phone: 7319068773.",
};

export default function About() {
  return (
    <div>
      <section className="relative h-[52vh] min-h-[380px] flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/car-8.jpg" alt="About Travel Again" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="inline-flex bg-[#F5B800] text-black text-xs font-extrabold tracking-[0.15em] px-3.5 py-1 rounded-full mb-3 uppercase">
            ABOUT TRAVEL AGAIN
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            WILD GREEN ADVENTURE.<br />
            <span className="text-[#F5B800]">BORN IN NORTH BENGAL.</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm leading-relaxed">
            Your trusted travel and hotel booking partner across North Bengal, Darjeeling, Kalimpong &amp; Dooars — built on mountain expertise, safety, and personalized hospitality.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">Who We Are</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm">
              <strong>Travel Again (Wild Green Adventure)</strong> was born out of deep love and intimate local knowledge of the Himalayas and the Dooars plains. Operating across <strong>North Bengal, Darjeeling, Kalimpong, and Dooars</strong>, we offer dual specialized services: <strong>Premium Mountain Cab Rentals &amp; Tour Packages</strong> together with <strong>Verified Hotel &amp; Resort Bookings</strong>.
            </p>
            <p className="mt-3 text-zinc-600 leading-relaxed text-sm">
              Whether you are planning a sunrise journey to Tiger Hill in Darjeeling, a serene monastery visit in Kalimpong, an exhilarating rhino safari in Jaldapara / Gorumara, or need reliable transfers from Bagdogra Airport and NJP Railway Station — we ensure every leg of your trip is completely covered.
            </p>

            <h3 className="font-bold text-base mt-6 text-zinc-900">Our Core Pillars</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Travel &amp; Mountain Cabs:</strong> High-powered SUVs (Innova Crysta, Scorpio), Ertiga, and Sedans driven by hill-trained drivers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Hotel &amp; Resort Booking:</strong> Direct partnerships with mountain-view hotels, heritage colonial cottages, and Dooars forest eco-resorts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>Transparent Pricing:</strong> Clear per-km and package rates with no hidden surprise fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F5B800] font-bold">✔</span>
                <span><strong>24/7 Personal Assistance:</strong> Always available on phone / WhatsApp at <strong>7319068773</strong> throughout your trip.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-100">
              <h3 className="font-bold text-base text-emerald-950">Where We Serve</h3>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                We operate across all key circuits of North Bengal:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-emerald-900">
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🌲 North Bengal</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🏔️ Darjeeling Hills</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🌸 Kalimpong &amp; Lava</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🦏 Dooars Jungle Safari</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">✈️ Bagdogra Airport (IXB)</span>
                <span className="bg-white px-3 py-2 rounded-xl shadow-xs">🚆 NJP Railway Station</span>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-6">
              <h3 className="font-bold text-base">Safety on Mountain Roads</h3>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                Mountain driving requires patience, local route knowledge, and well-maintained vehicles with fresh brakes and tires. Our fleet is routinely inspected, and our drivers know every hairpin bend in North Bengal.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-zinc-400">Call our travel desk</div>
                  <div className="text-base font-bold text-[#F5B800]">7319068773</div>
                </div>
                <a href="tel:7319068773" className="bg-[#F5B800] text-black text-xs font-bold px-4 py-2 rounded-full">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Why Travel Again with Us?</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Dual Booking", "Book your cab and your hotel together in one simple conversation."],
              ["Handpicked Fleet", "Innova Crysta, Scorpio, Ertiga & Dzire in top mechanical shape."],
              ["Local North Bengal Team", "Real local knowledge of hill passes, weather & safari permits."],
              ["Fair Transparent Rates", "Competitive rates with zero hidden surcharges."],
            ].map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-6 border border-zinc-100 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5B800] mx-auto flex items-center justify-center font-black text-sm">✦</div>
                <div className="font-bold mt-3 text-sm">{t}</div>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="inline-flex bg-[#F5B800] text-black px-8 py-3 rounded-full font-bold text-sm min-h-[44px] items-center justify-center">
              BOOK YOUR TOUR &amp; HOTEL →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
