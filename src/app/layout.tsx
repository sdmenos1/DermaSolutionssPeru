import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dermosolution - Soluciones en dermatología y estética",
  description:
    "Dermosolution ofrece tratamientos dermatológicos avanzados y servicios de estética profesional en Jesús María, Lima.",
  keywords:
    "dermatología, estética, tratamientos dermatológicos, consultoría médica, Lima, Jesús María",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
