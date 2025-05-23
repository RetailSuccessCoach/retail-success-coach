import { google } from "googleapis";
import { JWT } from "google-auth-library";
import credentials from "../../secrets/service-account.json"; // don't expose this to frontend

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export async function getCalendarEvents() {
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });

  const calendar = google.calendar({ version: "v3", auth });

  const response = await calendar.events.list({
    calendarId: "primary", // or your email
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  return response.data.items;
}
