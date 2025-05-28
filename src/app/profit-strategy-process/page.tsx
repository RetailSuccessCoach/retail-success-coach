"use client";

import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>Profit Strategy Process | The Retail Success Coach</title>
        <meta
          name="description"
          content="Explore the proven process behind every Retail Success Coach strategy. Data-led, founder-friendly and built for results without compromise."
        />
      </Head>

      <MainLayout>
<section className="py-20 px-6 max-w-4xl mx-auto text-black">
  <h1 className="text-4xl font-bold mb-6 text-center">Our Profit Strategy Process</h1>
  <p className="text-lg mb-12 text-zinc-700 text-center max-w-2xl mx-auto">
    We believe smart strategy shouldn’t feel vague.
    That’s why every step of our process is designed to give you clarity, confidence, and control over your numbers.
  </p>

    <div className="grid gap-8">
      {/* Step 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Strategic Onboarding</h2>
        <p className="text-zinc-600 mb-4">
          After your discovery call, you’ll receive an onboarding pack including NDAs, access checklists, and your private dashboard. We begin only once we have secure access to all relevant platforms:
        </p>
        <ul className="list-disc list-inside text-zinc-600 space-y-1 mb-4">
          <li>GA4, GSC, Google Ads, Merchant Center, GTM</li>
          <li>Meta, Pinterest, TikTok, Snapchat Ads</li>
          <li>Shopify, WooCommerce, Magento</li>
          <li>Klaviyo or CRM, TripleWhale, Northbeam</li>
          <li>Surveys (Fairing, KnoCommerce), LTV tools, Reports</li>
        </ul>
        <p className="text-zinc-600">
          For full Profit Strategy Packages, we also request access to:
        </p>
        <ul className="list-disc list-inside text-zinc-600 space-y-1 mt-2">
          <li>COGS, shipping, return rate, fulfilment, platform fees</li>
          <li>Stockholding value, net profit margin or EBITDA</li>
        </ul>
      </div>

      {/* Step 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Confidential Data Handling</h2>
        <p className="text-zinc-600 mb-2">
          All data is stored in a secure environment - no shared Drives or third-party contractors.
        </p>
        <p className="text-zinc-600 mb-2">
          In line with GDPR, all data is deleted within <strong>60 days</strong> unless otherwise agreed.
          We can delete immediately on request.
        </p>
        <p className="text-zinc-600">
          NDAs are included as standard. Your commercial and financial data is never recycled, reused, or shared.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Deep Audit or Bespoke Strategy</h2>
        <p className="text-zinc-600 mb-2">
          Once access is confirmed, your audit or strategic plan begins. We verify, challenge, and reframe what the data is really saying.
        </p>
        <p className="text-zinc-600">
          The result: a full-funnel, margin-first, channel-specific strategy tailored to your team, model, and growth goals.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Delivery & Walkthrough</h2>
        <p className="text-zinc-600 mb-2">
          You’ll receive a branded PDF with Fix / Scale / Stop priorities – not just a static report, but a live walkthrough.
        </p>
        <p className="text-zinc-600">
          Every deliverable is built to be implemented by a founder, internal team or agency without ambiguity.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Step 5: Optional Strategic Support</h2>
        <p className="text-zinc-600">
          We offer optional follow-up for implementation support, additional workshops, agency alignment or investor prep.
        </p>
      </div>

      {/* Closing Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-black">Why Clients Trust Us</h3>
        <p className="text-zinc-600 mb-2">
          We do things properly. That means no blurred lines, no surface-level reports.
          Every deliverable is built with care, rigour, and respect for your business.
        </p>
        <p className="text-zinc-600">
          If you're looking for strategic clarity, clean data, and commercially sound planning - you're in the right place.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="/profit-performance-call"
        className="inline-block px-6 py-3 font-semibold text-black border border-black rounded-full hover:bg-zinc-100 transition duration-200 ease-in-out"
      >
        Book a Discovery Call
      </a>
    </div>
  </section>
      </MainLayout>
    </>
  );
}
