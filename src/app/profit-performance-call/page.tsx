// File: /app/profit-performance-call/page.tsx

"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const packageOptions = [
  "Profit Pulse Check",
  "Second-Opinion Audit",
  "Profit Ratio Audit",
  "LTV-Backed Scale Plan",
  "Q4 Profit Planning Sprint",
  "Revenue-to-Profit Blueprint",
  "Essentials Launch Plan",
  "Full-Funnel Profit Launch",
  "Bespoke Investor Plan",
];

const turnoverRanges = [
  "Startup (£0–100k)",
  "£100k–500k",
  "£500k–1m",
  "£1m–5m",
  "£5m–10m",
  "£10m–25m",
  "£25m–50m",
  "£50m–100m",
  "£100m+",
];

export default function DiscoveryCallPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
    package: "",
    turnover: "",
  });
  const [formState, setFormState] = useState<"idle" | "success" | "loading">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.success) {
        setFormState("success");
      } else {
        alert("Something went wrong: " + result.error);
        setFormState("idle");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was a problem booking your call. Please try again.");
      setFormState("idle");
    }
  };

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

                <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto space-y-6 text-left">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Brand / Website</label>
                    <input
                      name="brand"
                      type="text"
                      required
                      value={form.brand}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Package of Interest</label>
                    <select
                      name="package"
                      required
                      value={form.package}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    >
                      <option value="">Select a package</option>
                      {packageOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Approx. Annual Turnover</label>
                    <select
                      name="turnover"
                      required
                      value={form.turnover}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    >
                      <option value="">Select your range</option>
                      {turnoverRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Optional Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md border border-zinc-700 focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-zinc-200 transition disabled:opacity-50"
                  >
                    {formState === "loading" ? "Booking..." : "Submit Request"}
                  </button>
                </form>
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
