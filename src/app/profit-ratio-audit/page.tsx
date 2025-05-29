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
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
              Profit Ratio Audit: Unlock Your True Profit Potential
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Scaling fast but unsure where the profit’s going? Spending big on marketing without clarity on ROI? Or preparing for an exit and need solid LTV:CAC proof? Our Profit Ratio Audit gives you the numbers, insights, and strategy to grow profitably – and sustainably.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What You’ll Get */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Profit Breakdown That Makes Sense</p>
                <p className="text-zinc-700">Clear visibility into your <span className="text-black">Gross, Operating</span> and <span className="text-black">Net Profit Margins</span> – so you know what’s really driving your bottom line.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Benchmarking You Can Act On</p>
                <p className="text-zinc-700">See how your performance stacks up against competitors and top-performing brands in your category.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Smarter Spend, Bigger Returns</p>
                <p className="text-zinc-700">We analyse <span className="text-black">CAC</span>, <span className="text-black">LTV</span>, <span className="text-black">ROAS</span> and <span className="text-black">ROI</span> to sharpen your marketing efficiency and reduce waste.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Exit-Ready Financial Story</p>
                <p className="text-zinc-700">Perfect for PE-backed or acquisition-ready brands – we help you frame <span className="text-black">LTV:CAC</span>, <span className="text-black">EBITDA</span>, and <span className="text-black">ROI</span> to impress investors and buyers.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Marketing That Moves the Needle</p>
                <p className="text-zinc-700">Align your growth team with true profit drivers by tying campaign performance back to business outcomes.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Tech Stack Notice */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Tailored for <span className="text-black">Shopify</span> and <span className="text-black">GA4</span> (with <span className="text-black">TripleWhale</span> support), our audit clears the fog and shows you where profit lives in your stack. On a different setup?{" "}
              <a href="/contact" className="text-black hover:underline">
                Get in touch
              </a>{" "}
              for a custom quote.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/profit-performance-call"
              role="button"
              aria-label="Book your Profit Ratio Audit"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Book Your Profit Ratio Audit →
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}




