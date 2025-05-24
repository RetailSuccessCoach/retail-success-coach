// app/thank-you/page.tsx
// This page will now be a Server Component by default (no 'use client')
// It imports a client component that uses useSearchParams

import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent'; // Import the new client component

// You can keep export const dynamic = 'force-dynamic'; here as a safety measure,
// although Suspense is the primary fix for the useSearchParams error.
// export const dynamic = 'force-dynamic';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      {/* Wrap the client component in Suspense */}
      <Suspense fallback={<div>Loading confirmation...</div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}