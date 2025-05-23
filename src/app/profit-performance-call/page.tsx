"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function DiscoveryCallPage() {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
    package: "Profit Pulse Check",
    turnover: "£100k–500k",
  });

  const [formState, setFormState] = useState<"idle" | "success" | "loading">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    const accessToken = session?.accessToken;

    if (!accessToken) {
      alert("You're not signed in or your access token is missing.");
      setFormState("idle");
      return;
    }

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Bearer ,
        },
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
      console.error("? Error submitting form:", err);
      setFormState("idle");
    }
  };

  return (
    <MainLayout>
      <section className="pt-40 pb-24">
        <Container size="md">
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <SuccessView />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ScaleHeading size="3xl">
                  Book a <span className="scale-gradient-text">Discovery Call</span>
                </ScaleHeading>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-zinc-800 text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-zinc-800 text-white"
                  />
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    required
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-zinc-800 text-white"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-zinc-800 text-white"
                  />
                  <ScaleButton type="submit" disabled={formState === "loading"}>
                    {formState === "loading" ? "Booking..." : "Book Call"}
                  </ScaleButton>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20">
        <CheckCircle className="h-10 w-10 text-green-500" />
      </div>
      <ScaleHeading size="2xl">Thank You!</ScaleHeading>
      <p className="text-zinc-300 mb-8">Your call is booked. I’ll be in touch soon.</p>
    </motion.div>
  );
}

