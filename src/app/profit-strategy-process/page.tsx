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
          content="Learn how The Retail Success Coach delivers a meticulous, founder-friendly, data-led performance process that builds trust, delivers clarity, and sets a new standard for strategic support."
        />
      </Head>

      <MainLayout>
        <section className="py-20 px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-6">Our Profit Strategy Process</h1>

          <p className="text-lg mb-10 text-zinc-300">
            At The Retail Success Coach, our promise is simple: to deliver the most precise, high-integrity, and trust-driven strategy experience you’ve ever encountered. No assumptions. No shortcuts. No vague reports. Just rigorous insight, premium service, and results you can rely on.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Step 1: Strategic Onboarding</h2>
              <p className="text-zinc-400">
                Following our discovery call, you’ll receive a secure onboarding pack including: NDAs, access checklists, and a private client dashboard. We request full access to all relevant platforms before any analysis begins:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mt-4 space-y-1">
                <li>Google Analytics 4 (GA4)</li>
                <li>Google Search Console (GSC)</li>
                <li>Google Ads</li>
                <li>Google Merchant Center</li>
                <li>Google Tag Manager (GTM)</li>
                <li>Meta Business Manager (incl. Ads Manager & Pixel)</li>
                <li>Pinterest Ads</li>
                <li>TikTok Ads Manager</li>
                <li>Snapchat Ads</li>
                <li>Shopify / WooCommerce / Magento (or other CMS)</li>
                <li>Klaviyo / Email platform (or other CRM)</li>
                <li>TripleWhale / Northbeam / other attribution tools</li>
                <li>Post-purchase survey tools (e.g. KnoCommerce, Fairing)</li>
                <li>LTV / retention tracking tools</li>
                <li>Any paid media dashboards, data exports, or agency reports</li>
              </ul>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">For Profit Strategy Packages</h3>
                <p className="text-zinc-400 mb-4">
                  In addition to marketing and analytics access, we require a clear picture of your financial and operational metrics. This enables us to model margin, forecast growth, and flag inefficiencies with complete accuracy.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-1">
                  <li>Cost of Goods Sold (COGS)</li>
                  <li>Shipping Revenue and Costs</li>
                  <li>Return Rate %</li>
                  <li>Fulfilment Cost (% of revenue)</li>
                  <li>Platform Fees (% of revenue)</li>
                  <li>Stockholding Value / Turnover</li>
                  <li>EBITDA or Net Profit Margins</li>
                </ul>
              </div>

              <p className="text-zinc-400 mt-6">
                This ensures we leave no stone unturned - and eliminates the delays, follow-ups, or gaps that come from chasing access partway through a brief.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Step 2: Confidential Data Handling</h2>
              <p className="text-zinc-400">
                All client data is treated with absolute confidentiality. Your files and platform access are stored securely in a closed server environment. No shared Google Drives. No third-party contractors. No data leaves our ecosystem.
              </p>
              <p className="text-zinc-400 mt-3">
                In line with GDPR compliance, all access is revoked and all stored data is securely deleted within <strong>60 days</strong> of final delivery - unless otherwise requested or contractually agreed. We can also delete data immediately on request.
              </p>
              <p className="text-zinc-400 mt-3">
                NDAs are included by default, with bespoke confidentiality clauses available on request. Your financial and commercial data is never shared, recycled, or reused - ever.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Step 3: Deep Audit or Bespoke Strategy</h2>
              <p className="text-zinc-400">
                Once access is confirmed, your audit or strategic plan begins. We ask smart questions, verify what the data is really saying, and create a clear narrative that cuts through the noise.
              </p>
              <p className="text-zinc-400 mt-3">
                Expect a complete margin-first, channel-specific, full-funnel analysis - tailored to your growth stage, commercial model, and team setup.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Step 4: Delivery & Walkthrough</h2>
              <p className="text-zinc-400">
                We don’t just send you a deck — we take you through it in detail. You'll receive a branded PDF with strategic priorities segmented into: Fix / Scale / Stop. No fluff. Just the roadmap.
              </p>
              <p className="text-zinc-400 mt-3">
                Every output is built to be executed by a founder, in-house team, or external agency with no ambiguity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Step 5: Optional Strategic Support</h2>
              <p className="text-zinc-400">
                We offer optional follow-ups to support implementation, agency alignment, or investor presentation. This can include ad-hoc check-ins, additional data validation, or bespoke strategy workshops.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Why Clients Trust Us</h3>
              <p className="text-zinc-400">
                We do things properly. That means no blurred lines, no assumptions, and no surface-level reporting. Every interaction, insight and deliverable is built with care, precision, and respect.
              </p>
              <p className="text-zinc-400 mt-3">
                Your business isn’t ordinary - so our process never is. If you want a partner who brings clarity, protects your data, and thinks two steps ahead, you’re in the right place.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}