"use client";

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure consistent body class on client
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <SessionProvider>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </SessionProvider>
  );
}
