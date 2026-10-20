export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  location: string;
  tourTaken: string;
  rating: number;
  date: string;
  avatarBg: string;
  content: string;
  verified: boolean;
}

export const googleReviews: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Dr. K. Vigneshwaran",
    initials: "KV",
    location: "Madurai, Tamil Nadu",
    tourTaken: "Kerala Honeymoon & Hill Station (Munnar & Alleppey)",
    rating: 5,
    date: "2 weeks ago",
    avatarBg: "bg-rose-500",
    content: "Booked our Munnar and Alleppey trip with Gateway Holidays. The private cab driver was polite, punctual, and very helpful. The resort in Munnar had breathtaking valley views and the houseboat in Alleppey was clean and luxurious. Zero stress, everything was meticulously arranged from Madurai!",
    verified: true,
  },
  {
    id: "rev-2",
    author: "R. Sundara Raman",
    initials: "SR",
    location: "Anna Nagar, Madurai",
    tourTaken: "Heritage Temple Tour (Rameswaram & Dhanushkodi)",
    rating: 5,
    date: "1 month ago",
    avatarBg: "bg-amber-600",
    content: "Outstanding family trip for my elderly parents to Rameswaram and Dhanushkodi. The customized itinerary allowed us to complete darshan smoothly without rushing. Highly recommend Gateway Holidays if you want reliable local tour organizers who genuinely care.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Praveen Kumar & Friends",
    initials: "PK",
    location: "Coimbatore, Tamil Nadu",
    tourTaken: "Adventure Trekking & Jeep Safari (Vagamon & Kolukkumalai)",
    rating: 5,
    date: "3 weeks ago",
    avatarBg: "bg-orange-500",
    content: "The sunrise jeep safari at Kolukkumalai and tent camping in Vagamon arranged by Gateway Holidays was one of our best adventures ever! The coordination was top-notch and we had 24/7 WhatsApp assistance throughout.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Meenakshi Sundaram",
    initials: "MS",
    location: "Dindigul, Tamil Nadu",
    tourTaken: "Kashmir Paradise Tour (Srinagar, Gulmarg & Pahalgam)",
    rating: 5,
    date: "2 months ago",
    avatarBg: "bg-blue-600",
    content: "We traveled from Madurai to Srinagar for our family holiday. Dal Lake Shikara ride and Gulmarg Gondola tickets were all pre-arranged. No hidden surprises or last-minute hassles. True to their motto: Safe, Reliable & Personal.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Anitha & Karthik",
    initials: "AK",
    location: "Chennai, Tamil Nadu",
    tourTaken: "International Escape (Bali Luxury Villas & Ubud)",
    rating: 5,
    date: "1 month ago",
    avatarBg: "bg-emerald-600",
    content: "Gateway Holidays planned our dream Bali vacation. Private pool villa, floating breakfast, and Tanah Lot sunset temple visit. Even though we are in Chennai, their team in Madurai coordinated every single day flawlessly.",
    verified: true,
  },
];
