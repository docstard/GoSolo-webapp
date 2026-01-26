import type { Metadata } from "next";
import { Geist, Geist_Mono, Gravitas_One } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollSmoothProvider from "@/components/ScrollSmoothProvider";
import { clashDisplay } from "./font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gravitasOne = Gravitas_One({
  weight: '400', // Gravitas One only has one weight: 400
  subsets: ['latin'],
  display: 'swap', // 'swap' is often recommended for better user experience
});

export const metadata: Metadata = {
  title: "GoSolo - Premium Gummy Supplements",
  description: "Shop premium gummy supplements for energy, sleep, immunity, and focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Material Icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />
          
        </head>
        <body
          className={`${geistSans.className} antialiased`}
        >
          {/* Razorpay Script */}
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="lazyOnload"
          />
          <Navbar />
          <ScrollSmoothProvider>
            {children}
          </ScrollSmoothProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
