"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SecondOpinionSection() {
  return (
    <section className="py-24 px-4 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Book a Second Opinion Call
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 mb-8"
        >
          No pressure. Just a fresh pair of eyes on your performance. We’ll walk
          through your data and highlight opportunities your agency might have
          missed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/profit-performance-call"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition"
          >
            Book a Call
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
