"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-black text-white py-14 sm:py-16 text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            TRAVEL AGAIN (WILD GREEN ADVENTURE)
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black">
            CONTACT OUR <br />
            <span className="text-[#F5B800]">TRAVEL &amp; HOTEL DESK</span>
          </h1>
          <p className="text-white/70 mt-3 text-xs sm:text-sm max-w-xl mx-auto">
            Operating across North Bengal, Darjeeling, Kalimpong &amp; Dooars. Direct line &amp; WhatsApp: 7319068773.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <div className="text-xs font-bold tracking-wide text-zinc-400 uppercase">Call or WhatsApp Us</div>
              <a href="tel:7319068773" className="text-2xl sm:text-3xl font-black mt-1 block text-zinc-900 hover:text-[#F5B800] transition">
                7319068773
              </a>
              <p className="text-xs text-zinc-500 mt-1">Tap to call for instant cab booking, jungle safari &amp; hotel rates</p>
              <div className="mt-4 flex gap-2">
                <a href="tel:7319068773" className="flex-1 bg-black text-white text-center py-3 rounded-full font-bold text-xs sm:text-sm min-h-[44px] flex items-center justify-center">
                  Call Now
                </a>
                <a
                  href="https://wa.me/917319068773?text=Hi%20Travel%20Again%20(Wild%20Green%20Adventure)%2C%20I%20want%20to%20enquire%20about%20Travel%20%26%20Hotel%20Booking"
                  target="_blank"
                  className="flex-1 bg-[#25D366] text-white text-center py-3 rounded-full font-bold text-xs sm:text-sm min-h-[44px] flex items-center justify-center gap-1"
                >
                  <span>✆</span> WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <div className="text-xs font-bold tracking-wide text-zinc-400 uppercase">Service Hubs</div>
              <p className="font-bold text-zinc-900 mt-1">Travel Again (Wild Green Adventure)</p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-1">
                Central Operations: Siliguri, North Bengal<br />
                Tour Areas: Darjeeling Hills • Kalimpong • Dooars (Lataguri, Jaldapara, Gorumara) • Bagdogra (IXB) • NJP<br />
                West Bengal, India
              </p>
            </div>

            <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-base text-[#F5B800]">Need an urgent mountain cab or hotel?</h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                We handle last-minute airport transfers from Bagdogra, early morning Tiger Hill 4 AM departures, and immediate resort bookings.
              </p>
              <a href="tel:7319068773" className="mt-4 inline-flex bg-[#F5B800] text-black px-6 py-2.5 rounded-full font-bold text-xs min-h-[38px] items-center">
                Call 7319068773 →
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[24px] p-6 sm:p-8 border border-zinc-100 shadow-sm">
            {!sent ? (
              <>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900">Send an Enquiry</h3>
                <p className="text-xs text-zinc-500 mt-1">Travel &amp; Hotel booking desk will contact you with custom quote.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 grid gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">YOUR NAME</label>
                      <input required placeholder="Full Name" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] min-h-[46px]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">PHONE NUMBER</label>
                      <input required placeholder="73190 68773" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] min-h-[46px]" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">SERVICE REQUIRED</label>
                      <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]">
                        <option>Travel &amp; Cab Rental</option>
                        <option>Hotel &amp; Resort Booking</option>
                        <option>Combo Package (Cab + Hotel)</option>
                        <option>Dooars Jungle Safari</option>
                        <option>Bagdogra / NJP Transfer</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">START LOCATION</label>
                      <input placeholder="e.g. Bagdogra / NJP" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 block mb-1">DESTINATION</label>
                      <input placeholder="e.g. Darjeeling / Dooars" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-3 text-sm min-h-[46px]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-500 block mb-1">TRIP DETAILS / HOTEL PREFERENCE</label>
                    <textarea placeholder="Tell us your dates, group size, hotel preference, vehicle requirements..." rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800]" />
                  </div>
                  <button type="submit" className="w-full bg-black hover:bg-zinc-800 text-white py-4 rounded-full font-bold text-sm min-h-[48px]">
                    SUBMIT ENQUIRY →
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">✓</div>
                <h3 className="font-bold text-xl mt-4">Thank you!</h3>
                <p className="text-sm text-zinc-500 mt-2">Your enquiry has been received. Our team will contact you promptly.</p>
                <p className="text-sm mt-3">Urgent? Call our desk directly at <a href="tel:7319068773" className="font-bold underline text-black">7319068773</a></p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm p-4 sm:p-6">
            <h3 className="font-bold text-lg text-zinc-900">Service Coverage Map</h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Active services in North Bengal: Darjeeling (Tiger Hill, Mall Road, Kurseong), Kalimpong (Deolo, Lava), Dooars (Lataguri, Jaldapara, Gorumara, Murti), Siliguri, Bagdogra Airport &amp; NJP.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Darjeeling Hills</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Kalimpong &amp; Lava</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Dooars Forest Safari</div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-100 font-semibold">Bagdogra &amp; NJP</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
