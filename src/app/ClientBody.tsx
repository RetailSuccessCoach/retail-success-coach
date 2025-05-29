"use client";

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Analytics from "@/components/Analytics";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Optional: ensure body class (if you want to do this from client)
  useEffect(() => {
    document.body.classList.add("antialiased");
  }, []);

  return (
    <SessionProvider>
      <Analytics />
      {children}
    </SessionProvider>
  );
}
