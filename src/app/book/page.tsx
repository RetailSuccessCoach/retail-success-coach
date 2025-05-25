// app/book/page.tsx
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
  const [duration, setDuration] = useState('30');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [minDateTime, setMinDateTime] = useState('');
  const [message, setMessage] = useState(''); // <--- NEW: State for the optional message

  const router = useRouter();

  useEffect(() => {
    setMinDateTime(dayjs().format('YYYY-MM-DDTHH:mm'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation (message is optional, so not checked here)
    if (!name.trim() || !brand.trim() || !contactInfo.trim() || !selectedDateTime || !duration) {
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
        body: JSON.stringify({
          name,
          brand,
          contactInfo,
          selectedDateTime,
          duration: parseInt(duration, 10),
          message, // <--- NEW: Include message in the request body
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book call. Please try again.');
      }

      router.push(`/thank-you?date=${encodeURIComponent(selectedDateTime)}&name=${encodeURIComponent(name)}&duration=${encodeURIComponent(duration)}`);

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error('Booking submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Book Your Call
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            {/* Left Column: Time & Duration Selection */}
            <div className="flex-1 md:w-1/2 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">1. Choose Time & Duration</h2>
              <p className="text-lg font-semibold text-gray-700">Profit Strategy Call with Lauren Percival</p>
              <p className="text-sm text-gray-500">Discuss your profit leaks, pricing or performance in a private consult.</p>
              <p className="text-sm text-gray-500">Europe/London timezone</p>

              {/* Duration Selector */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Call Duration
                </label>
                <select
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base"
                  suppressHydrationWarning
                >
                  <option value="15">15 Minutes</option>
                  <option value="30">30 Minutes</option>
                  <option value="45">45 Minutes</option>
                  <option value="60">60 Minutes</option>
                </select>
              </div>

              {/* Date & Time Picker (native HTML input) */}
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
                  suppressHydrationWarning
                />
              </div>

            </div>

            {/* Right Column: Contact Information */}
            <div className="flex-1 md:w-1/2 space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">2. Your Contact Information</h2>

              {/* Name Input */}
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

              {/* Brand Input */}
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

              {/* Contact Email Input */}
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

              {/* Message Input (optional) */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  value={message} // <--- UPDATED: Bind to message state
                  onChange={(e) => setMessage(e.target.value)} // <--- UPDATED: Update message state
                  rows={4}
                  placeholder="Any specific questions or topics you'd like to discuss?"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base resize-y"
                  suppressHydrationWarning
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button (full width below both columns) */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg mt-6"
            suppressHydrationWarning
          >
            {loading ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}