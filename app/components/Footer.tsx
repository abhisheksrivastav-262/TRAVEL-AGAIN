import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-zinc-300">
      {/* Top CTA */}
      <div className="border-b border-zinc-800">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[#F5B800] text-xs tracking-[0.2em] font-bold mb-2">PLANNING YOUR TRIP?</div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-none">Travel &amp; Hotel Booking Made Easy<span className="text-[#F5B800]">.</span></h3>
            <p className="text-zinc-400 text-sm mt-2">Serving North Bengal • Darjeeling • Kalimpong • Dooars</p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <Link href="/book" className="flex-1 lg:flex-none bg-[#F5B800] text-black font-bold px-8 py-4 rounded-full text-center hover:bg-[#E6AC00] transition">Book Now</Link>
            <a href="tel:7319068773" className="flex-1 lg:flex-none border border-white/20 text-white font-bold px-8 py-4 rounded-full text-center hover:bg-white hover:text-black transition">Call 7319068773</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 pb-[88px] sm:pb-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5B800] flex items-center justify-center font-black text-black text-xs">WGA</div>
              <div>
                <div className="font-display font-bold text-white leading-none">WILD GREEN <span className="text-[#F5B800]">ADVENTURE</span></div>
                <div className="text-[9px] tracking-[0.2em] text-emerald-400 font-bold mt-1">TRAVEL &amp; HOTEL BOOKING</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              Complete Travel and Hotel Booking services across North Bengal, Darjeeling, Kalimpong &amp; Dooars. Premium cabs, sightseeing packages, jungle safaris &amp; resort stays.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="tel:7319068773" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#F5B800] hover:text-black transition text-sm">☎</a>
              <a href="https://wa.me/917319068773?text=Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20enquire%20about%20Travel%20%26%20Hotel%20Booking" target="_blank" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition text-sm">✆</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Service Regions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-zinc-300 font-semibold">• North Bengal</span></li>
              <li><span className="text-zinc-300 font-semibold">• Darjeeling Hills</span></li>
              <li><span className="text-zinc-300 font-semibold">• Kalimpong</span></li>
              <li><span className="text-zinc-300 font-semibold">• Dooars Forests &amp; Safari</span></li>
              <li><span className="text-zinc-300 font-semibold">• Bagdogra Airport &amp; NJP</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/book" className="hover:text-[#F5B800] transition">Travel &amp; Cab Booking</Link></li>
              <li><Link href="/book" className="hover:text-[#F5B800] transition">Hotel &amp; Resort Booking</Link></li>
              <li><Link href="/services" className="hover:text-[#F5B800] transition">Darjeeling Tour Packages</Link></li>
              <li><Link href="/services" className="hover:text-[#F5B800] transition">Dooars Jungle Safari</Link></li>
              <li><Link href="/airport-transfer" className="hover:text-[#F5B800] transition">Bagdogra &amp; NJP Transfer</Link></li>
              <li><Link href="/fleet" className="hover:text-[#F5B800] transition">Our Premium Fleet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:7319068773" className="block text-white font-bold text-xl hover:text-[#F5B800] transition">7319068773</a>
              <p className="text-zinc-400 leading-relaxed text-[13px]">
                Wild Green Adventure<br />
                North Bengal • Darjeeling • Kalimpong • Dooars<br />
                West Bengal, India
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-semibold">24/7 Booking Support Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Wild Green Adventure. All Rights Reserved. North Bengal, Darjeeling, Kalimpong &amp; Dooars.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
