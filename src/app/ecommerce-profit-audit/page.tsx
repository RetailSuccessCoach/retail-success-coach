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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Profit Pulse Check: Your Fast Track to Profit Clarity
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Need a quick gut check on how profitable your brand really is? The <strong>Profit Pulse Check</strong> delivers a fast, no-fluff snapshot of your financial health - so you can make smarter decisions, faster.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">What’s Included:</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Instant Margin Snapshot:</span>{" "}
              We’ll calculate your <span className="text-white">Gross Profit Margin</span> and <span className="text-white">Net Profit Margin</span> so you know exactly where you stand.
            </li>
            <li>
              <span className="font-semibold text-white">Quick Spend Efficiency Check:</span>{" "}
              Get a high-level look at <span className="text-white">Revenue vs. Key Costs</span> and spot inefficiencies fast.
            </li>
            <li>
              <span className="font-semibold text-white">Top 1–2 Profit Moves:</span>{" "}
              Walk away with our top recommendations to boost profitability today.
            </li>
            <li>
              <span className="font-semibold text-white">Clear, One-Page Summary:</span>{" "}
              A concise report that captures your key numbers and quick wins.
            </li>
            <li>
              <span className="font-semibold text-white">15-Min Clarity Call:</span>{" "}
              A short walkthrough of your results - with space for quick-fire questions.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Built for fast-moving eCommerce teams - especially <strong>founder-led brands</strong>, <strong>Heads of Growth</strong>, or <strong>marketers delivering +£10m revenue mark</strong> looking to sharpen spend without a full audit.
          </p>

          <p className="mt-6 text-zinc-300">
            Please note: The £295 pricing applies to brands using <span className="text-white">Shopify</span> and <span className="text-white">Google Analytics 4 (GA4)</span>. More complex setups may require a custom quote.
          </p>

        <div className="mt-8">
          <p className="text-zinc-300 text-sm mb-2">
            Starts from <span className="text-white font-medium">£295</span> for Shopify & GA4 brands
          </p>
          <a
            href="/profit-pulse-check-call"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
          >
            Book Your Profit Pulse Check
          </a>
        </div>

        </section>
      </MainLayout>
    </>
  );
}