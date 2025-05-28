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
  description:
    "Built for ecommerce founders who want clarity and confidence. From launch forecasts to ROAS, LTV and profit plans. The Retail Success Coach turns guesswork into growth.",
  icons: {
    icon: "/Retail-Success-Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J646JT4TXL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J646JT4TXL');
            `,
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}