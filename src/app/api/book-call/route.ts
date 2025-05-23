import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const accessToken = authHeader?.replace("Bearer ", "").trim();

    console.log("🔐 Incoming token:", accessToken?.slice(0, 10) + "...");

    if (!accessToken) {
      console.warn("❌ No access token provided in headers");
      return NextResponse.json({ error: "Missing access token" }, { status: 401 });
    }

    const body = await req.json();
    const {
      name = "Unknown",
      email,
      brand = "N/A",
      message = "None",
      package: selectedPackage,
      turnover,
    } = body;

    console.log("📨 Incoming request:", { name, email, brand, selectedPackage, turnover });

    if (!name || !email || !selectedPackage || !turnover) {
      console.warn("❌ Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const now = new Date();
    const startTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000); // 30 min duration

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth });

    const description = `
Package: ${selectedPackage}
Turnover: ${turnover}
Brand: ${brand}
Email: ${email}
Message: ${message}
`.trim();

    console.log("📅 Creating calendar event...");

    console.log("📤 Sending event request with payload:", JSON.stringify({
  summary: `Discovery Call with ${name}`,
  description,
  start: startTime.toISOString(),
  end: endTime.toISOString(),
  email,
}));

const event = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all",
      requestBody: {
        summary: `Discovery Call with ${name}`,
        description: `
      Package: ${selectedPackage}
      Turnover: ${turnover}
      Brand: ${brand || "N/A"}
      Email: ${email}
      Message: ${message || "None"}
      `.trim(),
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
            requestId: `meet-${Date.now()}`,
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
      },
          });

    console.log("✅ Event created:", event.data.id, event.data?.hangoutLink);

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
