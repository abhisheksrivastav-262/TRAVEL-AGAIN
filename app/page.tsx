import HeroSlideshow from "./components/HeroSlideshow";
import PricingSection from "./components/PricingSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlideshow />

      {/* Trust Bar */}
      <section className="bg-[#F5B800] py-4 sm:py-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-black">
          {[
            ["Travel & Hotel Booking", "One-stop seamless booking"],
            ["Mountain & Safari Cabs", "Innova, Tempo Traveller, Ertiga & Dzire"],
            ["Verified Hotels & Resorts", "Darjeeling, Kalimpong & Dooars"],
            ["24/7 Local Support", "Call 7319068773 anytime"],
          ].map(([t, d]) => (
            <div key={t} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-[#F5B800] flex items-center justify-center text-sm font-bold shrink-0">
                ✓
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm leading-tight">{t}</div>
                <div className="text-[11px] opacity-80 mt-0.5">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Wild Green Adventure */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cars/traveller.jpg"
              alt="Wild Green Adventure Tour"
              className="rounded-[20px] sm:rounded-[24px] object-cover w-full h-[320px] sm:h-[430px] shadow-premium"
            />
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-black text-white rounded-2xl p-5 sm:p-6 shadow-premium max-w-[270px] border border-zinc-800">
              <div className="text-[#F5B800] font-black text-2xl sm:text-3xl">24/7 HELPDESK</div>
              <div className="text-xs sm:text-sm font-semibold mt-0.5">Travel &amp; Hotel Support</div>
              <div className="text-[11px] text-white/70 mt-1">North Bengal • Darjeeling • Dooars</div>
              <a
                href="tel:7319068773"
                className="mt-3 inline-flex bg-[#F5B800] text-black text-xs font-extrabold px-4 py-2.5 rounded-full shadow hover:bg-[#e0a800] transition min-h-[38px] items-center"
              >
                Call 7319068773
              </a>
            </div>
          </div>
          <div>
            <div className="text-emerald-700 font-bold tracking-[0.18em] text-xs mb-2 uppercase">
              ABOUT WILD GREEN ADVENTURE
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight text-zinc-900">
              Your Complete Gateway to <br />
              <span className="text-[#D4A000]">North Bengal, Darjeeling &amp; Dooars</span>
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
              Welcome to <strong>Wild Green Adventure</strong>. We specialize in comprehensive <strong>Travel and Hotel Booking</strong> services across the most picturesque destinations of Eastern India — the misty hills of <strong>Darjeeling</strong>, tranquil landscapes of <strong>Kalimpong</strong>, wildlife havens of <strong>Dooars</strong>, and central hubs of <strong>North Bengal</strong> (Siliguri, Bagdogra Airport &amp; NJP).
            </p>
            <p className="mt-3 text-zinc-600 leading-relaxed text-sm">
              Whether you need a reliable mountain SUV (Toyota Innova), group minibus (Luxury Tempo Traveller), family MPV (Maruti Ertiga), smooth sedan (Dzire), scenic tea-garden resort, forest eco-cottage, or complete personalized holiday itinerary — our local experts ensure hassle-free booking and unbeatable hospitality.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-emerald-50/70 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                <div className="w-9 h-9 rounded-xl bg-black text-[#F5B800] flex items-center justify-center text-sm mb-2.5">
                  ◈
                </div>
                <div className="font-bold text-sm text-zinc-900">Travel &amp; Cabs</div>
                <div className="text-xs text-zinc-500 mt-1">Hill rides, jungle safaris, airport/NJP pickup</div>
              </div>
              <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-100">
                <div className="w-9 h-9 rounded-xl bg-[#F5B800] text-black flex items-center justify-center text-sm mb-2.5">
                  ✦
                </div>
                <div className="font-bold text-sm text-zinc-900">Hotel &amp; Resorts</div>
                <div className="text-xs text-zinc-500 mt-1">Darjeeling mountain view hotels &amp; Dooars lodges</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-800 transition min-h-[44px] items-center"
              >
                Book Travel or Hotel →
              </Link>
              <a
                href="tel:7319068773"
                className="inline-flex border border-zinc-300 text-zinc-800 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-50 transition min-h-[44px] items-center"
              >
                Call 7319068773
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Both Travel & Hotel Booking) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-emerald-700 font-bold tracking-[0.18em] text-xs mb-2">
                WHAT WE OFFER
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900">
                Travel &amp; Hotel Booking Services
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Everything you need for an unforgettable vacation in North Bengal, Darjeeling, Kalimpong &amp; Dooars
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-zinc-900 underline decoration-2 underline-offset-4 decoration-[#F5B800]"
            >
              View all services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                t: "Darjeeling Hill Tours",
                d: "Sunrise at Tiger Hill, Batasia Loop, Ghoom Monastery, tea garden walks & Rock Garden with mountain SUVs.",
                tag: "TRAVEL / CAB",
                img: "/cars/innova.jpg",
              },
              {
                t: "Dooars Jungle Safari & Transfers",
                d: "Wildlife safari tours in Gorumara, Jaldapara, Lataguri & Chilapata. Watch rhinos, elephants & rare birds.",
                tag: "WILDLIFE / SAFARI",
                img: "/cars/traveller.jpg",
              },
              {
                t: "Hotel & Resort Bookings",
                d: "Verified luxury resorts, mountain-view boutique hotels in Darjeeling & serene eco-cottages across Dooars.",
                tag: "HOTEL BOOKING",
                img: "/cars/ertiga.jpg",
              },
              {
                t: "Kalimpong Sightseeing",
                d: "Explore Deolo Hill, Durpin Monastery, cactus nurseries, and tranquil retreats of Lava & Rishyap.",
                tag: "SIGHTSEEING",
                img: "/cars/dzire.jpg",
              },
              {
                t: "Bagdogra Airport & NJP Pickup",
                d: "Reliable airport and railway station pickup and drop to any North Bengal hill station or Dooars forest stay.",
                tag: "TRANSFERS",
                img: "/cars/dzire.jpg",
              },
              {
                t: "Complete Holiday Combo Packages",
                d: "Customized cab + hotel packages tailored for families, couples, honeymoons, and college group tours.",
                tag: "COMBO PACKAGES",
                img: "/cars/ertiga.jpg",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="group bg-white rounded-[20px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.t}
                      className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur text-[#F5B800] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-bold text-zinc-900 text-lg">{s.t}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">{s.d}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Link
                    href="/book"
                    className="w-full text-center block text-xs font-bold tracking-wide bg-zinc-900 hover:bg-black text-white px-4 py-3 rounded-full transition min-h-[42px] flex items-center justify-center"
                  >
                    BOOK THIS SERVICE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Vehicles - Innova, Tempo Traveller, Ertiga, Dzire (No car rates) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="text-[#D4A000] font-bold tracking-[0.18em] text-xs mb-2 uppercase">
              OUR SELECTED FLEET
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              Only the Best Vehicles for Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Comfortable, well-maintained SUVs, Tempo Travellers, MPVs &amp; Sedans driven by seasoned mountain drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                n: "Toyota Innova",
                cat: "Hill & Jungle Safari SUV",
                f: "Mountain Power • 6-7 Seater • Large Boot",
                p: "6-7",
                l: "4-5 Bags",
                status: "Available on Enquiry",
                img: "/cars/innova.jpg",
                badge: "MOST POPULAR FOR HILLS",
              },
              {
                n: "Luxury Tempo Traveller",
                cat: "Group Holiday Tourer",
                f: "Pushback Seats • Group Travel • Dooars Tour",
                p: "12-16",
                l: "10+ Bags",
                status: "Available on Enquiry",
                img: "/cars/traveller.jpg",
                badge: "FOR BIG GROUPS",
              },
              {
                n: "Maruti Ertiga",
                cat: "Comfort Family MPV",
                f: "Spacious Interior • Rear AC • Family Choice",
                p: "6",
                l: "4 Bags",
                status: "Available on Enquiry",
                img: "/cars/ertiga.jpg",
                badge: "FAMILY FAVOURITE",
              },
              {
                n: "Swift Dzire",
                cat: "Executive AC Sedan",
                f: "Airport Transfers • Smooth Ride • Economical",
                p: "4",
                l: "2 Bags",
                status: "Available on Enquiry",
                img: "/cars/dzire.jpg",
                badge: "AIRPORT & CITY",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="bg-white rounded-[20px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.n} className="h-44 sm:h-48 w-full object-cover" />
                    <span className="absolute top-2.5 right-2.5 bg-black/85 text-[#F5B800] text-[9.5px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                      {c.badge}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900">{c.n}</h3>
                        <p className="text-xs text-emerald-700 font-semibold mt-0.5">{c.cat}</p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border border-emerald-100">
                        {c.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-2">{c.f}</p>
                    <div className="mt-3 flex gap-1.5 text-[11px] flex-wrap">
                      <span className="bg-zinc-900 text-white px-2.5 py-1 rounded-full font-semibold">
                        {c.p} Pax
                      </span>
                      <span className="bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full font-semibold">
                        {c.l}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                  <Link
                    href={`/book?vehicle=${c.n}`}
                    className="block text-center bg-black hover:bg-zinc-800 text-white py-3 rounded-full font-bold text-xs sm:text-sm min-h-[42px] flex items-center justify-center transition"
                  >
                    Enquire / Book {c.n}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/fleet"
              className="inline-flex justify-center border border-zinc-200 bg-white px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-50 transition shadow-sm"
            >
              View Full Fleet Details →
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET SPECIFICATION SECTION */}
      <PricingSection />

      {/* Popular Routes in North Bengal, Darjeeling & Dooars */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[#F5B800] font-bold tracking-[0.18em] text-xs mb-2">
                TOP TRAVEL CIRCUITS
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold">Popular Routes &amp; Tours</h2>
              <p className="text-white/70 text-xs sm:text-sm mt-1">
                Servicing North Bengal • Darjeeling • Kalimpong • Dooars • Siliguri • Bagdogra • NJP
              </p>
            </div>
            <Link
              href="/book"
              className="bg-[#F5B800] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e0a800] transition self-start lg:self-auto min-h-[44px] flex items-center"
            >
              Custom Route Enquiry →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { r: "Bagdogra Airport (IXB) → Darjeeling", d: "Scenic 3.5 hrs drive via Rohini / Kurseong" },
              { r: "NJP Railway Station → Darjeeling", d: "Smooth hill climb with verified mountain drivers" },
              { r: "Siliguri / NJP → Kalimpong", d: "Breathtaking route along the Teesta River" },
              { r: "Siliguri / Bagdogra → Dooars (Lataguri)", d: "Gateway to Gorumara National Park & Jungle Safari" },
              { r: "Darjeeling → Kalimpong Sightseeing", d: "Full day hill station connector with stopovers" },
              { r: "Dooars Jungle Safari Circuit", d: "Lataguri • Jaldapara • Chilapata • Buxa Fort" },
            ].map((item) => (
              <div
                key={item.r}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:border-[#F5B800] transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm sm:text-base text-white">{item.r}</div>
                    <div className="text-xs text-white/60 mt-1">{item.d}</div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#F5B800] text-black flex items-center justify-center font-bold text-sm shrink-0 ml-2 group-hover:scale-110 transition">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel & Resort Booking Feature Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 text-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex bg-[#F5B800] text-black font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
                HOTEL &amp; RESORT BOOKING DESK
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black leading-tight">
                Stay in Scenic Tea Gardens, Hill Resorts &amp; Jungle Cottages
              </h2>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                Looking for the perfect stay in <strong>Darjeeling</strong> with Kanchenjunga views, a tranquil tea bungalow in <strong>Kalimpong</strong>, or a riverside eco-resort in <strong>Dooars</strong>? Wild Green Adventure provides verified stays with personalized booking assistance.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="bg-white/15 px-3 py-1.5 rounded-full">✓ Darjeeling Mountain View Hotels</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">✓ Kalimpong Colonial Homestays</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">✓ Dooars Forest Resorts &amp; Safari Camps</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">✓ Verified Clean &amp; Safe</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-[#F5B800] text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#e0a800] transition text-center min-h-[44px] flex items-center justify-center"
                >
                  Book Hotel &amp; Resort →
                </Link>
                <a
                  href="https://wa.me/917319068773?text=Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20enquire%20about%20Hotel%20Booking%20in%20Darjeeling%20%2F%20Dooars"
                  target="_blank"
                  className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition text-center min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <span>✆</span> WhatsApp Hotel Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            What Our Travellers Say
          </h2>
          <p className="text-center text-xs text-zinc-400 mb-8 sm:mb-10">
            Real guest reviews for Darjeeling tours, Dooars safaris and hotel bookings
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Booked an Innova from Bagdogra to Darjeeling and back. The driver was exceptionally calm on the mountain roads. They also booked our resort in Darjeeling with great Kanchanjunga views!",
                n: "Amitava Roy",
                l: "Kolkata • Darjeeling Family Holiday",
              },
              {
                q: "Wild Green Adventure organized our entire Dooars jungle safari and stay at Lataguri. We spotted rhinos at Gorumara and the resort food was amazing. Seamless experience!",
                n: "Pooja & Rohan Sen",
                l: "Bangalore • Dooars Safari Trip",
              },
              {
                q: "Best travel agency for North Bengal and Kalimpong. Professional drivers and courteous service. Highly recommend 7319068773 for anyone visiting hills.",
                n: "Sunil Chettri",
                l: "Siliguri • Kalimpong & Lava Tour",
              },
            ].map((t) => (
              <div key={t.n} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
                <div className="text-[#F5B800] text-sm">★★★★★</div>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">&quot;{t.q}&quot;</p>
                <div className="mt-4 font-bold text-sm text-zinc-900">{t.n}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5B800] pb-[96px] sm:pb-16 text-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold tracking-[0.2em] mb-2 uppercase">WILD GREEN ADVENTURE</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
            PLAN YOUR NORTH BENGAL ADVENTURE TODAY
          </h2>
          <p className="mt-3 text-black/80 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Instant booking confirmation via Call &amp; WhatsApp for Darjeeling, Kalimpong, Dooars &amp; North Bengal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm min-h-[48px] flex items-center justify-center hover:bg-zinc-800 transition"
            >
              BOOK TRAVEL &amp; HOTEL →
            </Link>
            <a
              href="tel:7319068773"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm min-h-[48px] flex items-center justify-center hover:bg-zinc-100 transition shadow"
            >
              CALL 7319068773
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
