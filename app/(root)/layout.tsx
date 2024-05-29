import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riviera Maya Tour",
  description: "Tours en la Riviera Maya, México",
  keywords: "Riviera Maya, México, Tours, Excursiones, Vacaciones, Turismo Ecológico",
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
          <Navbar />
          {children}</ClerkProvider>
      </body>
    </html>
  );
}
