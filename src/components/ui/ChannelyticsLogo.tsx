"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const ChannelyticsLogo = ({
  className,
  href = "/",
  width = 160,
  height = 40,
  priority = true,
}: LogoProps) => {
  return (
    <Link href={href} className={cn("inline-block", className)}>
      <Image
        src="/images/Retail-Success-Logo.png"
        alt="Retail Success Coach"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
};

export { ChannelyticsLogo };
