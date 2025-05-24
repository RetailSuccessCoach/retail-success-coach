'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

export default function BookingPage() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [minDateTime, setMinDateTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    setMinDateTime(dayjs().format('YYYY-MM-DDTHH:mm'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-xl p-8 sm:p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
          Book Your Call
        </h1>

        {error && (
          <div
            className="bg-red-50 border border-red-400 text-red-700 px-5 py-3 rounded-lg mb-6"
            role="alert"
          >
            <strong className="font-semibold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="selectedDateTime" className="block mb-2 text-sm font-semibold text-gray-700">
              Choose Date & Time
            </label>
            <input
              type="datetime-local"
              id="selectedDateTime"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
              required
              min={minDateTime}
              className="mt-1 block w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Jane Doe"
              className="mt-1 block w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label htmlFor="brand" className="block mb-2 text-sm font-semibold text-gray-700">
              Brand/Company
            </label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              placeholder="e.g., Acme Corp"
              className="mt-1 block w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label htmlFor="contactInfo" className="block mb-2 text-sm font-semibold text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              id="contactInfo"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
              placeholder="e.g., jane.doe@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              suppressHydrationWarning
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition"
            suppressHydrationWarning
          >
            {loading ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}
