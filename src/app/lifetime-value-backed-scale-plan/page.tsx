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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            LTV-Backed Scale Plan: Grow Smarter, Not Just Bigger
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Ready to scale with purpose - not just more spend? Our <strong>LTV-Backed Scale Plan</strong> helps you unlock growth by understanding, increasing, and capitalising on your most valuable customers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">What’s Included:</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Customer Value Analysis:</span>{" "}
              Pinpoint your most profitable segments based on real behaviour, spend, and lifetime value.
            </li>
            <li>
              <span className="font-semibold text-white">Precise LTV Modelling:</span>{" "}
              Calculate and forecast <span className="text-white">Customer Lifetime Value (LTV)</span> using your <span className="text-white">Shopify</span>, <span className="text-white">GA4</span>, and <span className="text-white">TripleWhale</span> data.
            </li>
            <li>
              <span className="font-semibold text-white">CAC Optimisation:</span>{" "}
              Discover where you're overpaying for customers - and how to rebalance <span className="text-white">LTV:CAC</span> across channels.
            </li>
            <li>
              <span className="font-semibold text-white">Journey & AOV Boosting:</span>{" "}
              Map the key moments to increase <span className="text-white">Average Order Value</span> and deepen loyalty.
            </li>
            <li>
              <span className="font-semibold text-white">Retention & Loyalty Strategy:</span>{" "}
              Build a programme to keep your best customers buying, engaged and referring.
            </li>
            <li>
              <span className="font-semibold text-white">12-Month Action Plan:</span>{" "}
              A focused roadmap of LTV-led growth opportunities across acquisition and retention.
            </li>
            <li>
              <span className="font-semibold text-white">Smarter Budgeting:</span>{" "}
              Channel-by-channel spend recommendations backed by lifetime value data.
            </li>
            <li>
              <span className="font-semibold text-white">Expert Support:</span>{" "}
              Includes a strategy session and follow-up to keep your plan on track.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Best suited for brands using <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>, with optional <span className="text-white">TripleWhale</span> integration. Using something else?{" "}
            <a href="/contact" className="text-white hover:underline">
              Contact us
            </a>{" "}
            for a tailored version.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£2,950</span>
            </p>
            <a
              href="/ltv-backed-scale-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book Your LTV-Backed Scale Session
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
