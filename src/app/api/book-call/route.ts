import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const accessToken = authHeader?.replace("Bearer ", "").trim();

    console.log("🔐 Incoming token:", accessToken);

    if (!accessToken) {
      return NextResponse.json({ error: "Missing access token" }, { status: 401 });
    }

    const body = await req.json();
    const { name, email, brand, message, package: selectedPackage, turnover } = body;

    if (!name || !email || !selectedPackage || !turnover) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const now = new Date();
    const startTime = new Date(now.getTime() + 60 * 60 * 1000);
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth });

    const event = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all",
      requestBody: {
        summary: \Discovery Call with \ (\)\,
        description: \
Package: \
Turnover: \
Message: \
Email: \
        \.trim(),
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Europe/London",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Europe/London",
        },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: \meet-\\,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      eventId: event.data.id,
      meetLink: event.data?.hangoutLink,
    });
  } catch (error: any) {
    console.error("❌ Booking error:", error?.response?.data || error.message || error);
    return NextResponse.json({ error: "Could not create event" }, { status: 500 });
  }
}
