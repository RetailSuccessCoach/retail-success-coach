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
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              LTV-Backed Scale Plan: Grow Smarter, Not Just Bigger
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              Ready to scale with purpose – not just more spend? Our <strong>LTV-Backed Scale Plan</strong> helps you unlock growth by understanding, increasing, and capitalising on your most valuable customers.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* What’s Included */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-6">What’s Included:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Customer Value Analysis</p>
                <p className="text-zinc-300">Pinpoint your most profitable segments based on real behaviour, spend, and lifetime value.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Precise LTV Modelling</p>
                <p className="text-zinc-300">Calculate and forecast <span className="text-white">Customer Lifetime Value (LTV)</span> using your <span className="text-white">Shopify</span>, <span className="text-white">GA4</span>, and <span className="text-white">TripleWhale</span> data.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">CAC Optimisation</p>
                <p className="text-zinc-300">Discover where you're overpaying for customers – and how to rebalance <span className="text-white">LTV:CAC</span> across channels.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Journey & AOV Boosting</p>
                <p className="text-zinc-300">Map the key moments to increase <span className="text-white">Average Order Value</span> and deepen loyalty.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Retention & Loyalty Strategy</p>
                <p className="text-zinc-300">Build a programme to keep your best customers buying, engaged and referring.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">12-Month Action Plan</p>
                <p className="text-zinc-300">A focused roadmap of LTV-led growth opportunities across acquisition and retention.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Smarter Budgeting</p>
                <p className="text-zinc-300">Channel-by-channel spend recommendations backed by lifetime value data.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Expert Support</p>
                <p className="text-zinc-300">Includes a strategy session and follow-up to keep your plan on track.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
            <p>
              Best suited for brands using <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>, with optional <span className="text-white">TripleWhale</span> integration. Using something else?{" "}
              <a href="/contact" className="text-white hover:underline">Contact us</a> for a tailored version.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              One-off investment: <span className="text-white font-medium">£2,950</span>
            </p>
            <a
              href="/ltv-backed-scale-call"
              role="button"
              aria-label="Book your LTV-Backed Scale Session"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Book Your LTV-Backed Scale Session →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}
