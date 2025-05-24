// import { google } from "googleapis";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     const accessToken = authHeader?.replace("Bearer ", "").trim();

//     if (!accessToken) {
//       console.warn("âŒ No access token provided in headers");
//       return NextResponse.json({ error: "Missing access token" }, { status: 401 });
//     }

//     const body = await req.json();
//     const {
//       name = "Unknown",
//       email,
//       brand = "N/A",
//       message = "None",
//       package: selectedPackage,
//       turnover,
//       date,
//       time,
//       duration = 30
//     } = body;

//     if (!name || !email || !selectedPackage || !turnover || !date || !time) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     const [hour, minute] = time.split(":").map(Number);
//     const startTime = new Date(date);
//     startTime.setHours(hour, minute, 0, 0);
//     const endTime = new Date(startTime.getTime() + duration * 60000);

//     const auth = new google.auth.OAuth2();
//     auth.setCredentials({ access_token: accessToken });

//     const calendar = google.calendar({ version: "v3", auth });

//     const description = `
// Package: ${selectedPackage}
// Turnover: ${turnover}
// Brand: ${brand}
// Email: ${email}
// Message: ${message}
// `.trim();

//     const event = await calendar.events.insert({
//       calendarId: "primary",
//       conferenceDataVersion: 1,
//       sendUpdates: "all",
//       requestBody: {
//         summary: `Discovery Call with ${name}`,
//         description,
//         start: {
//           dateTime: startTime.toISOString(),
//           timeZone: "Europe/London",
//         },
//         end: {
//           dateTime: endTime.toISOString(),
//           timeZone: "Europe/London",
//         },
//         attendees: [{ email }],
//         conferenceData: {
//           createRequest: {
//             requestId: `meet-${Date.now()}`,
//             conferenceSolutionKey: {
//               type: "hangoutsMeet",
//             },
//           },
//         },
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       eventId: event.data.id,
//       meetLink: event.data?.hangoutLink,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("âŒ Booking error:", error.message);
//     } else {
//       console.error("âŒ Unknown booking error:", error);
//     }
//     return NextResponse.json({ error: "Could not create event" }, { status: 500 });
//   }
// }
