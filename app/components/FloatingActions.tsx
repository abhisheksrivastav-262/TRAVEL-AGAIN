"use client";
export default function FloatingActions() {
  return (
    <>
      {/* Desktop floating */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href="https://wa.me/917319068773?text=Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20enquire%20about%20Travel%20%26%20Hotel%20booking%20in%20North%20Bengal%2C%20Darjeeling%2C%20Kalimpong%20%26%20Dooars"
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-105 transition active:scale-95"
          aria-label="WhatsApp"
        >
          <span className="text-xl">✆</span>
        </a>
        <a
          href="tel:7319068773"
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-xl hover:bg-zinc-800 transition text-sm font-bold"
        >
          <span className="w-8 h-8 rounded-full bg-[#F5B800] text-black flex items-center justify-center text-xs">☎</span>
          Call 7319068773
        </a>
      </div>
      {/* Mobile bottom bar - fixed, safe-area */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-zinc-200 flex p-2 gap-2 z-40 pb-[max(8px,env(safe-area-inset-bottom))] shadow-lg">
        <a href="tel:7319068773" className="flex-1 bg-zinc-900 text-white rounded-full py-3.5 text-center text-[14px] font-bold active:scale-[0.98] transition flex items-center justify-center gap-1.5">
          <span>☎</span> Call 7319068773
        </a>
        <a href="https://wa.me/917319068773?text=Hi%20Wild%20Green%20Adventure%2C%20I%20want%20to%20book%20Travel%20%26%20Hotel%20in%20North%20Bengal" target="_blank" className="flex-1 bg-[#25D366] text-white rounded-full py-3.5 text-center text-[14px] font-bold active:scale-[0.98] transition flex items-center justify-center gap-1.5">
          <span>✆</span> WhatsApp
        </a>
      </div>
    </>
  );
}
