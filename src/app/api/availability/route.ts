// src/app/api/availability/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import type { calendar_v3 } from 'googleapis';

function parseTimeToDate(baseDate: Date, timeStr: string): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const WORKING_HOURS = [
  '10:00', '10:15', '10:30', '10:45',
  '11:00', '11:15', '11:30', '11:45',
  '12:00', '12:15', '12:30', '12:45',
  '13:00', '13:15', '13:30', '13:45',
];

type BusySlotRaw = { start: string; end: string };
type BusySlot = { start: Date; end: Date };

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');
  const durationStr = searchParams.get('duration');
  const duration = parseInt(durationStr || '30', 10);

  if (!date || isNaN(duration)) {
    return NextResponse.json({ error: 'Missing or invalid date/duration' }, { status: 400 });
  }

  // Load your service account JSON key from the secrets folder
  const keyPath = path.resolve('./secrets/service-account.json');
  const keyFile = fs.readFileSync(keyPath, 'utf8');
  const key = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  const calendar = google.calendar({ version: 'v3', auth });

  const startOfDay = new Date(`${date}T00:00:00`);
  const endOfDay = new Date(`${date}T23:59:59`);

  try {
    // Use freebusy.query to get busy times
    const freebusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        items: [{ id: key.client_email }], // The calendar ID is the service account email
      },
    });

const busyTimesRaw = freebusy.data.calendars?.[key.client_email]?.busy || [];

    // Narrow to only those with defined start and end as string
    const busyTimes: calendar_v3.Schema$TimePeriod[] = busyTimesRaw.filter(
    (slot): slot is calendar_v3.Schema$TimePeriod =>
        typeof slot.start === 'string' && typeof slot.end === 'string'
    );

    const busySlots: BusySlot[] = busyTimes.map(slot => ({
    start: new Date(slot.start!),
    end: new Date(slot.end!),
    }));

    const potentialSlots: string[] = [];
    const baseDate = new Date(date);

    for (const timeStr of WORKING_HOURS) {
      const slotStart = parseTimeToDate(baseDate, timeStr);
      const slotEnd = new Date(slotStart.getTime() + duration * 60000);

      const overlaps = busySlots.some(({ start, end }: BusySlot) =>
        slotStart < end && slotEnd > start
      );

      // Optionally restrict booking to before 3pm
      if (!overlaps && slotEnd.getHours() < 15) {
        potentialSlots.push(timeStr);
      }
    }

    return NextResponse.json({ available: potentialSlots });
  } catch (err) {
    console.error('Availability API error:', err);
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
  }
}
