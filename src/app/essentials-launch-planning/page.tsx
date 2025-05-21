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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Investor-Grade Launch Planning: Set Your Brand Up for Growth & Capital
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Launching a new eCommerce brand or preparing for a capital raise? Our <strong>Investor-Grade Launch Plan</strong> gives you the commercial clarity, CAC control, and investor polish needed for a high-impact, high-confidence debut.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            What You’ll Get:
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Target Audience Clarity:</span>{" "}
              Define and validate your ideal customer profile.
            </li>
            <li>
              <span className="font-semibold text-white">Market Opportunity Snapshot:</span>{" "}
              A concise view of market size, trends, and competitive context.
            </li>
            <li>
              <span className="font-semibold text-white">Product Positioning & Messaging:</span>{" "}
              Articulate your core offer and value proposition clearly.
            </li>
            <li>
              <span className="font-semibold text-white">Go-to-Market Plan:</span>{" "}
              Outline your launch channels and tactics (Shopify-ready).
            </li>
            <li>
              <span className="font-semibold text-white">CAC Target & Tracking Framework:</span>{" "}
              Establish realistic CAC goals with simple GA4 tracking.
            </li>
            <li>
              <span className="font-semibold text-white">KPI Alignment:</span>{" "}
              Identify the key metrics that matter most for your launch.
            </li>
            <li>
              <span className="font-semibold text-white">Investor-Grade Commercial Narrative:</span>{" "}
              Build a structured, compelling story for pitches or decks.
            </li>
            <li>
              <span className="font-semibold text-white">Actionable Launch Checklist:</span>{" "}
              A step-by-step guide to keep your launch smooth and focused.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            This plan is ideal for new <strong>founder-led eCommerce brands</strong>, teams launching <strong>new product ranges</strong>, and brands preparing for <strong>investment or external capital</strong>. Optimised for those using <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>.
          </p>

          <p className="mt-6 text-zinc-300">
            Complex or multi-channel launch? We'll tailor your plan accordingly and provide a custom quote.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£3,750</span>
            </p>
            <a
              href="/investor-grade-launch-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Discuss Your Investor-Grade Launch Plan
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
