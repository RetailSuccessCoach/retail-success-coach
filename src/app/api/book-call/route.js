// File: /src/app/api/book-call/route.js

import { google } from "googleapis";

export async function POST(request) {
  const body = await request.json();
  const { name, email, brand, message } = body;

  if (!name || !email || !brand) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GCAL_CLIENT_EMAIL,
        private_key: process.env.GCAL_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const start = new Date(Date.now() + 48 * 60 * 60 * 1000);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const event = {
      summary: `Discovery Call – ${name}`,
      description: `Brand: ${brand}\nEmail: ${email}\n\nMessage: ${message}`,
      start: {
        dateTime: start.toISOString(),
        timeZone: "Europe/London",
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: "Europe/London",
      },
      attendees: [{ email }],
    };

    await calendar.events.insert({
      calendarId: process.env.GCAL_CALENDAR_ID,
      resource: event,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Calendar API error:", error);
    return new Response(JSON.stringify({ error: "Failed to book event" }), {
      status: 500,
    });
  }
}
