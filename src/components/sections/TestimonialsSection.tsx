"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-zinc-100 text-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What People Are Saying
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto"
        >
          How we change the way marketers see performance.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              name: "Anna T.",
              role: "CMO",
              quote: "Lauren & the Retail Success team helped us challenge assumptions and unlock growth areas we didn't even realise were hiding in plain sight."
            },
            {
              name: "James M.",
              role: "Head of Growth",
              quote: "The audit didn't just highlight problems - it gave us clear, actionable next steps we could take straight to our agency."
            },
            {
              name: "Sophie B.",
              role: "eCommerce Founder",
              quote: "As a founder juggling 10 things at once, this gave me instant clarity on performance and spend. Worth its weight in gold."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-zinc-800 text-base mb-4 italic">“{item.quote}”</p>
              <p className="text-zinc-900 font-semibold">{item.name}</p>
              <p className="text-zinc-500 text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
