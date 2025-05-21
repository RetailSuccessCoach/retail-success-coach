"use client";

import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import {
  Database,
  Bot,
  Shield,
  BarChart4,
  FlaskConical,
  LineChart
} from "lucide-react";

const productsData = [
  {
    title: "Scale Data Engine",
    description: "Produce high-quality datasets with the industry's leading data annotation platform.",
    icon: <Database className="w-6 h-6" />,
    href: "/data-engine",
    color: "purple" as const,
  },
  {
    title: "Generative AI Data Engine",
    description: "Improve LLM performance with data curation, RLHF, and human evaluations.",
    icon: <Bot className="w-6 h-6" />,
    href: "/generative-ai-data-engine",
    color: "blue" as const,
  },
  {
    title: "Scale Donovan",
    description: "Secure AI platform specifically designed for government and national security.",
    icon: <Shield className="w-6 h-6" />,
    href: "/donovan",
    color: "green" as const,
  },
  {
    title: "Scale GenAI Platform",
    description: "Enterprise platform to build, customize, evaluate and deploy GenAI applications.",
    icon: <BarChart4 className="w-6 h-6" />,
    href: "/genai-platform",
    color: "orange" as const,
  },
  {
    title: "Scale Evaluation",
    description: "Benchmark your models against industry standards with comprehensive evaluations.",
    icon: <LineChart className="w-6 h-6" />,
    href: "/evaluation/model-developers",
    color: "purple" as const,
  },
  {
    title: "Scale Research",
    description: "Cutting-edge AI research to advance the state of the art in machine learning.",
    icon: <FlaskConical className="w-6 h-6" />,
    href: "/research",
    color: "blue" as const,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0c0c14] to-[#060506]">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium text-zinc-400 uppercase block mb-2"
          >
            Our Products
          </motion.span>

          <ScaleHeading size="3xl" animate>
            Complete suite of AI solutions
          </ScaleHeading>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 text-zinc-400 max-w-3xl mx-auto"
          >
            From data preparation to model evaluation, Scale provides the tools and expertise
            to help you build and deploy AI applications with confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
              href={product.href}
              color={product.color}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { ProductsSection };
