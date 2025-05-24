// app/thank-you/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

// Add this line to prevent static generation of this page
export const dynamic = 'force-dynamic'; // Ensures this page is rendered on demand, not at build time.

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const bookedDateTime = searchParams.get('date');
  const visitorName = searchParams.get('name');

  const formattedDate = bookedDateTime
    ? dayjs(bookedDateTime).locale('en-gb').format('dddd, D MMMM YYYY [at] HH:mm')
    : 'your selected date and time';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <svg
          className="w-20 h-20 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h1 className="text-3xl font-extrabold text-green-600 mb-3">Booking Confirmed!</h1>
        <p className="text-lg text-gray-800 mb-2">
          Thank you for booking{visitorName ? `, ${visitorName}` : ''}!
        </p>
        <p className="text-md text-gray-600 mb-4">Your call is scheduled for:</p>
        <p className="text-2xl font-bold text-gray-900 mb-6">{formattedDate}</p>
        <p className="text-gray-700 mb-2">A calendar invite has been sent to your email address.</p>
        <p className="text-gray-700 mb-6">Please check your inbox (and spam folder) for the invite.</p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}