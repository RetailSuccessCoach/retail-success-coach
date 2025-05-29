"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ No useSearchParams!

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handlePageView = () => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-J646JT4TXL", {
          page_path: pathname,
        });
      }
    };

    handlePageView();
  }, [pathname]);

  return null;
}
