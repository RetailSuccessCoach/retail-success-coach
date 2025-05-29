"use client";

import { motion } from "framer-motion";

export default function WhoThisIsForSection() {
  console.log("Rendering WhoThisIsForSection");

  return (
    <section className="py-24 px-4 bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Built for Brands Who Care About Profit, Not Just Performance
        </motion.h2>

        <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto">
          Whether you're in-house, founder-led or scaling fast – we work best with retail brands who want smarter campaigns, tighter margins, and a clearer path to growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "In-House Marketing Leads",
              desc: "You're driving the day-to-day, but need a strategic partner who’ll challenge the status quo and sharpen your media decisions.",
            },
            {
              title: "Founder-Led Retail Brands",
              desc: "You're scaling fast and can’t afford guesswork. You want confidence in your CAC, your agency, and your plan for Q4.",
            },
            {
              title: "CMOs & Heads of Growth",
              desc: "You want a commercially minded strategist who turns reporting into clarity – helping your team focus on what drives profit, not just performance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-zinc-50 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
