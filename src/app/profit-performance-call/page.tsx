// app/profit-performance-call/page.tsx

"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

// ...rest of your component code

export default function DiscoveryCallPage() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <MainLayout>
      <section className="pt-40 pb-24 relative overflow-hidden">
        <Container size="md" className="relative z-10">
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <SuccessView />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <ScaleHeading size="3xl">
                  Book a <span className="scale-gradient-text">Discovery Call</span>
                </ScaleHeading>
                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                  A strategic conversation to explore how your LTV, CAC and MER performance ties back to actual EBITDA.
                  No pressure, just clarity - and a better view of your profit path.
                </p>

                <div className="mt-10 max-w-xl mx-auto">
                  <div
                    className="tidycal-embed"
                    data-path="laurenpercival/15-minute-meeting"
                  ></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </MainLayout>
  );
}

function SuccessView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20">
        <CheckCircle className="h-10 w-10 text-green-500" />
      </div>
      <ScaleHeading size="2xl" className="mb-4">
        Thank You!
      </ScaleHeading>
      <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
        Your call is booked. I’m looking forward to helping you connect your marketing metrics to margin and make smarter, more profitable decisions.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <ScaleButton href="/" variant="secondary">
          Back to Home
        </ScaleButton>
        <ScaleButton href="/blog" variant="default">
          Read the Blog
        </ScaleButton>
      </div>
    </motion.div>
  );
}
