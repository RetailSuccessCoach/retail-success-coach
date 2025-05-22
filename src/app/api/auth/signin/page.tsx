'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-white text-black">
      <div className="text-center p-8 rounded-2xl shadow-lg max-w-sm w-full border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Welcome to Retail Success Coach</h1>
        <p className="text-sm mb-6 text-gray-600">Sign in to access your strategy tools and calendar</p>
        <button
          onClick={() => signIn('google')}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-semibold"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}