// components/ui/card.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-muted-foreground", className)} {...props} />
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
