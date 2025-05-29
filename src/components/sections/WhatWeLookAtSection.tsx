"use client";

import { motion } from "framer-motion";

export default function WhatWeLookAtSection() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          The Levers We Pull To Drive Profit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl mb-12"
        >
          We audit your full digital ecosystem - not just for visibility, but to drive decisive action. If it’s dragging down ROAS, killing margin, or blocking scale, we’ll find it, fix it, and fuel your website performance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Channel Performance",
              desc: "Meta, Google, TikTok, Pinterest, Email, SEO – we break down what’s working, what’s wasting budget, and what needs to be scaled, fast.",
            },
            {
              title: "Funnel Efficiency",
              desc: "From ad click to checkout, we flag conversion drop-offs, margin leaks and where your funnel is failing to convert profitable customers.",
            },
            {
              title: "Audience Targeting",
              desc: "We zero in on who you’re reaching and what they’re worth – so you’re not just acquiring users, but building high-value segments.",
            },
            {
              title: "Benchmark Positioning",
              desc: "Your numbers in context. We benchmark ROAS, CAC, AOV and LTV against top-performing brands so you know exactly where you stand.",
            },
            {
              title: "Budget-to-Margin Alignment",
              desc: "Every £ spent should support growth *and* margin. We spotlight low-return campaigns and redirect spend to profitable opportunities.",
            },
            {
              title: "Data & Reporting Visibility",
              desc: "We expose broken GA4 setups, fluffy agency reporting, and gaps in attribution that keep you from seeing (and scaling) what works.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
