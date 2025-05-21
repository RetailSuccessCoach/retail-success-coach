"use client";

import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = cva(
  "rounded-xl overflow-hidden transition-all border border-zinc-800",
  {
    variants: {
      variant: {
        default: "bg-zinc-900/50",
        solid: "bg-zinc-900",
        gradient: "bg-gradient-to-b from-zinc-800 to-zinc-900",
        hover: "hover:bg-zinc-800/50 group",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  animate?: boolean;
}

const ScaleCard = ({
  children,
  className,
  variant,
  padding,
  href,
  external,
  animate = false,
}: CardProps) => {
  const cardClasses = cn(cardVariants({ variant, padding, className }));

  const cardContent = (
    <>
      {children}
    </>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cardClasses}
      >
        {href ? (
          external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {cardContent}
            </a>
          ) : (
            <Link href={href} className="block h-full">
              {cardContent}
            </Link>
          )
        ) : (
          cardContent
        )}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses}>
      {href ? (
        external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            {cardContent}
          </a>
        ) : (
          <Link href={href} className="block h-full">
            {cardContent}
          </Link>
        )
      ) : (
        cardContent
      )}
    </div>
  );
};

export { ScaleCard, cardVariants };
