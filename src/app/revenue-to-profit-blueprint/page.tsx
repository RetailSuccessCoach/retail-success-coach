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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Revenue-to-Profit Blueprint: Architecting Sustainable Financial Success
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Driving strong revenue but not seeing it hit the bottom line? The <strong>Revenue-to-Profit Blueprint</strong> is a high-impact, strategic programme built to turn top-line success into meaningful, lasting profitability.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            What’s Included:
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">In-Depth Profitability Audit:</span>{" "}
              A full review of profit ratios, cost structure, and revenue channels to surface key opportunities.
            </li>
            <li>
              <span className="font-semibold text-white">Revenue Optimisation:</span>{" "}
              Strategic recommendations across pricing, product mix, and customer segmentation.
            </li>
            <li>
              <span className="font-semibold text-white">Cost Efficiency Planning:</span>{" "}
              Identify ways to streamline operations, improve margins, and scale sustainably.
            </li>
            <li>
              <span className="font-semibold text-white">Profit Target Setting:</span>{" "}
              Define realistic, stretch profit goals aligned to your revenue model and team capacity.
            </li>
            <li>
              <span className="font-semibold text-white">Step-by-Step Profit Roadmap:</span>{" "}
              A prioritised plan of exactly what to fix, scale, or stop to increase profitability.
            </li>
            <li>
              <span className="font-semibold text-white">Performance Tracking Setup:</span>{" "}
              GA4-aligned KPI framework to track and measure profit-focused initiatives.
            </li>
            <li>
              <span className="font-semibold text-white">Ongoing Strategy Sessions:</span>{" "}
              Hands-on support as you implement and adapt the blueprint in real-time.
            </li>
            <li>
              <span className="font-semibold text-white">Built for Long-Term Gains:</span>{" "}
              Focused on building a profit engine – not just a short-term boost.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Ideal for <strong>founder-led eCommerce brands</strong>, <strong>Heads of Growth or Strategy</strong>, and businesses hitting <strong>£10m+ revenue</strong> who want to shift from chasing revenue to building profit-first operations.
          </p>

          <p className="mt-6 text-zinc-300">
            This blueprint is specifically designed for brands on <span className="text-white">Shopify</span> and <span className="text-white">Google Analytics 4 (GA4)</span>. If you're using a more complex stack, we’ll quote based on scope and systems.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              Starting from <span className="text-white font-medium">£7,500</span>
            </p>
            <a
              href="/revenue-to-profit-blueprint-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Discuss Your Revenue-to-Profit Blueprint
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}