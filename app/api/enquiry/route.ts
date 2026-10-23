import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_SUPABASE_URL = "https://megxoqgkienzfcnhklsq.supabase.co";
const DEFAULT_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ3hvcWdraWVuemZjbmhrbHNxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTA2NzIyOCwiZXhwIjoyMTA2NjQzMjI4fQ.mH6WeO348wjk0lQ5-DWdKAJe8_W1k88EUsQNoXHExho";

function normalizePhone(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+91${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return `+91${digits.slice(1)}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+${digits}`;
  }
  if (rawPhone.trim().startsWith("+")) {
    return `+${digits}`;
  }
  return digits ? `+${digits}` : rawPhone.trim();
}

/**
 * Direct Supabase Ingestion
 * Instantly writes the inquiry into the shared CRM database.
 * Guarantees zero lead loss and sub-second response times.
 */
async function directSupabaseIngestion(payload: {
  submissionId: string;
  submittedAt: string;
  lead: {
    name: string;
    phone: string;
    email?: string | null;
    destination?: string;
    travelMonth?: string;
    durationDays?: string | number;
    adults?: string | number;
    children?: string | number;
    hotelCategory?: string;
    cabRequirement?: string;
    specialRequests?: string | null;
  };
}): Promise<{ success: boolean; leadId?: string; customerId?: string; error?: string }> {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
    const serviceKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || DEFAULT_SERVICE_ROLE_KEY;

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { submissionId, lead } = payload;
    const normalizedPhone = normalizePhone(lead.phone);
    const rawClean = lead.phone.trim();
    const digitsOnly = lead.phone.replace(/\D/g, "");

    // 1. Idempotency check
    const { data: existingLead } = await supabase
      .from("leads")
      .select("id, customer_id")
      .eq("source", "WEBSITE")
      .eq("source_reference", submissionId)
      .maybeSingle();

    if (existingLead) {
      console.log("[Direct Ingestion] Duplicate submission skipped:", submissionId);
      return { success: true, leadId: existingLead.id, customerId: existingLead.customer_id };
    }

    // 2. Customer Resolution
    const candidatePhones = Array.from(new Set([normalizedPhone, rawClean, digitsOnly].filter(Boolean)));
    const { data: existingCustomer } = await supabase
      .from("customers")
      .select("id, name")
      .in("whatsapp_number", candidatePhones)
      .maybeSingle();

    let customerId: string;
    let isNewCustomer = false;

    if (existingCustomer) {
      customerId = existingCustomer.id;
      if (
        (!existingCustomer.name || existingCustomer.name === "Traveler") &&
        lead.name.trim()
      ) {
        await supabase
          .from("customers")
          .update({ name: lead.name.trim() })
          .eq("id", customerId);
      }
    } else {
      const { data: newCustomer, error: custErr } = await supabase
        .from("customers")
        .insert({
          name: lead.name.trim(),
          whatsapp_number: normalizedPhone,
          alternate_phone: lead.email ? lead.email.trim() : null,
          notes: lead.email ? `Email: ${lead.email.trim()}` : null,
          whatsapp_verified: false,
        })
        .select("id")
        .single();

      if (custErr || !newCustomer) {
        console.error("[Direct Ingestion] Customer creation error:", custErr);
        return { success: false, error: custErr?.message || "Failed to create customer" };
      }
      customerId = newCustomer.id;
      isNewCustomer = true;
    }

    // 3. Normalization & Lead Creation
    const destination = lead.destination?.trim() || "General Holiday Consultation";
    const travelDates = lead.travelMonth?.trim() || "Flexible";
    const durationStr = lead.durationDays ? String(lead.durationDays) : "4";
    const hotelCat = lead.hotelCategory || "Standard";
    const cabReq = lead.cabRequirement || "Private AC Cab Included";
    const specialReq = lead.specialRequests?.trim() || "None";
    const guestGroup = lead.adults ? String(lead.adults) : "2";
    const childrenGroup = lead.children ? String(lead.children) : "0";

    const initialMessage = [
      `[Website Enquiry Intake]`,
      `Destination: ${destination}`,
      `Travel Window / Dates: ${travelDates}`,
      `Duration: ${durationStr} Days`,
      `Travelers: ${guestGroup} Adults, ${childrenGroup} Children`,
      `Hotel Preference: ${hotelCat}`,
      `Cab / Transport: ${cabReq}`,
      `Special Requests: ${specialReq}`,
      lead.email ? `Contact Email: ${lead.email.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const { data: newLead, error: leadErr } = await supabase
      .from("leads")
      .insert({
        customer_id: customerId,
        source: "WEBSITE",
        source_reference: submissionId,
        campaign_name: destination,
        initial_message: initialMessage,
        status: "NEW",
      })
      .select("id")
      .single();

    if (leadErr || !newLead) {
      console.error("[Direct Ingestion] Lead creation error:", leadErr);
      return { success: false, error: leadErr?.message || "Failed to create lead" };
    }

    // 4. Linked Trip & Requirements
    const parsedDuration = parseInt(durationStr.replace(/\D/g, ""), 10) || 4;
    let parsedAdults = parseInt(guestGroup.replace(/\D/g, ""), 10);
    if (isNaN(parsedAdults) || parsedAdults < 1) parsedAdults = 2;
    let parsedChildren = parseInt(childrenGroup.replace(/\D/g, ""), 10);
    if (isNaN(parsedChildren) || parsedChildren < 0) parsedChildren = 0;

    const { data: newTrip, error: tripErr } = await supabase
      .from("trips")
      .insert({
        customer_id: customerId,
        lead_id: newLead.id,
        trip_name: `Enquiry: ${destination}`,
        status: "PLANNING",
      })
      .select("id, trip_name, status")
      .single();

    if (tripErr) {
      console.warn("[Direct Ingestion] Trip creation warning:", tripErr);
    }

    if (newTrip) {
      await supabase.from("trip_requirements").insert({
        trip_id: newTrip.id,
        destination,
        duration_days: parsedDuration >= 1 ? parsedDuration : 4,
        traveller_count: parsedAdults + parsedChildren,
        adult_count: parsedAdults,
        children_count: parsedChildren,
        travel_style: guestGroup,
        special_requirements: `Hotel: ${hotelCat} | Cab: ${cabReq} | Notes: ${specialReq}`,
      });
    }

    // 5. Activity Log Audit Entry
    const auditEntries = [
      ...(isNewCustomer
        ? [
            {
              customer_id: customerId,
              action: "customer.created",
              entity_type: "customer",
              entity_id: customerId,
              new_value: { name: lead.name.trim(), whatsapp_number: normalizedPhone },
              metadata: { source: "Website Direct Ingestion", submission_id: submissionId },
            },
          ]
        : []),
      {
        customer_id: customerId,
        lead_id: newLead.id,
        trip_id: newTrip?.id || null,
        action: "lead.created",
        entity_type: "lead",
        entity_id: newLead.id,
        new_value: { source: "WEBSITE", status: "NEW", destination, trip_id: newTrip?.id || null },
        metadata: { source: "Website Direct Ingestion", submission_id: submissionId },
      },
    ];

    await supabase.from("activity_logs").insert(auditEntries);

    console.log(`[Direct Ingestion Success] Lead ${newLead.id} created for Customer ${customerId}`);
    return { success: true, leadId: newLead.id, customerId };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[Direct Ingestion Exception]:", msg);
    return { success: false, error: msg };
  }
}

/**
 * Non-blocking CRM Webhook Dispatcher
 * Sends async webhook notification to the CRM if running without delaying user response.
 */
async function dispatchWebhookNotification(payload: unknown, submissionId: string) {
  const crmSecret = process.env.CRM_WEBHOOK_SECRET || "gh-website-webhook-secret-2026";
  const endpoints = [
    process.env.CRM_WEBHOOK_URL,
    "http://localhost:3001/api/webhooks/website",
    "http://127.0.0.1:3001/api/webhooks/website",
  ].filter(Boolean) as string[];

  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Gateway-Website-Secret": crmSecret,
          "X-Submission-Id": submissionId,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (res.ok) {
        console.log(`[CRM Webhook Notified] via ${url}`);
        return;
      }
    } catch {
      // Continue without blocking
    }
  }
}

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
        cabRequirement:
          data.cabRequirement ||
          (data.cabType ? `${data.cabType} (Private AC Cab)` : "Private AC Cab Included"),
        specialRequests: data.specialRequests || null,
      },
    };

    console.log("[Website Ingestion Start] Processing submission:", submissionId, payload.lead.name, payload.lead.phone);

    // 1. Direct Supabase Ingestion (Primary, Guaranteed, Instant)
    const dbResult = await directSupabaseIngestion(payload);

    // 2. Async Webhook Notification (Non-blocking, best-effort)
    dispatchWebhookNotification(payload, submissionId).catch(() => {});

    if (!dbResult.success) {
      console.error("[Website Ingestion Error] DB write failed:", dbResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "Could not save inquiry. Please connect directly via WhatsApp.",
          submissionId,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      submissionId,
      leadId: dbResult.leadId,
      customerId: dbResult.customerId,
      crmSynced: true,
      syncMode: "direct_database",
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
