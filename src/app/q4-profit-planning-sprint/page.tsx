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
        <section
          aria-label="Q4 Profit Planning Sprint Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug text-black">
              Q4 Profit Planning Sprint: Lead Campaigns with Margin – Not Mayhem
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              This fast-paced, focused session helps you align your team, your spend, and your timeline for peak season success. No retainers. No fluff. Just a clear, margin-first roadmap your team can follow.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What’s Included */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What’s Included:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Profit-First Campaign Framework</p>
                <p className="text-zinc-700">A clear structure for Q4 execution – rooted in margin.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Black Friday + Peak Planning Calendar</p>
                <p className="text-zinc-700">Date-by-date actions mapped around your goals.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">CAC & Spend Targets by Channel</p>
                <p className="text-zinc-700">Set benchmarks you can actually track.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Team Roles, Timing & KPIs</p>
                <p className="text-zinc-700">Align the who, when and how of campaign execution.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Editable 4-Page PDF Plan</p>
                <p className="text-zinc-700">Your full plan in a format that’s easy to use and share.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Strategy Walkthrough Session</p>
                <p className="text-zinc-700">1:1 review of your plan to fine-tune and get confident.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700">
            <p>
              Best for <strong>founder-led brands</strong>, <strong>Heads of Marketing</strong>, and <strong>Growth teams</strong> doing <strong>£10m+</strong> in annual revenue.
            </p>

            <p>
              Built specifically for brands using <span className="text-black">Shopify</span>, <span className="text-black">GA4</span> and <span className="text-black">Triplewhale</span>. Have a more complex stack? We’ll tailor it.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-white border border-black rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/profit-performance-call"
              role="button"
              aria-label="Book your Q4 Planning Sprint"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Book Your Planning Sprint →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}

