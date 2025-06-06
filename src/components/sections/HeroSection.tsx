"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const words = [
  "Who's Challenging Your Agency's Numbers?",
  "Is Your Forecast Built for Profit - or Just Growth?",
  "Are You Scaling Spend Without Strategy?",
  "You’re Spending. But Are You Earning Enough?",
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
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-16 min-h-[60vh] flex items-center">
      {/* Background blur (Cal.com style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mx-auto w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(88,102,228,0.08),_transparent_70%)] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative h-[180px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black antialiased text-center max-w-5xl px-4">
              <span className="relative inline-flex flex-wrap justify-center whitespace-pre-wrap break-words">
                {typedText}
                <span className="ml-1 w-[2px] bg-black animate-blink" />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
          >
            We sit between brand and agency – translating performance into profit, flagging risks before they cost you, and helping you make smart, commercial decisions based on numbers, not noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-10 mb-12"
          >
            <Link
              href="/profit-performance-call"
              className="px-6 py-3 text-zinc-800 font-semibold rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors"
            >
              Book a Strategy Call →
            </Link>
            <Link
              href="/digital-strategy-packages"
              className="px-6 py-3 text-zinc-800 font-semibold rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors"
            >
              Explore Audit & Forecast Services →
            </Link>
          </motion.div>

          <p className="text-sm text-zinc-400 font-medium mt-2">
            No retainers. No fluff. Just clarity that converts.
          </p>
          <p className="text-zinc-400 text-sm mt-4">
            For retail brands turning over £2m+ who want control, clarity, and commercially sound growth.
          </p>
        </div>
      </div>
    </section>
  );
}
