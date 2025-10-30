import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dev Labs - Innovative Technology Solutions & Development Agency",
  description: "Professional technology agency specializing in blockchain, web3, trading platforms, mobile apps, and custom software development. Building innovative solutions for SpeedWallet, Dextools, Boost Labs, and leading technology projects.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Dev Labs — Innovative Technology Solutions",
    description:
      "Blockchain, trading platforms, mobile apps, custom software. See our work and get in touch.",
    url: "https://devlabs.example", // update to real domain when available
    siteName: "Dev Labs",
    images: [{ url: "/opengraph-image" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Labs — Innovative Technology Solutions",
    description:
      "Blockchain, trading platforms, mobile apps, custom software.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

