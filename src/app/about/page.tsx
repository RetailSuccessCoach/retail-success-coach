"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const newsItems = [
  {
    id: "ai-war",
    title: "Scale AI CEO to Trump: America must win the AI war",
    source: "Semafor",
    image: "news1.jpg",
    href: "https://www.semafor.com/article/01/20/2025/scale-ai-ceo-alexandr-wang-to-trump-america-must-win-the-ai-war"
  },
  {
    id: "defense-llama",
    title: "Scale AI unveils Defense Llama large language model for national security users",
    source: "DefenseScoop",
    image: "news2.jpg",
    href: "https://defensescoop.com/2024/11/04/scale-ai-unveils-defense-llama-large-language-model-llm-national-security-users/"
  },
  {
    id: "congress",
    title: "Scale AI pushes Congress to take action on AI data, safety issues this year",
    source: "FedScoop",
    image: "news3.jpg",
    href: "https://fedscoop.com/scale-ai-letter-to-congress-ai-priorities/"
  }
];

const careerDepartments = [
  "Business Operations", "CFO Team", "Communications", "Delivery", "Enterprise",
  "EPD", "Gen AI EPD", "Gen AI Sales", "Growth", "GTM", "Horizontals", "IPS",
  "Legal and GRC", "Marketing", "Operations", "People", "Public Sector",
  "Public Sector EPD", "Recruiting", "Research", "University"
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/3 top-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-2xl text-zinc-300 mb-8 leading-relaxed">
              Our mission is to accelerate the development of AI applications
            </p>
            <p className="text-lg text-zinc-400">
              Better data leads to more performant models. Performant models lead to faster deployment.
              We help deliver value from AI investments faster with better data by providing an end-to-end
              solution to manage the entire ML lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold uppercase text-zinc-500">headquarters</h2>
            <p className="text-3xl font-medium">San Francisco</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">900</div>
              <div className="text-zinc-400">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2016</div>
              <div className="text-zinc-400">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 scale-gradient-text">$1.35B</div>
              <div className="text-zinc-400">Investment</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">13B</div>
              <div className="text-zinc-400">Annotations To Date</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">87M</div>
              <div className="text-zinc-400">Gen AI Data Labeled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              We are proud to be trusted by leading companies to provide a data-centric,
              end-to-end solution to manage the entire ML lifecycle. Combining cutting edge
              technology with operational excellence, we help teams develop the highest-quality
              datasets because better data = better AI
            </p>
            <Link
              href="/customers"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              Meet our customers →
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold uppercase text-zinc-500 mb-2">Learn More</h2>
            <h3 className="text-3xl font-bold">Scale In The News</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800"
              >
                <Link href={item.href} className="block">
                  <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-500">{item.source} image</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-zinc-500 mb-2">{item.source}</div>
                    <h3 className="text-lg font-semibold hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-zinc-400">
              Get In Touch With Our PR Team By Emailing:{" "}
              <a href="mailto:press@scale.com" className="text-blue-400 hover:underline">
                press@scale.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold uppercase text-zinc-500 mb-2">Open Roles</h2>
            <h3 className="text-3xl font-bold mb-4">Careers</h3>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Join us as we continue to accelerate the development of AI applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {careerDepartments.map((dept) => (
              <Link
                key={dept}
                href={`/careers?department=${encodeURIComponent(dept)}#jobs`}
                className="p-4 bg-zinc-900/50 rounded-md border border-zinc-800 hover:bg-zinc-800/50 transition-colors text-center"
              >
                {dept}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a12] to-[#060506]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            The future of your industry{" "}
            <span className="scale-gradient-text">starts here.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/data-engine"
              className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800 text-white rounded-md transition-colors"
            >
              Build AI
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
