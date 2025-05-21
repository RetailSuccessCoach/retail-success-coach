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
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Full-Funnel Profit Launch: Scale Smarter from Day One
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            This isn’t just a launch - it’s the blueprint for profitable growth from first click to long-term loyalty. Our <strong>Full-Funnel Profit Launch</strong> helps you master CAC, sharpen your narrative, and optimise every step of your funnel.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">What You’ll Get:</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              <span className="font-semibold text-white">Audience Segmentation & Value Targeting:</span>{" "}
              Understand your ideal customer by behaviour, spend, and LTV potential.
            </li>
            <li>
              <span className="font-semibold text-white">Market & Competitor Landscape:</span>{" "}
              Identify your biggest opportunities and how to position for growth.
            </li>
            <li>
              <span className="font-semibold text-white">Full Go-to-Market Strategy (Shopify Focus):</span>{" "}
              Acquisition, conversion, retention - mapped from day one.
            </li>
            <li>
              <span className="font-semibold text-white">Multi-Channel CAC Targeting & GA4 Setup:</span>{" "}
              Aggressive but achievable CAC goals, tracked in real time.
            </li>
            <li>
              <span className="font-semibold text-white">Conversion Rate Optimisation (CRO):</span>{" "}
              Funnel-wide tactics to turn traffic into profit.
            </li>
            <li>
              <span className="font-semibold text-white">Early Loyalty & Retention Framework:</span>{" "}
              Drive repeat purchases and build habits from first order.
            </li>
            <li>
              <span className="font-semibold text-white">Investor-Grade Forecasts & KPIs:</span>{" "}
              Build trust with credible projections and proof of scalability.
            </li>
            <li>
              <span className="font-semibold text-white">Ongoing Strategy Support:</span>{" "}
              Implementation guidance and strategic direction through launch.
            </li>
          </ul>

          <p className="mt-6 text-zinc-300">
            Ideal for <strong>new eCommerce brands</strong> looking to launch profit-first, <strong>founders raising capital</strong>, or <strong>product teams</strong> debuting new ranges. Built specifically for <span className="text-white">Shopify</span> and <span className="text-white">GA4</span>.
          </p>

          <p className="mt-6 text-zinc-300">
            Need integrations, custom dashboards or complex modelling? We'll scope it and quote accordingly.
          </p>

          <div className="mt-8">
            <p className="text-zinc-300 text-sm mb-2">
              One-off investment: <span className="text-white font-medium">£6,950</span>
            </p>
            <a
              href="/full-funnel-profit-launch-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Discuss Your Full-Funnel Profit Launch
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
