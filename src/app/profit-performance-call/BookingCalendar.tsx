'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type ConfirmationData = {
  name: string;
  date: string;
  time: string;
  meetLink: string;
  calendarLinks: {
    google: string;
    outlook: string;
  };
};

export default function BookingCalendar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: '',
    date: '',
    time: '',
    duration: 30,
    package: 'Profit Pulse Check',
    turnover: '£100k–500k',
  });

  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch available times whenever date or duration changes
  useEffect(() => {
    if (!selectedDate || !formData.duration) {
      setAvailableTimes([]);
      return;
    }

    const fetchAvailability = async () => {
      const isoDate = format(selectedDate, 'yyyy-MM-dd');
      console.log('🗓 Selected ISO Date:', isoDate);
      try {
        const res = await fetch(`/api/availability?date=${isoDate}&duration=${formData.duration}`);
        const data = await res.json();

        if (res.ok) {
          setAvailableTimes(data.available || []);
        } else {
          console.error('❌ Availability API error:', data.error || 'Unknown error');
          setAvailableTimes([]);
        }
      } catch (error) {
        console.error('❌ Fetch availability failed:', error);
        setAvailableTimes([]);
      }
    };

    fetchAvailability();
  }, [selectedDate, formData.duration]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        window.location.href = '/thank-you';
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error('Booking submission error:', error);
    }

    setLoading(false);
  };

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => console.log('✅ Google API script loaded')}
      />

      {confirmation ? (
        <div className="text-center bg-white p-6 rounded-xl shadow max-w-lg mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">🎉 Booking Confirmed</h2>
          <p>Thanks, {confirmation.name}! Your call is booked for:</p>
          <p className="font-medium">
            {confirmation.date} at {confirmation.time}
          </p>
          <p>
            🔗{' '}
            <a href={confirmation.meetLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Join Google Meet
            </a>
          </p>

          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a href={confirmation.calendarLinks.google} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add to Google Calendar
            </a>
            <a href={confirmation.calendarLinks.outlook} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded">
              Add to Outlook
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Lauren Percival</h2>
            <p className="text-lg font-semibold text-gray-700">Profit Strategy Call</p>
            <p className="text-sm text-gray-500">Discuss your profit leaks, pricing or performance in a private consult.</p>
            <p className="text-xs text-gray-400">Europe/London timezone</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[15, 30, 45, 60].map((dur) => (
              <button
                key={dur}
                onClick={() => setFormData({ ...formData, duration: dur })}
                className={`min-w-[60px] px-4 py-2 text-sm rounded-full border ${
                  formData.duration === dur ? 'bg-black text-white' : 'bg-zinc-100 text-black'
                }`}
              >
                {dur}m
              </button>
            ))}
          </div>

          <div className="w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                if (date) setFormData({ ...formData, date: format(date, 'yyyy-MM-dd'), time: '' });
              }}
              disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() + 1))}
            />
          </div>

          {availableTimes.length > 0 ? (
            <div className="mt-6">
              <p className="font-semibold mb-2">Available Times:</p>
              <div className="flex flex-wrap gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ ...formData, time })}
                    className={`px-4 py-2 border rounded text-sm ${
                      formData.time === time ? 'bg-black text-white' : 'bg-zinc-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            selectedDate && (
              <p className="text-sm text-gray-500 mt-4">
                No times available for the selected date.
              </p>
            )
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border p-3 rounded mb-2 sm:mb-0"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full border p-3 rounded mb-2 sm:mb-0"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Your brand"
              className="w-full border p-3 rounded"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              required
            />

            <textarea
              placeholder="Your message (optional)"
              className="w-full border p-3 rounded"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md text-base font-medium hover:bg-gray-800 disabled:opacity-50"
              disabled={loading || !formData.date || !formData.time}
            >
              {loading ? 'Booking...' : 'Book My Call'}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
