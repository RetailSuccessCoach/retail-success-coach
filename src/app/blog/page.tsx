"use client";

import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search, Tag } from "lucide-react";

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

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="pt-32 pb-16 bg-white text-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-extrabold mb-4">Retail Success Insights</h1>
            <p className="text-gray-600 text-lg">
              No fluff. Just sharp strategy, growth insights, and the frameworks behind scale.
            </p>

            {/* Search Input */}
            <div className="mt-6 relative">
              <input
                type="text"
                autoComplete="off"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Tag className="text-gray-400 w-4 h-4 mt-1" />
            {categories.map(cat => (
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
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="md:w-2/5 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-gray-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-contain rounded-md"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <img
                      src="/images/avatar-lauren.png"
                      className="w-6 h-6 rounded-full"
                      alt="Lauren"
                    />
                    <span className="font-medium text-gray-800">Lauren</span>
                    <span>• #{post.category.toLowerCase()}</span>
                  </div>
                </div>
              </div>
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
