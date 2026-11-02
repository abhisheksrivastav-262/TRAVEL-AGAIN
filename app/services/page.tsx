import Link from "next/link";

export const metadata = {
  title: "Travel & Hotel Booking Services | Travel Again (Wild Green Adventure)",
  description: "Comprehensive Travel & Hotel Booking across North Bengal, Darjeeling, Kalimpong & Dooars. Cab rental, jungle safari, resort stays and airport transfers. Call 7319068773.",
};

const services = [
  {
    category: "TRAVEL & CAB",
    title: "Darjeeling Hill Tours & Sightseeing",
    desc: "Iconic tours covering Tiger Hill sunrise, Batasia Loop, Himalayan Mountaineering Institute, Tea Gardens, Rock Garden & Mirik Lake in powerful SUVs.",
    img: "/cars/innova.jpg",
    benefits: ["Mountain-Certified Drivers", "Tiger Hill 4 AM Pickup", "Clean Sanitized SUVs"],
    use: "Families, couples, sunrise photography tours",
  },
  {
    category: "HOTEL & RESORT",
    title: "Darjeeling Mountain View Hotels",
    desc: "Handpicked premium hotels and cozy boutique stays facing the snow-clad Kanchenjunga peak, near Mall Road or quiet pine valleys.",
    img: "/cars/ertiga.jpg",
    benefits: ["Verified Properties", "Heater & Hot Water", "Guaranteed Best Rates"],
    use: "Honeymoon, relaxing holidays, family vacation",
  },
  {
    category: "SAFARI & WILDLIFE",
    title: "Dooars Jungle Safari & Forest Tours",
    desc: "Wildlife safari permits & forest resort transfers in Gorumara National Park, Jaldapara, Lataguri, Murti, Buxa Tiger Reserve and Chilapata.",
    img: "/cars/traveller.jpg",
    benefits: ["Safari Permit Assistance", "4x4 Gypsy & SUV Rides", "Elephant & Rhino Sightings"],
    use: "Wildlife enthusiasts, nature lovers, adventure groups",
  },
  {
    category: "HOTEL & RESORT",
    title: "Dooars Jungle Resorts & Eco Cottages",
    desc: "Stay amidst tea plantations and dense forests in Lataguri, Murti, and Madarihat with campfire, ethnic tribal dance, and fresh local organic food.",
    img: "/cars/dzire.jpg",
    benefits: ["Riverside Locations", "Bonfire & Tribal Dance", "Forest Boundary Views"],
    use: "Nature retreats, weekend escapes, group offsites",
  },
  {
    category: "TRAVEL & CAB",
    title: "Kalimpong, Lava & Rishyap Excursions",
    desc: "Peaceful hill tours to Deolo Hill, Durpin Monastery, flower nurseries, canopy walks in Lava, pine forests of Rishyap & Lolegaon hanging bridge.",
    img: "/cars/innova.jpg",
    benefits: ["Panoramic Himalayan Views", "Serene Offbeat Routes", "Flexible Photo Stops"],
    use: "Peace seekers, trekkers, nature photographers",
  },
  {
    category: "TRANSFERS",
    title: "Bagdogra Airport (IXB) & NJP Transfers",
    desc: "Punctual, flight-aware airport pickups and NJP railway station transfers to Darjeeling, Kalimpong, Gangtok or Dooars forest resorts.",
    img: "/cars/dzire.jpg",
    benefits: ["Flight Delay Tracking", "Meet & Greet Service", "No Surge Pricing"],
    use: "Incoming flights & train arrivals to North Bengal",
  },
  {
    category: "COMBO PACKAGE",
    title: "Complete Travel + Hotel Holiday Package",
    desc: "Tailored multi-day tour packages including dedicated private vehicle, verified hotel/resort stay with breakfast, sightseeing and safari coordination.",
    img: "/cars/innova.jpg",
    benefits: ["All-in-One Booking", "Personalized Itinerary", "24/7 Travel Manager"],
    use: "Stress-free holidays for families & honeymooners",
  },
  {
    category: "GROUP TRAVEL",
    title: "Tempo Traveller for Group Tours",
    desc: "12-16 seater luxury mini-buses with pushback seats and extra luggage space for extended family reunions, college trips and corporate offsites.",
    img: "/cars/ertiga.jpg",
    benefits: ["Pushback Seats", "Huge Luggage Space", "Full Group Together"],
    use: "School/college tours, corporate retreats, big families",
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative h-[48vh] min-h-[360px] flex items-center bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/dzire.jpg" alt="Services" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            TRAVEL AGAIN (WILD GREEN ADVENTURE)
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            Travel &amp; Hotel Booking <br />
            <span className="text-[#F5B800]">in North Bengal, Darjeeling &amp; Dooars</span>
          </h1>
          <p className="text-white/80 mt-3 text-xs sm:text-sm max-w-xl">
            From mountain SUVs and jungle safaris to scenic hillside hotels and eco-resorts — we manage every detail of your tour. Call 7319068773.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-[20px] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-premium transition flex flex-col justify-between">
                <div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} className="h-44 w-full object-cover" />
                    <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur text-[#F5B800] text-[9.5px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      {s.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 leading-snug">{s.title}</h3>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{s.desc}</p>
                    <div className="mt-4">
                      <div className="text-[11px] font-bold tracking-wide text-zinc-700">Highlights</div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {s.benefits.map((b) => (
                          <span key={b} className="text-[10px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full font-medium">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link href="/book" className="block text-center bg-[#F5B800] hover:bg-[#e0a800] text-black py-2.5 rounded-full font-bold text-xs sm:text-sm transition min-h-[42px] flex items-center justify-center">
                    Enquire / Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Looking for a customized holiday package?</h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-2">
              Tell us your travel dates, group size, and preferred destination in North Bengal, Darjeeling, Kalimpong or Dooars. We&apos;ll craft the perfect itinerary with car and hotel included.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book" className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center">
                Send Custom Enquiry
              </Link>
              <a href="tel:7319068773" className="bg-[#F5B800] text-black px-7 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center">
                Call Desk: 7319068773
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
