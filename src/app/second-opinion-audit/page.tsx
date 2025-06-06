import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function SecondOpinionAuditPage() {
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
        <section
          aria-label="Second-Opinion Audit Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto space-y-12 bg-[#f4f4f4] text-black"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
              Second-Opinion Audit: A Fresh Take on Performance & Profit
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
              Think your ads, CRM, or website could be working harder? You’re probably right. This audit offers quick but meaningful clarity for busy marketers and founders who want answers – fast.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* What You’ll Get */}
          <div className="bg-white border border-zinc-300 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-black mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Channel-by-Channel Performance Review</p>
                <p className="text-zinc-700">We show you what’s working, what’s not, and why.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Profit-First Benchmarks</p>
                <p className="text-zinc-700">ROAS, CAC, and LTV insights tailored to your category.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Clear Visibility on Waste</p>
                <p className="text-zinc-700">Spot where spend is leaking and where efficiency can be regained.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Top 5 Fix / Scale / Stop Actions</p>
                <p className="text-zinc-700">No fluff – just straight priorities.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="text-black font-semibold mb-1">Optional Validation</p>
                <p className="text-zinc-700">We’ll tell you if your agency or team are genuinely nailing it – and where to double down.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-300" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            <p>
              Best for <strong>founders</strong>, <strong>eCommerce managers</strong>, and <strong>Heads of Marketing</strong> who want impartial insight without a full retainer relationship.
            </p>

            <p>
              Built specifically for brands using <span className="text-black">Shopify</span>, <span className="text-black">GA4</span> and <span className="text-black">Triplewhale</span>. Have a more complex stack? We’ll tailor it.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 mb-3">
            </p>
            <a
              href="/profit-performance-call"
              role="button"
              aria-label="Book your Second-Opinion Audit call"
              className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
            >
              Book Your Second-Opinion Call →
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
