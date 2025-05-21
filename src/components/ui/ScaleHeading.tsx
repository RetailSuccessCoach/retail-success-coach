"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  gradient?: boolean;
  animate?: boolean;
  center?: boolean;
  uppercase?: boolean;
}

const sizeClasses = {
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl md:text-5xl",
  "4xl": "text-5xl md:text-6xl lg:text-7xl",
};

const ScaleHeading = ({
  children,
  className,
  as: Component = "h2",
  size = "2xl",
  gradient = false,
  animate = false,
  center = false,
  uppercase = false,
}: HeadingProps) => {
  const classes = cn(
    "font-bold",
    sizeClasses[size],
    gradient && "scale-gradient-text",
    center && "text-center",
    uppercase && "uppercase",
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Component className={classes}>{children}</Component>
      </motion.div>
    );
  }

  return <Component className={classes}>{children}</Component>;
};

export { ScaleHeading };
