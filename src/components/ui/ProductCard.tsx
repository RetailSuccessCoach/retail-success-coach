"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ScaleCard } from "@/components/ui/ScaleCard";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color?: "purple" | "blue" | "green" | "orange";
  index?: number;
}

const colorClasses = {
  purple: "from-purple-900/20 to-purple-900/5 border-purple-900/30",
  blue: "from-blue-900/20 to-blue-900/5 border-blue-900/30",
  green: "from-emerald-900/20 to-emerald-900/5 border-emerald-900/30",
  orange: "from-orange-900/20 to-orange-900/5 border-orange-900/30",
};

const iconColorClasses = {
  purple: "text-purple-400",
  blue: "text-blue-400",
  green: "text-emerald-400",
  orange: "text-orange-400",
};

const ProductCard = ({
  title,
  description,
  icon,
  href,
  color = "purple",
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ScaleCard
        href={href}
        className={`bg-gradient-to-b ${colorClasses[color]} group hover:scale-[1.02] transition-transform duration-300`}
        padding="lg"
      >
        <div className="flex flex-col space-y-4">
          <div className={`${iconColorClasses[color]} text-2xl w-12 h-12 flex items-center justify-center bg-zinc-900/70 rounded-lg`}>
            {icon}
          </div>

          <h3 className="text-xl font-bold group-hover:text-white transition-colors">
            {title}
          </h3>

          <p className="text-zinc-400 mb-4 flex-grow">
            {description}
          </p>

          <div className="flex items-center text-zinc-300 group-hover:text-white transition-colors">
            <span className="font-medium mr-1">Learn more</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </ScaleCard>
    </motion.div>
  );
};

export { ProductCard };
