import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

export default function ProfitStrategyProcesssPage() {
  return (
    <>
      <Head>
        <title>How It Works | The Retail Success Coach</title>
        <meta
          name="description"
          content="Learn how The Retail Success Coach partners with founders, internal teams and agencies to deliver clear, actionable performance strategy."
        />
      </Head>

      <MainLayout>
        <section className="py-20 px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl font-bold mb-6">How It Works</h1>

          <p className="text-lg mb-6 text-zinc-300">
            Whether you're working with an agency, building an in-house team, or leading growth as a founder — The Retail Success Coach plugs into your setup to bring clarity, control and commercial thinking.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Quick Onboarding</h2>
              <p className="text-zinc-400">
                We start with a Clarity Call to understand your goals, setup, and what’s getting in the way. Then we gather data access and background context.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Audit or Strategy Build</h2>
              <p className="text-zinc-400">
                Depending on the package, I’ll either audit your current performance or build your plan from scratch. Every output is designed to be plug-and-play for founders, marketers or media buyers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Clear, Commercial Output</h2>
              <p className="text-zinc-400">
                You’ll receive a PDF summary, a walkthrough session, and a set of priority actions that align everyone around what needs fixing, scaling, or stopping.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Optional Follow-Up</h2>
              <p className="text-zinc-400">
                Most packages include a review session to sense-check changes, align on next steps, or support any internal comms with teams or agencies.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-zinc-200 transition"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
