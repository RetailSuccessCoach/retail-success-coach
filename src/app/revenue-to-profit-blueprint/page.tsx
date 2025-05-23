import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function RevenueToProfitBlueprintPage() {
  return (
    <>
      <Head>
        <title>Revenue-to-Profit Blueprint for eCommerce | Strategic Profitability</title>
        <meta
          name="description"
          content="Transform revenue into sustainable profit with our Revenue-to-Profit Blueprint for eCommerce. Develop a strategic roadmap for long-term financial success. Tailored for scaling Shopify & GA4 businesses."
        />
        <meta
          name="keywords"
          content="revenue to profit blueprint, ecommerce profitability strategy, revenue optimization, profit maximization, sustainable growth plan, Shopify profit strategy, GA4 financial planning"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Revenue-to-Profit Blueprint Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Revenue-to-Profit Blueprint: Architecting Sustainable Financial Success
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              Driving strong revenue but not seeing it hit the bottom line? The <strong>Revenue-to-Profit Blueprint</strong> is a high-impact, strategic programme built to turn top-line success into meaningful, lasting profitability.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* What’s Included */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-6">What’s Included:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">In-Depth Profitability Audit</p>
                <p className="text-zinc-300">A full review of profit ratios, cost structure, and revenue channels to surface key opportunities.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Revenue Optimisation</p>
                <p className="text-zinc-300">Strategic recommendations across pricing, product mix, and customer segmentation.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Cost Efficiency Planning</p>
                <p className="text-zinc-300">Identify ways to streamline operations, improve margins, and scale sustainably.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Profit Target Setting</p>
                <p className="text-zinc-300">Define realistic, stretch profit goals aligned to your revenue model and team capacity.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Step-by-Step Profit Roadmap</p>
                <p className="text-zinc-300">A prioritised plan of exactly what to fix, scale, or stop to increase profitability.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Performance Tracking Setup</p>
                <p className="text-zinc-300">GA4-aligned KPI framework to track and measure profit-focused initiatives.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Ongoing Strategy Sessions</p>
                <p className="text-zinc-300">Hands-on support as you implement and adapt the blueprint in real-time.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Built for Long-Term Gains</p>
                <p className="text-zinc-300">Focused on building a profit engine – not just a short-term boost.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
            <p>
              Ideal for <strong>founder-led eCommerce brands</strong>, <strong>Heads of Growth or Strategy</strong>, and businesses hitting <strong>£10m+ revenue</strong> who want to shift from chasing revenue to building profit-first operations.
            </p>

            <p>
              This blueprint is specifically designed for brands on <span className="text-white">Shopify</span> and <span className="text-white">Google Analytics 4 (GA4)</span>. If you're using a more complex stack, we’ll quote based on scope and systems.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              Starting from <span className="text-white font-medium">£7,500</span>
            </p>
            <a
              href="/revenue-to-profit-blueprint-call"
              role="button"
              aria-label="Discuss your Revenue-to-Profit Blueprint"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Discuss Your Revenue-to-Profit Blueprint →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}
