import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function LTVBackedScalePlanPage() {
  return (
    <>
      <Head>
        <title>LTV-Backed Scale Plan for eCommerce | Drive Profitable Growth</title>
        <meta
          name="description"
          content="Unlock sustainable eCommerce growth with our LTV-Backed Scale Plan. Optimise CAC, boost customer lifetime value, and build lasting profitability for your Shopify & GA4 brand."
        />
        <meta
          name="keywords"
          content="LTV backed scale plan, customer lifetime value, LTV, CAC optimisation, ecommerce growth strategy, customer retention, loyalty programme, Shopify LTV, GA4 customer value"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="LTV-Backed Scale Plan Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
              LTV-Backed Scale Plan: Grow Smarter, Not Just Bigger
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Ready to scale with purpose – not just more spend? Our <strong>LTV-Backed Scale Plan</strong> helps you unlock growth by understanding, increasing, and capitalising on your most valuable customers.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What’s Included */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What’s Included:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Customer Value Analysis</p>
                <p className="text-zinc-700">Pinpoint your most profitable segments based on real behaviour, spend, and lifetime value.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Precise LTV Modelling</p>
                <p className="text-zinc-700">Calculate and forecast <span className="text-black">Customer Lifetime Value (LTV)</span> using your <span className="text-black">Shopify</span>, <span className="text-black">GA4</span>, and <span className="text-black">TripleWhale</span> data.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">CAC Optimisation</p>
                <p className="text-zinc-700">Discover where you're overpaying for customers – and how to rebalance <span className="text-black">LTV:CAC</span> across channels.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Journey & AOV Boosting</p>
                <p className="text-zinc-700">Map the key moments to increase <span className="text-black">Average Order Value</span> and deepen loyalty.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Retention & Loyalty Strategy</p>
                <p className="text-zinc-700">Build a programme to keep your best customers buying, engaged and referring.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">12-Month Action Plan</p>
                <p className="text-zinc-700">A focused roadmap of LTV-led growth opportunities across acquisition and retention.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Smarter Budgeting</p>
                <p className="text-zinc-700">Channel-by-channel spend recommendations backed by lifetime value data.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Expert Support</p>
                <p className="text-zinc-700">Includes a strategy session and follow-up to keep your plan on track.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Best suited for brands using <span className="text-black">Shopify</span> and <span className="text-black">GA4</span>, with optional <span className="text-black">TripleWhale</span> integration. Using something else?{" "}
              <a href="/contact" className="text-black hover:underline">Contact us</a> for a tailored version.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/ltv-backed-scale-call"
              role="button"
              aria-label="Book your LTV-Backed Scale Session"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Book Your LTV-Backed Scale Session →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}




