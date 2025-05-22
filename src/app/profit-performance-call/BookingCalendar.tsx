'use client';

import BookingCalendar from "./BookingCalendar";

import { useState } from 'react';

export default function BookingCalendar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/book-call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setConfirmed(true);
    } else {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Book Your Discovery Call</h2>

      {confirmed ? (
        <div className="text-green-600 font-medium">🎉 Your call has been booked!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Your brand"
            className="w-full border p-2 rounded"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            required
          />
          <textarea
            placeholder="Your message (optional)"
            className="w-full border p-2 rounded"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? 'Booking...' : 'Book My Call'}
          </button>
        </form>
      )}
    </div>
  );
}
