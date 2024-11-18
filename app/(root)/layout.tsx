import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import { LanguageProvider } from "@/lib/languageContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riviera Maya Tour",
  description: "Tours in Riviera Maya, Mexico",
  keywords:
    "Riviera Maya, Mexico, Tours, Excursions, Vacations, Ecotourism, Playa del Carmen, Tulum, Cancun, Cozumel, Cenotes, Mayan Ruins, Chichen Itza, Coba, Theme Parks, Xcaret, Xel-Ha, Xplor, Snorkeling, Scuba Diving, Nature Tours, Sustainable Tourism, Wildlife Sanctuaries, Family Vacations, Romantic Getaways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logofav.ico" />
        <meta name="description" content="Tours in Riviera Maya, Mexico" />
        <meta
          name="keywords"
          content="Riviera Maya, Mexico, Tours, Excursions, Vacations, Ecotourism, Playa del Carmen, Tulum, Cancun, Cozumel, Cenotes, Mayan Ruins, Chichen Itza, Coba, Theme Parks, Xcaret, Xel-Ha, Xplor, Snorkeling, Scuba Diving, Nature Tours, Sustainable Tourism, Wildlife Sanctuaries, Family Vacations, Romantic Getaways"
        />
        <meta
          name="google-site-verification"
          content="K7WSnm8Cp6EiR-DZn7gQ8DKxGW7cW_SD34x132S1TyI"
        />
        <title>Riviera Maya Tour</title>
      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <LanguageProvider>
            <Navbar />
            <main>
              <h1 className="sr-only">Riviera Maya Tour</h1>
              <h2 className="sr-only">
                Explore the Best Tours in Riviera Maya
              </h2>
              {children}
            </main>
          </LanguageProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
