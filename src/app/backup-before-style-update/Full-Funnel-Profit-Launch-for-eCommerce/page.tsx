import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Head from "next/head";

export default function FullFunnelProfitLaunchPage() {
  return (
    <>
      <Head>
        <title>Full-Funnel Profit Launch for eCommerce | Investor-Grade Planning</title>
        <meta
          name="description"
          content="Investor-grade Full-Funnel Profit Launch for new eCommerce brands and capital raises. Drive commercial success and control CAC across the entire customer journey on Shopify & GA4."
        />
        <meta
          name="keywords"
          content="full funnel profit launch, ecommerce launch plan investors, CAC control full funnel, commercial strategy ecommerce, Shopify full funnel, GA4 launch tracking, investor ready launch"
        />
      </Head>
      <MainLayout>
        <section
          aria-label="Full-Funnel Profit Launch Information"
          className="py-16 px-4 sm:px-6 max-w-3xl mx-auto text-zinc-300 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Full-Funnel Profit Launch: Scale Smarter from Day One
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              This isn’t just a launch – it’s the blueprint for profitable growth from first click to long-term loyalty. Our <strong>Full-Funnel Profit Launch</strong> helps you master CAC, sharpen your narrative, and optimise every step of your funnel.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* What You’ll Get */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-6">What You’ll Get:</h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Audience Segmentation & Value Targeting</p>
                <p className="text-zinc-300">Understand your ideal customer by behaviour, spend, and LTV potential.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Market & Competitor Landscape</p>
                <p className="text-zinc-300">Identify your biggest opportunities and how to position for growth.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Full Go-to-Market Strategy (Shopify Focus)</p>
                <p className="text-zinc-300">Acquisition, conversion, retention – mapped from day one.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Multi-Channel CAC Targeting & GA4 Setup</p>
                <p className="text-zinc-300">Aggressive but achievable CAC goals, tracked in real time.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Conversion Rate Optimisation (CRO)</p>
                <p className="text-zinc-300">Funnel-wide tactics to turn traffic into profit.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Early Loyalty & Retention Framework</p>
                <p className="text-zinc-300">Drive repeat purchases and build habits from first order.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Investor-Grade Forecasts & KPIs</p>
                <p className="text-zinc-300">Build trust with credible projections and proof of scalability.</p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <p className="text-white font-semibold mb-1">Ongoing Strategy Support</p>
                <p className="text-zinc-300">Implementation guidance and strategic direction through launch.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Audience */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200">
            <p>
              Ideal for <strong>new eCommerce brands</strong> looking to launch profit-first, <strong>founders raising capital</strong>, or <strong>product teams</strong> debuting new ranges. Built specifically for <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>.
            </p>

            <p>
              Need integrations, custom dashboards or complex modelling? We’ll scope it and quote accordingly.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              One-off investment: <span className="text-white font-medium">£6,950</span>
            </p>
            <a
              href="/full-funnel-profit-launch-call"
              role="button"
              aria-label="Discuss your Full-Funnel Profit Launch"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Discuss Your Full-Funnel Profit Launch →
            </a>
          </div>
        </section>

      </MainLayout>
    </>
  );
}

