import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function GrowthStrategyPage() {
  return (
    <MainLayout>
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Growth Strategy</h1>
        <p className="text-lg text-zinc-300 mb-6">
          Translate data into decisions with a clear, actionable plan for sustainable and profitable growth.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">What’s included:</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Full review of commercial performance across key channels</li>
          <li>Customer, product, and channel opportunity mapping</li>
          <li>12-month strategic growth plan aligned to your revenue goals</li>
          <li>Budget allocation guidance across Paid, CRM, Organic, and Creative</li>
          <li>Monthly or quarterly check-ins to stay on track</li>
        </ul>

        <p className="mt-6 text-zinc-300">
          Whether you’re trying to scale to £10m or £80m, this strategy is designed to help you grow with focus, 
          margin, and clarity - without spreading your resources too thin.
        </p>

        <div className="mt-8">
          <a
            href="/demo"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
          >
            Book a Strategy Session
          </a>
        </div>
      </section>
    </MainLayout>
  );
}

