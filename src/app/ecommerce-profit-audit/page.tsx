import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function ProfitPulseCheckPage() {
  return (
    <>
      <Head>
        <title>Profit Pulse Check for eCommerce | Quick Profit Snapshot</title>
        <meta
          name="description"
          content="Get a fast, focused Profit Pulse Check for your eCommerce brand. Instantly assess gross and net margins, spend efficiency, and top opportunities. Perfect for Shopify & GA4 brands."
        />
        <meta
          name="keywords"
          content="profit pulse check, ecommerce quick audit, profit snapshot, gross profit margin, net profit margin, Shopify profitability, GA4 insights"
        />
      </Head>
      <MainLayout>
        <section
  aria-label="Profit Pulse Check Information"
  className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
>
  {/* Header */}
  <div className="space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
      Profit Pulse Check: Your Fast Track to Profit Clarity
    </h1>
    <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
      Need a quick gut check on how profitable your brand really is? The <strong>Profit Pulse Check</strong> delivers a fast, no-fluff snapshot of your financial health – so you can make smarter decisions, faster.
    </p>
  </div>

  {/* Divider */}
  <div className="border-t border-zinc-700" />

  {/* What’s Included */}
  <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
  <h2 className="text-xl font-semibold text-white mb-6">What’s Included:</h2>

  <div className="space-y-5 text-sm sm:text-base leading-relaxed">
    <div className="border-l-4 border-white pl-4">
      <p className="text-white font-semibold mb-1">Instant Margin Snapshot</p>
      <p className="text-zinc-300">
        We’ll calculate your <span className="text-white">Gross Profit Margin</span> and <span className="text-white">Net Profit Margin</span> so you know exactly where you stand.
      </p>
    </div>

    <div className="border-l-4 border-white pl-4">
      <p className="text-white font-semibold mb-1">Quick Spend Efficiency Check</p>
      <p className="text-zinc-300">
        Get a high-level look at <span className="text-white">Revenue vs. Key Costs</span> and spot inefficiencies fast.
      </p>
    </div>

    <div className="border-l-4 border-white pl-4">
      <p className="text-white font-semibold mb-1">Top 1–2 Profit Moves</p>
      <p className="text-zinc-300">
        Walk away with our top recommendations to boost profitability today.
      </p>
    </div>

    <div className="border-l-4 border-white pl-4">
      <p className="text-white font-semibold mb-1">Clear, One-Page Summary</p>
      <p className="text-zinc-300">
        A concise report that captures your key numbers and quick wins.
      </p>
    </div>

    <div className="border-l-4 border-white pl-4">
      <p className="text-white font-semibold mb-1">15-Min Clarity Call</p>
      <p className="text-zinc-300">
        A short walkthrough of your results – with space for quick-fire questions.
      </p>
    </div>
  </div>
</div>

  {/* Divider */}
  <div className="border-t border-zinc-700" />

  {/* Audience */}
  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
    <p>
      Built for fast-moving eCommerce teams – especially <strong>founder-led brands</strong>, <strong>Heads of Growth</strong>, or <strong>marketers delivering +£10m revenue</strong> looking to sharpen spend without a full audit.
    </p>

    <p>
      <strong>Note:</strong> The £295 pricing applies to brands using <span className="text-white">Shopify</span> and <span className="text-white">Google Analytics 4 (GA4)</span>. More complex setups may require a custom quote.
    </p>
  </div>

  {/* CTA */}
  <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
    <p className="text-sm text-zinc-400 mb-3">
      Starts from <span className="text-white font-medium">£295</span> for Shopify & GA4 brands
    </p>
    <a
      href="/profit-performance-call"
      role="button"
      aria-label="Book your Profit Pulse Check"
      className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
    >
      Book Your Profit Pulse Check →
    </a>

  </div>
</section>


      </MainLayout>
    </>
  );
}