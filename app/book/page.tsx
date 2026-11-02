import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Book Travel & Hotel | Travel Again (Wild Green Adventure)",
  description: "Book cabs, tour packages and hotel/resort stays in North Bengal, Darjeeling, Kalimpong & Dooars. Call 7319068773.",
};

export default function BookPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <section className="bg-black text-white py-14 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#F5B800] font-bold tracking-[0.2em] text-xs mb-3 uppercase">
            TRAVEL AGAIN (WILD GREEN ADVENTURE)
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black leading-tight">
            BOOK TRAVEL &amp; HOTEL <br />
            <span className="text-[#F5B800]">NORTH BENGAL • DARJEELING • DOOARS</span>
          </h1>
          <p className="text-white/70 mt-3 text-xs sm:text-sm max-w-2xl mx-auto">
            Fill the form below or contact us directly on call / WhatsApp for instant confirmation. 24/7 travel desk: <a href="tel:7319068773" className="text-[#F5B800] font-bold underline">7319068773</a>.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-[740px] mx-auto px-4 sm:px-6">
          <BookingForm variant="full" title="Travel & Hotel Booking Request" />

          <div className="mt-6 bg-white rounded-2xl p-6 border border-zinc-100 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Need immediate booking assistance?</p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:7319068773"
                className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center"
              >
                CALL 7319068773
              </a>
              <a
                href="https://wa.me/917319068773?text=Hi%20Travel%20Again%2C%20I%20want%20to%20book%20Travel%20%26%20Hotel%20in%20North%20Bengal"
                target="_blank"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm min-h-[44px] flex items-center justify-center gap-1.5"
              >
                <span>✆</span> WhatsApp Now
              </a>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-zinc-400">
            <p>Fast confirmation • No hidden fees • Verified mountain drivers &amp; verified scenic hotels</p>
          </div>
        </div>
      </section>
    </div>
  );
}
