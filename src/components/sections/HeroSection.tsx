"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Move this OUTSIDE the component
const words = [
  "Your Revenue Looks Strong. But Where’s the Profit?",
  "Is Your Q4 Plan Built to Scale Profitably?",
  "Confident in Your CAC, ROAS & LTV?",
  "Your Ads Are Working. But Are They Working Hard Enough?",
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const currentWordIndex = useRef(0);
  const currentLetterIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingSpeed = 70;
  const deleteSpeed = 30;
  const pauseTime = 1200;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[currentWordIndex.current];

      if (isDeleting.current) {
        setTypedText(currentWord.substring(0, currentLetterIndex.current - 1));
        currentLetterIndex.current -= 1;

        if (currentLetterIndex.current === 0) {
          isDeleting.current = false;
          currentWordIndex.current = (currentWordIndex.current + 1) % words.length;
          timeoutId = setTimeout(type, pauseTime);
          return;
        }

        timeoutId = setTimeout(type, deleteSpeed);
      } else {
        setTypedText(currentWord.substring(0, currentLetterIndex.current + 1));
        currentLetterIndex.current += 1;

        if (currentLetterIndex.current === currentWord.length) {
          isDeleting.current = true;
          timeoutId = setTimeout(type, pauseTime);
          return;
        }

        timeoutId = setTimeout(type, typingSpeed);
      }
    };

    timeoutId = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, []); // ✅ No warning now

  return (
    <section className="relative overflow-hidden pt-28 pb-12 min-h-[70vh] flex items-center">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="scale-gradient-text relative">
              {typedText}
              <span className="absolute right-0 h-full w-[2px] bg-white animate-blink" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-300 mb-8 max-w-3xl"
          >
            We help founder-led brands unlock hidden profit by benchmarking performance, identifying margin leaks, and building data-backed plans that scale – sustainably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-10 mb-12" // ⬅ Add `mb-10` here
          >
            <Link
              href="/profit-performance-call"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-colors"
            >
              Get Your Profit Strategy Call →
            </Link>
            <Link
              href="/digital-strategy-packages"
              className="px-6 py-3 text-white font-semibold rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors"
            >
              View Profit Services →
            </Link>
          </motion.div>


      <p className="text-sm text-zinc-400 font-medium mt-2 text-center">
        The most successful brands plan Q4 with precision – not pressure.
      </p>

      <p className="text-zinc-400 text-sm mt-4 text-center">
        Built for ambitious eCommerce brands turning over £10m+ – ready to scale with clarity, control, and commercial confidence.
      </p>
       </div>
      </div>
    </section>
  );
}
