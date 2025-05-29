// src/components/BlogContent.tsx
"use client";

import { motion } from "framer-motion";

export default function BlogContent({ content }: { content: string }) {
  return (
    <motion.div
      className="prose prose-lg text-gray-800 max-w-none"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p>{content}</p>
    </motion.div>
  );
}
