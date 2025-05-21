"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-zinc-800 text-white hover:bg-zinc-700",
        secondary: "border border-zinc-700 text-white hover:bg-zinc-800",
        gradient: "bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white hover:brightness-110",
        ghost: "text-zinc-300 hover:text-white hover:bg-zinc-800/50",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-3",
        icon: "h-9 w-9",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const ScaleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, href, external, children, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, fullWidth, className }));

    if (href) {
      return external ? (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ScaleButton.displayName = "ScaleButton";

export { ScaleButton, buttonVariants };
