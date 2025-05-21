"use client";

import { ScaleCard } from "@/components/ui/ScaleCard";
import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: "chatgpt-reinforcement-learning",
    title: "Why Is ChatGPT So Good?",
    excerpt: "Learn how OpenAI utilized RLHF to train a LLM that can generate more helpful and harmless responses.",
    category: "Generative AI",
    date: "May 15, 2023",
    image: "blog-chatgpt.jpg",
    href: "/blog/chatgpt-reinforcement-learning",
  },
  {
    id: "unlearning-datasets",
    title: "Unlearning: Can We Delete Data From Models?",
    excerpt: "Exploring the challenges and current solutions for removing training data from large language models.",
    category: "Data Science",
    date: "June 3, 2023",
    image: "blog-unlearning.jpg",
    href: "/blog/unlearning-datasets",
  },
  {
    id: "seal-leaderboard",
    title: "Introducing SEAL Leaderboard",
    excerpt: "Announcing the Scale Evaluation and Alignment Leaderboard, a new benchmark for large language models.",
    category: "Announcements",
    date: "July 12, 2023",
    image: "blog-seal.jpg",
    href: "/blog/seal-leaderboard",
  },
  {
    id: "meta-llama-partnership",
    title: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
    excerpt: "Scale and Meta are partnering to help enterprises harness the power of open-source AI models.",
    category: "Partnerships",
    date: "August 22, 2023",
    image: "blog-meta.jpg",
    href: "/blog/meta-llama-3-1-launch-partner",
  },
];

const BlogPostsSection = () => {
  return (
    <section className="py-24 bg-[#060506]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium text-zinc-400 uppercase mb-2 block"
            >
              Blog & Resources
            </motion.span>
            <ScaleHeading
              size="3xl"
              animate
            >
              Latest from our blog
            </ScaleHeading>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ScaleButton
              href="/blog"
              variant="secondary"
              size="lg"
            >
              View all posts
            </ScaleButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <ScaleCard
              key={post.id}
              href={post.href}
              variant="hover"
              padding="none"
              animate
            >
              <div className="aspect-[16/10] bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500">Blog image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-400">{post.category}</span>
                  <span className="text-xs text-zinc-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm">{post.excerpt}</p>
              </div>
            </ScaleCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { BlogPostsSection };
