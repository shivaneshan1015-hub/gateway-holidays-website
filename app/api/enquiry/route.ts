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

    const submissionId = crypto.randomUUID();
    const submittedAt = new Date().toISOString();

    const payload = {
      source: "website-enquiry",
      submissionId,
      submittedAt,
      lead: {
        name: String(data.name).trim(),
        phone: String(data.phone).trim(),
        email: data.email ? String(data.email).trim() : null,
        destination: data.destination || "General Holiday Consultation",
        travelMonth: data.travelMonth || "Flexible",
        durationDays: data.durationDays || "4",
        adults: data.adults || "2",
        children: data.children || "0",
        hotelCategory: data.hotelCategory || "4-star",
        cabRequirement: data.cabRequirement || (data.cabType ? `${data.cabType} (Private AC Cab)` : "Private AC Cab Included"),
        specialRequests: data.specialRequests || null,
      },
    };

    console.log("[Gateway Holidays Website Enquiry]", JSON.stringify(payload, null, 2));

    // Forward to CRM Webhook
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL || "https://crm.gatewayholidays.in/api/webhooks/website";
    const crmSecret = process.env.CRM_WEBHOOK_SECRET || "gh-website-webhook-secret-2026";

    let crmSynced = false;
    let crmResponseData: unknown = null;

    try {
      const crmRes = await fetch(crmWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Gateway-Website-Secret": crmSecret,
          "X-Submission-Id": submissionId,
        },
        body: JSON.stringify(payload),
      });

      if (crmRes.ok) {
        crmSynced = true;
        crmResponseData = await crmRes.json().catch(() => null);
        console.log("[CRM Webhook Success]", crmResponseData);
      } else {
        const errorText = await crmRes.text().catch(() => "");
        console.warn(`[CRM Webhook Warning] Status ${crmRes.status}:`, errorText);
      }
    } catch (err: unknown) {
      // Non-blocking fallback ensures user enquiry submission succeeds even if CRM is temporarily offline
      const msg = err instanceof Error ? err.message : String(err);
      console.warn("[CRM Webhook Dispatch Note]:", msg);
    }

    return NextResponse.json({
      success: true,
      submissionId,
      crmSynced,
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
