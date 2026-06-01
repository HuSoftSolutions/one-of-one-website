import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Anton,
  Dancing_Script,
  Playfair_Display,
  Oswald,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Heavy condensed display face — drives the bold/edgy flyer look (landing-1)
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

// Script accent used for "and Detailing" on the flyers
const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

// Elegant serif for the premium "One of One" direction (landing-3)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Clean condensed sans for headings on the professional direction (landing-2)
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One of One Cleaning Solutions LLC | Broadalbin, NY",
  description:
    "One of One Cleaning Solutions LLC — restaurant cleaning, pressure washing, and car detailing in Broadalbin, New York. Houses · Restaurants · Cars · Trucks · Motorcycles and more. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${dancingScript.variable} ${playfair.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
