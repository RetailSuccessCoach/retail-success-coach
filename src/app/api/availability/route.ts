// src/app/api/availability/route.ts
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

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
  '13:00', '13:15', '13:30', '13:45'
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');
  const duration = parseInt(searchParams.get('duration') || '30', 10);

  const authHeader = req.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  if (!accessToken || !date) {
    return NextResponse.json({ error: 'Missing token or date' }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const startOfDay = new Date(`${date}T00:00:00`);
  const endOfDay = new Date(`${date}T23:59:59`);

  try {
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busySlots = (events.data.items || []).map(event => ({
      start: new Date(event.start?.dateTime || ''),
      end: new Date(event.end?.dateTime || ''),
    }));

    const potentialSlots: string[] = [];
    const baseDate = new Date(date);

    for (const timeStr of WORKING_HOURS) {
      const slotStart = parseTimeToDate(baseDate, timeStr);
      const slotEnd = new Date(slotStart.getTime() + duration * 60000);

      const overlaps = busySlots.some(({ start, end }) =>
        (slotStart < end && slotEnd > start)
      );

      if (!overlaps && slotEnd.getHours() < 15) {
        potentialSlots.push(timeStr);
      }
    }

    // ✅ Diagnostic logs
    console.log('📅 Busy events:', busySlots);
    console.log('✅ Available slots:', potentialSlots);

    return NextResponse.json({ available: potentialSlots });
  } catch (err) {
    console.error('Availability error:', err);
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
  }
}
