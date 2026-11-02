"use client";
import { useState } from "react";

export default function Corporate() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="relative h-[50vh] min-h-[380px] flex items-center bg-zinc-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cars/car-7.jpg" alt="Corporate & Group Travel" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            TRAVEL AGAIN (WILD GREEN ADVENTURE)
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
            CORPORATE OFFSITES &amp; <br /><span className="text-[#F5B800]">GROUP TOURS IN NORTH BENGAL</span>
          </h1>
          <p className="text-white/80 mt-3 max-w-xl text-xs sm:text-sm">
            Complete transportation and resort booking for corporate offsites, team outings in Dooars, and leadership retreats in Darjeeling. Dedicated fleet coordination &amp; billing.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Dooars Forest Offsites", "Team building & jungle safari resorts in Lataguri & Murti"],
                ["Darjeeling Hill Retreats", "Scenic tea estate conferences & luxury resort bookings"],
                ["Bulk Airport Transfers", "Coordinated Bagdogra (IXB) flight pickups for large teams"],
                ["Fleet of Innovas & Tempo Travellers", "12-16 seater luxury mini-buses and premium SUVs"],
                ["Custom Itineraries", "Day trips, campfires, safari permits & hotel reservations"],
                ["GST Invoicing", "Transparent corporate billing and verified drivers"],
              ].map(([t, d]) => (
                <div key={t} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <div className="font-bold text-sm text-zinc-900">{t}</div>
                  <div className="text-xs text-zinc-500 mt-1">{d}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-black text-white rounded-2xl p-6">
              <h3 className="font-bold text-base text-[#F5B800]">Corporate Benefits</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                <li>✓ Dedicated account manager</li>
                <li>✓ 24/7 on-ground dispatch team</li>
                <li>✓ Combined resort &amp; cab packages</li>
                <li>✓ Top-rated safe vehicles</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[24px] border border-zinc-100 shadow-premium p-6 sm:p-8">
            {!sent ? (
              <>
                <h3 className="font-display text-xl font-bold text-zinc-900">Corporate &amp; Group Enquiry</h3>
                <p className="text-xs text-zinc-500 mt-1">Tell us your team requirement — we&apos;ll respond with a customized proposal.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 grid gap-3"
                >
                  {[
                    ["Company / Group Name", "text"],
                    ["Contact Person", "text"],
                    ["Phone", "tel"],
                    ["Email", "email"],
                    ["Requirement (Cabs / Hotel / Combo)", "text"],
                    ["Destination (Darjeeling / Dooars / Kalimpong)", "text"],
                    ["Estimated Dates", "text"],
                    ["Number of Guests", "number"],
                  ].map(([label, type]) => (
                    <div key={label}>
                      <label className="text-[11px] font-bold tracking-wide text-zinc-500">{label.toUpperCase()}</label>
                      <input
                        type={type}
                        required={["Company / Group Name", "Phone"].includes(label)}
                        placeholder={label}
                        className="mt-1 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] focus:bg-white min-h-[44px]"
                      />
                    </div>
                  ))}
                  <button type="submit" className="mt-2 w-full bg-black hover:bg-zinc-800 text-white py-4 rounded-full font-bold text-sm min-h-[48px]">
                    SEND CORPORATE ENQUIRY →
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">✓</div>
                <h3 className="font-bold text-lg mt-4 text-zinc-900">Enquiry Received!</h3>
                <p className="text-sm text-zinc-500 mt-2">Our corporate desk will contact you shortly with a personalized proposal.</p>
                <a href="tel:7319068773" className="mt-4 inline-flex bg-[#F5B800] text-black px-6 py-3 rounded-full font-bold text-sm">
                  Call 7319068773
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
