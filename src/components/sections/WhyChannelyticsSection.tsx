"use client";

import { motion } from "framer-motion";

export default function WhyChannelyticsSection() {
  return (
    <section className="py-24 px-4 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Plan for Profitable Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16"
        >
          Most retail brands are flying blind on profit. We fix that. Our hyper-focused strategies help founder-led brands scale with clarity – not chaos. Built around performance, margin and what actually moves the needle.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-xl mb-2">Improve Profit Margins & LTV</h3>
            <p className="text-zinc-400 text-sm">
              We help you sharpen CAC, scale sustainably, and maximise value from your most profitable customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-xl mb-2">Retail Campaign Planning for Q4</h3>
            <p className="text-zinc-400 text-sm">
              From Black Friday to January Sales, we help plan your spend, map your roles, and align your team around what matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-xl mb-2">Omnichannel Audits with No Blind Spots</h3>
            <p className="text-zinc-400 text-sm">
              Meta, Google, TikTok, CRM, Creative, Site – we audit it all with a profit lens, not just a performance one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-xl mb-2">Strategic Plans Your Team Can Action</h3>
            <p className="text-zinc-400 text-sm">
              Clear priorities. Commercial logic. No fluff. Our plans make it easy for teams to move fast and stay aligned.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="/profit-performance-call"
            className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Book Your Retail Profit Planning Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
