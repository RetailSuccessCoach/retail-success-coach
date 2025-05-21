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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Bespoke Investor Plan: Capital-Ready Strategy for High-Growth Brands
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Raising capital or scaling fast? Your growth plan needs to impress investors and perform commercially. Our <strong>Bespoke Investor Plan</strong> is a high-touch strategy engagement, built to show your business is ready for investment and structured for scale.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">What’s Included:</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Investor-Ready Due Diligence:</span>{" "}
              Detailed market, competitive, and business model analysis to support a compelling investment case.
            </li>
            <li>
              <span className="font-semibold text-white">Tailored Full-Funnel Strategy:</span>{" "}
              Customised growth roadmap covering acquisition, conversion, and retention - optimised for Shopify and beyond.
            </li>
            <li>
              <span className="font-semibold text-white">CAC Modelling & ROI Forecasting:</span>{" "}
              Precision modelling across all paid channels using <span className="text-white">GA4</span> and advanced attribution frameworks.
            </li>
            <li>
              <span className="font-semibold text-white">Financial Forecasts & Profit Modelling:</span>{" "}
              Revenue, CAC, LTV, EBITDA and payback period forecasting tailored for investor scrutiny.
            </li>
            <li>
              <span className="font-semibold text-white">Pitch Deck Advisory:</span>{" "}
              Support with structure, narrative, and performance proof for your investor materials.
            </li>
            <li>
              <span className="font-semibold text-white">Capital Allocation Guidance:</span>{" "}
              Plan for how investment will drive ROI across people, product and performance channels.
            </li>
            <li>
              <span className="font-semibold text-white">Investor Comms Support:</span>{" "}
              Ongoing advisory for investor updates, reporting, and pre-close conversations.
            </li>
            <li>
              <span className="font-semibold text-white">Tailored to Your Tech Stack & Objectives:</span>{" "}
              Whether you’re on Shopify, headless, or blended DTC + B2B - we match the complexity and pace of your brand.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Best suited for <strong>eCommerce brands preparing for capital raises</strong>, <strong>high-growth teams</strong> seeking clarity and control, and <strong>founders needing investor-ready forecasts and strategy</strong>. This is our most customised offer - designed around your stack, story and scaling plan.
          </p>

          <p className="mt-6 text-zinc-300">
            If you’re launching something big or raising seriously, this is the plan for you.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              Starting from <span className="text-white font-medium">£9,950</span>
            </p>
            <a
              href="/bespoke-investor-plan-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Discuss Your Bespoke Investor Plan
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
