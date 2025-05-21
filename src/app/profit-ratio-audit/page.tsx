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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Profit Ratio Audit: Unlock Your True Profit Potential
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Scaling fast but unsure where the profit’s going? Spending big on
            marketing without clarity on ROI? Or preparing for an exit and need
            solid LTV:CAC proof? Our Profit Ratio Audit gives you the numbers,
            insights, and strategy to grow profitably - and sustainably.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            What You'll Get:
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">
                Profit Breakdown That Makes Sense:
              </span>{" "}
              Clear visibility into your{" "}
              <span className="text-white">Gross, Operating</span> and{" "}
              <span className="text-white">Net Profit Margins</span> - so you
              know what’s really driving your bottom line.
            </li>
            <li>
              <span className="font-semibold text-white">
                Benchmarking You Can Act On:
              </span>{" "}
              See how your performance stacks up against your competitors and
              top-performing brands in your category.
            </li>
            <li>
              <span className="font-semibold text-white">
                Smarter Spend, Bigger Returns:
              </span>{" "}
              We analyse your{" "}
              <span className="text-white">CAC</span>,{" "}
              <span className="text-white">LTV</span>,{" "}
              <span className="text-white">ROAS</span> and{" "}
              <span className="text-white">ROI</span> to sharpen your marketing
              efficiency and reduce waste.
            </li>
            <li>
              <span className="font-semibold text-white">
                Exit-Ready Financial Story:
              </span>{" "}
              Perfect for PE-backed or acquisition-ready brands - we help you
              frame <span className="text-white">LTV:CAC</span>,{" "}
              <span className="text-white">EBITDA</span>, and{" "}
              <span className="text-white">ROI</span> to impress investors and
              buyers.
            </li>
            <li>
              <span className="font-semibold text-white">
                Marketing That Moves the Needle:
              </span>{" "}
              Align your growth team with true profit drivers by tying campaign
              performance back to business outcomes.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Tailored for <span className="text-white">Shopify</span> and{" "}
            <span className="text-white">GA4</span> (with{" "}
            <span className="text-white">TripleWhale</span> support), our audit
            clears the fog and shows you where profit lives in your stack. On a
            different setup?{" "}
            <a href="/contact" className="text-white hover:underline">
              Get in touch
            </a>{" "}
            for a custom quote.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£950</span>
            </p>
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book Your Profit Ratio Audit
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
