// BookingCalendar.tsx – Full Component
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function BookingCalendar() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: '',
    date: '',
    time: '',
    duration: 30,
    package: 'Profit Pulse Check',      // ✅ add this
    turnover: '£100k–500k'              // ✅ and this
    });
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [confirmation, setConfirmation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  useEffect(() => {
    if (!selectedDate || !formData.duration || !accessToken) return;

    const fetchAvailability = async () => {
      const isoDate = format(selectedDate, 'yyyy-MM-dd');
      const res = await fetch(`/api/availability?date=${isoDate}&duration=${formData.duration}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      setAvailableTimes(data.available || []);
    };

    fetchAvailability();
  }, [selectedDate, formData.duration, accessToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!accessToken) {
      alert("You're not signed in or your access token is missing.");
      setLoading(false);
      return;
    }

    const res = await fetch('/api/book-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setConfirmation(data);
    } else {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  if (confirmation) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">🎉 Booking Confirmed</h2>
        <p className="mb-2">Thanks, {confirmation.name}! Your call is booked for:</p>
        <p className="font-medium">{confirmation.date} at {confirmation.time}</p>
        <p className="mt-4">🔗 Google Meet: <a href={confirmation.meetLink} className="text-blue-600 underline" target="_blank">Join Meeting</a></p>

        <div className="mt-6 space-x-4">
          <a
            href={confirmation.calendarLinks.google}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Google Calendar
          </a>
          <a
            href={confirmation.calendarLinks.outlook}
            target="_blank"
            className="inline-block bg-gray-700 text-white px-4 py-2 rounded"
          >
            Add to Outlook
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-0 bg-white p-6 rounded-2xl shadow">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Lauren Percival</h2>
          <p className="text-lg font-semibold text-gray-700">Profit Strategy Call</p>
          <p className="text-sm text-gray-500 mt-1">Discuss your profit leaks, pricing or performance in a private consult.</p>
        </div>

        <div className="flex space-x-2">
          {[15, 30, 45, 60].map((dur) => (
            <button
              key={dur}
              type="button"
              onClick={() => setFormData({ ...formData, duration: dur })}
              className={`px-4 py-2 rounded-full border ${formData.duration === dur ? 'bg-black text-white' : 'bg-zinc-200 text-black'}`}
            >
              {dur}m
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500">Europe/London timezone</p>
      </div>

      <div>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={(date: Date | undefined) => {
            setSelectedDate(date);
            if (date) {
              setFormData({ ...formData, date: format(date, 'yyyy-MM-dd'), time: '' });
            }
          }}
          disabled={(date: Date) => date < new Date(new Date().setDate(new Date().getDate() + 1))}
        />

        {availableTimes.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Available Times:</p>
            <div className="flex flex-wrap gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, time })}
                  className={`px-3 py-2 border rounded ${formData.time === time ? 'bg-black text-white' : 'bg-zinc-100'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="col-span-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>

          <textarea
            placeholder="Your message (optional)"
            className="w-full border p-2 rounded"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            disabled={loading || !formData.date || !formData.time}
          >
            {loading ? 'Booking...' : 'Book My Call'}
          </button>
        </form>
      </div>
    </div>
  );
}
