// app/book/page.tsx
'use client'; // This component will run on the client-side

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; // Or your preferred locale for formatting

export default function BookingPage() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [minDateTime, setMinDateTime] = useState('');
  const router = useRouter();

  // Set the minimum date/time after hydration on the client
  useEffect(() => {
    setMinDateTime(dayjs().format('YYYY-MM-DDTHH:mm'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation (basic but important)
    if (!name.trim() || !brand.trim() || !contactInfo.trim() || !selectedDateTime) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    const parsedDateTime = dayjs(selectedDateTime);
    if (!parsedDateTime.isValid() || parsedDateTime.isBefore(dayjs())) {
      setError('Please select a valid future date and time.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, brand, contactInfo, selectedDateTime }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book call. Please try again.');
      }

      router.push(`/thank-you?date=${encodeURIComponent(selectedDateTime)}&name=${encodeURIComponent(name)}`);

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error('Booking submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Book Your Call
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="selectedDateTime" className="block text-sm font-medium text-gray-700 mb-1">
              Choose Date & Time
            </label>
            <input
              type="datetime-local"
              id="selectedDateTime"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
              required
              min={minDateTime}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base"
              suppressHydrationWarning // Keep this one for the datetime-local input's own hydration logic if needed
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Jane Doe"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
              Brand/Company
            </label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              placeholder="e.g., Acme Corp"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              id="contactInfo"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
              placeholder="e.g., jane.doe@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base"
              suppressHydrationWarning
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            suppressHydrationWarning // <<< ADDED THIS LINE
          >
            {loading ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}