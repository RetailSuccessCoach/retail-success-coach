import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

const ChannelGrowthPlanPage = () => {
  return (
    <>
      <Head>
        <title>Channel Growth Plan | Scalable Strategy for eCommerce Brands</title>
        <meta
          name="description"
          content="The Channel Growth Plan™ is your ecommerce blueprint. Align marketing and finance with a 52-week data-led roadmap to grow with clarity and confidence."
        />
      </Head>

      <MainLayout>
        <section className="py-16 px-4 max-w-5xl mx-auto text-zinc-300">
          <h1 className="text-4xl font-bold text-white mb-6">Channel Growth Plan</h1>
          <p className="text-lg mb-8">
            Knowledge is power. And the Channel Growth Plan™ is our recipe for sustainable, data-led growth - designed to help ambitious ecommerce brands scale without the guesswork.
          </p>

          <h2 className="text-2xl text-white font-semibold mb-4">What it is</h2>
          <p className="mb-6">
            The Channel Growth Plan is a 52-week roadmap built to align your marketing and finance strategies. It's not just a forecast - it's a full commercial blueprint. We use real performance data and business objectives to show exactly what needs to happen, when, and why.
          </p>

          <h2 className="text-2xl text-white font-semibold mb-4">What it does</h2>
          <p className="mb-6">
            You’ll see how many people you need to reach, what channels will deliver that growth, and whether your spend matches your ambitions. The Channel Growth Plan bridges the gap between where you are now and where you’re trying to go - with clarity across revenue, traffic, conversion, and cost.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8">
            <li><strong>Create your targets:</strong> Set your goals across sessions, revenue, ROAS, and more.</li>
            <li><strong>Gather decision-driving data:</strong> Understand your current KPIs and spot missed opportunities.</li>
            <li><strong>Build your blueprint:</strong> Align every channel and metric in a weekly, trackable format.</li>
            <li><strong>Develop your roadmap:</strong> Prioritise the actions that move the needle.</li>
            <li><strong>Manage the strategy:</strong> Track against plan, stay on course, and adjust when needed.</li>
          </ul>

          <h2 className="text-2xl text-white font-semibold mb-4">Why it matters</h2>
          <p className="mb-6">
            Scaling a brand without structure is chaos. But with this plan, you’ll finally see the full picture - across marketing, finance, product and ops. From new brands making their first sales to £10m businesses needing control, the Channel Growth Plan adapts to you.
          </p>

          <blockquote className="border-l-4 border-white pl-4 italic mb-8 text-zinc-400">
            "It gave us the clarity and direction we’d been missing. Five years later, it’s still the backbone of how we grow - guiding decisions across media, inventory, and strategy."
          </blockquote>

          <div className="mt-10">
            <a
              href="/demo"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-zinc-200 transition"
            >
              Enquire About Channel Growth Plan
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default ChannelGrowthPlanPage;

