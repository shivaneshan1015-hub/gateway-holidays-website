// Google Analytics 4 (same property as the old WordPress site, so history continues).
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-JRZ8YQBWFL";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

/** Record a submitted enquiry as a GA4 "generate_lead" event. */
export function trackLead(form: "contact" | "plan_my_trip" | "tour_enquiry", destination?: string) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", "generate_lead", {
    form_name: form,
    destination: destination || undefined,
  });
}
