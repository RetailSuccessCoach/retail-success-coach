import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import dayjs from 'dayjs'; // Import dayjs for date parsing and formatting

// --- Configuration: Ensure these environment variables are set ---
// GOOGLE_CLIENT_ID
// GOOGLE_CLIENT_SECRET
// GOOGLE_REFRESH_TOKEN
// YOUR_CALENDAR_ID (e.g., 'primary' or a specific calendar ID)
// YOUR_EMAIL_ADDRESS (Your email associated with the calendar)
// -----------------------------------------------------------------

/**
 * Helper function to get an authenticated Google Calendar client.
 * This function uses your stored refresh token to get a new access token
 * for every API call, ensuring it's always valid.
 */
async function getAuthenticatedCalendarClient() {
  // Ensure environment variables are loaded (Next.js automatically does this for API routes)
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.error('ERROR: Missing Google API environment variables. Check .env.local and Vercel settings.');
    throw new Error('Google API credentials not fully configured.');
  }

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);

  oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  try {
    // Attempt to refresh the access token. This handles token expiration.
    const { credentials } = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(credentials);
  } catch (refreshError: any) {
    console.error('Error refreshing Google access token:', refreshError.message);
    // You might want to log more details or alert yourself if refresh tokens fail consistently
    throw new Error('Failed to refresh Google access token. Please check your refresh token.');
  }

  return google.calendar({ version: 'v3', auth: oAuth2Client });
}

/**
 * Handles POST requests to book a call.
 * This is your main API endpoint for creating calendar events.
 */
export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { name, brand, contactInfo, selectedDateTime } = await req.json();

    // Basic server-side validation
    if (!name || !brand || !contactInfo || !selectedDateTime) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo)) {
        return NextResponse.json({ message: 'Invalid contact email format.' }, { status: 400 });
    }
    const parsedDateTime = dayjs(selectedDateTime);
    if (!parsedDateTime.isValid() || parsedDateTime.isBefore(dayjs())) {
        return NextResponse.json({ message: 'Invalid or past date/time selected.' }, { status: 400 });
    }


    const calendar = await getAuthenticatedCalendarClient();

    const startTime = parsedDateTime.toDate(); // Convert dayjs object to Date object
    const endTime = parsedDateTime.add(30, 'minute').toDate(); // Assuming 30-minute calls

    // Ensure YOUR_EMAIL_ADDRESS and YOUR_CALENDAR_ID are set in environment variables
    const YOUR_EMAIL_ADDRESS = process.env.YOUR_EMAIL_ADDRESS;
    const YOUR_CALENDAR_ID = process.env.YOUR_CALENDAR_ID || 'primary'; // Fallback to 'primary'

    if (!YOUR_EMAIL_ADDRESS) {
      console.error('YOUR_EMAIL_ADDRESS is not set in environment variables.');
      return NextResponse.json({ message: 'Server configuration error: Your email address missing.' }, { status: 500 });
    }

    const event = {
      summary: `Call with ${name} (${brand})`,
      description: `
        Visitor Name: ${name}
        Brand: ${brand}
        Contact Email: ${contactInfo}
        ---
        Please refer to this booking.
      `,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Europe/London', // Set the timezone for the event
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/London', // Set the timezone for the event
      },
      attendees: [
        { email: YOUR_EMAIL_ADDRESS }, // Your email address (host)
        { email: contactInfo }, // Visitor's email address (attendee, receives invite)
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 }, // 1 hour before
          { method: 'popup', minutes: 10 }, // 10 minutes before
        ],
      },
      conferenceData: { // To automatically create a Google Meet link
        createRequest: {
          requestId: `meet-${Date.now()}`, // Unique request ID
          conferenceSolutionKey: { type: 'hangoutsMeet' }, // Creates a Google Meet link
        },
      },
      // Optional: Add a specific colorId or other event properties
    };

    const response = await calendar.events.insert({
      calendarId: YOUR_CALENDAR_ID,
      requestBody: event,
      sendUpdates: 'all', // Essential: Sends invites to all attendees (you and the visitor)
      conferenceDataVersion: 1, // Required for conferenceData
    });

    const googleMeetLink = response.data.hangoutLink;
    const eventLink = response.data.htmlLink;

    return NextResponse.json({
      message: 'Booking successful!',
      googleMeetLink,
      eventLink,
      // You might return other relevant booking details for the thank you page
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error creating Google Calendar event:', error.message);
    if (error.response && error.response.data) {
      console.error('Google API Error Details:', error.response.data);
    }
    return NextResponse.json({
      message: 'Failed to book call',
      error: error.message,
      details: error.response?.data?.error // More specific error from Google API
    }, { status: 500 });
  }
}