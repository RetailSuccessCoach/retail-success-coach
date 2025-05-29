"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-6 py-24 text-zinc-800">

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Retail Success Coach
        </motion.h1>

        <motion.p
          className="text-xl text-zinc-800 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Not an agency. Not a mentor. A commercial partner who helps you turn revenue into real, repeatable profit.
        </motion.p>

        <div className="space-y-6 text-zinc-800 text-lg leading-7">
          <p>
            Retail Success Coach exists for founders, CMOs and in-house teams who are tired of surface-level wins and vague reports. If you're scaling and still unsure where the money’s actually being made (or lost), you're in the right place.
          </p>
          <p>
            With nearly two decades of hands-on ecommerce growth experience, I help brands translate performance data into smarter decisions - the kind that improve CAC, boost LTV, and actually protect margin. No fluff. No retainer. Just clarity and strategy where it matters most.
          </p>
          <p>
            From boardroom-ready growth plans to clean forecasting models and media efficiency audits, everything I deliver is designed to help you sell more, spend better, and sleep easier.
          </p>
          <p>
            This isn’t coaching in the soft, motivational sense. It’s coaching in the high-performance sense. That’s why clients don’t just get advice - they get results.
          </p>
          <p className="italic">Lauren xx</p>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-black mb-4">What I Stand For</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-800 text-base">
            <li>Clarity over complexity</li>
            <li>Profit over ego</li>
            <li>Strategy over noise</li>
            <li>Truth over trends</li>
            <li>Results over reports</li>
          </ul>
        </div>

        {/* Checklist Section */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-black mb-4">Is This You?</h2>
          <p className="text-zinc-800 mb-4">
            You might be ready for Retail Success Coach if you’re:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-800 text-base">
            <li>Spending six figures on media, but unsure where margin is leaking</li>
            <li>Drowning in reports, but missing a commercial story</li>
            <li>Scaling fast but still chasing profitability</li>
            <li>Struggling to align internal teams or agency partners</li>
            <li>Looking for a sharp, strategic partner who can challenge and clarify</li>
          </ul>
        </div>

        {/* Proof Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-200 pt-12">
          <div>
            <div className="text-3xl font-bold text-black mb-1">£200M+</div>
            <div className="text-zinc-600 text-sm">Revenue reviewed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">35+ Brands</div>
            <div className="text-zinc-600 text-sm">Fashion, beauty, wellness</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">15+ Years</div>
            <div className="text-zinc-600 text-sm">Ecommerce experience</div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
