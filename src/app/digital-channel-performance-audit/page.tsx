import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function SecondOpinionReportPage() {
  return (
    <>
      <Head>
        <title>Second-Opinion Audit | Channel Performance Review</title>
        <meta
          name="description"
          content="Get a fresh perspective on your digital marketing. The Second-Opinion Audit reviews your Meta, Google, CRM and website performance to flag waste and unlock profit."
        />
        <meta
          name="keywords"
          content="second opinion audit, ecommerce channel audit, digital marketing review, meta ads audit, google ads audit, crm audit, ecommerce strategy"
        />
      </Head>
      <MainLayout>
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Second-Opinion Audit: A Fresh Take on Performance & Profit
          </h1>

          <p className="text-lg text-zinc-300 mb-6">
            Think your ads, CRM, or website could be working harder? You’re probably right. This audit offers quick but meaningful clarity for busy marketers and founders who want answers – fast.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">What You’ll Get</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Channel-by-Channel Performance Review:</span>{" "}
              We show you what’s working, what’s not, and why.
            </li>
            <li>
              <span className="font-semibold text-white">Profit-First Benchmarks:</span>{" "}
              ROAS, CAC, and LTV insights tailored to your category.
            </li>
            <li>
              <span className="font-semibold text-white">Clear Visibility on Waste:</span>{" "}
              Spot where spend is leaking and where efficiency can be regained.
            </li>
            <li>
              <span className="font-semibold text-white">Top 5 Fix / Scale / Stop Actions:</span>{" "}
              No fluff – just straight priorities.
            </li>
            <li>
              <span className="font-semibold text-white">Optional Validation:</span>{" "}
              We’ll tell you if your agency or team are genuinely nailing it – and where to double down.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Best for <strong>founders</strong>, <strong>eCommerce managers</strong>, and <strong>Heads of Marketing</strong> who want impartial insight without a full retainer relationship.
          </p>

          <p className="mt-6 text-zinc-300">
            Built specifically for brands using <span className="text-white">Shopify</span>, <span className="text-white">GA4</span> and <span className="text-white">Triplewhale</span>. Have a more complex stack? We'll tailor it.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£750</span>
            </p>
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book Your Second-Opinion Call
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
} 
