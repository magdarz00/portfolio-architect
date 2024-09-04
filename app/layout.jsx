"use client";

import { Lato, Oswald } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato',
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-oswald',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl-PL">
      <body className={`${lato.variable} ${oswald.variable} bg-primary`}>
        <PageTransition>
          <Header />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
