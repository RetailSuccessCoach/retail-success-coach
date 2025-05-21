"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you replace our agency?",
    answer:
      "No! We're not here to compete with your agency - we're here to enhance the relationship. We act as your strategic second opinion to help you get more out of what you're already paying for."
  },
  {
    question: "What makes The Retail Success Coach different?",
    answer:
      "We're not another agency or reporting tool. We blend deep channel expertise with smart analysis to highlight what’s *actually* working - and what’s being missed."
  },
  {
    question: "How long does it take to get insights?",
    answer:
      "We deliver your audit within 7-10 working days. If you’re on a tight deadline, we can usually fast-track."
  },
  {
    question: "Do you need access to all our platforms?",
    answer:
      "We'll request viewer access to your main marketing platforms - typically Google Ads, Meta, Shopify (if relevant), and GA4. It’s read-only and totally secure."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          Still Got Questions?
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 focus:outline-none focus-visible:ring"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>
                  <span className="text-zinc-500">
                    {openIndex === index ? "–" : "+"}
                  </span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-zinc-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}