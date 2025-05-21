import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function Q4ProfitPlanningSprintPage() {
  return (
    <>
      <Head>
        <title>Q4 Profit Planning Sprint | Plan Campaigns for Margin</title>
        <meta
          name="description"
          content="Build a clear, margin-first Q4 plan with the Q4 Profit Planning Sprint. Align teams, targets and timelines in one strategic workshop. Built for Shopify + GA4 brands."
        />
        <meta
          name="keywords"
          content="Q4 campaign planning, ecommerce strategy, profit-first planning, black friday marketing, peak season ecommerce, Q4 ecommerce growth, shopify campaign plan"
        />
      </Head>
      <MainLayout>
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Q4 Profit Planning Sprint: Lead Campaigns with Margin – Not Mayhem
          </h1>

          <p className="text-lg text-zinc-300 mb-6">
            This fast-paced, focused session helps you align your team, your spend, and your timeline for peak season success. No retainers. No fluff. Just a clear, margin-first roadmap your team can follow.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">What’s Included</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Profit-first Campaign Framework:</span>{" "}
              A clear structure for Q4 execution – rooted in margin.
            </li>
            <li>
              <span className="font-semibold text-white">Black Friday + Peak Planning Calendar:</span>{" "}
              Date-by-date actions mapped around your goals.
            </li>
            <li>
              <span className="font-semibold text-white">CAC & Spend Targets by Channel:</span>{" "}
              Set benchmarks you can actually track.
            </li>
            <li>
              <span className="font-semibold text-white">Team Roles, Timing & KPIs:</span>{" "}
              Align the who, when and how of campaign execution.
            </li>
            <li>
              <span className="font-semibold text-white">Editable 4-Page PDF Plan:</span>{" "}
              Your full plan in a format that’s easy to use and share.
            </li>
            <li>
              <span className="font-semibold text-white">Strategy Walkthrough Session:</span>{" "}
              1:1 review of your plan to fine-tune and get confident.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Best for <strong>founder-led brands</strong>, <strong>Heads of Marketing</strong>, and <strong>Growth teams</strong> doing <strong>£10m+</strong> in annual revenue.
          </p>

          <p className="mt-6 text-zinc-300">
            Built specifically for brands using <span className="text-white">Shopify</span>, <span className="text-white">GA4</span> and <span className="text-white">Triplewhale</span>. Have a more complex stack? We'll tailor it.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£950</span>
            </p>
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book Your Planning Sprint
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
} 
