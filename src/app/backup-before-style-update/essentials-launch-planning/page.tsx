import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function InvestorGradeLaunchPlanningPage() {
  return (
    <>
      <Head>
        <title>Essentials Profit Launch Plan for eCommerce | New Brands & Capital</title>
        <meta
          name="description"
          content="Investor-Grade Launch Planning for new eCommerce brands and capital raises. Commercial clarity and CAC control for successful market entry on Shopify & GA4."
        />
        <meta
          name="keywords"
          content="investor grade launch plan, ecommerce new brand launch, capital raise plan, CAC control ecommerce, commercial clarity investors, Shopify launch strategy, GA4 launch metrics"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Investor-Grade Launch Planning Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Investor-Grade Launch Planning: Set Your Brand Up for Growth & Capital
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              Launching a new eCommerce brand or preparing for a capital raise? Our <strong>Investor-Grade Launch Plan</strong> gives you the commercial clarity, CAC control, and investor polish needed for a high-impact, high-confidence debut.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* What You’ll Get */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Target Audience Clarity</p>
                <p className="text-zinc-300">Define and validate your ideal customer profile.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Market Opportunity Snapshot</p>
                <p className="text-zinc-300">A concise view of market size, trends, and competitive context.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Product Positioning & Messaging</p>
                <p className="text-zinc-300">Articulate your core offer and value proposition clearly.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Go-to-Market Plan</p>
                <p className="text-zinc-300">Outline your launch channels and tactics (Shopify-ready).</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">CAC Target & Tracking Framework</p>
                <p className="text-zinc-300">Establish realistic CAC goals with simple GA4 tracking.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">KPI Alignment</p>
                <p className="text-zinc-300">Identify the key metrics that matter most for your launch.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Investor-Grade Commercial Narrative</p>
                <p className="text-zinc-300">Build a structured, compelling story for pitches or decks.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Actionable Launch Checklist</p>
                <p className="text-zinc-300">A step-by-step guide to keep your launch smooth and focused.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
            <p>
              This plan is ideal for new <strong>founder-led eCommerce brands</strong>, teams launching <strong>new product ranges</strong>, and brands preparing for <strong>investment or external capital</strong>. Optimised for those using <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>.
            </p>

            <p>
              Complex or multi-channel launch? We’ll tailor your plan accordingly and provide a custom quote.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              One-off investment: <span className="text-white font-medium">£3,750</span>
            </p>
            <a
              href="/investor-grade-launch-call"
              role="button"
              aria-label="Discuss your Investor-Grade Launch Plan"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Discuss Your Investor-Grade Launch Plan →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}

