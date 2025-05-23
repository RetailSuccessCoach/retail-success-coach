import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function ProfitRatioAuditPage() {
  return (
    <>
      <Head>
        <title>Profit Ratio Audit for eCommerce | Improve Profitability & Growth</title>
        <meta
          name="description"
          content="Unlock profitable growth for your eCommerce brand with our expert Profit Ratio Audit. Get clarity on unit economics, LTV:CAC, and boost your spend efficiency. Ideal for scaling Shopify & GA4 businesses."
        />
        <meta
          name="keywords"
          content="profit ratio audit, ecommerce profitability, unit economics, LTV CAC, ROAS ROI analysis, scaling ecommerce, Shopify profitability, GA4 analysis, profit performance strategist"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Profit Ratio Audit Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Profit Ratio Audit: Unlock Your True Profit Potential
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              Scaling fast but unsure where the profit’s going? Spending big on marketing without clarity on ROI? Or preparing for an exit and need solid LTV:CAC proof? Our Profit Ratio Audit gives you the numbers, insights, and strategy to grow profitably – and sustainably.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* What You’ll Get */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Profit Breakdown That Makes Sense</p>
                <p className="text-zinc-300">Clear visibility into your <span className="text-white">Gross, Operating</span> and <span className="text-white">Net Profit Margins</span> – so you know what’s really driving your bottom line.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Benchmarking You Can Act On</p>
                <p className="text-zinc-300">See how your performance stacks up against competitors and top-performing brands in your category.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Smarter Spend, Bigger Returns</p>
                <p className="text-zinc-300">We analyse <span className="text-white">CAC</span>, <span className="text-white">LTV</span>, <span className="text-white">ROAS</span> and <span className="text-white">ROI</span> to sharpen your marketing efficiency and reduce waste.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Exit-Ready Financial Story</p>
                <p className="text-zinc-300">Perfect for PE-backed or acquisition-ready brands – we help you frame <span className="text-white">LTV:CAC</span>, <span className="text-white">EBITDA</span>, and <span className="text-white">ROI</span> to impress investors and buyers.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Marketing That Moves the Needle</p>
                <p className="text-zinc-300">Align your growth team with true profit drivers by tying campaign performance back to business outcomes.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Tech Stack Notice */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
            <p>
              Tailored for <span className="text-white">Shopify</span> and <span className="text-white">GA4</span> (with <span className="text-white">TripleWhale</span> support), our audit clears the fog and shows you where profit lives in your stack. On a different setup?{" "}
              <a href="/contact" className="text-white hover:underline">
                Get in touch
              </a>{" "}
              for a custom quote.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              One-off investment: <span className="text-white font-medium">£950</span>
            </p>
            <a
              href="/profit-performance-call"
              role="button"
              aria-label="Book your Profit Ratio Audit"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Book Your Profit Ratio Audit →
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

