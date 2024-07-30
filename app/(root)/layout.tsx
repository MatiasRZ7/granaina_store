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

      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <LanguageProvider>
          <Navbar />
          {children}
          </LanguageProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
