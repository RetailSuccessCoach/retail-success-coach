'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/profit-performance-call');
    }
  }, [status, router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-zinc-600">Please sign in with your Google account to book calls.</p>

        <button
          onClick={() => signIn('google')}
          className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-zinc-800 transition"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
