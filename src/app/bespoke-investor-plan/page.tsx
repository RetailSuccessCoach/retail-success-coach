import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function BespokeInvestorPlanPage() {
  return (
    <>
      <Head>
        <title>Bespoke Investor Plan for eCommerce | Capital Raises & High-Growth</title>
        <meta
          name="description"
          content="Secure investment and drive high-growth with our Bespoke Investor Plan for eCommerce. Tailored commercial strategy, meticulous CAC control, and investor-grade financial modeling for capital raises on Shopify & GA4."
        />
        <meta
          name="keywords"
          content="bespoke investor plan, ecommerce capital raise strategy, investor pitch deck ecommerce, CAC control for investment, commercial due diligence ecommerce, Shopify investor plan, GA4 for investors, high-growth ecommerce plan"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Bespoke Investor Plan Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug text-black">
              Bespoke Investor Plan: Capital-Ready Strategy for High-Growth Brands
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Raising capital or scaling fast? Your growth plan needs to impress investors and perform commercially. Our <strong>Bespoke Investor Plan</strong> is a high-touch strategy engagement, built to show your business is ready for investment and structured for scale.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What You’ll Get */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Investor-Ready Due Diligence</p>
                <p className="text-zinc-700">Detailed market, competitive, and business model analysis to support a compelling investment case.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Tailored Full-Funnel Strategy</p>
                <p className="text-zinc-700">Customised growth roadmap covering acquisition, conversion, and retention – optimised for Shopify and beyond.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">CAC Modelling & ROI Forecasting</p>
                <p className="text-zinc-700">Precision modelling across all paid channels using <span className="text-black">GA4</span> and advanced attribution frameworks.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Financial Forecasts & Profit Modelling</p>
                <p className="text-zinc-700">Revenue, CAC, LTV, EBITDA and payback period forecasting tailored for investor scrutiny.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Pitch Deck Advisory</p>
                <p className="text-zinc-700">Support with structure, narrative, and performance proof for your investor materials.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Capital Allocation Guidance</p>
                <p className="text-zinc-700">Plan for how investment will drive ROI across people, product, and performance channels.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Investor Comms Support</p>
                <p className="text-zinc-700">Ongoing advisory for investor updates, reporting, and pre-close conversations.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Tailored to Your Tech Stack & Objectives</p>
                <p className="text-zinc-700">Whether you’re on Shopify, headless, or blended DTC + B2B – we match the complexity and pace of your brand.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Best suited for <strong>eCommerce brands preparing for capital raises</strong>, <strong>high-growth teams</strong> seeking clarity and control, and <strong>founders needing investor-ready forecasts and strategy</strong>. This is our most customised offer – designed around your stack, story and scaling plan.
            </p>

            <p>
              If you’re launching something big or raising seriously, this is the plan for you.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/bespoke-investor-plan-call"
              role="button"
              aria-label="Discuss your Bespoke Investor Plan"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Discuss Your Bespoke Investor Plan →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}
