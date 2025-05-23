// File: src/app/debug-token/page.tsx
"use client";

import { useSession } from "next-auth/react";

export default function DebugTokenPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading session…</p>;
  if (!session) return <p>❌ Not signed in</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🔐 Access Token Viewer</h1>
      <p>Here’s your access token:</p>
      <pre style={{ background: "#f4f4f4", padding: "1rem", borderRadius: "6px" }}>
        {session.accessToken || "No token found"}
      </pre>
    </div>
  );
}
