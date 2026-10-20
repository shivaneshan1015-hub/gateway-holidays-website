import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate minimal fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and Phone are required." },
        { status: 400 }
      );
    }

    const payload = {
      source: "website-enquiry",
      submittedAt: new Date().toISOString(),
      lead: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        destination: data.destination || "General Holiday Consultation",
        travelMonth: data.travelMonth || "Flexible",
        durationDays: data.durationDays || "4",
        adults: data.adults || "2",
        children: data.children || "0",
        hotelCategory: data.hotelCategory || "4-star",
        cabRequirement: "Private AC Cab Included",
        specialRequests: data.specialRequests || null,
      },
    };

    console.log("[Gateway Holidays Website Enquiry]", JSON.stringify(payload, null, 2));

    // Optional forward to CRM Webhook if configured
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL || "https://crm.gatewayholidays.in/api/webhooks/website";
    const crmSecret = process.env.CRM_WEBHOOK_SECRET || "gh-website-webhook-secret-2026";

    try {
      await fetch(crmWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Gateway-Website-Secret": crmSecret,
        },
        body: JSON.stringify(payload),
      }).catch((err) => {
        // Log webhook silence in case CRM is running locally or staging
        console.warn("[CRM Webhook dispatch note]:", err.message);
      });
    } catch {
      // Non-blocking
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. A trip specialist will reach out shortly.",
    });
  } catch (error) {
    console.error("[Enquiry API Error]", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
