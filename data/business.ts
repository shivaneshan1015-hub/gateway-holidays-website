export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  phonePrimary: string;
  phoneSecondary: string;
  phoneClean: string;
  whatsappNumber: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  postalCode: string;
  googleRating: number;
  totalGoogleReviews: number;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  defaultWhatsAppMessage: string;
  socials: {
    instagram: string;
    facebook: string;
  };
  officeHours: string;
  hours: string;
}

export const businessInfo: BusinessInfo = {
  name: "Gateway Holidays",
  legalName: "Gateway Holidays",
  tagline: "Safe, Reliable & Affordable Tours",
  phonePrimary: "+91 81110 18881",
  phoneSecondary: "+91 81110 18882",
  phoneClean: "918111018881",
  whatsappNumber: "918111018881",
  email: "info@gatewayholidays.in",
  address: "Anna Nagar Main Road, Opp. Ambika College, Anna Nagar",
  landmark: "Opp. Ambika College",
  city: "Madurai",
  state: "Tamil Nadu",
  postalCode: "625020",
  googleRating: 4.9,
  totalGoogleReviews: 128,
  rating: 4.9,
  reviewCount: 128,
  googleMapsUrl: "https://maps.google.com/?q=Gateway+Holidays+Anna+Nagar+Madurai",
  defaultWhatsAppMessage: "Hi Gateway Holidays, I am planning a holiday trip and would like a customized itinerary and quotation.",
  socials: {
    instagram: "https://www.instagram.com/gatewayholidays.in/",
    facebook: "https://www.facebook.com/profile.php?id=61584744403569",
  },
  officeHours: "Monday - Saturday: 10:00 AM - 7:00 PM (Sunday: Prior Appointment)",
  hours: "Monday - Saturday: 10:00 AM - 7:00 PM (Sunday: Prior Appointment)",
};
