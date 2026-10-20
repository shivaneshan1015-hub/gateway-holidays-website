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
  ownerResponse?: string;
  ownerResponseDate?: string;
  verified: boolean;
  category: "all" | "corporate" | "hill-station" | "packages" | "hospitality";
}

export const googleReviews: GoogleReview[] = [
  {
    id: "g-rev-1",
    author: "principal SLCS",
    initials: "PS",
    location: "Subbalakshmi Lakshmipathy College, Madurai",
    tourTaken: "Institutional & Group Adventure Tour",
    category: "corporate",
    rating: 5,
    date: "2 months ago",
    avatarBg: "bg-blue-600",
    content: "Experienced the enjoyment with tasty food, Good Networking, lovely tourist places, and adventure thrills. Very nice Gateway members. Thank you all.",
    ownerResponse: "Hi Principal SLCS, thank you so much for the 5-star review and the wordings! We’re thrilled to hear you had a great experience with us. We look forward to welcoming you back soon!",
    ownerResponseDate: "2 months ago",
    verified: true,
  },
  {
    id: "g-rev-2",
    author: "sethuraman s",
    initials: "SS",
    location: "Madurai, Tamil Nadu",
    tourTaken: "Corporate Staff Tour & Flight Logistics",
    category: "corporate",
    rating: 5,
    date: "2 months ago",
    avatarBg: "bg-emerald-600",
    content: "This is second year iam sending our staffs with fly arrangements where excelent, and events conducting with interest by tour operator Mr Ramesh is appreciable. In total its worth maintaining relationships with this group for comming years.",
    ownerResponse: "Hi Sethuraman, thanks for taking the time to share your feedback! We’re so glad you enjoyed the arrangements that are made. I'll make sure to pass your kind words along to the team. See you again next time!",
    ownerResponseDate: "2 months ago",
    verified: true,
  },
  {
    id: "g-rev-3",
    author: "Ganesh Kumar",
    initials: "GK",
    location: "Tamil Nadu",
    tourTaken: "Munnar Hill Station Tour",
    category: "hill-station",
    rating: 5,
    date: "2 months ago",
    avatarBg: "bg-amber-600",
    content: "Super enjoy Munnar tour",
    ownerResponse: "Hi Ganesh Kumar, thank you so much for the 5-star review! We’re thrilled to hear you had a great experience with us. We look forward to welcoming you back soon!",
    ownerResponseDate: "2 months ago",
    verified: true,
  },
  {
    id: "g-rev-4",
    author: "Rosario Susan",
    initials: "RS",
    location: "Tamil Nadu",
    tourTaken: "Customized Holiday Package",
    category: "packages",
    rating: 5,
    date: "1 month ago",
    avatarBg: "bg-rose-500",
    content: "Very good and reasonable price packages",
    ownerResponse: "Thank You.",
    ownerResponseDate: "1 month ago",
    verified: true,
  },
  {
    id: "g-rev-5",
    author: "Mahimai Rajan",
    initials: "MR",
    location: "Madurai, Tamil Nadu",
    tourTaken: "Family Vacation & Hospitality",
    category: "hospitality",
    rating: 5,
    date: "2 months ago",
    avatarBg: "bg-purple-600",
    content: "Excellent Hospitality's",
    ownerResponse: "Thank you for your review.",
    ownerResponseDate: "2 months ago",
    verified: true,
  },
];
