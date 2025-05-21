import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retail Growth & Profit Strategy for Ecommerce Brands | The Retail Success Coach",
  description: "Built for ecommerce founders who want clarity and confidence. From launch forecasts to ROAS, LTV and profit plans. The Retail Success Coach turns guesswork into growth.",
  icons: {
    icon: "\Retail-Success-Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
