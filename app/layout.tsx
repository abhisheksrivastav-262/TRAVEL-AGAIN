import type { Metadata } from "next";
import { Playfair_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travel Again (Wild Green Adventure) | Travel & Hotel Booking in North Bengal, Darjeeling, Kalimpong & Dooars",
    template: "%s | Travel Again (Wild Green Adventure)",
  },
  description:
    "Complete Travel & Hotel Booking in North Bengal, Darjeeling, Kalimpong & Dooars. Premium cabs, sightseeing tours, resort stays & airport transfers. Call 7319068773.",
  keywords: [
    "Travel Again",
    "Wild Green Adventure",
    "Darjeeling Taxi Service",
    "Kalimpong Cab Booking",
    "Dooars Jungle Safari Car",
    "North Bengal Tour and Travels",
    "Darjeeling Hotel Booking",
    "Dooars Resort Booking",
    "Bagdogra Airport Taxi",
    "NJP to Darjeeling Taxi",
    "Siliguri Car Rental",
  ],
  openGraph: {
    title: "Travel Again (Wild Green Adventure) - Travel & Hotel Booking",
    description: "Your trusted travel & hotel booking partner in North Bengal, Darjeeling, Kalimpong & Dooars.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Travel Again (Wild Green Adventure)",
              telephone: "+917319068773",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Siliguri & North Bengal",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              areaServed: ["North Bengal", "Darjeeling", "Kalimpong", "Dooars", "Siliguri", "Bagdogra"],
              serviceType: ["Cab Booking", "Hotel Booking", "Tour Packages", "Jungle Safari"],
              priceRange: "₹₹",
            }),
          }}
        />
      </body>
    </html>
  );
}
