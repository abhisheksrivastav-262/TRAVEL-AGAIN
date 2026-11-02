"use client";
import { useState } from "react";

type Props = {
  variant?: "hero" | "card" | "full";
  title?: string;
};

const VEHICLES = {
  Sedan: {
    perKm: 12,
    base: 300,
    driver: 500,
    label: "Swift Dzire (Sedan) — from ₹12/km",
    name: "Swift Dzire (Sedan)",
    sub: "Comfortable AC Sedan • 4 Passengers • City & Sightseeing",
  },
  Ertiga: {
    perKm: 16,
    base: 350,
    driver: 500,
    label: "Maruti Ertiga (MPV) — from ₹16/km",
    name: "Maruti Ertiga (Family MPV)",
    sub: "Spacious 6-7 Seater • Families & Extra Luggage",
  },
  Innova: {
    perKm: 20,
    base: 450,
    driver: 600,
    label: "Innova Crysta / Scorpio (SUV) — from ₹20/km",
    name: "Innova Crysta / Scorpio (Hill & Safari SUV)",
    sub: "Premium Mountain Power • 6-7 Pax • Hill & Forest King",
  },
  Traveller: {
    perKm: 30,
    base: 800,
    driver: 800,
    label: "Luxury Tempo Traveller — from ₹30/km",
    name: "Luxury Tempo Traveller (Group Tour)",
    sub: "12-17 Passengers • Group Tours & Dooars Expeditions",
  },
} as const;

export default function BookingForm({ variant = "hero", title }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceCategory, setServiceCategory] = useState<"travel" | "hotel" | "package">("travel");
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    returnDate: "",
    time: "",
    rideType: "Darjeeling Hill Tour",
    hotelType: "Scenic Hill Resort / Hotel",
    passengers: "2",
    rooms: "1 Room",
    vehicle: "Innova" as keyof typeof VEHICLES,
    km: "",
    name: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selected = VEHICLES[form.vehicle] || VEHICLES.Innova;
  const kmNum = parseInt(form.km) || 0;
  const estimated = kmNum > 0 ? selected.perKm * kmNum + selected.base : null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.pickup) e.pickup = "Required";
    if (!form.drop) e.drop = "Required";
    if (!form.date) e.date = "Required";
    if (variant === "full") {
      if (!form.name) e.name = "Required";
      if (!form.phone || form.phone.length < 10) e.phone = "Valid phone required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const catLabel =
        serviceCategory === "travel"
          ? "Travel & Cab Booking"
          : serviceCategory === "hotel"
          ? "Hotel & Resort Booking"
          : "Travel + Hotel Combo Package";

      const msg = `Hello Travel Again (Wild Green Adventure)!%0A%0A*New Booking Enquiry*%0A------------------------%0A• Service: ${catLabel}%0A• From: ${form.pickup}%0A• Destination: ${form.drop}%0A• Start Date: ${form.date}${form.returnDate ? `%0A• Return Date: ${form.returnDate}` : ""}%0A• Time: ${form.time || "Flexible"}%0A• Tour / Ride: ${form.rideType}%0A${serviceCategory !== "hotel" ? `• Vehicle: ${selected.name}%0A• Est. Distance: ${form.km ? form.km + " km" : "On Enquiry"}` : ""}%0A${serviceCategory !== "travel" ? `• Stay Preference: ${form.hotelType}%0A• Rooms: ${form.rooms}` : ""}%0A• Guests / Pax: ${form.passengers}%0A• Contact Name: ${form.name || "Traveller"}%0A• Phone: ${form.phone || "Not provided"}%0A${form.notes ? `• Note: ${form.notes}` : ""}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)._lastBookingMsg = msg;
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[24px] p-6 sm:p-10 text-center shadow-premium border border-zinc-100">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
        <h3 className="font-display text-2xl font-bold text-zinc-900">Enquiry Received Successfully!</h3>
        <p className="text-zinc-600 mt-3 text-sm leading-relaxed">
          Thank you for choosing <strong>Travel Again (Wild Green Adventure)</strong>.<br />
          Our North Bengal travel &amp; hotel desk will contact you immediately.<br />
          For instant booking or urgent help, call us directly at <a href="tel:7319068773" className="font-bold text-black underline">7319068773</a>.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:7319068773" className="bg-black text-white px-6 py-3.5 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center">Call 7319068773</a>
          <a
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={`https://wa.me/917319068773?text=${(typeof window !== "undefined" && (window as any)._lastBookingMsg) || "Hi%20Travel%20Again%2C%20I%20want%20to%20book%20travel%20and%20hotel"}`}
            target="_blank"
            className="bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center gap-1.5"
          >
            <span>✆</span> Confirm on WhatsApp
          </a>
        </div>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-zinc-500 underline min-h-[44px]">Make another enquiry</button>
      </div>
    );
  }

  const inputBase =
    "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-[16px] sm:text-sm focus:outline-none focus:border-[#F5B800] focus:bg-white transition placeholder:text-zinc-400 min-h-[46px]";

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white rounded-[20px] sm:rounded-[24px] shadow-premium border border-zinc-100 ${isHero ? "p-4 sm:p-6" : "p-6 sm:p-8"}`}
    >
      {/* Service Type Switcher */}
      <div className="mb-4">
        <label className="text-[11px] font-bold tracking-[0.14em] text-zinc-500 mb-2 block uppercase">Select Service</label>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setServiceCategory("travel")}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition text-center min-h-[40px] flex items-center justify-center ${
              serviceCategory === "travel" ? "bg-black text-white shadow-sm" : "text-zinc-700 hover:text-black"
            }`}
          >
            Cab &amp; Travel
          </button>
          <button
            type="button"
            onClick={() => setServiceCategory("hotel")}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition text-center min-h-[40px] flex items-center justify-center ${
              serviceCategory === "hotel" ? "bg-black text-white shadow-sm" : "text-zinc-700 hover:text-black"
            }`}
          >
            Hotel Booking
          </button>
          <button
            type="button"
            onClick={() => setServiceCategory("package")}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition text-center min-h-[40px] flex items-center justify-center ${
              serviceCategory === "package" ? "bg-[#F5B800] text-black shadow-sm" : "text-zinc-700 hover:text-black"
            }`}
          >
            Combo Package
          </button>
        </div>
      </div>

      {title && <h3 className="font-display text-xl font-bold mb-4">{title}</h3>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {/* Pickup / Origin */}
        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">
            {serviceCategory === "hotel" ? "CHECK-IN CITY / REGION" : "PICKUP LOCATION"}
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">◎</span>
            <input
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              placeholder={serviceCategory === "hotel" ? "e.g. Darjeeling / Dooars / Kalimpong" : "e.g. Siliguri / Bagdogra Airport / NJP"}
              className={`${inputBase} pl-9 ${errors.pickup ? "border-red-400 bg-red-50" : ""}`}
            />
          </div>
          {errors.pickup && <span className="text-xs text-red-500 mt-1 block">{errors.pickup}</span>}
        </div>

        {/* Drop / Destination */}
        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">
            {serviceCategory === "hotel" ? "PREFERRED RESORT / HOTEL AREA" : "DROP / TOUR DESTINATION"}
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">◉</span>
            <input
              value={form.drop}
              onChange={(e) => setForm({ ...form, drop: e.target.value })}
              placeholder="e.g. Darjeeling / Kalimpong / Lataguri Dooars"
              className={`${inputBase} pl-9 ${errors.drop ? "border-red-400 bg-red-50" : ""}`}
            />
          </div>
          {errors.drop && <span className="text-xs text-red-500 mt-1 block">{errors.drop}</span>}
        </div>

        {/* Dates */}
        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">
            {serviceCategory === "hotel" ? "CHECK-IN DATE" : "TRAVEL DATE"}
          </label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={`${inputBase} ${errors.date ? "border-red-400" : ""}`}
          />
          {errors.date && <span className="text-xs text-red-500 mt-1 block">{errors.date}</span>}
        </div>

        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">
            {serviceCategory === "hotel" ? "CHECK-OUT DATE" : "RETURN DATE (OPTIONAL)"}
          </label>
          <input
            type="date"
            value={form.returnDate}
            onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
            className={inputBase}
          />
        </div>

        {/* Tour / Ride Type */}
        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">TOUR / SERVICE TYPE</label>
          <select
            value={form.rideType}
            onChange={(e) => setForm({ ...form, rideType: e.target.value })}
            className={inputBase}
          >
            <option>Darjeeling Sightseeing (Tiger Hill &amp; Loop)</option>
            <option>Kalimpong Scenic Tour (Deolo &amp; Lava)</option>
            <option>Dooars Jungle Safari (Gorumara / Jaldapara)</option>
            <option>Bagdogra Airport (IXB) Transfer</option>
            <option>NJP Railway Station Transfer</option>
            <option>North Bengal Outstation / Round Trip</option>
            <option>Hotel + Cab Complete Holiday Package</option>
          </select>
        </div>

        {/* Vehicle Selection (Shown for Travel & Combo Package) */}
        {serviceCategory !== "hotel" && (
          <div>
            <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-700 mb-1 block">
              PREMIUM VEHICLE <span className="normal-case tracking-normal font-bold text-amber-700">(No Vehicle No. Listed)</span>
            </label>
            <select
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value as keyof typeof VEHICLES })}
              className={`${inputBase} font-bold bg-white`}
            >
              <option value="Innova">Innova Crysta / Scorpio (Hill &amp; Safari SUV)</option>
              <option value="Ertiga">Maruti Ertiga (Comfort Family MPV • 6-7 Pax)</option>
              <option value="Sedan">Swift Dzire (Comfort AC Sedan • 4 Pax)</option>
              <option value="Traveller">Luxury Tempo Traveller (Group 12-16 Pax)</option>
            </select>
          </div>
        )}

        {/* Hotel Preference (Shown for Hotel & Combo Package) */}
        {serviceCategory !== "travel" && (
          <div>
            <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-700 mb-1 block">
              HOTEL &amp; RESORT PREFERENCE
            </label>
            <select
              value={form.hotelType}
              onChange={(e) => setForm({ ...form, hotelType: e.target.value })}
              className={`${inputBase} font-bold bg-white`}
            >
              <option>Scenic Mountain View Resort / Hotel (Darjeeling)</option>
              <option>Heritage Colonial Stay / Homestay (Kalimpong)</option>
              <option>Forest Eco-Cottage / Jungle Resort (Dooars Lataguri)</option>
              <option>Tea Garden Estate Bungalow</option>
              <option>Budget-Friendly Verified Hotel</option>
            </select>
          </div>
        )}

        {/* Est. Distance (Only for Travel) */}
        {serviceCategory === "travel" && (
          <div>
            <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">
              EST. DISTANCE <span className="font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="numeric"
                value={form.km}
                onChange={(e) => setForm({ ...form, km: e.target.value })}
                placeholder="e.g. 80"
                min={0}
                className={`${inputBase} pr-12`}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">KM</span>
            </div>
          </div>
        )}

        {/* Pax / Guests */}
        <div>
          <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">TOTAL TRAVELLERS</label>
          <select value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })} className={inputBase}>
            <option value="1">1 Person</option>
            <option value="2">2 Persons (Couple)</option>
            <option value="4">3-4 Persons (Small Family)</option>
            <option value="6">5-7 Persons (Full Family / SUV)</option>
            <option value="10">8-16 Persons (Group Tour / Traveller)</option>
          </select>
        </div>

        {/* Full contact fields */}
        {(variant === "full" || variant === "card") && (
          <>
            <div>
              <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">YOUR NAME</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className={`${inputBase} ${errors.name ? "border-red-400" : ""}`}
              />
              {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
            </div>
            <div>
              <label className="text-[11px] font-bold tracking-[0.12em] text-zinc-500 mb-1 block">PHONE NUMBER</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="73190 68773"
                className={`${inputBase} ${errors.phone ? "border-red-400" : ""}`}
              />
              {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
            </div>
          </>
        )}
      </div>

      {/* Per-km vehicle info or Hotel package info */}
      {serviceCategory !== "hotel" ? (
        <div className="mt-3.5 w-full bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 sm:p-3.5 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-emerald-900 uppercase">
              {selected.name}
            </span>
            <span className="text-xs bg-white border border-emerald-300 px-2.5 py-0.5 rounded-full font-black text-emerald-800 shrink-0">
              from ₹{selected.perKm}/km
            </span>
          </div>
          <p className="text-[11px] text-zinc-600">{selected.sub}</p>
          {estimated !== null && (
            <div className="bg-black text-white rounded-xl px-3 py-2.5 flex items-center justify-between">
              <span className="text-xs font-bold">Est. fare for {kmNum} km:</span>
              <span className="font-black text-sm sm:text-base text-[#F5B800]">₹{estimated.toLocaleString("en-IN")}*</span>
            </div>
          )}
          <p className="text-[10px] text-zinc-500 text-center">Transparent pricing • Hill permits, toll &amp; parking as applicable • Verified sanitized cars</p>
        </div>
      ) : (
        <div className="mt-3.5 w-full bg-amber-50 border border-amber-200 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-amber-900">VERIFIED HOTEL &amp; RESORT STAYS</div>
            <div className="text-[11px] text-amber-700 mt-0.5">Darjeeling, Kalimpong, Dooars Lataguri &amp; Forest Cottages</div>
          </div>
          <span className="text-xs bg-white border border-amber-300 px-2.5 py-1 rounded-full font-bold text-black">Instant Desk</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full bg-[#F5B800] hover:bg-[#E6AC00] disabled:opacity-70 text-black font-extrabold tracking-wide py-3.5 sm:py-4 rounded-full shadow-gold transition flex items-center justify-center gap-2 text-sm min-h-[48px]"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            CHECKING AVAILABILITY...
          </>
        ) : (
          <>ENQUIRE TRAVEL &amp; HOTEL BOOKING →</>
        )}
      </button>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <a
          href="tel:7319068773"
          className="text-center bg-zinc-900 text-white py-3 rounded-full text-xs font-bold hover:bg-black transition min-h-[44px] flex items-center justify-center"
        >
          CALL 7319068773
        </a>
        <a
          href="https://wa.me/917319068773?text=Hi%20Travel%20Again%20(Wild%20Green%20Adventure)%2C%20I%20want%20to%20enquire%20about%20Travel%20and%20Hotel%20Booking"
          target="_blank"
          className="text-center bg-[#25D366] text-white py-3 rounded-full text-xs font-bold hover:bg-[#20b858] transition min-h-[44px] flex items-center justify-center gap-1"
        >
          <span>✆</span> WhatsApp Us
        </a>
      </div>

      <p className="text-[11px] text-center text-zinc-400 mt-2.5">
        Wild Green Adventure • Serving North Bengal • Darjeeling • Kalimpong • Dooars
      </p>
    </form>
  );
}
