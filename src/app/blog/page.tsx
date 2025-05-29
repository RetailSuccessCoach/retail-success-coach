"use client";

import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const categories = [
  "All",
  "Strategy",
  "Profitability",
  "Team",
  "Campaigns",
  "Audits",
  "Benchmarks",
];

const blogPosts = [
  {
    id: "q4-planning",
    title: "How We Nail Q4 Planning (Without Burning Through Budget or Team Bandwidth)",
    excerpt: "Practical steps to forecast demand, allocate spend, and optimise returns before Black Friday hits.",
    category: "Strategy",
    date: "May 22, 2025",
    image: "/images/blog/q4-planning.jpeg",
    featured: true,
  },
  {
    id: "profit-margin-traps",
    title: "3 Profit Margin Traps Retail Brands Fall Into (and How to Escape)",
    excerpt: "Margins aren’t just a finance problem. Here’s how marketing, product and ops contribute to the squeeze.",
    category: "Profitability",
    image: "/images/blog/profit-margin-traps.jpeg",
    date: "May 12, 2025",
    featured: false,
  },
  {
    id: "ltv-vs-roas",
    title: "Why ROAS is Lying to You (And What to Use Instead)",
    excerpt: "Learn why LTV and contribution margin beat ROAS when it comes to scaling profitably.",
    category: "Audits",
    image: "/images/blog/ltv-vs-roas.jpeg",
    date: "April 29, 2025",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 pt-16">
            <h1 className="text-4xl font-extrabold mb-4">Retail Success Insights</h1>
            <p className="text-gray-600 text-lg">
              No fluff. Just sharp strategy, growth insights, and the frameworks behind scale.
            </p>

            {/* Search */}
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Tag className="text-gray-400 w-4 h-4 mt-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="space-y-10">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-gray-500 mb-4">
                No articles found. Try a different category or search term.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
