"use client";
import { useState } from "react";

type Props = {
  variant?: "hero" | "card" | "full";
  title?: string;
};

const VEHICLES = {
  Innova: {
    name: "Toyota Innova (Hill & Safari SUV)",
    category: "SUV • 6-7 Seater",
    sub: "6-7 Passengers • 4-5 Bags • AC • High Ground Clearance",
    ideal: "Darjeeling steep hills, Kalimpong scenic circuits & Dooars jungle safaris",
  },
  Traveller: {
    name: "Luxury Tempo Traveller (Group Tour)",
    category: "Minibus • 12-16 Seater",
    sub: "12-16 Passengers • Reclining Pushback Seats • Extra Luggage Bay",
    ideal: "Extended family tours, corporate offsites, college groups & Dooars tour",
  },
  Ertiga: {
    name: "Maruti Ertiga (Family MPV)",
    category: "MPV • 6 Seater",
    sub: "6 Passengers • 3-4 Bags • Dual AC • Comfortable Suspension",
    ideal: "Family sightseeing, NJP & Bagdogra airport transfers",
  },
  Sedan: {
    name: "Swift Dzire (Executive AC Sedan)",
    category: "Sedan • 4 Seater",
    sub: "4 Passengers • 2 Bags • Chilled AC • Smooth Ride",
    ideal: "Couples, small families, Siliguri city & airport transfers",
  },
} as const;

const HOTEL_AREAS = [
  "Sittong",
  "Ronghu",
  "Daragaw",
  "Echagaw",
  "Ramdhura",
  "Kolakham",
  "Reshop",
  "Panbu",
  "Kafer Gaw",
  "Mim",
  "Lava",
];

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
    hotelType: "Scenic Mountain View Resort / Hotel",
    otherHotelArea: "",
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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.pickup) e.pickup = "Required";
    if (!form.drop) e.drop = "Required";
    if (serviceCategory !== "travel" && form.drop === "Other offbeat location" && !form.otherHotelArea.trim()) {
      e.otherHotelArea = "Please enter your preferred offbeat location";
    }
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

      const destination = form.drop === "Other offbeat location" ? `${form.otherHotelArea} (Offbeat location)` : form.drop;
      const msg = `Hello Wild Green Adventure!%0A%0A*New Booking Enquiry*%0A------------------------%0A• Service: ${catLabel}%0A• From: ${form.pickup}%0A• Destination: ${destination}%0A• Start Date: ${form.date}${form.returnDate ? `%0A• Return Date: ${form.returnDate}` : ""}%0A• Tour / Ride: ${form.rideType}%0A${serviceCategory !== "hotel" ? `• Selected Vehicle: ${selected.name}` : ""}%0A${serviceCategory !== "travel" ? `• Stay Preference: ${form.hotelType}%0A• Rooms: ${form.rooms}` : ""}%0A• Total Travellers: ${form.passengers}%0A• Contact Name: ${form.name || "Guest"}%0A• Phone: ${form.phone || "Provided on call"}%0A${form.notes ? `• Note: ${form.notes}` : ""}`;
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
          Thank you for contacting <strong>Wild Green Adventure</strong>.<br />
          Our North Bengal travel desk will check availability and get back to you immediately with the best quote.<br />
          For instant booking or urgent help, call us directly at <a href="tel:7319068773" className="font-bold text-black underline">7319068773</a>.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:7319068773" className="bg-black text-white px-6 py-3.5 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center">Call 7319068773</a>
          <a
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={`https://wa.me/917319068773?text=${(typeof window !== "undefined" && (window as any)._lastBookingMsg) || "Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20book%20travel%20and%20hotel"}`}
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
            {serviceCategory === "travel" ? (
              <input
                value={form.drop}
                onChange={(e) => setForm({ ...form, drop: e.target.value })}
                placeholder="e.g. Darjeeling / Kalimpong / Lataguri Dooars"
                className={`${inputBase} pl-9 ${errors.drop ? "border-red-400 bg-red-50" : ""}`}
              />
            ) : (
              <select
                value={form.drop}
                onChange={(e) => setForm({ ...form, drop: e.target.value, otherHotelArea: "" })}
                className={`${inputBase} pl-9 ${errors.drop ? "border-red-400 bg-red-50" : ""}`}
              >
                <option value="">Select preferred hotel area</option>
                {HOTEL_AREAS.map((area) => <option key={area} value={area}>{area}</option>)}
                <option value="Other offbeat location">Other offbeat location</option>
              </select>
            )}
          </div>
          {serviceCategory !== "travel" && form.drop === "Other offbeat location" && (
            <input
              value={form.otherHotelArea}
              onChange={(e) => setForm({ ...form, otherHotelArea: e.target.value })}
              placeholder="Enter your preferred offbeat location"
              className={`${inputBase} mt-2 ${errors.otherHotelArea ? "border-red-400 bg-red-50" : ""}`}
            />
          )}
          {errors.otherHotelArea && <span className="text-xs text-red-500 mt-1 block">{errors.otherHotelArea}</span>}
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
              CHOOSE VEHICLE
            </label>
            <select
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value as keyof typeof VEHICLES })}
              className={`${inputBase} font-bold bg-white`}
            >
              <option value="Innova">Toyota Innova (Mountain &amp; Safari SUV)</option>
              <option value="Traveller">Luxury Tempo Traveller (12-16 Seater)</option>
              <option value="Ertiga">Maruti Ertiga (Comfort Family MPV)</option>
              <option value="Sedan">Swift Dzire (Executive AC Sedan)</option>
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

      {/* Vehicle Info or Hotel package info (No Car Rates) */}
      {serviceCategory !== "hotel" ? (
        <div className="mt-3.5 w-full bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3 sm:p-3.5 flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-emerald-900 uppercase">
              {selected.name}
            </span>
            <span className="text-xs bg-white border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold text-emerald-800 shrink-0">
              {selected.category}
            </span>
          </div>
          <p className="text-[11px] text-zinc-600">{selected.sub}</p>
          <p className="text-[10px] text-emerald-800 font-medium">✓ Ideal for: {selected.ideal}</p>
          <div className="bg-white rounded-xl py-2 px-3 border border-emerald-100 flex items-center justify-between mt-0.5">
            <span className="text-xs font-semibold text-zinc-700">Best Mountain &amp; Safari Rates:</span>
            <span className="text-xs font-bold text-emerald-900">Get Instant Quote on Enquiry</span>
          </div>
        </div>
      ) : (
        <div className="mt-3.5 w-full bg-amber-50 border border-amber-200 rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-amber-900">HOTELS IN OFFBEAT LOCATIONS</div>
            <div className="text-[11px] text-amber-700 mt-0.5">Sittong, Ronghu, Daragaw, Echagaw, Ramdhura, Kolakham, Reshop, Panbu, Kafer Gaw, Mim &amp; Lava</div>
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
          <>ENQUIRE NOW &amp; GET BEST QUOTE →</>
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
          href="https://wa.me/917319068773?text=Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20enquire%20about%20Travel%20and%20Hotel%20Booking"
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
