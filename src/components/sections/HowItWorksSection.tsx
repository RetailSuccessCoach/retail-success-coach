"use client";

import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 text-center bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">How The Retail Success Coach Works</h2>
        <p className="text-lg mb-8 text-zinc-300">
        We partner with your agency to uncover meaningful insights hiding in the data. No fluff, no guesswork just sharp, actionable recommendations that help everyone perform at their best.
        </p>
        <Link
          href="/how-it-works"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
}
