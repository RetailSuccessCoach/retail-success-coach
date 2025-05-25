import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import dayjs from 'dayjs';

/**
 * Helper function to get an authenticated Google Calendar client.
 */
async function getAuthenticatedCalendarClient() {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

  let missingVars: string[] = [];
  if (!CLIENT_ID) missingVars.push('GOOGLE_CLIENT_ID');
  if (!CLIENT_SECRET) missingVars.push('GOOGLE_CLIENT_SECRET');
  if (!REFRESH_TOKEN) missingVars.push('GOOGLE_REFRESH_TOKEN');

  if (missingVars.length > 0) {
    const errorMessage = `ERROR: Missing Google API environment variables: ${missingVars.join(', ')}. Check .env.local and Vercel settings.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);

  oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  try {
    const { credentials } = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(credentials);
  } catch (refreshError: any) {
    console.error('Error refreshing Google access token:', refreshError.message);
    if (refreshError.response && refreshError.response.data) {
        console.error('Google Refresh Token Error Details:', refreshError.response.data);
    }
    throw new Error('Failed to refresh Google access token. Please check your GOOGLE_REFRESH_TOKEN and its validity.');
  }

  return google.calendar({ version: 'v3', auth: oAuth2Client });
}

/**
 * Handles POST requests to book a call.
 */
export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    // <--- UPDATED: Destructure `message` from the request body
    const { name, brand, contactInfo, selectedDateTime, duration, message } = await req.json();

    // Basic server-side validation
    if (!name || !brand || !contactInfo || !selectedDateTime || !duration) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo)) {
        return NextResponse.json({ message: 'Invalid contact email format.' }, { status: 400 });
    }
    const parsedDateTime = dayjs(selectedDateTime);
    if (!parsedDateTime.isValid() || parsedDateTime.isBefore(dayjs())) {
        return NextResponse.json({ message: 'Invalid or past date/time selected.' }, { status: 400 });
    }
    const parsedDuration = parseInt(duration, 10);
    if (isNaN(parsedDuration) || ![15, 30, 45, 60].includes(parsedDuration)) {
        return NextResponse.json({ message: 'Invalid call duration selected.' }, { status: 400 });
    }

    const calendar = await getAuthenticatedCalendarClient();

    const startTime = parsedDateTime.toDate();
    const endTime = parsedDateTime.add(parsedDuration, 'minute').toDate();

    const YOUR_EMAIL_ADDRESS = process.env.YOUR_EMAIL_ADDRESS;
    const YOUR_CALENDAR_ID = process.env.YOUR_CALENDAR_ID || 'primary';

    let missingCalendarVars: string[] = [];
    if (!YOUR_EMAIL_ADDRESS) missingCalendarVars.push('YOUR_EMAIL_ADDRESS');
    if (!process.env.YOUR_CALENDAR_ID) missingCalendarVars.push('YOUR_CALENDAR_ID');

    if (missingCalendarVars.length > 0) {
        const errorMessage = `ERROR: Missing Calendar configuration environment variables: ${missingCalendarVars.join(', ')}.`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const event = {
      summary: `Call with ${name} (${brand}) - ${parsedDuration} Minutes`,
      description: `
        Visitor Name: ${name}
        Brand: ${brand}
        Contact Email: ${contactInfo}
        Call Duration: ${parsedDuration} minutes
        ${message ? `Message: ${message}` : ''} // <--- NEW: Conditionally add message to description
        ---
        Please refer to this booking.
      `,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Europe/London', // Assume your timezone
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/London', // Assume your timezone
      },
      attendees: [
        { email: YOUR_EMAIL_ADDRESS },
        { email: contactInfo },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: YOUR_CALENDAR_ID,
      requestBody: event,
      sendUpdates: 'all',
      conferenceDataVersion: 1,
    });

    const googleMeetLink = response.data.hangoutLink;
    const eventLink = response.data.htmlLink;

    return NextResponse.json({
      message: 'Booking successful!',
      googleMeetLink,
      eventLink,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error in POST /api/book-call:', error.message);
    if (error.response && error.response.data) {
      console.error('Google API Full Error Response:', error.response.data);
    }
    const clientErrorMessage = error.message.includes('Missing Google API environment variables') ||
                             error.message.includes('Failed to refresh Google access token') ||
                             error.message.includes('Missing Calendar configuration environment variables')
                             ? error.message
                             : 'Failed to book call due to a server error.';

    return NextResponse.json({
      message: clientErrorMessage,
      error: error.message,
      details: error.response?.data?.error
    }, { status: 500 });
  }
}