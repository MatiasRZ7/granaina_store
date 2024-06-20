import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riviera Maya Tour",
  description: "Tours en la Riviera Maya, México",
  keywords:
    "Riviera Maya, México, Tours, Excursiones, Vacaciones, Turismo Ecológico",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPZD4BQ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
