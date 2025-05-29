import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function ProfitForecastTrackerPage() {
  return (
    <>
      <Head>
        <title>Profit Forecast Tracker | Clarity, Delivered.</title>
        <meta
          name="description"
          content="Not a dashboard. Not a SaaS tool. Just the commercial clarity you actually need, done for you. Delivered in a clean Excel file. Ideal for founders who want clarity, not complexity."
        />
        <meta
          name="keywords"
          content="profit forecast tracker, ecommerce forecast tool, GA4 integrated profit tracker, channel performance forecasting, ecommerce financial clarity, strategic ecommerce planning"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Profit Forecast Tracker Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
              Profit Forecast Tracker
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Skip the spreadsheets and guesswork. The <strong>Profit Forecast Tracker</strong> gives you a clean, strategic view of performance – showing exactly how you're pacing vs. profit goals, channel by channel.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What You’ll Get */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Custom Excel Forecast</p>
                <p className="text-zinc-700">Built from your actual targets, margins, and media mix – no template setup required.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Actual vs. Pro-Rated View</p>
                <p className="text-zinc-700">Track live performance vs. expected pacing – by channel, daily, weekly & monthly.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">GA4 Integrated for Traffic & CVR</p>
                <p className="text-zinc-700">Simple GA4 hooks let you plug in real-time traffic and conversion rate data.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Channel-Level Metrics</p>
                <p className="text-zinc-700">Includes sessions, CVR, AOV, spend, CPA, ROI and contribution margin.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Loom Walkthrough or Setup Call</p>
                <p className="text-zinc-700">Choose a live call or pre-recorded video walkthrough to hit the ground running.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">30-Minute Q&A Session</p>
                <p className="text-zinc-700">Clarify any questions after reviewing your model – optional but included.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Ideal for <strong>eCommerce founders, finance leads or marketing teams</strong> who want instant clarity on trading performance – without wrestling spreadsheets or dashboards.
            </p>

            <p>
              This is a strategic tool – not a SaaS dashboard or pre-built template. You’ll receive a clean, customised Excel file you can trust.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/profit-performance-call"
              role="button"
              aria-label="Discuss your Profit Forecast Tracker"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Discuss Your Forecast Tracker →
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
