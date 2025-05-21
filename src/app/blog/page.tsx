"use client";

import MainLayout from "@/components/layout/MainLayout";
import { ScaleHeading } from "@/components/ui/ScaleHeading";
import { ScaleCard } from "@/components/ui/ScaleCard";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Search, Tag } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Generative AI",
  "Data Science",
  "Research",
  "Computer Vision",
  "Tutorials",
  "Case Studies",
  "Company News",
];

const blogPosts = [
  {
    id: "chatgpt-reinforcement-learning",
    title: "Why Is ChatGPT So Good?",
    excerpt: "Learn how OpenAI utilized RLHF to train a LLM that can generate more helpful and harmless responses.",
    category: "Generative AI",
    date: "May 15, 2023",
    featured: true,
    image: "blog-chatgpt.jpg",
    href: "/blog/chatgpt-reinforcement-learning",
  },
  {
    id: "unlearning-datasets",
    title: "Unlearning: Can We Delete Data From Models?",
    excerpt: "Exploring the challenges and current solutions for removing training data from large language models.",
    category: "Data Science",
    date: "June 3, 2023",
    featured: false,
    image: "blog-unlearning.jpg",
    href: "/blog/unlearning-datasets",
  },
  {
    id: "seal-leaderboard",
    title: "Introducing SEAL Leaderboard",
    excerpt: "Announcing the Scale Evaluation and Alignment Leaderboard, a new benchmark for large language models.",
    category: "Company News",
    date: "July 12, 2023",
    featured: true,
    image: "blog-seal.jpg",
    href: "/blog/seal-leaderboard",
  },
  {
    id: "meta-llama-partnership",
    title: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
    excerpt: "Scale and Meta are partnering to help enterprises harness the power of open-source AI models.",
    category: "Company News",
    date: "August 22, 2023",
    featured: false,
    image: "blog-meta.jpg",
    href: "/blog/meta-llama-3-1-launch-partner",
  },
  {
    id: "genai-trends-2024",
    title: "10 Generative AI Trends to Watch in 2024",
    excerpt: "From specialized models to industrial applications, here are the key trends shaping the future of generative AI.",
    category: "Generative AI",
    date: "January 5, 2024",
    featured: false,
    image: "blog-trends.jpg",
    href: "/blog/genai-trends-2024",
  },
  {
    id: "training-llms-from-scratch",
    title: "Building a Small LLM from Scratch: A Step-by-Step Guide",
    excerpt: "A comprehensive tutorial on training a small but capable language model on your own hardware.",
    category: "Tutorials",
    date: "February 10, 2024",
    featured: false,
    image: "blog-llm-training.jpg",
    href: "/blog/train-llm-from-scratch",
  },
  {
    id: "rlhf-explained",
    title: "RLHF Explained: How Human Feedback Shapes AI Behavior",
    excerpt: "A deep dive into reinforcement learning from human feedback and why it's critical for aligning AI systems.",
    category: "Research",
    date: "March 18, 2024",
    featured: true,
    image: "blog-rlhf.jpg",
    href: "/blog/rlhf-explained",
  },
  {
    id: "cv-medical-imaging",
    title: "How Computer Vision is Transforming Medical Imaging",
    excerpt: "Exploring the latest applications of computer vision in healthcare diagnostics and patient care.",
    category: "Computer Vision",
    date: "April 5, 2024",
    featured: false,
    image: "blog-medical-cv.jpg",
    href: "/blog/computer-vision-medical-imaging",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    // Apply category filter
    if (activeCategory !== "All" && post.category !== activeCategory) {
      return false;
    }

    // Apply search filter
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#0a0a12] to-[#060506]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <ScaleHeading size="3xl">
              <span className="scale-gradient-text">The Retail Success Coach</span>
            </ScaleHeading>
            <p className="text-xl text-zinc-300 mt-6">
              Insights, strategy breakdowns, and practical guidance for scaling profitably – from the team behind The Retail Success Coach.

            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-full px-5 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" />
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-y border-zinc-800/50 bg-zinc-900/30 sticky top-20 z-30 backdrop-blur-sm">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            <Tag className="text-zinc-500 mr-2 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-[#060506]">
          <Container>
            <ScaleHeading size="xl" className="mb-8">
              Featured Articles
            </ScaleHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <ScaleCard
                  key={post.id}
                  href={post.href}
                  variant="hover"
                  padding="none"
                  animate
                  className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <div className={`aspect-video ${index === 0 ? "lg:aspect-[16/9]" : ""} bg-zinc-800 flex items-center justify-center`}>
                    <span className="text-zinc-500">Featured blog image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-purple-400">{post.category}</span>
                      <span className="text-xs text-zinc-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">{post.excerpt}</p>
                  </div>
                </ScaleCard>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-[#060506]">
        <Container>
          <ScaleHeading size="xl" className="mb-8">
            {searchQuery ? "Search Results" : `${activeCategory === "All" ? "All" : activeCategory} Articles`}
          </ScaleHeading>

          {regularPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400 mb-4">No articles found. Try a different search or category.</p>
              <ScaleButton
                variant="secondary"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </ScaleButton>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
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
          )}
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a12] to-[#060506] border-t border-zinc-800/50">
        <Container size="sm">
          <div className="text-center">
            <ScaleHeading size="2xl" animate>
              Stay up to date with The Retail Success Coach
            </ScaleHeading>
            <p className="text-zinc-400 mt-4 mb-8">
              Get smarter with every strategy. Join our list for updates on profit tools, audit launches, and industry benchmarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <ScaleButton variant="gradient">
                Subscribe
              </ScaleButton>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
