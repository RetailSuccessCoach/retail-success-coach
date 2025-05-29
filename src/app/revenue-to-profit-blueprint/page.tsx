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
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
              Revenue-to-Profit Blueprint
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Driving strong revenue but not seeing it hit the bottom line? The{" "}
              <strong>Revenue-to-Profit Blueprint</strong> is a high-impact, strategic programme built to turn top-line success into meaningful, lasting profitability.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What’s Included */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              {[
                {
                  title: "In-Depth Profitability Audit",
                  desc: "A full review of profit ratios, cost structure, and revenue channels to surface key opportunities.",
                },
                {
                  title: "Revenue Optimisation",
                  desc: "Strategic recommendations across pricing, product mix, and customer segmentation.",
                },
                {
                  title: "Cost Efficiency Planning",
                  desc: "Identify ways to streamline operations, improve margins, and scale sustainably.",
                },
                {
                  title: "Profit Target Setting",
                  desc: "Define realistic, stretch profit goals aligned to your revenue model and team capacity.",
                },
                {
                  title: "Step-by-Step Profit Roadmap",
                  desc: "A prioritised plan of exactly what to fix, scale, or stop to increase profitability.",
                },
                {
                  title: "Performance Tracking Setup",
                  desc: "GA4-aligned KPI framework to track and measure profit-focused initiatives.",
                },
                {
                  title: "Ongoing Strategy Sessions",
                  desc: "Hands-on support as you implement and adapt the blueprint in real-time.",
                },
                {
                  title: "Built for Long-Term Gains",
                  desc: "Focused on building a profit engine – not just a short-term boost.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-black pl-4">
                  <p className="text-black font-semibold mb-1">{item.title}</p>
                  <p className="text-zinc-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Ideal for <strong>founder-led eCommerce brands</strong>, <strong>Heads of Growth or Strategy</strong>, and businesses hitting <strong>£10m+ revenue</strong> who want to shift from chasing revenue to building profit-first operations.
            </p>

            <p>
              This blueprint is specifically designed for brands on <span className="text-black font-semibold">Shopify</span> and <span className="text-black font-semibold">Google Analytics 4 (GA4)</span>. If you're using a more complex stack, we’ll quote based on scope and systems.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/revenue-to-profit-blueprint-call"
              role="button"
              aria-label="Discuss your Revenue-to-Profit Blueprint"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Discuss Your Revenue-to-Profit Blueprint →
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
