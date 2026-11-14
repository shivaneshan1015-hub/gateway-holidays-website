export type TourCategory = 
  | "south-india"
  | "heritage-temple"
  | "adventure-trekking"
  | "island"
  | "north-india"
  | "international";

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  bullets?: string[];
  activities: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  daysCount: number;
  nightsCount: number;
  destination: string;
  pickupAssistance: string;
  startingHub?: string; // Kept as backwards compatible fallback for "Flexible On-Arrival Pickup"
  image: string;
  theme: "Family" | "Honeymoon" | "Adventure" | "Pilgrimage" | "Luxury" | "Group";
  badge?: string;
  isFeatured?: boolean;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  stayStyle: string;
  transportIncluded: string;
  itinerary: ItineraryDay[];
  relatedTourSlugs: string[];
  bestTime?: string;
  gettingThere?: string;
  faqs?: { question: string; answer: string }[];
}

export const tourCategories = [
  {
    id: "south-india",
    name: "South India Tours",
    subtitle: "Misty hill stations, serene backwaters & tea plantations",
    icon: "Mountain",
    badge: "Most Popular",
    heroImage: "/images/categories/south-india.webp",
  },
  {
    id: "heritage-temple",
    name: "Heritage & Temple Tours",
    subtitle: "Sacred pilgrimage circuits, ancient architectural wonders & sacred temples",
    icon: "Landmark",
    badge: "Spiritual",
    heroImage: "/images/categories/heritage-temple.webp",
  },
  {
    id: "adventure-trekking",
    name: "Adventure & Trekking Tours",
    subtitle: "Sunrise jeep safaris, high-altitude cloud walks & theme park adventures",
    icon: "Compass",
    badge: "Thrill & Safari",
    heroImage: "/images/categories/adventure-trekking.webp",
  },
  {
    id: "island",
    name: "Island & Beach Tours",
    subtitle: "Turquoise lagoons, white coral beaches & romantic coastal resorts",
    icon: "Palmtree",
    badge: "Exotic Escapes",
    heroImage: "/images/categories/island.webp",
  },
  {
    id: "north-india",
    name: "North India Tours",
    subtitle: "Snow-capped Himalayan peaks, royal palaces & sacred ghats",
    icon: "Sparkles",
    badge: "Royal & Alpine",
    heroImage: "/images/categories/north-india.webp",
  },
  {
    id: "international",
    name: "International Tours",
    subtitle: "Tropical luxury pool villas, skyline wonders & global holiday gateways",
    icon: "Plane",
    badge: "Passport Ready",
    heroImage: "/images/categories/international.webp",
  },
];

export const tourPackages: TourPackage[] = [
  {
    "id": "kanyakumari-thiruvananthapuram",
    "slug": "kanyakumari-thiruvananthapuram",
    "title": "Kanyakumari & Thiruvananthapuram",
    "subtitle": "Kanyakumari and Trivandrum tour package from Madurai: sunrise, Vivekananda Rock, Padmanabhaswamy Temple and Kovalam beach in 2 days, private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanyakumari & Thiruvananthapuram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kanyakumari-thiruvananthapuram.webp",
    "theme": "Family",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 2-day Kanyakumari and Thiruvananthapuram tour package from Madurai pairs India's southern tip with Kerala's capital. Day one is Kanyakumari: the Vivekananda Rock Memorial, Thiruvalluvar Statue, the Bhagavathy Amman Temple and the sunset. Next morning, after sunrise, you drive about 90 km to Thiruvananthapuram for darshan at the Sree Padmanabhaswamy Temple and an evening at Kovalam beach before the drop. It works well as a circuit: start from Madurai, and finish at Thiruvananthapuram airport or station, or come back to Madurai in the same cab.",
    "highlights": [
      "Kanyakumari sunrise and sunset",
      "Vivekananda Rock Memorial and Thiruvalluvar Statue",
      "Sree Padmanabhaswamy Temple darshan",
      "Kovalam beach and lighthouse",
      "Padmanabhapuram Palace on the way",
      "Drop at Trivandrum or return to Madurai"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kanyakumari",
        "location": "Kanyakumari",
        "description": "Drive to Kanyakumari for the rock memorial and sunset.",
        "bullets": [
          "Pickup from Madurai (about 245 km, 4.5 hours)",
          "Ferry to Vivekananda Rock and Thiruvalluvar Statue",
          "Bhagavathy Amman Temple",
          "Sunset and overnight in Kanyakumari"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Kanyakumari to Thiruvananthapuram",
        "location": "Thiruvananthapuram",
        "description": "Sunrise, then Kerala's capital and Kovalam.",
        "bullets": [
          "Sunrise at Kanyakumari",
          "Padmanabhapuram Palace on the way (closed Mondays)",
          "Sree Padmanabhaswamy Temple darshan (dress code applies)",
          "Kovalam beach and lighthouse",
          "Drop at Trivandrum airport or station, or return to Madurai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "varkala-jatayu-earths-center-tour",
      "bangalore",
      "varkala"
    ],
    "bestTime": "October to March. The Kerala monsoon (June–September) brings heavy rain but green views.",
    "gettingThere": "Start from Madurai (about 245 km to Kanyakumari). The trip can end at Thiruvananthapuram airport or railway station, about 90 km from Kanyakumari.",
    "faqs": [
      {
        "question": "How far is Thiruvananthapuram from Kanyakumari?",
        "answer": "About 90 km, roughly 2.5 hours by road."
      },
      {
        "question": "What is the dress code for Padmanabhaswamy Temple?",
        "answer": "Men wear a mundu or dhoti with no shirt; women wear a saree or long skirt and blouse. Dhotis can be rented near the temple. Phones are not allowed inside."
      },
      {
        "question": "Can the trip end in Thiruvananthapuram instead of Madurai?",
        "answer": "Yes. We can drop you at Trivandrum airport or Trivandrum Central railway station."
      }
    ]
  },
  {
    "id": "goa-island-beach-tour",
    "slug": "goa-island-beach-tour",
    "title": "Goa Island & Beach Tour",
    "subtitle": "Goa tour package: North and South Goa beaches, Old Goa churches, Fort Aguada and a Grand Island boat trip in 4 days, with private cab.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "3 Nights / 4 Days",
    "daysCount": 4,
    "nightsCount": 3,
    "destination": "Goa",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/goa-island-beach-tour.webp",
    "theme": "Honeymoon",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 4-day Goa tour package covers the best of both North and South Goa. You fly into Goa (Dabolim or Mopa airport) and we pick you up. Day one and two cover North Goa: Calangute, Baga and Anjuna beaches, Fort Aguada and a boat trip to Grand Island for snorkelling and dolphin spotting. Day three goes south to the quieter Colva, Palolem and Cabo de Rama, and day four covers the UNESCO-listed churches of Old Goa before your drop. It suits couples and friends looking for beaches, food and an easy pace.",
    "highlights": [
      "Grand Island boat trip and snorkelling",
      "Calangute, Baga and Anjuna beaches",
      "Fort Aguada",
      "Palolem and Cabo de Rama in South Goa",
      "Basilica of Bom Jesus, Old Goa",
      "Fontainhas Latin Quarter, Panaji"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 3 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in North Goa",
        "location": "North Goa",
        "description": "Pickup and the first beach evening.",
        "bullets": [
          "Pickup from Goa airport (Dabolim or Mopa) or Madgaon station",
          "Check-in in North Goa",
          "Sunset at Calangute or Baga"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Grand Island and North Goa",
        "location": "North Goa",
        "description": "Boat trip, then the fort and beaches.",
        "bullets": [
          "Grand Island boat trip with snorkelling (weather permitting)",
          "Fort Aguada",
          "Anjuna and Vagator beaches"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "South Goa Beaches",
        "location": "South Goa",
        "description": "The quieter south coast.",
        "bullets": [
          "Colva and Benaulim",
          "Cabo de Rama fort",
          "Palolem beach at sunset"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Old Goa and Departure",
        "location": "Old Goa, Panaji",
        "description": "Churches and the Latin Quarter, then drop.",
        "bullets": [
          "Basilica of Bom Jesus and Se Cathedral",
          "Fontainhas in Panaji",
          "Drop at the airport or station"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "lakshadweep-tour",
      "varkala-munroe-island-tour",
      "andaman-nicobar-islands-tour"
    ],
    "bestTime": "November to February. Boat trips do not run in the June–September monsoon.",
    "gettingThere": "Fly to Goa from Madurai, usually via Chennai, Bengaluru or Hyderabad. Madgaon station is on the Konkan line.",
    "faqs": [
      {
        "question": "North Goa or South Goa: which is better?",
        "answer": "North Goa is lively with more shacks and nightlife. South Goa is quieter with cleaner beaches. This package covers both."
      },
      {
        "question": "Are water sports safe in Goa?",
        "answer": "Use only licensed operators on recognised beaches, and wear life jackets. Water sports usually stop during the monsoon."
      },
      {
        "question": "Is Goa good for a family trip?",
        "answer": "Yes. South Goa beaches, Old Goa churches and boat trips suit families."
      }
    ]
  },
  {
    "id": "lakshadweep-tour",
    "slug": "lakshadweep-tour",
    "title": "Lakshadweep - Coral Island",
    "subtitle": "Lakshadweep tour package: Agatti lagoon, Bangaram and Thinnakara islands, snorkelling and scuba diving in 5 days. Entry permit help included.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Lakshadweep - Coral Island",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/lakshadweep-tour.webp",
    "theme": "Honeymoon",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 5-day Lakshadweep tour package takes you to India's coral islands in the Arabian Sea. Visitors need an entry permit from the Lakshadweep Administration, and we help you with the application well before travel. You fly from Kochi to Agatti, the only airport, and stay near the lagoon. The plan includes snorkelling over the reef, a glass-bottom boat ride, kayaking, a day trip to the uninhabited Bangaram and Thinnakara islands, and a try-scuba dive with a certified dive centre. It suits couples and divers who want clear water and very few people.",
    "highlights": [
      "Agatti lagoon and coral beaches",
      "Snorkelling over the reef",
      "Try-scuba dive with a certified centre",
      "Bangaram and Thinnakara islands",
      "Glass-bottom boat and kayaking",
      "Quiet island evenings"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Fly to Agatti",
        "location": "Agatti",
        "description": "Kochi to Agatti flight and the first lagoon evening.",
        "bullets": [
          "Flight from Kochi to Agatti",
          "Pickup and check-in",
          "Sunset on the lagoon beach"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Bangaram Island",
        "location": "Bangaram",
        "description": "Boat to Bangaram for the day.",
        "bullets": [
          "Boat to Bangaram island",
          "Snorkelling and beach time",
          "Return to Agatti"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Scuba and Lagoon Activities",
        "location": "Agatti",
        "description": "Try-scuba and water activities.",
        "bullets": [
          "Try-scuba dive with a certified dive centre",
          "Glass-bottom boat ride",
          "Kayaking in the lagoon"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Thinnakara Island",
        "location": "Thinnakara",
        "description": "Day trip to Thinnakara.",
        "bullets": [
          "Boat to Thinnakara",
          "Snorkelling and beach walk",
          "Return to Agatti"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Departure",
        "location": "Agatti",
        "description": "Morning swim and flight back.",
        "bullets": [
          "Free morning",
          "Flight back to Kochi"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "varkala-munroe-island-tour",
      "andaman-nicobar-islands-tour"
    ],
    "bestTime": "October to May. Boats and flights are often disrupted in the June–September monsoon.",
    "gettingThere": "Fly to Agatti from Kochi. Kochi is about 260 km from Madurai, or a short flight away.",
    "faqs": [
      {
        "question": "Do Indians need a permit for Lakshadweep?",
        "answer": "Yes. All visitors need an entry permit from the Lakshadweep Administration, along with a police clearance certificate. We guide you through the process."
      },
      {
        "question": "Is scuba diving in Lakshadweep safe for beginners?",
        "answer": "Yes. Try-scuba dives are done in shallow water with a certified instructor. A short medical form is required."
      },
      {
        "question": "How do we reach Lakshadweep from Madurai?",
        "answer": "Travel to Kochi by road or air, then take the flight to Agatti."
      }
    ]
  },
  {
    "id": "sri-lanka-tour",
    "slug": "sri-lanka-tour",
    "title": "Sri Lanka",
    "subtitle": "Sri Lanka tour package from Tamil Nadu: Sigiriya, Kandy, Nuwara Eliya, Mirissa and Galle in 6 days, with private car, driver and hotels.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Sri Lanka",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/sri-lanka-tour.webp",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 6-day Sri Lanka tour package from Tamil Nadu covers the island's culture, hills and coast. Colombo is a short flight from Chennai or Tiruchirappalli. You travel by private car with an English-speaking driver throughout. The route goes from Sigiriya Rock Fortress and the Dambulla cave temple to Kandy's Temple of the Tooth and the Peradeniya gardens, up to the tea country of Nuwara Eliya, and down to the south coast for whale watching at Mirissa (in season) and Galle Fort, before a Colombo city tour and your flight home.",
    "highlights": [
      "Sigiriya Rock Fortress",
      "Dambulla cave temple",
      "Temple of the Tooth, Kandy",
      "Nuwara Eliya tea country",
      "Whale watching at Mirissa (November–April)",
      "Galle Fort"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive and Drive to Sigiriya",
        "location": "Sigiriya",
        "description": "Pickup at Colombo airport and the drive to the cultural triangle.",
        "bullets": [
          "Pickup from Colombo airport",
          "Drive to Sigiriya area",
          "Dambulla cave temple on the way (time permitting)"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Sigiriya to Kandy",
        "location": "Kandy",
        "description": "Climb Sigiriya, then drive to Kandy.",
        "bullets": [
          "Sigiriya Rock Fortress in the morning",
          "Spice garden stop",
          "Temple of the Tooth evening ceremony"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Kandy to Nuwara Eliya",
        "location": "Nuwara Eliya",
        "description": "Gardens and the climb into tea country.",
        "bullets": [
          "Peradeniya Botanical Gardens",
          "Tea factory visit",
          "Nuwara Eliya town and Gregory Lake"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Nuwara Eliya to the South Coast",
        "location": "Mirissa",
        "description": "Drive down to the beaches.",
        "bullets": [
          "Scenic drive via Ella (optional stop)",
          "Check-in at Mirissa",
          "Evening at the beach"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Whale Watching and Galle",
        "location": "Mirissa, Galle",
        "description": "Morning boat and the old fort.",
        "bullets": [
          "Whale watching boat (November–April)",
          "Galle Fort walk",
          "Drive towards Colombo"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Colombo and Departure",
        "location": "Colombo",
        "description": "City tour, then the airport.",
        "bullets": [
          "Gangaramaya Temple and Galle Face Green",
          "Shopping in Colombo",
          "Drop at Colombo airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "singapore-tour",
      "malaysia-tour",
      "vietnam-tour"
    ],
    "bestTime": "December to April for the west and south coasts and hills. Whale watching at Mirissa runs from about November to April.",
    "gettingThere": "Fly to Colombo from Chennai, Tiruchirappalli or other South Indian airports. Check current flight options from Madurai.",
    "faqs": [
      {
        "question": "Do Indians need a visa for Sri Lanka?",
        "answer": "Indian travellers need an Electronic Travel Authorisation (ETA) or visa as per current Sri Lankan rules, which have changed often. We guide you on the current process before you book."
      },
      {
        "question": "Is Sri Lanka good for a family trip?",
        "answer": "Yes. Distances are short, and the mix of temples, tea hills and beaches suits all ages."
      },
      {
        "question": "Which currency should we carry?",
        "answer": "Sri Lankan rupees for local spending. Cards are accepted in most hotels and larger shops; carry some cash for small places."
      }
    ]
  },
  {
    "id": "singapore-tour",
    "slug": "singapore-tour",
    "title": "Singapore",
    "subtitle": "Singapore tour package: Gardens by the Bay, Sentosa and Universal Studios, Night Safari and city tour in 5 days, with hotel and transfers.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Singapore",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/singapore-tour.webp",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 5-day Singapore tour package covers the city's top attractions at a family-friendly pace. Singapore has direct flights from Tiruchirappalli and Chennai, which suit travellers from Madurai. You stay in a central hotel with airport transfers. The plan includes a city tour with the Merlion and Marina Bay, Gardens by the Bay and its evening light show, a full day at Sentosa with Universal Studios, and the Night Safari. There is free time for Little India, Orchard Road and the Marina Bay Sands observation deck. Attraction tickets can be added to the package.",
    "highlights": [
      "Gardens by the Bay and Supertree light show",
      "Sentosa and Universal Studios Singapore",
      "Night Safari",
      "Merlion Park and Marina Bay",
      "Singapore River cruise",
      "Little India and Orchard Road"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Singapore",
        "location": "Singapore",
        "description": "Airport transfer and an evening at Marina Bay.",
        "bullets": [
          "Pickup from Changi airport",
          "Hotel check-in",
          "Marina Bay evening walk"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "City Tour and Gardens by the Bay",
        "location": "Singapore",
        "description": "City highlights and the gardens at night.",
        "bullets": [
          "City tour: Merlion, Chinatown, Little India",
          "Gardens by the Bay",
          "Supertree light show"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Sentosa and Universal Studios",
        "location": "Sentosa",
        "description": "A full day on Sentosa island.",
        "bullets": [
          "Universal Studios Singapore",
          "Sentosa beaches or cable car",
          "Evening show on Sentosa (optional)"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Zoo and Night Safari",
        "location": "Singapore",
        "description": "Free morning, then the wildlife parks.",
        "bullets": [
          "Free morning for shopping",
          "Singapore Zoo or River Wonders",
          "Night Safari"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Departure",
        "location": "Singapore",
        "description": "Last shopping and the airport.",
        "bullets": [
          "Orchard Road or Mustafa Centre",
          "Transfer to Changi airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "malaysia-tour",
      "vietnam-tour"
    ],
    "bestTime": "Pleasant all year. February to April is drier; November to January brings more rain.",
    "gettingThere": "Direct flights from Tiruchirappalli and Chennai. Madurai to Trichy airport is about 140 km.",
    "faqs": [
      {
        "question": "Do Indians need a visa for Singapore?",
        "answer": "Yes. Indian passport holders need a Singapore visa, applied through authorised agents. We guide you through the documents."
      },
      {
        "question": "Is Singapore good for a family trip with kids?",
        "answer": "Yes. Universal Studios, the zoo, Night Safari and Sentosa make it one of the easiest family destinations."
      },
      {
        "question": "Is vegetarian food easy to find in Singapore?",
        "answer": "Yes. Little India has many South Indian vegetarian restaurants, and most food courts have vegetarian options."
      }
    ]
  },
  {
    "id": "malaysia-tour",
    "slug": "malaysia-tour",
    "title": "Malaysia",
    "subtitle": "Malaysia tour package: Kuala Lumpur, Batu Caves, Genting Highlands, Putrajaya, Cameron Highlands and Penang in 6 days, with hotels and transfers.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Malaysia",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/malaysia-tour.webp",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "This 6-day Malaysia tour package covers Kuala Lumpur, the hills and Penang. Malaysia has direct flights to Kuala Lumpur from Tiruchirappalli and Chennai. The trip starts in KL with the Petronas Twin Towers, Merdeka Square and the Batu Caves temple, then Genting Highlands by cable car and a day trip to Putrajaya. You then drive to the Cameron Highlands tea estates and continue to Penang for George Town's heritage streets and food before flying home from Penang or KL.",
    "highlights": [
      "Petronas Twin Towers",
      "Batu Caves temple",
      "Genting Highlands cable car",
      "Putrajaya",
      "Cameron Highlands tea estates",
      "George Town, Penang"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Kuala Lumpur",
        "location": "Kuala Lumpur",
        "description": "Airport transfer and the towers at night.",
        "bullets": [
          "Pickup from KL airport",
          "Hotel check-in",
          "Petronas Twin Towers in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Batu Caves and KL City",
        "location": "Kuala Lumpur",
        "description": "Temple caves and the city tour.",
        "bullets": [
          "Batu Caves (272 steps)",
          "Merdeka Square and King's Palace",
          "Bukit Bintang in the evening"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Genting Highlands and Putrajaya",
        "location": "Genting, Putrajaya",
        "description": "Hill resort and the government city.",
        "bullets": [
          "Genting Highlands by cable car",
          "Putrajaya mosque and lake",
          "Return to KL"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Cameron Highlands",
        "location": "Cameron Highlands",
        "description": "Tea country and cool weather.",
        "bullets": [
          "Drive to Cameron Highlands",
          "Tea plantation and strawberry farm",
          "Overnight in the hills"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Penang",
        "location": "Penang",
        "description": "Drive to Penang and George Town.",
        "bullets": [
          "Drive to Penang",
          "George Town street art and heritage walk",
          "Penang street food"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Departure",
        "location": "Penang",
        "description": "Penang Hill, then the airport.",
        "bullets": [
          "Penang Hill (if time allows)",
          "Drop at Penang airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "vietnam-tour"
    ],
    "bestTime": "December to February and June to August are drier on the west coast. Rain is possible all year.",
    "gettingThere": "Direct flights to Kuala Lumpur from Tiruchirappalli and Chennai. You can fly home from Penang or KL.",
    "faqs": [
      {
        "question": "Do Indians need a visa for Malaysia?",
        "answer": "Malaysia has allowed visa-free entry for Indian tourists for short stays in recent years, along with a digital arrival card. Rules change, so we confirm the current position before you book."
      },
      {
        "question": "Is Malaysia good for vegetarians?",
        "answer": "Yes. KL and Penang have many Indian vegetarian restaurants, especially in Brickfields and Little India."
      },
      {
        "question": "Can Malaysia and Singapore be combined?",
        "answer": "Yes. They are well connected by flight, bus and road. A 7 to 8 day combined trip is popular."
      }
    ]
  },
  {
    "id": "vietnam-tour",
    "slug": "vietnam-tour",
    "title": "Vietnam",
    "subtitle": "Vietnam tour package: Hanoi, Ha Long Bay overnight cruise, Hoi An, Ho Chi Minh City, Cu Chi tunnels and Mekong Delta in 7 days.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "6 Nights / 7 Days",
    "daysCount": 7,
    "nightsCount": 6,
    "destination": "Vietnam",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/vietnam-tour.webp",
    "theme": "Luxury",
    "isFeatured": true,
    "overview": "This 7-day Vietnam tour package covers the country from north to south. You start in Hanoi with the Old Quarter and Hoan Kiem Lake, then spend a night on a cruise among the limestone islands of Ha Long Bay. A domestic flight takes you to Da Nang for the lantern-lit old town of Hoi An. You finish in Ho Chi Minh City with the Cu Chi tunnels and a day in the Mekong Delta. Indian travellers need an e-visa, and we guide you through it. Flights from South India usually connect via Singapore, Kuala Lumpur or Bangkok, or direct from some Indian cities.",
    "highlights": [
      "Ha Long Bay overnight cruise",
      "Hanoi Old Quarter",
      "Hoi An ancient town",
      "Cu Chi tunnels",
      "Mekong Delta boat trip",
      "Vietnamese street food"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 6 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Hanoi",
        "location": "Hanoi",
        "description": "Pickup and the Old Quarter.",
        "bullets": [
          "Pickup from Hanoi airport",
          "Hotel check-in",
          "Old Quarter walk and Hoan Kiem Lake"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Hanoi City Tour",
        "location": "Hanoi",
        "description": "History and culture in Hanoi.",
        "bullets": [
          "Ho Chi Minh Mausoleum area and One Pillar Pagoda",
          "Temple of Literature",
          "Water puppet show"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Ha Long Bay Cruise",
        "location": "Ha Long Bay",
        "description": "Board an overnight cruise.",
        "bullets": [
          "Drive to Ha Long Bay",
          "Cruise among the limestone islands",
          "Kayaking or cave visit; overnight on board"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Ha Long to Hoi An",
        "location": "Hoi An",
        "description": "Back to Hanoi and fly to Da Nang.",
        "bullets": [
          "Morning on the cruise",
          "Flight to Da Nang",
          "Evening in Hoi An's lantern-lit old town"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Hoi An",
        "location": "Hoi An",
        "description": "Old town and countryside.",
        "bullets": [
          "Japanese Covered Bridge and old houses",
          "Optional cooking class or basket-boat ride",
          "Lantern boat ride at night"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Ho Chi Minh City and Cu Chi",
        "location": "Ho Chi Minh City",
        "description": "Fly south and visit the tunnels.",
        "bullets": [
          "Flight to Ho Chi Minh City",
          "Cu Chi tunnels",
          "Ben Thanh market in the evening"
        ],
        "activities": []
      },
      {
        "day": 7,
        "title": "Mekong Delta and Departure",
        "location": "Mekong Delta",
        "description": "River day trip, then the airport.",
        "bullets": [
          "Mekong Delta boat trip",
          "Return to Ho Chi Minh City",
          "Drop at the airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ],
    "bestTime": "Spring (February–April) and autumn (August–October) suit the whole country. Central Vietnam gets heavy rain from about September to December.",
    "gettingThere": "Fly from Chennai or other Indian cities to Hanoi, usually via Singapore, Kuala Lumpur or Bangkok, or direct from some cities. Fly home from Ho Chi Minh City.",
    "faqs": [
      {
        "question": "Do Indians need a visa for Vietnam?",
        "answer": "Yes. Indian travellers apply for a Vietnam e-visa online before travel. We help with the process."
      },
      {
        "question": "Is vegetarian food available in Vietnam?",
        "answer": "Yes, though less common than in India. Indian restaurants exist in Hanoi, Hoi An and Ho Chi Minh City, and Buddhist vegetarian restaurants are easy to find."
      },
      {
        "question": "Is the Ha Long Bay cruise safe?",
        "answer": "Cruises are regulated and can be cancelled in bad weather. We book licensed cruise operators."
      }
    ]
  },
  {
    "id": "bali-tour",
    "slug": "bali-tour",
    "title": "Bali - Indonesia",
    "subtitle": "Bali tour package: Ubud, Tegallalang rice terraces, Mount Batur, Tanah Lot, Uluwatu and Kecak dance in 6 days, with private car and hotels.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Bali",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/bali-tour.webp",
    "theme": "Luxury",
    "isFeatured": true,
    "overview": "This 6-day Bali tour package mixes culture, nature and beaches. Flights from South India usually connect through Singapore or Kuala Lumpur. You start with the sea temple of Tanah Lot at sunset, spend two days around Ubud with the Tegallalang rice terraces, the Monkey Forest and water temples, and get up early for the Mount Batur sunrise view (or a trek to the top). The trip ends in the south at Uluwatu cliff temple with the Kecak fire dance, and a day at the beach before your flight. It is one of the most popular honeymoon packages we plan.",
    "highlights": [
      "Tanah Lot sunset",
      "Tegallalang rice terraces",
      "Ubud Monkey Forest",
      "Mount Batur sunrise",
      "Uluwatu temple and Kecak dance",
      "South Bali beaches"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Bali and Tanah Lot",
        "location": "Bali",
        "description": "Airport pickup and the sea temple at sunset.",
        "bullets": [
          "Pickup from Bali (Denpasar) airport",
          "Hotel check-in",
          "Tanah Lot temple at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Ubud",
        "location": "Ubud",
        "description": "Move to Ubud and explore the town.",
        "bullets": [
          "Drive to Ubud",
          "Ubud Monkey Forest",
          "Ubud art market and palace"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Rice Terraces and Water Temples",
        "location": "Ubud",
        "description": "The central highlands.",
        "bullets": [
          "Tegallalang rice terraces",
          "Tirta Empul water temple",
          "Coffee plantation visit"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Mount Batur Sunrise",
        "location": "Kintamani",
        "description": "Early start for the volcano.",
        "bullets": [
          "Pre-dawn trek or viewpoint at Mount Batur",
          "Breakfast with volcano views",
          "Rest in the afternoon"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Uluwatu and Kecak Dance",
        "location": "Uluwatu",
        "description": "Move south for the cliff temple.",
        "bullets": [
          "Drive to South Bali",
          "Uluwatu temple",
          "Kecak fire dance at sunset"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Beach and Departure",
        "location": "South Bali",
        "description": "Beach time, then the airport.",
        "bullets": [
          "Free morning at the beach",
          "Drop at Bali airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ],
    "bestTime": "April to October is the dry season. November to March brings tropical rain, often in short bursts.",
    "gettingThere": "Fly from Chennai, Bengaluru or Tiruchirappalli, usually via Singapore or Kuala Lumpur, to Bali (Denpasar).",
    "faqs": [
      {
        "question": "Do Indians get visa on arrival in Bali?",
        "answer": "Indian passport holders can currently get an Indonesian visa on arrival or e-visa on arrival. Bali also charges a tourist levy. Rules change, so we confirm before you book."
      },
      {
        "question": "Is the Mount Batur trek difficult?",
        "answer": "It is a moderate two-hour climb in the dark with a guide. If you prefer not to trek, you can watch the sunrise from a viewpoint in Kintamani."
      },
      {
        "question": "Is Bali good for a honeymoon?",
        "answer": "Yes. We can plan private pool villas in Ubud or Seminyak. Tell us your preferences when you enquire."
      }
    ]
  },
  {
    "id": "munnar-trekking-tour",
    "slug": "munnar-trekking-tour",
    "title": "Munnar Trekking Tour - Western Ghats, Kerala",
    "subtitle": "Munnar trekking package from Madurai: Kolukkumalai sunrise jeep safari and a guided Western Ghats trek in 2 days, with private cab and stay.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Munnar",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/munnar-trekking-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Munnar trekking package from Madurai is for travellers who want the hills on foot rather than from viewpoints. After the drive in via Bodimettu, you settle in and do a short evening walk through the tea estates. Day two starts in the dark for the jeep safari to Kolukkumalai, a high tea estate near Suryanelli with sunrise views over the clouds, followed by a guided trek. Longer trails such as Meesapulimala need forest department permits and a licensed guide, and we arrange the trek that is open and suits your fitness on the date you travel. Expect early starts, uneven ground and real exercise.",
    "highlights": [
      "Kolukkumalai sunrise by 4x4 jeep from Suryanelli",
      "Guided trek on permitted Western Ghats trails",
      "Tea estate walks and birdwatching",
      "Views towards Anamudi, the highest peak in South India",
      "Stay close to the trailheads",
      "Private cab from Madurai"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Munnar and Tea Estate Walk",
        "location": "Munnar",
        "description": "Drive in via Bodimettu, check in near Suryanelli or Chinnakanal, and walk the estates.",
        "bullets": [
          "Pickup from Madurai (about 160 km, 4.5–5 hours)",
          "Check-in and trek briefing",
          "Evening tea estate walk",
          "Early dinner and rest before the pre-dawn start"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Kolukkumalai Sunrise and Guided Trek",
        "location": "Kolukkumalai, Munnar",
        "description": "Jeep to Kolukkumalai for sunrise, then a guided trek and return.",
        "bullets": [
          "4 am jeep from Suryanelli to Kolukkumalai",
          "Sunrise and a tea factory visit",
          "Guided trek on the trail open that day",
          "Lunch, then drive back to Madurai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour",
      "vagamon-adventure-tour"
    ],
    "bestTime": "September to March, when the trails are dry and the sunrise is clear. Most trails close in the June–August monsoon.",
    "gettingThere": "Munnar is about 160 km from Madurai via Bodimettu. Kolukkumalai is reached only by 4x4 jeep from Suryanelli.",
    "faqs": [
      {
        "question": "How difficult is the Kolukkumalai trip?",
        "answer": "The jeep ride is bumpy but needs no fitness. The walks at the top are short. The guided trek afterwards is moderate."
      },
      {
        "question": "Do we need permits for trekking in Munnar?",
        "answer": "Yes. Most trails such as Meesapulimala are run by the forest department or licensed operators with limited daily slots. We book the permit for you."
      },
      {
        "question": "What should we carry for the Munnar trek?",
        "answer": "Shoes with good grip, a light jacket for the cold morning, a raincoat, water and a torch for the pre-dawn jeep ride."
      }
    ]
  },
  {
    "id": "varkala-munroe-island-tour",
    "slug": "varkala-munroe-island-tour",
    "title": "Varkala & Munroe Island Tour - Kerala",
    "subtitle": "Munroe Island and Varkala tour package from Madurai: canoe ride in the backwater canals, cliff beach and Sivagiri in 3 days, with private cab.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "2 Nights / 3 Days",
    "daysCount": 3,
    "nightsCount": 2,
    "destination": "Varkala & Munroe Island Tour - Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/varkala-munroe-island-tour.webp",
    "theme": "Honeymoon",
    "isFeatured": false,
    "overview": "This 3-day Munroe Island and Varkala tour package from Madurai covers a quieter side of the Kerala backwaters. Munroe Island, near Kollam, is a group of small islands where narrow canals run between homes and coconut groves, and the best way to see it is by country canoe early in the morning. You spend the rest of the trip at Varkala: the cliff walk, Papanasam beach, the Janardhana Swamy Temple and a visit to the Sivagiri Mutt, the resting place of Sree Narayana Guru. It suits couples and photographers who like slow travel.",
    "highlights": [
      "Morning canoe ride through Munroe Island canals",
      "Coir making and village life",
      "Varkala cliff walk and sunsets",
      "Papanasam beach",
      "Janardhana Swamy Temple",
      "Sivagiri Mutt"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 2 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kollam",
        "location": "Kollam",
        "description": "Drive to Kollam and rest before the early canoe ride.",
        "bullets": [
          "Pickup from Madurai (about 220 km, 5–5.5 hours via Shencottai)",
          "Check-in near Kollam or Munroe Island",
          "Evening at Kollam beach"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Munroe Island Canoe and Varkala",
        "location": "Munroe Island, Varkala",
        "description": "Early canoe ride, then drive to Varkala for the cliff sunset.",
        "bullets": [
          "Sunrise canoe ride through the canals",
          "Village and coir making visit",
          "Drive to Varkala (about 40 km)",
          "Sunset on the cliff"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Varkala, Sivagiri and Return",
        "location": "Varkala",
        "description": "Beach, temple and Sivagiri, then the return.",
        "bullets": [
          "Papanasam beach and Janardhana Swamy Temple",
          "Sivagiri Mutt",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "lakshadweep-tour",
      "andaman-nicobar-islands-tour"
    ],
    "bestTime": "October to March. Early mornings are best for the canoe ride.",
    "gettingThere": "Kollam is about 220 km from Madurai via Shencottai and Punalur. Varkala is about 40 km from Munroe Island.",
    "faqs": [
      {
        "question": "What is the best time for the Munroe Island canoe ride?",
        "answer": "Early morning, around sunrise, when the canals are calm and the light is soft."
      },
      {
        "question": "How long is the Munroe Island canoe tour?",
        "answer": "Usually two to three hours, with a stop to see coir making or a local home."
      },
      {
        "question": "Is Munroe Island different from Alleppey?",
        "answer": "Yes. Munroe Island has narrow canals and small canoes, with no large houseboats. It is quieter and more about village life."
      }
    ]
  },
  {
    "id": "kanakapura-adventure-park-tour",
    "slug": "kanakapura-adventure-park-tour",
    "title": "Kanakapura Adventure Park Tour - Karnataka",
    "subtitle": "Kanakapura adventure tour from Bangalore: rock climbing, river activities, zipline and riverside camping in 2 days, with private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanakapura Adventure Park Tour - Karnataka",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kanakapura-adventure-park-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Kanakapura adventure tour is a short outdoor break about 60 km south of Bengaluru, among granite hills and the Kaveri river. You stay at a licensed riverside or forest camp and try activities such as rock climbing and rappelling with instructors, ziplining, coracle rides and kayaking, followed by a campfire evening. Day two adds a morning nature trail before you head back. Which water activities run depends on the river level and local permissions, so we confirm the list with the camp before you book. It suits college groups, corporate teams and families with older children.",
    "highlights": [
      "Rock climbing and rappelling with instructors",
      "Zipline and rope courses",
      "Coracle ride and kayaking (river level permitting)",
      "Riverside tent camping",
      "Campfire evening",
      "Morning nature trail"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Bengaluru to Kanakapura and Activities",
        "location": "Kanakapura",
        "description": "Drive to the camp and spend the afternoon on land activities.",
        "bullets": [
          "Pickup from Bengaluru (about 60 km, 1.5–2 hours)",
          "Check-in at the camp",
          "Rock climbing, rappelling and zipline",
          "Campfire and dinner"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "River Morning and Return",
        "location": "Kanakapura",
        "description": "Water activities and a nature trail, then drop.",
        "bullets": [
          "Coracle ride or kayaking (if the river allows)",
          "Morning nature trail",
          "Drop at Bengaluru"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "mysore-adventure-tour",
      "vagamon-adventure-tour"
    ],
    "bestTime": "October to February for pleasant weather. River activities depend on water levels after the monsoon.",
    "gettingThere": "Kanakapura is about 60 km from Bengaluru. Travellers from Madurai usually come by train or flight to Bengaluru.",
    "faqs": [
      {
        "question": "Is Kanakapura adventure camp safe for beginners?",
        "answer": "Yes. Activities are run by trained instructors with safety gear, and no experience is needed."
      },
      {
        "question": "Is white-water rafting available in Kanakapura?",
        "answer": "Rafting depends on river levels and permissions, which change by season. We confirm with the camp which water activities are open on your dates."
      },
      {
        "question": "Is this good for a corporate team outing?",
        "answer": "Yes. The camp can arrange team activities for groups. Tell us the group size when you enquire."
      }
    ]
  },
  {
    "id": "thailand-tour",
    "slug": "thailand-tour",
    "title": "Thailand",
    "subtitle": "Thailand tour package: Bangkok, Safari World, floating market, Phuket, Phi Phi Islands and James Bond Island in 7 days, with hotels and transfers.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "6 Nights / 7 Days",
    "daysCount": 7,
    "nightsCount": 6,
    "destination": "Thailand",
    "pickupAssistance": "Airport pickup on arrival",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/thailand-tour.webp",
    "theme": "Luxury",
    "isFeatured": false,
    "overview": "This 7-day Thailand tour package covers Bangkok and Phuket. Thailand has direct flights from Chennai and other Indian cities. In Bangkok you see the Grand Palace, Wat Pho and Wat Arun, and spend a day at the Damnoen Saduak floating market and Safari World. You then fly to Phuket for a speedboat trip to the Phi Phi Islands and Maya Bay, and a boat to Phang Nga Bay and James Bond Island, with a free day for the beach or Phuket Old Town. It is a popular package for families, friends and honeymooners.",
    "highlights": [
      "Grand Palace and Wat Pho",
      "Wat Arun",
      "Damnoen Saduak floating market",
      "Safari World and Marine Park",
      "Phi Phi Islands speedboat trip",
      "Phang Nga Bay and James Bond Island"
    ],
    "inclusions": [
      "Airport transfers and sightseeing by private vehicle as per itinerary",
      "Accommodation for 6 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets, visa fees and travel insurance",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Airport Transfers & Private Sightseeing Vehicle",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Bangkok",
        "location": "Bangkok",
        "description": "Pickup and an evening on the river.",
        "bullets": [
          "Pickup from Bangkok airport",
          "Hotel check-in",
          "Evening at Asiatique riverside market"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Bangkok Temples",
        "location": "Bangkok",
        "description": "Temples and the palace.",
        "bullets": [
          "Grand Palace and Emerald Buddha",
          "Wat Pho (reclining Buddha)",
          "Wat Arun"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Floating Market and Safari World",
        "location": "Bangkok",
        "description": "Day out from the city.",
        "bullets": [
          "Damnoen Saduak floating market",
          "Safari World and Marine Park",
          "Return to Bangkok"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Fly to Phuket",
        "location": "Phuket",
        "description": "Domestic flight and the beach.",
        "bullets": [
          "Flight to Phuket",
          "Hotel check-in",
          "Patong beach in the evening"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Phi Phi Islands",
        "location": "Phi Phi",
        "description": "Speedboat day trip.",
        "bullets": [
          "Speedboat to Phi Phi Islands",
          "Maya Bay and snorkelling",
          "Return to Phuket"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Phang Nga Bay",
        "location": "Phang Nga",
        "description": "Limestone islands by boat.",
        "bullets": [
          "Boat trip in Phang Nga Bay",
          "James Bond Island",
          "Canoeing among the sea caves"
        ],
        "activities": []
      },
      {
        "day": 7,
        "title": "Departure",
        "location": "Phuket",
        "description": "Free morning, then the airport.",
        "bullets": [
          "Phuket Old Town or beach",
          "Drop at Phuket airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ],
    "bestTime": "November to April. Island boat trips can be cancelled in the May–October monsoon.",
    "gettingThere": "Direct flights from Chennai and other Indian cities to Bangkok. Fly home from Phuket.",
    "faqs": [
      {
        "question": "Do Indians need a visa for Thailand?",
        "answer": "Thailand has allowed visa-free or visa-on-arrival entry for Indian tourists in recent years, with an online arrival card. The rules change, so we confirm the current position before you book."
      },
      {
        "question": "Is Thailand good for families?",
        "answer": "Yes. Safari World, the floating market, island trips and beaches suit families. We plan family-friendly hotels away from nightlife areas if you prefer."
      },
      {
        "question": "Is vegetarian food easy to find in Thailand?",
        "answer": "Yes. Bangkok and Phuket have many Indian restaurants, and Thai vegetarian (jay) food is available."
      }
    ]
  },
  {
    "id": "mysore-adventure-tour",
    "slug": "mysore-adventure-tour",
    "title": "Mysore Adventure Tour - Karnataka",
    "subtitle": "Mysore wildlife tour: Nagarhole or Kabini safari, Ranganathittu bird sanctuary and Shivanasamudra falls in 2 days, with private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Mysore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/mysore-adventure-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Mysore wildlife and adventure tour is for travellers who want forests and rivers rather than palaces. From Mysore you drive to the Kabini side of Nagarhole National Park for the forest department's jeep or boat safari, where elephants, gaur, deer and sometimes big cats are seen. Day two covers the Ranganathittu bird sanctuary boat ride on the Kaveri and the Shivanasamudra falls, then a short climb up Chamundi Hills for the view before your drop. Safaris are booked through the forest department, and slots are limited, so early booking matters.",
    "highlights": [
      "Nagarhole or Kabini forest safari",
      "Ranganathittu bird sanctuary boat ride",
      "Shivanasamudra falls (Gaganachukki and Bharachukki)",
      "Chamundi Hills viewpoint",
      "Kaveri riverside stay",
      "Private cab from Mysore or Bengaluru"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Mysore to Kabini and Evening Safari",
        "location": "Kabini, Nagarhole",
        "description": "Drive to Kabini for the afternoon forest safari.",
        "bullets": [
          "Pickup from Mysore or Bengaluru",
          "Drive to Kabini (about 80 km from Mysore)",
          "Afternoon jeep or boat safari (forest department slots)",
          "Overnight near Kabini"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Ranganathittu and Shivanasamudra",
        "location": "Srirangapatna, Shivanasamudra",
        "description": "Birds on the Kaveri, the twin falls, then drop.",
        "bullets": [
          "Ranganathittu bird sanctuary boat ride",
          "Shivanasamudra falls",
          "Chamundi Hills viewpoint if time allows",
          "Drop at Mysore or Bengaluru"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "vagamon-adventure-tour"
    ],
    "bestTime": "October to May for safaris. Ranganathittu is busiest with nesting birds from about December to June. Shivanasamudra is fullest after the monsoon.",
    "gettingThere": "The tour starts from Mysore or Bengaluru. Most travellers from Madurai arrive by overnight train or a flight to Bengaluru.",
    "faqs": [
      {
        "question": "How to book a Kabini or Nagarhole safari?",
        "answer": "Safaris are run by the forest department and some licensed lodges, with limited daily slots. We help you book as soon as your dates are confirmed; safari fees are not part of the package."
      },
      {
        "question": "Will we see a tiger on the safari?",
        "answer": "Sightings are never guaranteed. Elephants, deer, gaur and birds are commonly seen; tigers and leopards are a matter of luck."
      },
      {
        "question": "What is the best time to visit Ranganathittu?",
        "answer": "Early morning, between about December and June, when nesting birds are present in large numbers."
      }
    ]
  },
  {
    "id": "kashmir",
    "slug": "kashmir",
    "title": "Kashmir - Paradise on Earth",
    "subtitle": "Kashmir tour package: Srinagar houseboat, Dal Lake shikara, Gulmarg gondola, Pahalgam and Sonamarg in 6 days, with private cab and hotels.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Kashmir",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kashmir.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 6-day Kashmir tour package covers the valley's four classic stops: Srinagar, Gulmarg, Pahalgam and Sonamarg. You fly into Srinagar, usually via Chennai, Bengaluru or Delhi, and stay one night on a Dal Lake houseboat. The plan includes a shikara ride, the Mughal gardens, the Gulmarg gondola, the Lidder valley at Pahalgam and the Thajiwas glacier at Sonamarg. Some points in Pahalgam, Gulmarg and Sonamarg can only be reached by local union taxis or ponies, which are paid locally, and we tell you about these in advance so there are no surprises. Snow is usually around from December to March.",
    "highlights": [
      "Dal Lake houseboat night and shikara ride",
      "Mughal gardens: Nishat Bagh and Shalimar Bagh",
      "Gulmarg gondola",
      "Pahalgam and Betaab Valley",
      "Sonamarg and Thajiwas glacier",
      "Srinagar old city and markets"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Srinagar",
        "location": "Srinagar",
        "description": "Pickup, houseboat check-in and an evening shikara ride.",
        "bullets": [
          "Pickup from Srinagar airport",
          "Check-in on a Dal Lake houseboat",
          "Shikara ride at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Srinagar Gardens",
        "location": "Srinagar",
        "description": "Mughal gardens and the old city.",
        "bullets": [
          "Nishat Bagh and Shalimar Bagh",
          "Shankaracharya Temple viewpoint",
          "Old city markets and hotel check-in"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Gulmarg",
        "location": "Gulmarg",
        "description": "Day trip to the meadow and the gondola.",
        "bullets": [
          "Drive to Gulmarg (about 50 km)",
          "Gulmarg gondola (tickets booked online)",
          "Return to Srinagar"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Pahalgam",
        "location": "Pahalgam",
        "description": "Drive through saffron fields to the Lidder valley.",
        "bullets": [
          "Saffron fields and Avantipur ruins on the way",
          "Betaab Valley and Aru by local taxi",
          "Overnight in Pahalgam"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Sonamarg",
        "location": "Sonamarg",
        "description": "Day trip to the glacier valley.",
        "bullets": [
          "Drive to Sonamarg (about 80 km from Srinagar)",
          "Thajiwas glacier by pony or on foot",
          "Return to Srinagar"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Departure",
        "location": "Srinagar",
        "description": "Shopping and drop.",
        "bullets": [
          "Shopping for pashmina, dry fruits and saffron",
          "Drop at Srinagar airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kullu-manali",
      "golden-triangle-tour-delhi-agra-jaipur",
      "kanyakumari-thiruvananthapuram"
    ],
    "bestTime": "March to June for flowers and pleasant weather, September to November for autumn colours, December to February for snow.",
    "gettingThere": "Fly to Srinagar via Chennai, Bengaluru or Delhi. There are no direct flights from Madurai.",
    "faqs": [
      {
        "question": "Is a 6-day Kashmir trip enough?",
        "answer": "Six days cover Srinagar, Gulmarg, Pahalgam and Sonamarg. Add a day if you want Doodhpathri or more time in the snow."
      },
      {
        "question": "Why do we need local taxis in Pahalgam and Gulmarg?",
        "answer": "Local taxi unions control trips to points such as Aru, Betaab Valley and Chandanwari, and outside cabs are not allowed to go there. These costs are paid locally."
      },
      {
        "question": "When does it snow in Kashmir?",
        "answer": "Usually from December to February, sometimes into March. Gulmarg has the most reliable snow."
      }
    ]
  },
  {
    "id": "madurai-meenakshi-amman-temple-tour",
    "slug": "madurai-meenakshi-amman-temple-tour",
    "title": "Madurai Meenakshi Temple Tour - Tamil Nadu",
    "subtitle": "Meenakshi Amman Temple darshan tour from Madurai: temple timings, dress code help, Thiruparankundram and Alagar Kovil, with private cab and hotel.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Madurai",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/madurai-meenakshi-amman-temple-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This Meenakshi Amman Temple darshan tour is planned for pilgrims who want an unhurried visit to Madurai's great temple and the Murugan and Vishnu shrines around the city. We time your visit for the quieter morning hours and the evening palliyarai (night) ceremony, and your driver waits while you take darshan. The tour adds Thiruparankundram, the first of Lord Murugan's six abodes, and Alagar Kovil with Pazhamudircholai on the hill above it. Stay is in a clean hotel close to the temple, so you can walk back for a second darshan. It suits elderly parents and families because the plan keeps walking and waiting time low.",
    "highlights": [
      "Meenakshi Amman and Sundareswarar darshan",
      "Evening palliyarai ceremony at Meenakshi Temple",
      "Thiruparankundram, Lord Murugan's first abode",
      "Alagar Kovil and Pazhamudircholai",
      "Thousand Pillar Hall and its musical pillars",
      "Hotel near the temple for easy repeat darshan"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Meenakshi Temple Darshan",
        "location": "Madurai",
        "description": "Arrival, check-in close to the temple, and darshan with time to explore the halls.",
        "bullets": [
          "Pickup from Madurai airport, railway station or your hotel",
          "Check-in at a hotel near the temple",
          "Meenakshi Amman and Sundareswarar darshan, Golden Lotus Tank and Thousand Pillar Hall",
          "Evening palliyarai (night ceremony) if you wish to stay on"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Thiruparankundram and Alagar Kovil",
        "location": "Madurai",
        "description": "Murugan and Vishnu temples around Madurai, then drop.",
        "bullets": [
          "Early morning darshan at Thiruparankundram Murugan temple",
          "Drive to Alagar Kovil (Kallazhagar) and Pazhamudircholai",
          "Lunch and prasadam shopping in Madurai",
          "Drop at the station, airport or your home"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour",
      "tiruchendur-rameshwaram"
    ],
    "bestTime": "Any time of year. Mornings before 9 am and late evenings are the least crowded. Avoid weekends and festival days if you want a quick darshan.",
    "gettingThere": "We pick you up at Madurai Airport (IXM), Madurai Junction or your hotel. Pilgrims from nearby towns can be picked up from home.",
    "faqs": [
      {
        "question": "What are the Meenakshi Amman Temple timings?",
        "answer": "The temple usually opens around 5 am, closes for a break in the early afternoon and reopens in the evening until about 10 pm. Timings change on festival days, so we confirm them before your visit."
      },
      {
        "question": "Is there a special darshan ticket at Meenakshi Temple?",
        "answer": "Yes, the temple sells special entry tickets that shorten the queue. We tell you where to buy them on the day; ticket costs are not part of the package."
      },
      {
        "question": "Can elderly people do this temple tour comfortably?",
        "answer": "Yes. The cab drops you close to the gates, the hotel is near the temple, and we avoid the steep climb at Pazhamudircholai if needed."
      }
    ]
  },
  {
    "id": "thanjavur-big-temple-tour",
    "slug": "thanjavur-big-temple-tour",
    "title": "Thanjavur Big Temple Tour - Brihadeeswarar",
    "subtitle": "Thanjavur Big Temple pilgrimage tour from Madurai: Brihadeeswarar darshan, Gangaikonda Cholapuram and Darasuram, with private cab and hotel.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thanjavur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/thanjavur-big-temple-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Thanjavur Big Temple tour from Madurai is planned for pilgrims and history lovers who want to see all three Great Living Chola Temples, the group that UNESCO lists together. Day one is the Brihadeeswarar Temple in Thanjavur, with darshan, the giant Nandi and the evening lighting. Day two goes to the Airavatesvara Temple at Darasuram and Gangaikonda Cholapuram, the temple built by Rajendra Chola, before returning to Madurai. Your driver handles the long day so you can spend your time inside the temples.",
    "highlights": [
      "Brihadeeswarar Temple darshan and the giant Nandi",
      "Airavatesvara Temple at Darasuram",
      "Gangaikonda Cholapuram temple",
      "All three Great Living Chola Temples",
      "Big Temple evening lighting",
      "Private cab for the long temple day"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Thanjavur Big Temple",
        "location": "Thanjavur",
        "description": "Drive to Thanjavur for darshan and the evening lighting.",
        "bullets": [
          "Pickup from Madurai (about 190 km, 3.5–4 hours)",
          "Check-in near the temple",
          "Brihadeeswarar Temple darshan and Nandi mandapam",
          "Evening temple lighting"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Darasuram and Gangaikonda Cholapuram",
        "location": "Darasuram, Gangaikonda Cholapuram",
        "description": "The other two Great Living Chola Temples, then the drive back.",
        "bullets": [
          "Airavatesvara Temple at Darasuram (about 35 km)",
          "Gangaikonda Cholapuram (about 70 km from Thanjavur)",
          "Lunch in Kumbakonam",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "velankanni-shrine-tour",
      "tiruchendur-rameshwaram"
    ],
    "bestTime": "October to March. Mornings and evenings are best, as the stone courtyards get very hot at midday.",
    "gettingThere": "Thanjavur is about 190 km from Madurai. Pickup is also possible from Trichy airport or Thanjavur Junction.",
    "faqs": [
      {
        "question": "What are the Great Living Chola Temples?",
        "answer": "They are the Brihadeeswarar Temple in Thanjavur, the Airavatesvara Temple at Darasuram and the Gangaikonda Cholapuram temple, listed together by UNESCO."
      },
      {
        "question": "What are the Thanjavur Big Temple timings?",
        "answer": "The temple usually opens early morning, closes for a few hours after midday and reopens in the evening until about 8:30 pm. We confirm current timings before you go."
      },
      {
        "question": "Is photography allowed at the Big Temple?",
        "answer": "Photography is allowed in the courtyard but not inside the sanctum."
      }
    ]
  },
  {
    "id": "velankanni-shrine-tour",
    "slug": "velankanni-shrine-tour",
    "title": "Velankanni Shrine Tour - Our Lady of Health",
    "subtitle": "Velankanni church tour package from Madurai: Basilica of Our Lady of Good Health, Holy Path, Nagore and Nagapattinam in 2 days, with private cab.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Velankanni",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/velankanni-shrine-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Velankanni tour package from Madurai takes you to the Basilica of Our Lady of Good Health, one of India's most visited Christian shrines. The drive is about 270 km, roughly 5 to 5.5 hours via Thanjavur. You attend Mass in the language of your choice, walk the Holy Path to Our Lady's Tank and visit the Shrine Museum. On day two there is time for the morning Mass and the beach before a short visit to the Nagore Dargah and Nagapattinam, then the return drive. A private cab with a driver makes the long road trip easy for elders and families.",
    "highlights": [
      "Basilica of Our Lady of Good Health",
      "Mass in Tamil, English, Malayalam and other languages",
      "Holy Path and Our Lady's Tank",
      "Shrine museum",
      "Velankanni beach",
      "Optional Nagore Dargah visit"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Velankanni",
        "location": "Velankanni",
        "description": "Drive via Thanjavur, check in near the basilica, and attend the evening service.",
        "bullets": [
          "Pickup from Madurai (about 270 km, 5–5.5 hours)",
          "Check-in near the basilica",
          "Visit the basilica and the Shrine Museum",
          "Evening Mass and candle procession"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Morning Mass, Holy Path and Return",
        "location": "Velankanni, Nagore",
        "description": "Morning prayers, the Holy Path, then the drive back.",
        "bullets": [
          "Morning Mass",
          "Walk the Holy Path to Our Lady's Tank",
          "Velankanni beach",
          "Optional Nagore Dargah (about 15 km)",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "tiruchendur-rameshwaram"
    ],
    "bestTime": "October to March. The annual feast from 29 August to 8 September draws lakhs of pilgrims; book well ahead if you plan to go then.",
    "gettingThere": "Velankanni is about 270 km from Madurai via Thanjavur (5–5.5 hours). Velankanni also has a railway station with direct trains from several cities.",
    "faqs": [
      {
        "question": "How far is Velankanni from Madurai?",
        "answer": "About 270 km, roughly 5 to 5.5 hours by road via Thanjavur and Thiruvarur."
      },
      {
        "question": "When is the Velankanni festival?",
        "answer": "The annual feast runs from 29 August to 8 September, ending on the feast of the Nativity of Mary. It is the busiest time of the year."
      },
      {
        "question": "Can we visit Velankanni in one day from Madurai?",
        "answer": "It is a 10 to 11 hour round trip by road, so we recommend one night to attend Mass without rushing."
      }
    ]
  },
  {
    "id": "varkala-jatayu-earths-center-tour",
    "slug": "varkala-jatayu-earths-center-tour",
    "title": "Varkala & Jatayu Earth Center Tour - Kerala",
    "subtitle": "Jatayu Earth's Center and Varkala tour from Madurai: cable car, Jatayu sculpture, cliff beach and Papanasam in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Varkala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/varkala-jatayu-earths-center-tour.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Jatayu Earth's Center and Varkala tour from Madurai starts with the hilltop park at Chadayamangalam, where a cable car takes you up to a giant rock sculpture of Jatayu, the bird from the Ramayana, with wide views over the Kerala countryside. After the visit you continue about 40 km to Varkala for the evening on the cliffs. Day two is the beach, Papanasam and the Janardhana Swamy Temple before the drive back. It is a good mix for families with children who want one big attraction and a beach.",
    "highlights": [
      "Cable car up to Jatayu Earth's Center",
      "Jatayu rock sculpture and viewpoints",
      "Varkala cliff sunset",
      "Papanasam beach",
      "Janardhana Swamy Temple",
      "Cliff-top cafes"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Jatayu Earth's Center and Varkala",
        "location": "Chadayamangalam, Varkala",
        "description": "Drive to Chadayamangalam for the park, then on to Varkala.",
        "bullets": [
          "Early pickup from Madurai (about 220 km to Chadayamangalam via Shencottai)",
          "Cable car and Jatayu sculpture",
          "Drive to Varkala (about 40 km)",
          "Sunset on the cliff"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Varkala Beach and Return",
        "location": "Varkala",
        "description": "Beach and temple in the morning, then the return.",
        "bullets": [
          "Papanasam beach",
          "Janardhana Swamy Temple",
          "Cliff walk and lunch",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "bangalore",
      "varkala"
    ],
    "bestTime": "October to March. The park can close in very heavy rain.",
    "gettingThere": "Jatayu Earth's Center is about 220 km from Madurai via Shencottai and Punalur. Varkala is about 40 km further.",
    "faqs": [
      {
        "question": "Is Jatayu Earth's Center open every day?",
        "answer": "It is usually closed on some weekdays and its timings change by season. We check before your trip and plan the day around it."
      },
      {
        "question": "Is the cable car included?",
        "answer": "Entry and cable car tickets are paid at the park and are not part of the package. We help you book them online."
      },
      {
        "question": "Is Jatayu Earth's Center suitable for elders?",
        "answer": "Yes, the cable car takes you to the top. There is some walking on the summit, so comfortable shoes help."
      }
    ]
  },
  {
    "id": "vagamon-adventure-tour",
    "slug": "vagamon-adventure-tour",
    "title": "Vagamon Adventure Tour - Paragliding, Kerala",
    "subtitle": "Vagamon adventure package from Madurai: paragliding (in season), meadow treks, pine forest and Kurisumala jeep ride in 2 days, private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Vagamon",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/vagamon-adventure-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Vagamon adventure package from Madurai is for groups who want activity in the hills. Vagamon's open meadows and steady winds make it one of Kerala's main paragliding spots, and tandem flights with licensed pilots run in the dry season when the weather allows. Around that, you trek across the meadows, walk the pine forest, and take a jeep up to Kurisumala. If paragliding is closed on your date because of wind or rain, we replace it with a longer trek. Expect early starts and some walking on uneven ground.",
    "highlights": [
      "Tandem paragliding with licensed pilots (season and weather permitting)",
      "Meadow and ridge trekking",
      "Pine forest walk",
      "Jeep ride to Kurisumala",
      "Campfire evening at the stay",
      "Thangal Para sunset"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Vagamon and Meadow Trek",
        "location": "Vagamon",
        "description": "Drive in via Kumily, then a guided meadow trek and evening campfire.",
        "bullets": [
          "Pickup from Madurai (about 200 km, 5 hours)",
          "Check-in at a stay near the meadows",
          "Guided meadow and ridge trek",
          "Campfire evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Paragliding and Kurisumala",
        "location": "Vagamon",
        "description": "Morning flight if conditions allow, jeep to Kurisumala, then return.",
        "bullets": [
          "Tandem paragliding slot (weather permitting)",
          "Pine forest walk",
          "Jeep ride to Kurisumala",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ],
    "bestTime": "October to May for paragliding. Flights are not run in the monsoon or in strong winds.",
    "gettingThere": "Vagamon is about 200 km from Madurai via Theni and Kumily (around 5 hours).",
    "faqs": [
      {
        "question": "Is paragliding in Vagamon safe?",
        "answer": "Flights are tandem, with a licensed pilot and safety gear, and only run when wind and weather are suitable. The operator has the final say on the day."
      },
      {
        "question": "Is there an age or weight limit for paragliding?",
        "answer": "Operators usually set minimum age and maximum weight limits. Tell us your group details and we will confirm with the operator before booking."
      },
      {
        "question": "What happens if paragliding is cancelled?",
        "answer": "We replace it with another activity such as a longer guided trek. Paragliding fees are paid to the operator and not charged if the flight does not happen."
      }
    ]
  },
  {
    "id": "tiruchendur-rameshwaram",
    "slug": "tiruchendur-rameshwaram",
    "title": "Tiruchendur & Rameshwaram Pilgrimage Tour",
    "subtitle": "Tiruchendur and Rameshwaram pilgrimage tour from Madurai: Murugan seashore temple, Ramanathaswamy darshan and theertham bath, with private cab.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Tiruchendur & Rameshwaram Pilgrimage Tour",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/tiruchendur-rameshwaram.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Tiruchendur and Rameshwaram pilgrimage tour from Madurai joins two of Tamil Nadu's most important seashore temples in one trip. Day one is the Tiruchendur Subramaniya Swamy Temple, Lord Murugan's second abode, built right on the sea, with time for the sea bath and Nazhi Kinaru. You then drive along the coast to Rameshwaram for the night. Day two starts with the Agni Theertham bath, the 22 theertham bath and Ramanathaswamy darshan, before you return to Madurai. A private AC cab handles the long coastal drive, so elders can rest between temples.",
    "highlights": [
      "Tiruchendur Murugan Temple on the seashore",
      "Sea bath and Nazhi Kinaru at Tiruchendur",
      "Coastal drive to Rameshwaram",
      "Agni Theertham and 22 theertham bath",
      "Ramanathaswamy Temple darshan",
      "Optional Dhanushkodi visit"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Tiruchendur, then Rameshwaram",
        "location": "Tiruchendur, Rameshwaram",
        "description": "Murugan darshan by the sea, then the coastal drive to Rameshwaram.",
        "bullets": [
          "Early pickup from Madurai (Tiruchendur is about 175 km, 3.5–4 hours)",
          "Sea bath, Nazhi Kinaru and Murugan darshan",
          "Lunch, then drive to Rameshwaram via Thoothukudi and Ramanathapuram",
          "Overnight in Rameshwaram"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Rameshwaram Darshan and Return",
        "location": "Rameshwaram",
        "description": "Theertham bath and darshan, then back to Madurai.",
        "bullets": [
          "Agni Theertham bath at sunrise",
          "22 theertham bath and Ramanathaswamy darshan",
          "Optional half-day to Dhanushkodi if time allows",
          "Return to Madurai (about 175 km) and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "October to March. Kandha Sashti at Tiruchendur (October–November) is very crowded; book early if you plan to go then.",
    "gettingThere": "Both temples are reached by road from Madurai. We pick you up from home, Madurai Airport or Madurai Junction.",
    "faqs": [
      {
        "question": "How far is Tiruchendur from Rameshwaram?",
        "answer": "About 210 km along the coast, roughly 4.5 hours by car."
      },
      {
        "question": "Can we cover Tiruchendur and Rameshwaram in two days from Madurai?",
        "answer": "Yes. This plan does Tiruchendur on day one, stays overnight in Rameshwaram and finishes the theertham bath and darshan on day two."
      },
      {
        "question": "Is the sea bath at Tiruchendur safe?",
        "answer": "The bathing area near the temple is generally calm, but follow the lifeguards' instructions and avoid going deep, especially with children."
      }
    ]
  },
  {
    "id": "palani-murugan-temple-tour",
    "slug": "palani-murugan-temple-tour",
    "title": "Palani Murugan Temple Tour - Tamil Nadu",
    "subtitle": "Palani Murugan temple tour from Madurai: hilltop darshan by winch or rope car, Thiru Avinankudi and panchamirtham, with private cab and stay.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Palani Murugan Temple Tour - Tamil Nadu",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/palani-murugan-temple-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Palani Murugan temple tour from Madurai covers the Arulmigu Dhandayuthapani Swamy Temple, the third of Lord Murugan's six abodes, at a pace that suits elders and families. Palani is about 120 km from Madurai via Dindigul. You can climb the hill by its steps or go up by the winch train or the rope car, which we help you plan around queues. The tour includes the Thiru Avinankudi temple at the foot of the hill, Idumban hill, and time to buy the famous Palani panchamirtham. Staying one night lets you attend the early morning pooja without a rushed drive.",
    "highlights": [
      "Dhandayuthapani Swamy hilltop darshan",
      "Winch train or rope car up the hill",
      "Thiru Avinankudi temple",
      "Idumban temple",
      "Palani panchamirtham prasadam",
      "Early morning pooja"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Palani and Evening Darshan",
        "location": "Palani",
        "description": "Drive via Dindigul, check in near the hill, and take evening darshan.",
        "bullets": [
          "Pickup from Madurai (about 120 km, 2.5–3 hours)",
          "Check-in near the foothills",
          "Thiru Avinankudi temple",
          "Hilltop darshan by steps, winch or rope car",
          "Evening golden chariot procession on many days"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Morning Pooja and Return",
        "location": "Palani",
        "description": "Early pooja, Idumban temple and prasadam, then return.",
        "bullets": [
          "Early morning pooja on the hill",
          "Idumban temple",
          "Buy panchamirtham from the temple counters",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "Any time of year. Thai Poosam (January–February) and Panguni Uthiram (March–April) bring very large crowds.",
    "gettingThere": "Palani is about 120 km from Madurai via Dindigul (2.5–3 hours). Palani also has a railway station.",
    "faqs": [
      {
        "question": "How many steps are there at Palani temple?",
        "answer": "Around 690 steps. If climbing is difficult, the winch train and the rope car take you to the top."
      },
      {
        "question": "What are the winch and rope car timings at Palani?",
        "answer": "Both run through the day with breaks for maintenance. The rope car usually closes for a few weeks each year for servicing. We check the status before your visit."
      },
      {
        "question": "Can Palani and Kodaikanal be combined?",
        "answer": "Yes. Kodaikanal is about 65 km from Palani by the ghat road. A Palani and Kodaikanal 3-day trip is a popular combination."
      }
    ]
  },
  {
    "id": "wonderla-adventure-park-tour",
    "slug": "wonderla-adventure-park-tour",
    "title": "Wonderla Adventure Park Tour - Kochi, Kerala",
    "subtitle": "Wonderla Kochi tour package from Madurai: a full day at Wonderla water and land rides plus Fort Kochi sightseeing in 2 days, private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Wonderla Adventure Park Tour - Kochi, Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/wonderla-adventure-park-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Wonderla Kochi tour package from Madurai is made for families with children and groups of friends. You drive to Kochi (about 260 km) on day one and spend the evening at Fort Kochi and Marine Drive. Day two is a full day at Wonderla, one of India's largest amusement parks, with land rides, water rides, a wave pool and a children's zone, before the drive home or an overnight stay. Wonderla is at Pallikkara, about 15 km from Kochi city. We plan your arrival for opening time so you get the most rides in.",
    "highlights": [
      "Full day at Wonderla Kochi",
      "Water rides and wave pool",
      "Land rides and roller coasters",
      "Children's ride zone",
      "Fort Kochi sunset",
      "Marine Drive evening walk"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kochi",
        "location": "Kochi",
        "description": "Drive to Kochi and an easy evening at Fort Kochi.",
        "bullets": [
          "Pickup from Madurai (about 260 km, 6.5 hours)",
          "Check-in",
          "Fort Kochi Chinese fishing nets at sunset",
          "Marine Drive walk"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Wonderla Full Day",
        "location": "Wonderla, Kochi",
        "description": "A full day of rides, then drop or the drive home.",
        "bullets": [
          "Drop at Wonderla at opening time",
          "Land rides, water rides and wave pool",
          "Pickup at closing time",
          "Overnight in Kochi or drive back to Madurai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ],
    "bestTime": "October to May. Weekdays are less crowded. Some water rides may be limited in heavy rain.",
    "gettingThere": "Wonderla Kochi is about 15 km from Kochi city and about 260 km from Madurai.",
    "faqs": [
      {
        "question": "Do we need to book Wonderla tickets online?",
        "answer": "Online booking is recommended, especially on weekends and holidays. Tickets are not part of the package; we help you book."
      },
      {
        "question": "What should we carry to Wonderla?",
        "answer": "Swimwear made of nylon or polyester (cotton is not allowed in water rides), a towel, a change of clothes and sunscreen. Lockers are available."
      },
      {
        "question": "Is Wonderla good for small children?",
        "answer": "Yes. There is a dedicated children's area with gentle rides and water play. Height limits apply on bigger rides."
      }
    ]
  },
  {
    "id": "ayodhya-tour",
    "slug": "ayodhya-tour",
    "title": "Ayodhya - Ram Mandir Pilgrimage",
    "subtitle": "Ayodhya Ram Mandir darshan tour package: Shri Ram Janmabhoomi Mandir, Hanuman Garhi, Kanak Bhawan and Saryu aarti in 2 days, with private cab.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ayodhya",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/ayodhya-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Ayodhya tour package is planned for pilgrims from Tamil Nadu who want a comfortable darshan at the Shri Ram Janmabhoomi Mandir. You fly into Ayodhya (or Lucknow, about 135 km away) and we pick you up at the airport or station. Day one covers Hanuman Garhi, Kanak Bhawan and the evening aarti at the Saryu ghats near Ram ki Paidi. Day two starts early for Ram Mandir darshan, when queues are shorter, then Dashrath Mahal and the Guptar Ghat before your drop. Your driver and local guide help with the security rules, which do not allow phones and bags inside the Ram Mandir.",
    "highlights": [
      "Shri Ram Janmabhoomi Mandir darshan",
      "Hanuman Garhi",
      "Kanak Bhawan",
      "Saryu aarti at Ram ki Paidi",
      "Dashrath Mahal",
      "Guptar Ghat"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Ayodhya and Saryu Aarti",
        "location": "Ayodhya",
        "description": "Pickup, temples in the old town, and the evening aarti.",
        "bullets": [
          "Pickup from Ayodhya airport or station (or Lucknow, about 135 km)",
          "Hanuman Garhi and Kanak Bhawan",
          "Evening Saryu aarti at the ghats"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Ram Mandir Darshan and Drop",
        "location": "Ayodhya",
        "description": "Early darshan, more temples, then drop.",
        "bullets": [
          "Early morning Ram Mandir darshan",
          "Dashrath Mahal and Guptar Ghat",
          "Drop at the airport or station"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "October to March. Summers are very hot, and Ram Navami and Deepotsav (Diwali) bring huge crowds.",
    "gettingThere": "Fly to Ayodhya (Maharishi Valmiki International Airport) or Lucknow, usually via Chennai, Bengaluru or Delhi. Ayodhya Dham Junction has trains from many cities.",
    "faqs": [
      {
        "question": "Are mobile phones allowed inside Ram Mandir Ayodhya?",
        "answer": "No. Phones, bags and electronic items are not allowed inside. Free lockers are provided near the entry, or you can leave them in the cab."
      },
      {
        "question": "Do we need to book Ram Mandir darshan in advance?",
        "answer": "General darshan does not need a ticket, but passes for aarti and special entry are booked through the temple trust's official website."
      },
      {
        "question": "How do we reach Ayodhya from Madurai?",
        "answer": "There are no direct flights. Most pilgrims fly via Chennai, Bengaluru or Delhi to Ayodhya or Lucknow."
      }
    ]
  },
  {
    "id": "black-thunder-water-theme-park-tour",
    "slug": "black-thunder-water-theme-park-tour",
    "title": "Black Thunder Water Park Tour - Tamil Nadu",
    "subtitle": "Black Thunder water park tour from Madurai: a full day at the Mettupalayam water theme park, with an optional Ooty or Coonoor visit, private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Black Thunder Water Park Tour - Tamil Nadu",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/black-thunder-water-theme-park-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Black Thunder tour from Madurai is a fun family trip to the water theme park at Mettupalayam, at the foot of the Nilgiris. The park is about 260 km from Madurai via Coimbatore, roughly 5.5 hours. You drive in on day one, check in and spend the evening at the Mettupalayam Bhadrakali Amman temple or the riverside. Day two is a full day at Black Thunder: wave pool, slides, lazy river and the children's play area. If you prefer the hills, we can swap the second evening for Coonoor or Ooty, which are an hour or two up the ghat road.",
    "highlights": [
      "Full day at Black Thunder water park",
      "Wave pool, slides and lazy river",
      "Children's water play area",
      "Mettupalayam riverside evening",
      "Optional Coonoor or Ooty extension",
      "Private cab from Madurai"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Mettupalayam",
        "location": "Mettupalayam",
        "description": "Drive via Coimbatore and check in near the park.",
        "bullets": [
          "Pickup from Madurai (about 260 km, 5.5 hours)",
          "Check-in at Mettupalayam",
          "Evening at the Bhadrakali Amman temple or the river"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Black Thunder Full Day and Return",
        "location": "Mettupalayam",
        "description": "A full day at the water park, then the drive home.",
        "bullets": [
          "Black Thunder from opening time",
          "Slides, wave pool and lazy river",
          "Return to Madurai, or continue to Coonoor or Ooty"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ],
    "bestTime": "March to June is ideal for a water park. Weekdays are less crowded.",
    "gettingThere": "Black Thunder is at Mettupalayam, about 260 km from Madurai via Coimbatore (around 5.5 hours).",
    "faqs": [
      {
        "question": "Is Black Thunder open on all days?",
        "answer": "It is usually open daily, but timings change and the park can close for maintenance. We check before your trip."
      },
      {
        "question": "What swimwear is allowed at Black Thunder?",
        "answer": "Water parks generally require nylon or polyester swimwear; cotton clothes are not allowed on rides. Carry a change of clothes."
      },
      {
        "question": "Can we add Ooty to this trip?",
        "answer": "Yes. Ooty is about 50 km from Mettupalayam. Adding a night makes a good water park and hill station combination."
      }
    ]
  },
  {
    "id": "kanthalur-adventure-tour",
    "slug": "kanthalur-adventure-tour",
    "title": "Kanthalur Adventure Tour - Munnar, Kerala",
    "subtitle": "Kanthalloor and Marayoor tour from Madurai: fruit orchards, sandalwood forest, dolmens and Chinnar wildlife in 2 days, with private cab.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanthalur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kanthalur-adventure-tour.webp",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "This 2-day Kanthalloor tour from Madurai explores the rain-shadow valley beyond Munnar, where the climate allows apple, orange, plum and strawberry farms that grow nowhere else in Kerala. You walk through the orchards, visit the Marayoor sandalwood forest and its jaggery units, and see the muniyara dolmens, burial chambers thousands of years old. The second day can include a trek in the Chinnar Wildlife Sanctuary, run by the forest department, before you drive back via Udumalpet. It is a quiet, different side of Idukki that few tour packages cover.",
    "highlights": [
      "Apple, orange and strawberry orchards (seasonal)",
      "Marayoor sandalwood forest",
      "Marayoor jaggery making",
      "Muniyara prehistoric dolmens",
      "Chinnar Wildlife Sanctuary trek",
      "Lakkam waterfalls"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kanthalloor via Munnar",
        "location": "Kanthalloor",
        "description": "Drive through Munnar into the Marayoor valley, then orchards and dolmens.",
        "bullets": [
          "Pickup from Madurai (about 210 km, 6 hours via Munnar)",
          "Lakkam waterfalls on the way",
          "Orchard walk in Kanthalloor",
          "Muniyara dolmens at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Sandalwood, Chinnar and Return",
        "location": "Marayoor, Chinnar",
        "description": "Marayoor sights and a forest trek, then the return via Udumalpet.",
        "bullets": [
          "Marayoor sandalwood forest and jaggery units",
          "Guided trek in Chinnar Wildlife Sanctuary (forest department)",
          "Return to Madurai via Udumalpet and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ],
    "bestTime": "September to January for fruit season. Strawberries and plums are around December to March. The valley gets less rain than Munnar during the monsoon.",
    "gettingThere": "Kanthalloor is about 210 km from Madurai via Munnar (around 6 hours). The return via Chinnar and Udumalpet is a little shorter.",
    "faqs": [
      {
        "question": "When is the fruit season in Kanthalloor?",
        "answer": "Apples and oranges are usually ready from about September to December, and strawberries from December to March. It depends on the year's weather."
      },
      {
        "question": "Can Kanthalloor be combined with Munnar?",
        "answer": "Yes. Kanthalloor is about 45 km beyond Munnar. A 3-day Munnar and Kanthalloor plan works well."
      },
      {
        "question": "Do we need permits for Chinnar?",
        "answer": "Treks in Chinnar are run by the forest department with their own guides and slots. We help you book on the day."
      }
    ]
  },
  {
    "id": "padmanabhaswamy-temple-tour",
    "slug": "padmanabhaswamy-temple-tour",
    "title": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
    "subtitle": "Padmanabhaswamy Temple tour from Madurai: darshan with dress code help, Attukal Bhagavathy, Suchindram and Kovalam in 2 days, private cab.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/padmanabhaswamy-temple-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Padmanabhaswamy Temple tour from Madurai is planned for devotees who want a calm, well-timed darshan of Lord Anantha Padmanabha, the reclining Vishnu of Thiruvananthapuram. We plan the visit for the quieter morning hours, help you with the strict dress code, and keep your phone and belongings with the driver. The tour adds the Attukal Bhagavathy Temple, the Suchindram Thanumalayan Temple on the way, and an evening at Kovalam beach. The drive is about 300 km via Nagercoil, so the stay is close to the temple.",
    "highlights": [
      "Sree Padmanabhaswamy Temple darshan",
      "Dress code guidance and dhoti rental",
      "Attukal Bhagavathy Temple",
      "Suchindram Thanumalayan Temple",
      "Kovalam beach evening",
      "Hotel close to the temple"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Trivandrum via Suchindram",
        "location": "Suchindram, Thiruvananthapuram",
        "description": "Temple stop at Suchindram, then evening darshan in Trivandrum.",
        "bullets": [
          "Early pickup from Madurai (about 300 km, 6 hours)",
          "Suchindram Thanumalayan Temple",
          "Check-in near the temple",
          "Evening darshan at Padmanabhaswamy Temple"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Morning Darshan, Attukal and Return",
        "location": "Thiruvananthapuram",
        "description": "Early darshan, Attukal temple, then the drive back.",
        "bullets": [
          "Early morning darshan",
          "Attukal Bhagavathy Temple",
          "Optional Kovalam beach stop",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "Any time of year. Early mornings are least crowded. Attukal Pongala (February–March) brings huge crowds to the city.",
    "gettingThere": "Thiruvananthapuram is about 300 km from Madurai via Tirunelveli and Nagercoil (around 6 hours).",
    "faqs": [
      {
        "question": "What are Padmanabhaswamy Temple darshan timings?",
        "answer": "The temple has morning and evening darshan windows with closures in between. Timings change on festival days, so we confirm them before your visit."
      },
      {
        "question": "Can non-Hindus visit Padmanabhaswamy Temple?",
        "answer": "Entry is restricted to Hindus. Visitors may be asked to sign a declaration at the entrance."
      },
      {
        "question": "Can we rent a dhoti at the temple?",
        "answer": "Yes, dhotis and mundus are available for rent or purchase near the temple entrance."
      }
    ]
  },
  {
    "id": "tirupathi-balaji-temple-tour",
    "slug": "tirupathi-balaji-temple-tour",
    "title": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
    "subtitle": "Tirupati Balaji darshan tour package: Tirumala Venkateswara darshan, Padmavathi Ammavari temple and Kapila Theertham, with private cab.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/tirupathi-balaji-temple-tour.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Tirupati Balaji darshan tour package covers Tirumala and the temples around Tirupati town. Tirupati is about 600 km from Madurai, so most pilgrims take an overnight train or fly in, and we pick you up at Tirupati station or Renigunta airport. Day one covers the Padmavathi Ammavari Temple at Tiruchanur, Kapila Theertham and the Govindaraja Swamy Temple, then you go up the hills to Tirumala. Day two is darshan of Lord Venkateswara on your booked slot, laddu prasadam, and the drop. Darshan tickets must be booked through the TTD (Tirumala Tirupati Devasthanams) in advance; we help you plan around your slot.",
    "highlights": [
      "Sri Venkateswara darshan at Tirumala",
      "Padmavathi Ammavari Temple, Tiruchanur",
      "Kapila Theertham",
      "Govindaraja Swamy Temple",
      "Tirupati laddu prasadam",
      "Ghat road drive up the Seshachalam hills"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Tirupati Temples and Tirumala",
        "location": "Tirupati, Tirumala",
        "description": "Pickup, the temples in Tirupati town, and the drive up to Tirumala.",
        "bullets": [
          "Pickup from Tirupati station or Renigunta airport",
          "Padmavathi Ammavari Temple at Tiruchanur",
          "Kapila Theertham and Govindaraja Swamy Temple",
          "Drive to Tirumala and overnight stay"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Balaji Darshan and Drop",
        "location": "Tirumala",
        "description": "Darshan on your booked slot, prasadam, then drop.",
        "bullets": [
          "Report for darshan on your TTD slot",
          "Collect laddu prasadam",
          "Drop at Tirupati station or Renigunta airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "Any time of year. Weekends, Vaikunta Ekadasi and Brahmotsavam are extremely crowded.",
    "gettingThere": "Tirupati is about 600 km from Madurai. Most pilgrims take an overnight train or fly to Tirupati (Renigunta).",
    "faqs": [
      {
        "question": "How do we book Tirupati darshan tickets?",
        "answer": "Special entry darshan tickets are booked online on the official TTD website, usually months in advance. We plan the trip around your slot; ticket costs are not part of the package."
      },
      {
        "question": "What is the dress code at Tirumala?",
        "answer": "Traditional dress is required for darshan: dhoti or kurta-pyjama for men, saree or churidar with a dupatta for women."
      },
      {
        "question": "Can we walk up to Tirumala?",
        "answer": "Yes, by the Alipiri or Srivari Mettu footpaths. Tell us and we will drop you at the start and meet you at the top."
      }
    ]
  },
  {
    "id": "kullu-manali",
    "slug": "kullu-manali",
    "title": "Kullu Manali - Himachal Pradesh",
    "subtitle": "Kullu Manali tour package: Solang Valley, Atal Tunnel and Sissu, Hadimba Temple, Manikaran and river rafting in 6 days, with private cab.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Kullu Manali - Himachal Pradesh",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kullu-manali.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 6-day Kullu Manali tour package covers the Kullu valley and Manali at a comfortable pace. You fly to Bhuntar (Kullu) or Chandigarh, usually via Delhi, and we pick you up. The plan includes Manikaran, Kullu's river rafting stretch, Old Manali, the Hadimba Temple and Vashisht hot springs. One full day goes to Solang Valley for paragliding and the ropeway, and another through the Atal Tunnel to Sissu in the Lahaul valley. Rohtang Pass needs a separate government permit and is closed in winter, so we add it only when it is open and permits are available.",
    "highlights": [
      "Solang Valley activities",
      "Atal Tunnel and Sissu",
      "Hadimba Temple and Old Manali",
      "Vashisht hot springs",
      "Manikaran Sahib",
      "River rafting in Kullu (season permitting)"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Kullu",
        "location": "Kullu",
        "description": "Pickup and an easy first evening.",
        "bullets": [
          "Pickup from Bhuntar airport (or Chandigarh)",
          "Check-in in Kullu",
          "Evening at leisure"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Manikaran and Kullu Rafting",
        "location": "Kullu",
        "description": "Hot springs and the river.",
        "bullets": [
          "Manikaran Sahib and hot springs",
          "River rafting near Kullu (season permitting)",
          "Kullu shawl factories"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Kullu to Manali",
        "location": "Manali",
        "description": "Drive up the valley to Manali.",
        "bullets": [
          "Drive to Manali (about 40 km)",
          "Naggar Castle on the way (optional)",
          "Mall Road in the evening"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Solang Valley",
        "location": "Solang",
        "description": "Snow and adventure activities.",
        "bullets": [
          "Solang Valley",
          "Paragliding, zorbing or ropeway (paid locally)",
          "Return to Manali"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Atal Tunnel and Sissu",
        "location": "Lahaul",
        "description": "Through the tunnel to the Lahaul valley.",
        "bullets": [
          "Atal Tunnel",
          "Sissu waterfall and village",
          "Rohtang Pass instead, if open and permits are available"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Manali Temples and Departure",
        "location": "Manali",
        "description": "Old Manali and temples, then drop.",
        "bullets": [
          "Hadimba Temple and Old Manali",
          "Vashisht hot springs",
          "Drop at Bhuntar or onward"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kashmir",
      "golden-triangle-tour-delhi-agra-jaipur",
      "kanyakumari-thiruvananthapuram"
    ],
    "bestTime": "March to June for pleasant weather, December to February for snow. Avoid the July–August monsoon, when landslides are common.",
    "gettingThere": "Fly to Bhuntar (Kullu) or Chandigarh via Delhi. Overnight Volvo buses from Delhi are another option.",
    "faqs": [
      {
        "question": "Do we need a permit for Rohtang Pass?",
        "answer": "Yes. Vehicles need an online permit with a daily limit, and the pass is closed in winter. We apply for it when Rohtang is open on your dates."
      },
      {
        "question": "Is Atal Tunnel open all year?",
        "answer": "It is open most of the year but can close temporarily after heavy snowfall. Sissu is a short drive beyond it."
      },
      {
        "question": "When is snow in Manali?",
        "answer": "Usually from December to February in the town, and longer at Solang and beyond the Atal Tunnel."
      }
    ]
  },
  {
    "id": "golden-triangle-tour-delhi-agra-jaipur",
    "slug": "golden-triangle-tour-delhi-agra-jaipur",
    "title": "Golden Triangle Tour - Delhi, Agra & Jaipur",
    "subtitle": "Golden Triangle tour package: Delhi, Agra and Jaipur in 6 days with Taj Mahal, Red Fort, Amber Fort and Hawa Mahal, with private cab and hotels.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Golden Triangle Tour - Delhi, Agra & Jaipur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/golden-triangle-tour-delhi-agra-jaipur.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 6-day Golden Triangle tour package covers India's most famous heritage circuit: Delhi, Agra and Jaipur. You fly into Delhi and travel by private cab throughout. In Delhi you see the Red Fort, Jama Masjid, Qutub Minar, India Gate and Humayun's Tomb. In Agra you visit the Taj Mahal at sunrise and Agra Fort, with Fatehpur Sikri on the way to Jaipur. Jaipur adds Amber Fort, the City Palace, Jantar Mantar and Hawa Mahal. We plan the order around weekly closures: the Taj Mahal is closed on Fridays.",
    "highlights": [
      "Taj Mahal at sunrise",
      "Agra Fort",
      "Fatehpur Sikri",
      "Amber Fort and Hawa Mahal",
      "Red Fort and Qutub Minar",
      "Humayun's Tomb"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Delhi",
        "location": "Delhi",
        "description": "Pickup and an easy evening.",
        "bullets": [
          "Pickup from Delhi airport or station",
          "Check-in",
          "India Gate in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Delhi Sightseeing",
        "location": "Delhi",
        "description": "Old and New Delhi highlights.",
        "bullets": [
          "Red Fort and Jama Masjid (Red Fort closed Mondays)",
          "Qutub Minar and Humayun's Tomb",
          "Lotus Temple or Akshardham"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Delhi to Agra",
        "location": "Agra",
        "description": "Expressway drive and Agra Fort.",
        "bullets": [
          "Drive to Agra (about 230 km)",
          "Agra Fort",
          "Mehtab Bagh for a sunset view of the Taj"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Taj Mahal and Fatehpur Sikri",
        "location": "Agra, Fatehpur Sikri",
        "description": "Sunrise at the Taj, then on to Jaipur.",
        "bullets": [
          "Taj Mahal at sunrise (closed Fridays)",
          "Fatehpur Sikri",
          "Drive to Jaipur"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Jaipur Sightseeing",
        "location": "Jaipur",
        "description": "Forts, palaces and bazaars.",
        "bullets": [
          "Amber Fort",
          "City Palace and Jantar Mantar",
          "Hawa Mahal and Johari Bazaar"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Departure",
        "location": "Jaipur",
        "description": "Drop at Jaipur airport or back to Delhi.",
        "bullets": [
          "Free morning for shopping",
          "Drop at Jaipur airport or Delhi"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kashmir",
      "kullu-manali",
      "kanyakumari-thiruvananthapuram"
    ],
    "bestTime": "October to March. April to June is very hot, and fog can delay travel in late December and January.",
    "gettingThere": "Fly to Delhi from Madurai, usually via Chennai or Bengaluru. The tour can end at Jaipur airport.",
    "faqs": [
      {
        "question": "Which day is the Taj Mahal closed?",
        "answer": "Fridays. We plan your Agra day around this."
      },
      {
        "question": "Is 6 days enough for the Golden Triangle?",
        "answer": "Yes. It allows two days in Delhi, a sunrise at the Taj and a full day in Jaipur without rushing."
      },
      {
        "question": "Can we add Varanasi or Rishikesh?",
        "answer": "Yes. Both can be added as extensions. Tell us when you enquire."
      }
    ]
  },
  {
    "id": "bangalore",
    "slug": "bangalore",
    "title": "Bangalore - Garden City, Karnataka",
    "subtitle": "Bangalore sightseeing tour package: Bangalore Palace, Lalbagh, Cubbon Park, ISKCON and Nandi Hills sunrise in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Bangalore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/bangalore.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Bangalore sightseeing tour package covers the city's gardens, palace and temples, with an early trip to Nandi Hills for the sunrise. Bengaluru is about 450 km from Madurai by road, and many travellers come by overnight train or a short flight, so we pick you up at the station or airport. Day one covers the Bangalore Palace, Lalbagh Botanical Garden, Cubbon Park and the Vidhana Soudha, with shopping on Commercial Street. Day two starts at Nandi Hills before sunrise, then ISKCON Temple and the Bull Temple before your drop.",
    "highlights": [
      "Nandi Hills sunrise",
      "Bangalore Palace",
      "Lalbagh Botanical Garden",
      "Cubbon Park and Vidhana Soudha",
      "ISKCON Temple",
      "Commercial Street shopping"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Palace, Gardens and Shopping",
        "location": "Bengaluru",
        "description": "Pickup and a city day of palace, parks and shopping.",
        "bullets": [
          "Pickup from Bengaluru airport or station",
          "Bangalore Palace",
          "Lalbagh Botanical Garden",
          "Cubbon Park and Vidhana Soudha (outside view)",
          "Commercial Street in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Nandi Hills Sunrise and Temples",
        "location": "Nandi Hills, Bengaluru",
        "description": "Pre-dawn drive for the sunrise, then temples and drop.",
        "bullets": [
          "Leave around 4:30 am for Nandi Hills (about 60 km)",
          "Sunrise and breakfast",
          "ISKCON Temple and Bull Temple",
          "Drop at the airport, station or onward to Mysore"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "varkala"
    ],
    "bestTime": "Pleasant all year. October to February has the clearest sunrises at Nandi Hills.",
    "gettingThere": "Bengaluru is about 450 km from Madurai (7–8 hours by road on NH44). Overnight trains and short flights are the easiest way in.",
    "faqs": [
      {
        "question": "Do we need to book Nandi Hills in advance?",
        "answer": "Entry rules and timings at Nandi Hills change, and weekends get very busy. We check the current rules and leave early."
      },
      {
        "question": "Can this trip start from Madurai by road?",
        "answer": "Yes. Our cab can drive you from Madurai, but it adds most of a day each way. Train or flight is faster."
      },
      {
        "question": "Can Bangalore be combined with Mysore?",
        "answer": "Yes. Mysore is about 150 km away. A 3-day Bangalore and Mysore trip is a popular plan."
      }
    ]
  },
  {
    "id": "varkala",
    "slug": "varkala",
    "title": "Varkala - Cliff Beach, Kerala",
    "subtitle": "Varkala tour package from Madurai: cliff beach, Papanasam, Janardhana Swamy Temple, Kappil backwaters and Jatayu Earth's Center, private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Varkala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/varkala.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Varkala tour package from Madurai is a relaxed beach trip to Kerala's red-cliff coast, about 260 km and 6 to 7 hours via Shencottai and Kollam. Day one is the cliff walk, Papanasam beach and sunset at the cliff-top cafes. Day two starts at the Janardhana Swamy Temple, then Kappil, where the backwater meets the sea, and the Jatayu Earth's Center with its huge bird sculpture and cable car on the way back. It suits couples, friends and families who want a slower trip with time by the water.",
    "highlights": [
      "Varkala cliff walk and sunset",
      "Papanasam beach",
      "Janardhana Swamy Temple",
      "Kappil beach and backwaters",
      "Jatayu Earth's Center on the return",
      "Anjengo Fort and lighthouse (optional)"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Varkala and Cliff Sunset",
        "location": "Varkala",
        "description": "Drive via Shencottai and Kollam, then the cliff and beach.",
        "bullets": [
          "Pickup from Madurai (about 260 km, 6–7 hours)",
          "Check-in near the cliff",
          "Papanasam beach",
          "Sunset from the North Cliff"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Temple, Kappil and Jatayu",
        "location": "Varkala, Chadayamangalam",
        "description": "Temple and backwater views, then Jatayu Earth's Center on the way home.",
        "bullets": [
          "Janardhana Swamy Temple",
          "Kappil beach and backwater",
          "Jatayu Earth's Center and cable car (closed some weekdays; we check)",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. The sea is rough and swimming is unsafe in the June–August monsoon.",
    "gettingThere": "Varkala is about 260 km from Madurai via Rajapalayam, Shencottai and Kollam (6–7 hours). Thiruvananthapuram airport is about 45 km away.",
    "faqs": [
      {
        "question": "Which is the best route from Madurai to Varkala?",
        "answer": "The route via Rajapalayam, Tenkasi, Shencottai and Kollam is the shortest, about 260 km."
      },
      {
        "question": "Is Varkala good for families?",
        "answer": "Yes, in the calm season. Keep children in the lifeguard-flagged areas, as currents can be strong."
      },
      {
        "question": "What is the Jatayu Earth's Center?",
        "answer": "A nature park at Chadayamangalam with a very large sculpture of the mythological bird Jatayu, reached by cable car. It is about 40 km from Varkala."
      }
    ]
  },
  {
    "id": "athirapally",
    "slug": "athirapally",
    "title": "Athirapally Waterfall Tour - Kerala",
    "subtitle": "Athirapally waterfalls tour package from Madurai: Athirapally and Vazhachal falls, Charpa falls and Thumboormuzhy in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Athirapally Waterfall Tour - Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/athirapally.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Athirapally waterfalls tour package from Madurai takes you to Kerala's biggest waterfall, on the Chalakudy river in the Vazhachal forest. The drive is long, about 330 km via Coimbatore and Thrissur, so day one ends with the falls in late-afternoon light from the top viewpoint. Day two starts with the walk down to the base of Athirapally, then Charpa falls beside the forest road, Vazhachal falls and the Thumboormuzhy dam garden and hanging bridge before you head back. The forest road is beautiful and green, especially after the monsoon.",
    "highlights": [
      "Athirapally falls from the top and the base",
      "Vazhachal falls",
      "Charpa falls by the forest road",
      "Thumboormuzhy dam garden and hanging bridge",
      "Drive through the Vazhachal forest",
      "Optional Thrissur temple stop"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Athirapally",
        "location": "Athirapally",
        "description": "Long drive via Coimbatore and Thrissur, then the falls from the top viewpoint.",
        "bullets": [
          "Early pickup from Madurai (about 330 km, 7–8 hours)",
          "Check-in near Athirapally",
          "Athirapally falls from the top viewpoint"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Falls Trail and Return",
        "location": "Athirapally, Vazhachal",
        "description": "Walk to the base, the forest falls, then return.",
        "bullets": [
          "Walk down to the base of Athirapally falls",
          "Charpa and Vazhachal falls",
          "Thumboormuzhy dam and hanging bridge",
          "Return to Madurai (late evening arrival)"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "August to January, when the falls are full. In the peak monsoon (June–July) access to the base path can be closed.",
    "gettingThere": "Athirapally is about 330 km from Madurai via Coimbatore, Palakkad and Thrissur. Kochi airport is about 55 km away, which makes a fly-in start easy.",
    "faqs": [
      {
        "question": "When is Athirapally waterfall at its best?",
        "answer": "Just after the monsoon, from about August to January, when the flow is strong and the path to the base is open."
      },
      {
        "question": "Is the walk to the base of Athirapally falls difficult?",
        "answer": "It is a paved path with steps, about 1 km down and back up. It is manageable for most people but steep in parts."
      },
      {
        "question": "Can Athirapally be combined with Kochi?",
        "answer": "Yes. Athirapally is about 70 km from Kochi, so a 3-day Madurai–Kochi–Athirapally plan works well."
      }
    ]
  },
  {
    "id": "coorg",
    "slug": "coorg",
    "title": "Coorg - Coffee Hills, Karnataka",
    "subtitle": "Coorg tour package: Abbey Falls, Raja's Seat, Dubare, Namdroling Golden Temple and coffee estates in 2 days, with private cab and estate stay.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Coorg",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/coorg.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Coorg tour package covers Karnataka's coffee country around Madikeri. Coorg is about 500 km from Madurai, so most of our travellers start from Bengaluru or Mysore, or add a night on the way. Day one is Madikeri: Abbey Falls, the Madikeri Fort and sunset at Raja's Seat, with a coffee estate stay. Day two goes to Dubare elephant camp on the Kaveri, Kaveri Nisargadhama island park and the Namdroling Golden Temple at Bylakuppe before you leave. It suits couples and families who want plantations, forest and cool weather.",
    "highlights": [
      "Coffee estate walk and stay",
      "Abbey Falls",
      "Raja's Seat sunset",
      "Dubare elephant camp",
      "Kaveri Nisargadhama",
      "Namdroling Golden Temple, Bylakuppe"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Coorg and Madikeri Sights",
        "location": "Madikeri",
        "description": "Pickup from Mysore, Bengaluru or your stopover, then Madikeri's sights.",
        "bullets": [
          "Pickup from Mysore (about 120 km) or Bengaluru (about 260 km)",
          "Check-in at a coffee estate stay",
          "Abbey Falls and Madikeri Fort",
          "Raja's Seat at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Dubare and Golden Temple",
        "location": "Kushalnagar, Bylakuppe",
        "description": "Elephant camp and the Tibetan settlement, then drop.",
        "bullets": [
          "Dubare elephant camp (morning)",
          "Kaveri Nisargadhama",
          "Namdroling Golden Temple at Bylakuppe",
          "Drop at Mysore or Bengaluru, or continue to Madurai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March for clear weather. The monsoon (June–September) is very wet but green.",
    "gettingThere": "Coorg is about 500 km from Madurai. Most travellers come by train or flight to Mysore or Bengaluru, and we pick them up there.",
    "faqs": [
      {
        "question": "How far is Coorg from Madurai?",
        "answer": "About 500 km by road, roughly 10 hours. Starting from Mysore (120 km) or Bengaluru (260 km) is easier."
      },
      {
        "question": "What are Dubare elephant camp timings?",
        "answer": "The camp is usually busiest in the morning, when the elephants are bathed. Activities depend on the forest department's rules that day."
      },
      {
        "question": "Can Coorg and Mysore be combined?",
        "answer": "Yes. Mysore is about 120 km from Madikeri. A 3-day Mysore and Coorg trip is a popular plan."
      }
    ]
  },
  {
    "id": "gokarna",
    "slug": "gokarna",
    "title": "Gokarna - Beach & Temple, Karnataka",
    "subtitle": "Gokarna tour package: Mahabaleshwar Temple, Om Beach, Kudle, Half Moon and Paradise beaches, Murudeshwar and Yana caves in 5 days.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Gokarna",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/gokarna.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 5-day Gokarna tour package is a slow coastal holiday in Karnataka that mixes pilgrimage and beaches. Gokarna is a long way from Madurai, so we pick you up at Goa or Mangaluru airport, or Gokarna Road or Kumta station. You visit the Mahabaleshwar Temple, home of the Atmalinga, then spend relaxed days at Kudle and Om beaches, hike the coastal trail to Half Moon and Paradise beaches, and take a boat back. One day goes south to Murudeshwar's sea-facing temple and giant Shiva statue, and another to the Yana rock formations in the forest. It suits pilgrims, couples and friends who want a quieter alternative to Goa.",
    "highlights": [
      "Mahabaleshwar Temple and the Atmalinga",
      "Om Beach and Kudle Beach",
      "Coastal trail to Half Moon and Paradise beaches",
      "Murudeshwar temple and Shiva statue",
      "Yana rocks and caves",
      "Arabian Sea sunsets"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Gokarna",
        "location": "Gokarna",
        "description": "Pickup and an easy evening on the beach.",
        "bullets": [
          "Pickup from Goa or Mangaluru airport, or Gokarna Road station",
          "Check-in",
          "Sunset at Gokarna main beach"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Mahabaleshwar Temple and Kudle Beach",
        "location": "Gokarna",
        "description": "Temple darshan and the town, then a beach afternoon.",
        "bullets": [
          "Mahabaleshwar Temple darshan",
          "Koti Theertha and the temple streets",
          "Afternoon at Kudle Beach"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Beach Trail Day",
        "location": "Om, Half Moon and Paradise beaches",
        "description": "Hike the coastal trail between beaches and take a boat back.",
        "bullets": [
          "Om Beach in the morning",
          "Coastal trail to Half Moon and Paradise beaches",
          "Boat back to Om Beach (weather permitting)"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Murudeshwar and Yana",
        "location": "Murudeshwar, Yana",
        "description": "Day trip to the sea temple and the forest rocks.",
        "bullets": [
          "Yana rocks and caves (short forest walk)",
          "Murudeshwar temple and Shiva statue",
          "Return to Gokarna"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Departure",
        "location": "Gokarna",
        "description": "Free morning, then drop.",
        "bullets": [
          "Free morning at the beach",
          "Drop at the airport or station"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. Swimming is unsafe and boats do not run in the June–September monsoon.",
    "gettingThere": "Gokarna is about 140 km from Goa airport and 230 km from Mangaluru. Gokarna Road and Kumta stations are on the Konkan railway.",
    "faqs": [
      {
        "question": "Is Gokarna good for a family trip?",
        "answer": "Yes. The temple, the main beach and Kudle Beach suit families. The trail between beaches has some rocky sections."
      },
      {
        "question": "Is the Gokarna beach trek safe?",
        "answer": "The trail is clear in the dry season but has steep, rocky parts. Wear proper footwear and avoid it in the rain."
      },
      {
        "question": "How far is Murudeshwar from Gokarna?",
        "answer": "About 75 km, roughly 1.5 to 2 hours by road."
      }
    ]
  },
  {
    "id": "ramoji-film-city",
    "slug": "ramoji-film-city",
    "title": "Ramoji Film City Tour - Hyderabad",
    "subtitle": "Ramoji Film City tour package from Hyderabad: full-day studio tour, film sets, live shows and Hyderabad sightseeing in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ramoji Film City",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/ramoji-film-city.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Ramoji Film City tour package is built around a full day at the film studio complex on the edge of Hyderabad, with a second day for the city's main sights. Ramoji takes most of a day: the studio bus tour through film sets, live stunt and dance shows, Eureka and the evening events. We drop you early and pick you up at closing. Day two covers Charminar, Golconda Fort and Hussain Sagar before your drop. Travellers from Madurai usually fly or take a train to Hyderabad, and we pick you up there.",
    "highlights": [
      "Full day at Ramoji Film City",
      "Studio tour through film sets",
      "Live shows and stunt demos",
      "Charminar and Laad Bazaar",
      "Golconda Fort",
      "Hyderabadi biryani"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Ramoji Film City Full Day",
        "location": "Ramoji Film City",
        "description": "Early drop at the studio and a full day of tours and shows.",
        "bullets": [
          "Pickup from Hyderabad airport, station or hotel",
          "Drive to Ramoji (about 35 km)",
          "Studio tour, film sets and live shows",
          "Pickup at closing time and drop at the hotel"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Hyderabad Sightseeing",
        "location": "Hyderabad",
        "description": "The city's highlights, then drop.",
        "bullets": [
          "Charminar and Laad Bazaar",
          "Golconda Fort",
          "Hussain Sagar in the evening",
          "Drop at the airport or station"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to February. Weekends and school holidays are crowded at Ramoji.",
    "gettingThere": "Ramoji Film City is about 35 km from Hyderabad. Travellers from Madurai usually fly or take a train to Hyderabad.",
    "faqs": [
      {
        "question": "How much time is needed at Ramoji Film City?",
        "answer": "A full day, from opening to closing, to see the studio tour, sets and shows."
      },
      {
        "question": "Are Ramoji tickets included?",
        "answer": "No. Entry tickets are bought from Ramoji directly. We help you choose the right ticket type for your group."
      },
      {
        "question": "Is Ramoji good for small children?",
        "answer": "Yes. There are children's play areas and shows, though the day involves a lot of walking and bus rides."
      }
    ]
  },
  {
    "id": "mysore",
    "slug": "mysore",
    "title": "Mysore - Palace City, Karnataka",
    "subtitle": "Mysore tour package: Mysore Palace, Chamundi Hills, Brindavan Gardens, Srirangapatna and St Philomena's in 2 days, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Mysore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/mysore.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Mysore tour package covers the royal city's main sights. Mysore is about 430 km from Madurai, so most travellers arrive by train or flight via Bengaluru, and we pick them up there. Day one is Srirangapatna on the way in, then Mysore Palace, and the Brindavan Gardens fountain show in the evening. Day two starts with the Chamundeshwari Temple on Chamundi Hills, then St Philomena's Church and Devaraja market for Mysore pak, silk and sandalwood. On Sunday and holiday evenings the palace is lit up with thousands of bulbs, so we time your visit for that if we can.",
    "highlights": [
      "Mysore Palace",
      "Palace illumination on Sundays and holidays",
      "Chamundeshwari Temple on Chamundi Hills",
      "Brindavan Gardens fountain show",
      "Srirangapatna",
      "St Philomena's Church and Devaraja market"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Srirangapatna, Palace and Brindavan",
        "location": "Mysore",
        "description": "Pickup, Srirangapatna on the way, the palace and the evening garden show.",
        "bullets": [
          "Pickup from Bengaluru (about 150 km) or Mysore station",
          "Srirangapatna: Ranganathaswamy Temple and Tipu Sultan's summer palace",
          "Mysore Palace",
          "Brindavan Gardens fountain show in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Chamundi Hills and City",
        "location": "Mysore",
        "description": "Hilltop temple, church and market, then drop.",
        "bullets": [
          "Chamundeshwari Temple and the Nandi on Chamundi Hills",
          "St Philomena's Church",
          "Devaraja market and silk shops",
          "Drop at Mysore or Bengaluru"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. Mysore Dasara (September–October) is spectacular but very crowded.",
    "gettingThere": "Mysore is about 430 km from Madurai. Most travellers come by train or flight to Bengaluru or Mysore and we pick them up there.",
    "faqs": [
      {
        "question": "When is Mysore Palace lit up?",
        "answer": "The palace is usually illuminated on Sundays, public holidays and every night during Dasara, for a short time in the evening."
      },
      {
        "question": "Is the Brindavan Gardens fountain show daily?",
        "answer": "It usually runs every evening, but timings and closures change. We confirm before your visit."
      },
      {
        "question": "Can Mysore be combined with Ooty?",
        "answer": "Yes. Ooty is about 125 km from Mysore through the Bandipur and Mudumalai forests. A Mysore–Ooty trip returning to Madurai via Coimbatore works well."
      }
    ]
  },
  {
    "id": "hyderabad",
    "slug": "hyderabad",
    "title": "Hyderabad - City of Nizams",
    "subtitle": "Hyderabad sightseeing tour package: Charminar, Golconda Fort, Qutb Shahi Tombs, Hussain Sagar and biryani in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Hyderabad",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/hyderabad.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Hyderabad sightseeing tour package covers the old city, the forts and the food. Hyderabad is far from Madurai, so you fly in or take an overnight train, and we pick you up at the airport or station. Day one is the old city: Charminar, Laad Bazaar for bangles and pearls, Mecca Masjid and the Chowmahalla Palace, ending with biryani. Day two goes to Golconda Fort, the Qutb Shahi Tombs and the Salar Jung Museum, with an evening boat to the Buddha statue on Hussain Sagar before your drop.",
    "highlights": [
      "Charminar and Laad Bazaar",
      "Chowmahalla Palace",
      "Golconda Fort",
      "Qutb Shahi Tombs",
      "Salar Jung Museum",
      "Hussain Sagar boat to the Buddha statue"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Old City Hyderabad",
        "location": "Hyderabad",
        "description": "Pickup and the old city's palaces, bazaars and food.",
        "bullets": [
          "Pickup from Hyderabad airport or station",
          "Charminar and Laad Bazaar",
          "Mecca Masjid and Chowmahalla Palace (closed Fridays)",
          "Hyderabadi biryani dinner"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Golconda, Tombs and Lake",
        "location": "Hyderabad",
        "description": "Fort and tombs, museum, and the lake, then drop.",
        "bullets": [
          "Golconda Fort in the morning",
          "Qutb Shahi Tombs",
          "Salar Jung Museum (closed Fridays)",
          "Hussain Sagar boat ride and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to February. April to June is very hot.",
    "gettingThere": "Hyderabad is about 950 km from Madurai. Fly from Madurai (often via Chennai or Bengaluru) or take a train.",
    "faqs": [
      {
        "question": "Which sights in Hyderabad are closed on Fridays?",
        "answer": "The Salar Jung Museum and Chowmahalla Palace are usually closed on Fridays. We plan your days around this."
      },
      {
        "question": "Can Hyderabad be combined with Ramoji Film City?",
        "answer": "Yes. Ramoji is about 35 km from the city. A 3-day trip covering both is popular with families."
      },
      {
        "question": "Is the Golconda light and sound show worth it?",
        "answer": "It is a good evening option if you have time. Show times and languages vary by day, so we check in advance."
      }
    ]
  },
  {
    "id": "thekkady",
    "slug": "thekkady",
    "title": "Thekkady - Periyar Wildlife, Kerala",
    "subtitle": "Thekkady tour package from Madurai: Periyar lake boating, spice plantation walk, Kathakali and Kalari shows in 2 days, private cab and stay.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thekkady",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/thekkady.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Thekkady tour package from Madurai is one of the shortest Kerala getaways from the city: about 140 km and 3.5 to 4 hours via Theni and Cumbum. You arrive in time for a guided spice plantation walk among cardamom, pepper and clove, then watch a Kathakali or Kalaripayattu show in the evening. Next morning you take the Periyar lake boat ride inside the tiger reserve, where elephants, gaur and deer are often seen along the water's edge. Bamboo rafting or a nature walk can be added through the forest department. It is an easy family trip with very little walking.",
    "highlights": [
      "Periyar Tiger Reserve lake boat ride",
      "Guided spice plantation walk",
      "Kathakali and Kalaripayattu evening shows",
      "Optional bamboo rafting or nature walk",
      "Kumily spice market",
      "Drive through the Cumbum valley vineyards"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Thekkady and Spice Walk",
        "location": "Thekkady",
        "description": "Drive via Cumbum, spice plantation visit and an evening cultural show.",
        "bullets": [
          "Pickup from Madurai (about 140 km, 3.5–4 hours)",
          "Grape vineyards near Cumbum on the way",
          "Check-in, then a guided spice plantation walk",
          "Kathakali or Kalaripayattu show in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Periyar Lake Boating and Return",
        "location": "Thekkady",
        "description": "Morning boat ride in the tiger reserve, then the drive back.",
        "bullets": [
          "Early Periyar lake boat ride (tickets sold by the forest department)",
          "Optional nature walk or bamboo rafting",
          "Kumily market for spices and tea",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. Wildlife is easier to see near the water in the dry months of March to May. Boat rides can be cancelled in heavy monsoon rain.",
    "gettingThere": "Thekkady (Kumily) is about 140 km from Madurai via Theni and Cumbum (3.5–4 hours).",
    "faqs": [
      {
        "question": "How far is Thekkady from Madurai?",
        "answer": "About 140 km, roughly 3.5 to 4 hours by road via Theni, Cumbum and the Kumily border."
      },
      {
        "question": "How do we book the Periyar boat ride?",
        "answer": "Tickets are sold by the forest department, mostly online, and the early trips fill fast. We help you book as soon as your dates are fixed; ticket costs are not part of the package."
      },
      {
        "question": "Can Thekkady and Munnar be combined?",
        "answer": "Yes. Munnar is about 90 km from Thekkady. A 3-day Madurai–Thekkady–Munnar loop is a popular plan."
      }
    ]
  },
  {
    "id": "chikmagalur",
    "slug": "chikmagalur",
    "title": "Chikmagalur - Coffee Land, Karnataka",
    "subtitle": "Chikmagalur tour package: Mullayanagiri, Baba Budangiri, coffee estate stay, Hebbe Falls and Z Point in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Chikmagalur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/chikmagalur.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Chikmagalur tour package takes you into Karnataka's coffee hills and up to Mullayanagiri, the highest peak in the state. Chikmagalur is far from Madurai, so we pick you up in Bengaluru (about 245 km) or Mangaluru. Day one covers a coffee estate walk with a fresh brew, then the drive up to Mullayanagiri and Baba Budangiri for the views. Day two goes to Kemmangundi, the Z Point trail and Hebbe Falls, which is reached by an estate jeep, before your drop. It suits couples and friends who like hills, coffee and short hikes.",
    "highlights": [
      "Coffee estate walk and stay",
      "Mullayanagiri peak",
      "Baba Budangiri hills",
      "Kemmangundi and Z Point",
      "Hebbe Falls by jeep",
      "Hirekolale Lake sunset"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Bengaluru to Chikmagalur and the Peaks",
        "location": "Chikmagalur",
        "description": "Pickup from Bengaluru, coffee estate stay and the highest peaks.",
        "bullets": [
          "Pickup from Bengaluru (about 245 km, 5 hours)",
          "Coffee estate walk and tasting",
          "Mullayanagiri and Baba Budangiri",
          "Hirekolale Lake at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Kemmangundi, Hebbe Falls and Drop",
        "location": "Kemmangundi",
        "description": "Viewpoints and the jeep to Hebbe Falls, then drop.",
        "bullets": [
          "Kemmangundi and the Z Point trail",
          "Jeep ride to Hebbe Falls (when open)",
          "Drop at Bengaluru or Mangaluru"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "September to March. The road to Mullayanagiri can be closed or limited on busy weekends and in heavy rain.",
    "gettingThere": "Chikmagalur is about 245 km from Bengaluru and 150 km from Mangaluru. Travellers from Madurai usually come by train or flight to Bengaluru.",
    "faqs": [
      {
        "question": "Is there a vehicle limit for Mullayanagiri?",
        "answer": "The district administration has used online slots and vehicle limits on busy days. We check the current rule for your date."
      },
      {
        "question": "How do we reach Hebbe Falls?",
        "answer": "By a local 4x4 jeep from Kemmangundi, followed by a short walk. Access depends on the forest department and the season."
      },
      {
        "question": "Can Chikmagalur and Coorg be combined?",
        "answer": "Yes, but they are about 180 km apart. A 4-day plan covering both is more comfortable."
      }
    ]
  },
  {
    "id": "vagamon",
    "slug": "vagamon",
    "title": "Vagamon - Hill Station, Kerala",
    "subtitle": "Vagamon tour package from Madurai: meadows, pine forest, Vagamon Lake, Kurisumala and Thangal Para in 2 days, with private cab and stay.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Vagamon",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/vagamon.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Vagamon tour package from Madurai is a quiet hill getaway in Idukki, about 200 km and 5 hours away via Kumily. Unlike Munnar, Vagamon is all open grass meadows, pine forest and cool wind, with far fewer crowds. Day one covers the meadows and the pine forest. Day two goes to Vagamon Lake, the Kurisumala hill and ashram, Murugan Mala and Thangal Para before the drive back. It suits couples and families who want calm views and short walks rather than a packed sightseeing list.",
    "highlights": [
      "Vagamon meadows",
      "Pine forest walk",
      "Vagamon Lake",
      "Kurisumala hill and ashram",
      "Thangal Para rock",
      "Murugan Mala viewpoint"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Vagamon via Kumily",
        "location": "Vagamon",
        "description": "Drive through Theni and Kumily, then the meadows and pine forest.",
        "bullets": [
          "Pickup from Madurai (about 200 km, 5 hours)",
          "Check-in",
          "Vagamon meadows (Mottakunnu)",
          "Pine forest walk at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Lake, Hills and Return",
        "location": "Vagamon",
        "description": "Morning viewpoints and the lake, then the return drive.",
        "bullets": [
          "Kurisumala hill and ashram",
          "Thangal Para and Murugan Mala",
          "Vagamon Lake",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "September to May. The monsoon months bring heavy mist and rain, which some travellers love but which hides the views.",
    "gettingThere": "Vagamon is about 200 km from Madurai via Theni and Kumily (around 5 hours). Kottayam station is about 65 km away.",
    "faqs": [
      {
        "question": "How far is Vagamon from Madurai?",
        "answer": "About 200 km, roughly 5 hours via Theni, Kumily and Elappara."
      },
      {
        "question": "Vagamon or Kodaikanal: which is better?",
        "answer": "Vagamon is quieter, with open meadows and fewer shops. Kodaikanal has more sights and is closer to Madurai. Our comparison guide explains the difference."
      },
      {
        "question": "Can Vagamon be combined with Thekkady?",
        "answer": "Yes. Thekkady is about 45 km from Vagamon, so a 3-day Madurai–Thekkady–Vagamon loop works well."
      }
    ]
  },
  {
    "id": "pondicherry",
    "slug": "pondicherry",
    "title": "Pondicherry - French Town & Beaches",
    "subtitle": "Pondicherry tour package from Madurai: White Town, Promenade Beach, Auroville, Aurobindo Ashram and Paradise Beach in 2 days, private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Pondicherry - French Town & Beaches",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/pondicherry.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Pondicherry tour package from Madurai covers the French-era town, the beaches and Auroville. The drive is about 330 km, roughly 6.5 to 7 hours via Trichy, so day one is the drive in with an evening walk along Promenade Beach and the colourful streets of White Town. Day two includes the Sri Aurobindo Ashram, the Auroville visitor centre and the Matrimandir viewing point, and a boat to Paradise Beach before you head back. It suits couples, friends and families who like cafes, walking and the sea.",
    "highlights": [
      "Promenade Beach evening walk",
      "French Quarter (White Town) streets",
      "Sri Aurobindo Ashram",
      "Auroville and the Matrimandir viewpoint",
      "Boat to Paradise Beach",
      "French and Tamil food in local cafes"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Pondicherry",
        "location": "Pondicherry",
        "description": "Long drive via Trichy, then the Promenade and White Town at dusk.",
        "bullets": [
          "Early pickup from Madurai (about 330 km, 6.5–7 hours)",
          "Check-in",
          "Promenade Beach at sunset",
          "Walk through White Town and dinner in a local cafe"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Auroville, Ashram and Paradise Beach",
        "location": "Pondicherry",
        "description": "Morning in Auroville and the ashram, a beach boat, then the return.",
        "bullets": [
          "Sri Aurobindo Ashram (morning)",
          "Auroville visitor centre and Matrimandir viewpoint",
          "Boat ride to Paradise Beach",
          "Return to Madurai (late evening arrival)"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. April to June is hot and humid. Heavy rain is common in November with the northeast monsoon.",
    "gettingThere": "Pondicherry is about 330 km from Madurai via Trichy (6.5–7 hours). Chennai airport is about 150 km away if you prefer to fly in.",
    "faqs": [
      {
        "question": "How to visit the Matrimandir in Auroville?",
        "answer": "Day visitors can see the Matrimandir from the viewing point after a walk from the visitor centre. Going inside needs an advance booking with Auroville."
      },
      {
        "question": "Is 2 days enough for Pondicherry from Madurai?",
        "answer": "It covers the main sights, but the drive is long. A third night lets you relax by the beach and visit Chidambaram or Pichavaram mangroves."
      },
      {
        "question": "Is Pondicherry good for families?",
        "answer": "Yes. The Promenade is closed to vehicles in the evenings, and the beaches, ashram and Auroville suit all ages."
      }
    ]
  },
  {
    "id": "thiruvananthapuram",
    "slug": "thiruvananthapuram",
    "title": "Thiruvananthapuram Tour - Kerala Capital City",
    "subtitle": "Trivandrum tour package from Madurai: Padmanabhaswamy Temple, Kovalam, Poovar backwaters and Napier Museum in 2 days, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thiruvananthapuram Tour - Kerala Capital City",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/thiruvananthapuram.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Thiruvananthapuram (Trivandrum) tour package from Madurai covers Kerala's capital, its beaches and the backwater estuary at Poovar. Day one is the city: Sree Padmanabhaswamy Temple darshan, the Kuthira Malika palace museum next to it, and the Napier Museum and zoo grounds. Day two heads to the coast for Kovalam's beaches and lighthouse and a boat ride through the Poovar mangroves to the golden sand bar where the river meets the sea. The drive from Madurai is about 300 km via Tirunelveli and Nagercoil, roughly 6 hours.",
    "highlights": [
      "Sree Padmanabhaswamy Temple darshan",
      "Kuthira Malika palace museum",
      "Napier Museum",
      "Kovalam beach and lighthouse",
      "Poovar backwater boat ride",
      "Chalai bazaar"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Trivandrum City",
        "location": "Thiruvananthapuram",
        "description": "Drive via Nagercoil, then the temple and museums.",
        "bullets": [
          "Early pickup from Madurai (about 300 km, 6 hours)",
          "Sree Padmanabhaswamy Temple darshan (dress code applies)",
          "Kuthira Malika palace museum",
          "Napier Museum grounds and Chalai bazaar"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Kovalam and Poovar",
        "location": "Kovalam, Poovar",
        "description": "Beaches and the backwater estuary, then return.",
        "bullets": [
          "Kovalam Lighthouse beach",
          "Poovar backwater and mangrove boat ride",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. The monsoon months bring heavy rain and rough seas at Kovalam.",
    "gettingThere": "Trivandrum is about 300 km from Madurai via Tirunelveli and Nagercoil (around 6 hours). Trivandrum airport and Trivandrum Central station are in the city.",
    "faqs": [
      {
        "question": "What is the dress code at Padmanabhaswamy Temple?",
        "answer": "Men wear a mundu or dhoti without a shirt. Women wear a saree, or a long skirt and blouse. Dhotis can be rented near the temple. Phones and cameras are not allowed inside."
      },
      {
        "question": "How far is Kovalam from Trivandrum?",
        "answer": "About 16 km, roughly 30 minutes by road."
      },
      {
        "question": "Can this trip start from Trivandrum airport?",
        "answer": "Yes. We can pick you up at Trivandrum airport or station and drop you at Madurai, or the other way round."
      }
    ]
  },
  {
    "id": "kochi",
    "slug": "kochi",
    "title": "Kochi - Fort Kochi, Kerala",
    "subtitle": "Kochi tour package from Madurai: Fort Kochi, Chinese fishing nets, Mattancherry, Jew Town and a Kathakali show in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kochi",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kochi.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Kochi tour package from Madurai covers the old port city's history and food. The drive is about 260 km via Theni, Kumily and Kottayam, roughly 6.5 hours. Day one ends at Fort Kochi with the Chinese fishing nets at sunset and a Kathakali show in the evening. Day two is a walking tour of St Francis Church, the Santa Cruz Basilica, Mattancherry Palace with its mural paintings, Jew Town and the Paradesi Synagogue, then Marine Drive before the return. Families with children can swap part of day two for Wonderla amusement park.",
    "highlights": [
      "Chinese fishing nets at Fort Kochi",
      "Kathakali show",
      "St Francis Church and Santa Cruz Basilica",
      "Mattancherry Palace murals",
      "Jew Town and Paradesi Synagogue",
      "Marine Drive walkway"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kochi and Fort Kochi Sunset",
        "location": "Kochi",
        "description": "Drive to Kochi, then the fishing nets and a Kathakali show.",
        "bullets": [
          "Early pickup from Madurai (about 260 km, 6.5 hours)",
          "Check-in",
          "Chinese fishing nets at sunset",
          "Kathakali show in the evening"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Heritage Walk and Return",
        "location": "Fort Kochi, Mattancherry",
        "description": "Churches, palace and Jew Town, then the drive back.",
        "bullets": [
          "St Francis Church and Santa Cruz Basilica",
          "Mattancherry Palace (closed Fridays)",
          "Jew Town and Paradesi Synagogue (closed Fridays, Saturdays and Jewish holidays)",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. The monsoon is wet but Kochi's sights stay open.",
    "gettingThere": "Kochi is about 260 km from Madurai via Theni, Kumily and Kottayam (around 6.5 hours). Kochi airport and Ernakulam stations make one-way trips easy.",
    "faqs": [
      {
        "question": "How many days are enough for Kochi?",
        "answer": "Two days cover Fort Kochi, Mattancherry and a cultural show. Add a day for a backwater trip or Wonderla."
      },
      {
        "question": "When is the Paradesi Synagogue closed?",
        "answer": "It is usually closed on Fridays, Saturdays and Jewish holidays. Mattancherry Palace is closed on Fridays. We plan your days around these."
      },
      {
        "question": "Can we combine Kochi with Munnar?",
        "answer": "Yes. Munnar is about 125 km from Kochi. A Madurai–Munnar–Kochi loop over 3 or 4 days is popular."
      }
    ]
  },
  {
    "id": "rameshwaram",
    "slug": "rameshwaram",
    "title": "Rameshwaram - Pilgrimage, Tamil Nadu",
    "subtitle": "Rameshwaram tour package from Madurai: Ramanathaswamy Temple, 22 theertham bath, Dhanushkodi and Pamban Bridge, with private cab and hotel.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Rameshwaram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/rameshwaram.webp",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "This 2-day Rameshwaram tour package from Madurai takes you to the Ramanathaswamy Temple, one of the twelve Jyotirlingas, for the holy bath in the 22 temple theerthams and darshan. The drive from Madurai is about 3.5 to 4 hours and crosses the Pamban Bridge with views of the old rail bridge and the sea. On day two you drive to Dhanushkodi and Arichal Munai, the land's end point facing Sri Lanka, then visit the Dr APJ Abdul Kalam Memorial before returning. Your private AC cab and driver stay with you throughout, which makes the theertham bath and the early morning temple visit much easier with family.",
    "highlights": [
      "Agni Theertham sea bath and the 22 temple theerthams",
      "Ramanathaswamy Temple darshan and its long pillared corridors",
      "Drive across the Pamban Bridge",
      "Dhanushkodi ruins and Arichal Munai land's end",
      "Dr APJ Abdul Kalam National Memorial",
      "Panchamukhi Hanuman Temple and floating stones"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Rameshwaram and Temple Darshan",
        "location": "Rameshwaram",
        "description": "Morning drive from Madurai over the Pamban Bridge, then theertham bath and darshan.",
        "bullets": [
          "Early pickup from Madurai (about 175 km, 3.5–4 hours)",
          "Stop on the Pamban Bridge for sea views",
          "Agni Theertham bath, then the 22 theertham bath inside the temple",
          "Ramanathaswamy Temple darshan and corridor walk",
          "Evening at leisure, overnight in Rameshwaram"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Dhanushkodi and Kalam Memorial",
        "location": "Dhanushkodi",
        "description": "Land's end at Dhanushkodi, local temples, and return to Madurai.",
        "bullets": [
          "Morning drive to Dhanushkodi and Arichal Munai (about 20 km)",
          "Ruins of the old church and railway station",
          "Panchamukhi Hanuman Temple and Ram Jharoka",
          "Dr APJ Abdul Kalam National Memorial",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ],
    "bestTime": "October to April. Mahashivaratri and Aadi Amavasai draw huge crowds. Wind is strong at Dhanushkodi from May to September.",
    "gettingThere": "Rameshwaram is about 175 km from Madurai by road (3.5–4 hours). We pick you up from home, Madurai Airport or Madurai Junction.",
    "faqs": [
      {
        "question": "How to plan a Rameshwaram trip from Madurai?",
        "answer": "Leave Madurai early, do the theertham bath and darshan on day one, stay overnight, and visit Dhanushkodi the next morning. Two days avoids rushing the temple rituals."
      },
      {
        "question": "What should I carry for the 22 theertham bath?",
        "answer": "Carry a spare set of clothes, a towel and a bag for wet clothes. Women usually bathe in a salwar or saree. Dry changing rooms are available near the temple."
      },
      {
        "question": "Can we do Rameshwaram and Dhanushkodi in one day from Madurai?",
        "answer": "It is possible but tiring: about 8 hours of driving plus the temple. We recommend staying one night."
      },
      {
        "question": "Is Dhanushkodi open every day?",
        "answer": "Usually yes, but vehicles are allowed only during daylight hours and access can close in rough weather. We check before you go."
      }
    ]
  },
  {
    "id": "courtallam",
    "slug": "courtallam",
    "title": "Courtallam - Waterfalls, Tamil Nadu",
    "subtitle": "Courtallam tour package from Madurai: Main Falls, Five Falls, Old Courtallam and Tenkasi temples in 2 days, with private cab and stay.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Courtallam",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/courtallam.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Courtallam tour package from Madurai is built for the waterfall season, roughly June to September, when the southwest monsoon fills the falls. The drive is about 160 km and 3.5 to 4 hours via Rajapalayam. You bathe at the Main Falls (Peraruvi), Five Falls (Aintharuvi) and Old Courtallam, and visit the Kutralanathar Temple at the base of the falls and the Kasi Viswanathar Temple in Tenkasi. Because bathing is sometimes stopped when the water is too strong, your driver moves you between falls according to what is open that day.",
    "highlights": [
      "Main Falls (Peraruvi)",
      "Five Falls (Aintharuvi)",
      "Old Courtallam falls",
      "Kutralanathar Temple",
      "Tenkasi Kasi Viswanathar Temple",
      "Courtallam fruit and spice stalls"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Courtallam and Main Falls",
        "location": "Courtallam",
        "description": "Drive via Rajapalayam and bathe at the Main Falls and Five Falls.",
        "bullets": [
          "Pickup from Madurai (about 160 km, 3.5–4 hours)",
          "Check-in at a hotel near the falls",
          "Main Falls bath and Kutralanathar Temple",
          "Five Falls in the afternoon"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Old Courtallam and Tenkasi",
        "location": "Courtallam, Tenkasi",
        "description": "Quieter falls in the morning, Tenkasi temple, then return.",
        "bullets": [
          "Old Courtallam falls early in the morning",
          "Tenkasi Kasi Viswanathar Temple",
          "Shopping for local fruits, spices and oil",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "June to September, when the falls are full. Outside these months the flow can be very low.",
    "gettingThere": "Courtallam is about 160 km from Madurai via Rajapalayam and Tenkasi (3.5–4 hours). Tenkasi railway station is 5 km away.",
    "faqs": [
      {
        "question": "What is the best season for Courtallam?",
        "answer": "June to September. That is when the southwest monsoon keeps the falls flowing. In other months several falls can be almost dry."
      },
      {
        "question": "Is bathing in Courtallam falls safe?",
        "answer": "Bathing is allowed only when the police and forest staff say the flow is safe, and separate areas are kept for women. Bathing stops during flash floods."
      },
      {
        "question": "Can Courtallam be done as a day trip from Madurai?",
        "answer": "Yes, but you will only manage one or two falls. One night lets you see the main falls without rushing."
      }
    ]
  },
  {
    "id": "kodaikanal",
    "slug": "kodaikanal",
    "title": "Kodaikanal - Hill Station, Tamil Nadu",
    "subtitle": "Kodaikanal tour package from Madurai for 2 days: lake boating, Coaker's Walk, Pillar Rocks, pine forest and Guna Caves, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kodaikanal",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kodaikanal.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Kodaikanal tour package from Madurai is the easiest hill station trip from the city: about 120 km and 3 to 3.5 hours up the Batlagundu ghat road. Day one covers the town: Kodai Lake boating, Bryant Park and Coaker's Walk. Day two goes out to the forest viewpoints: Pillar Rocks, Guna Caves, the pine forest and Moir Point, with Poombarai village and its terraced fields if the weather is clear. Your driver knows the ghat road and the parking at each point, which saves a lot of time in the crowded season. It suits families, couples and college groups.",
    "highlights": [
      "Kodaikanal Lake boating and cycling",
      "Coaker's Walk valley views",
      "Pillar Rocks and Guna Caves",
      "Pine forest and Moir Point",
      "Bryant Park",
      "Poombarai village viewpoint"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kodaikanal and Town Sights",
        "location": "Kodaikanal",
        "description": "Ghat drive from Madurai, check-in, and the lake, park and Coaker's Walk.",
        "bullets": [
          "Pickup from Madurai (about 120 km, 3–3.5 hours)",
          "Silver Cascade falls on the ghat road",
          "Check-in, then Kodai Lake boating",
          "Bryant Park and Coaker's Walk at sunset",
          "Evening in the bazaar for homemade chocolates"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Forest Viewpoints and Return",
        "location": "Kodaikanal",
        "description": "Pillar Rocks, Guna Caves and the pine forest, then the drive back.",
        "bullets": [
          "Pillar Rocks and Guna Caves (Devil's Kitchen)",
          "Pine forest and Moir Point",
          "Poombarai village view or Kurinji Andavar Temple",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to June. April and May are the peak season and very crowded. Expect mist and rain from June to September, which can hide the viewpoints.",
    "gettingThere": "Kodaikanal is about 120 km from Madurai via Batlagundu (3–3.5 hours). We can also pick you up at Kodaikanal Road railway station.",
    "faqs": [
      {
        "question": "How many days are enough for Kodaikanal from Madurai?",
        "answer": "Two days cover the town and the forest viewpoints comfortably. A third day adds Berijam Lake (forest permit needed) or Mannavanur."
      },
      {
        "question": "What is the distance from Madurai to Kodaikanal?",
        "answer": "About 120 km via Batlagundu, roughly 3 to 3.5 hours by car."
      },
      {
        "question": "Is Kodaikanal good for a family trip with kids?",
        "answer": "Yes. Boating, horse rides by the lake, Bryant Park and short viewpoint walks all suit children."
      },
      {
        "question": "Do we need an e-pass for Kodaikanal?",
        "answer": "In peak season the Tamil Nadu authorities have sometimes required an e-pass for vehicles. We check the current rule and arrange it for your cab."
      }
    ]
  },
  {
    "id": "thanjavur",
    "slug": "thanjavur",
    "title": "Thanjavur - Big Temple, Tamil Nadu",
    "subtitle": "Thanjavur tour package from Madurai: Big Temple, Thanjavur Palace, Saraswathi Mahal Library and Kallanai dam in 2 days, private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thanjavur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/thanjavur.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Thanjavur tour package from Madurai is for travellers who want to see the Chola heartland properly, not just a quick stop at the temple. The Brihadeeswarar Temple, a UNESCO World Heritage Site, is best seen twice: in the afternoon light and again in the evening when it is lit up. You also visit the Thanjavur Maratha Palace, the Saraswathi Mahal Library and the art gallery, and watch Tanjore painting and bronze workshops. Day two goes to the Kallanai dam on the Kaveri and the Airavatesvara Temple at Darasuram before you return. Thanjavur is about 190 km from Madurai, roughly 3.5 to 4 hours by road.",
    "highlights": [
      "Brihadeeswarar (Big Temple), a UNESCO site",
      "Big Temple lit up at night",
      "Thanjavur Maratha Palace and art gallery",
      "Saraswathi Mahal Library",
      "Kallanai dam on the Kaveri",
      "Airavatesvara Temple, Darasuram"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Thanjavur and the Big Temple",
        "location": "Thanjavur",
        "description": "Drive to Thanjavur, the palace complex, and the Big Temple in afternoon and evening light.",
        "bullets": [
          "Pickup from Madurai (about 190 km, 3.5–4 hours)",
          "Thanjavur Palace, Saraswathi Mahal Library and art gallery",
          "Brihadeeswarar Temple in the late afternoon",
          "Evening view of the lit temple",
          "Tanjore painting and bronze shops"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Kallanai and Darasuram",
        "location": "Kallanai, Darasuram",
        "description": "The ancient dam, the Darasuram temple, and return.",
        "bullets": [
          "Kallanai (Grand Anicut) on the Kaveri",
          "Airavatesvara Temple at Darasuram",
          "Optional Kumbakonam temple stop",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. Avoid midday in April and May, when the temple's stone floor gets very hot.",
    "gettingThere": "Thanjavur is about 190 km from Madurai (3.5–4 hours). Trichy airport is about 60 km away, and Thanjavur Junction is on the main rail line.",
    "faqs": [
      {
        "question": "How much time is needed to see the Thanjavur Big Temple?",
        "answer": "Allow two to three hours to see the temple, the Nandi and the corridor paintings, and come back in the evening for the lighting."
      },
      {
        "question": "Is Thanjavur Palace open on all days?",
        "answer": "The palace and library are usually open daily with a lunch break. Some sections close on certain holidays, so we confirm before your trip."
      },
      {
        "question": "Can we do Thanjavur and Kumbakonam together?",
        "answer": "Yes. Kumbakonam is about 40 km from Thanjavur. Our Navagraha temple guide shows how to plan the circuit."
      }
    ]
  },
  {
    "id": "wayanad",
    "slug": "wayanad",
    "title": "Wayanad - Wildlife & Nature, Kerala",
    "subtitle": "Wayanad tour package from Madurai: Edakkal Caves, Banasura Sagar Dam, Soochipara falls and Pookode Lake in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Wayanad",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/wayanad.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Wayanad tour package from Madurai covers the highlights of Kerala's northern hill district. It is a long drive, about 450 km via Coimbatore and Gudalur, so we recommend an overnight start or adding a night. Day one covers Pookode Lake and the Banasura Sagar Dam. Day two goes to the Edakkal Caves, with rock carvings thousands of years old, and Soochipara falls before the return. The Chembra Peak trek and the Muthanga and Tholpetty wildlife safaris can be added; they are run by the forest department and need advance slots.",
    "highlights": [
      "Edakkal Caves rock carvings",
      "Banasura Sagar Dam",
      "Pookode Lake",
      "Soochipara falls",
      "Optional Chembra Peak trek",
      "Tea, coffee and spice estates"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Wayanad",
        "location": "Wayanad",
        "description": "Long drive via Coimbatore and Gudalur, then Pookode Lake and Banasura Sagar.",
        "bullets": [
          "Very early pickup from Madurai (about 450 km, 9–10 hours)",
          "Pookode Lake",
          "Banasura Sagar Dam at sunset (if time allows)",
          "Overnight in Wayanad"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Edakkal Caves, Soochipara and Return",
        "location": "Wayanad",
        "description": "Caves and waterfalls, then the drive back.",
        "bullets": [
          "Edakkal Caves (closed on Mondays)",
          "Soochipara falls",
          "Spice and tea shopping",
          "Return towards Madurai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to May. Heavy monsoon rain from June to September can close treks and the cave path.",
    "gettingThere": "Wayanad is about 450 km from Madurai via Coimbatore and Gudalur. Kozhikode airport is about 90 km away, which suits travellers who prefer to fly.",
    "faqs": [
      {
        "question": "Is 2 days enough for Wayanad from Madurai?",
        "answer": "The drive is long, so 3 days is better. It allows Chembra Peak or a wildlife safari without rushing."
      },
      {
        "question": "Are Edakkal Caves open every day?",
        "answer": "They are usually closed on Mondays and entry is limited per day. Arrive early to avoid long queues."
      },
      {
        "question": "Do we need a permit for Chembra Peak?",
        "answer": "Yes. The trek is run by the forest department with limited daily slots and a guide. Check whether it is open on your dates."
      }
    ]
  },
  {
    "id": "kanyakumari",
    "slug": "kanyakumari",
    "title": "Kanyakumari",
    "subtitle": "Kanyakumari tour package from Madurai: sunrise, Vivekananda Rock, Thiruvalluvar Statue and Padmanabhapuram Palace, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanyakumari",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/kanyakumari.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Kanyakumari tour package from Madurai is built around the two moments people come for: sunset on the evening you arrive and sunrise over the sea the next morning. Between them you take the ferry to the Vivekananda Rock Memorial and the Thiruvalluvar Statue, now linked by a glass bridge, and visit the Bhagavathy Amman Temple and the Gandhi Mandapam. On the way back you stop at Suchindram Temple and Padmanabhapuram Palace, the old wooden palace of the Travancore kings. The drive from Madurai is about 4.5 hours on NH44, and your private cab stays with you, so you can start early for sunrise without hunting for an auto.",
    "highlights": [
      "Sunrise and sunset at the southern tip of India",
      "Ferry to Vivekananda Rock Memorial",
      "Thiruvalluvar Statue and the glass bridge",
      "Kanyakumari Bhagavathy Amman Temple",
      "Suchindram Thanumalayan Temple",
      "Padmanabhapuram Palace"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kanyakumari and Sunset",
        "location": "Kanyakumari",
        "description": "Drive down NH44, check in, and watch the sunset from the seafront.",
        "bullets": [
          "Pickup from Madurai (about 245 km, 4.5 hours)",
          "Check-in at a hotel near the sea",
          "Bhagavathy Amman Temple and Gandhi Mandapam",
          "Sunset at the beach or the sunset point",
          "Evening walk through the seafront market"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Sunrise, Rock Memorial and Palace",
        "location": "Kanyakumari, Padmanabhapuram",
        "description": "Sunrise, the island monuments, then sights on the way back.",
        "bullets": [
          "Sunrise from the hotel or the shore",
          "Ferry to Vivekananda Rock and the Thiruvalluvar Statue",
          "Suchindram Temple on the way out",
          "Padmanabhapuram Palace (closed on Mondays)",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March for clear sunrises. The ferry can stop in rough sea, more often from June to August.",
    "gettingThere": "Kanyakumari is about 245 km from Madurai (4.5 hours by road). We can also pick you up at Kanyakumari or Nagercoil railway station, or Thiruvananthapuram airport.",
    "faqs": [
      {
        "question": "Is one night enough for Kanyakumari?",
        "answer": "Yes. Arrive by afternoon for the sunset, see the sunrise next morning, take the ferry to the rock memorial and drive back."
      },
      {
        "question": "What time is the ferry to Vivekananda Rock?",
        "answer": "The ferry usually runs from about 8 am to 4 pm. Queues are long on weekends, so we go early."
      },
      {
        "question": "Is Padmanabhapuram Palace open every day?",
        "answer": "It is closed on Mondays and some public holidays. If your return falls on a Monday we swap it for another stop."
      }
    ]
  },
  {
    "id": "madurai",
    "slug": "madurai",
    "title": "Madurai - Meenakshi Temple, Tamil Nadu",
    "subtitle": "Madurai sightseeing tour package for 2 days: Meenakshi Temple, Thirumalai Nayakkar Palace, Alagar Kovil and local food, with a private AC cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Madurai",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/madurai.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Madurai sightseeing tour package covers the city's must-see places at an easy pace, with a private AC cab and driver from pickup to drop. You visit the Meenakshi Amman Temple, the Thirumalai Nayakkar Mahal and its evening light and sound show, the Vandiyur Mariamman Teppakulam and the Gandhi Memorial Museum. Day two takes you out of the city to Alagar Kovil and the Pazhamudircholai Murugan temple on the same hill. Evenings are kept free for Madurai's famous food: jigarthanda, kari dosai and the night stalls around the temple. It suits families, first-time visitors and anyone with a train or flight to catch, because the plan works around your arrival time.",
    "highlights": [
      "Meenakshi Amman Temple and the Thousand Pillar Hall",
      "Thirumalai Nayakkar Mahal and the evening light and sound show",
      "Vandiyur Mariamman Teppakulam temple tank",
      "Gandhi Memorial Museum",
      "Alagar Kovil and Pazhamudircholai on Alagar Hills",
      "Madurai jigarthanda and street food stops"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai City Temples and Palace",
        "location": "Madurai",
        "description": "Pickup and a full day of Madurai's core sights, ending with the palace light show.",
        "bullets": [
          "Pickup from Madurai airport, railway station or your hotel, and check-in",
          "Meenakshi Amman Temple darshan and the Thousand Pillar Hall museum",
          "Lunch break, then the Gandhi Memorial Museum",
          "Thirumalai Nayakkar Mahal and the evening light and sound show",
          "Dinner and jigarthanda near the temple streets"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Alagar Hills and Teppakulam",
        "location": "Alagar Kovil, Madurai",
        "description": "A short drive to the Alagar Hills temples, then the temple tank and drop.",
        "bullets": [
          "Drive to Alagar Kovil (about 21 km), the Kallazhagar temple",
          "Pazhamudircholai, one of Lord Murugan's six abodes, on the same hill",
          "Vandiyur Mariamman Teppakulam on the way back",
          "Shopping for Madurai sungudi sarees, then drop at the station, airport or home"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March is the most comfortable. April to June is hot, so we plan temple visits for early morning and evening. Chithirai Thiruvizha (April–May) is spectacular but very crowded.",
    "gettingThere": "Madurai is well connected by air (Madurai Airport, IXM) and rail (Madurai Junction). We pick you up from the airport, station or your hotel.",
    "faqs": [
      {
        "question": "How many days are enough for Madurai sightseeing?",
        "answer": "Two days are enough to see the Meenakshi Temple, Thirumalai Nayakkar Mahal, Gandhi Museum, Teppakulam and Alagar Kovil without rushing."
      },
      {
        "question": "Are mobile phones allowed inside Meenakshi Amman Temple?",
        "answer": "No. Phones and cameras are not allowed inside the temple. Your driver can keep them, or you can use the counters near the entrances."
      },
      {
        "question": "Is there a dress code for Meenakshi Temple?",
        "answer": "Dress modestly. Shorts, sleeveless tops and short skirts are not allowed. Men can wear trousers or a dhoti; women can wear a saree, salwar or long skirt."
      },
      {
        "question": "Can this Madurai tour be done in one day?",
        "answer": "Yes. A one-day version covers the temple, palace and Gandhi Museum. Message us on WhatsApp and we will plan it around your train or flight."
      }
    ]
  },
  {
    "id": "yercaud",
    "slug": "yercaud",
    "title": "Yercaud - Hill Station, Tamil Nadu",
    "subtitle": "Yercaud tour package from Madurai: Yercaud Lake, Lady's Seat, Pagoda Point and Killiyur Falls in 2 days, a quiet hill station trip by private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Yercaud",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/yercaud.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Yercaud tour package from Madurai is for families who want a hill station with less traffic than Ooty or Kodaikanal. Yercaud sits in the Shevaroy Hills above Salem, about 230 km and 5 hours from Madurai. Day one covers Yercaud Lake, Anna Park and the Lady's Seat viewpoint over the Salem plains at sunset. Day two takes you to Pagoda Point, the Shevaroyan temple on the highest point, Killiyur Falls and a coffee estate before the drive home. It is a short, relaxed trip with mild weather most of the year.",
    "highlights": [
      "Yercaud Lake boating",
      "Lady's Seat sunset over Salem",
      "Pagoda Point viewpoint",
      "Shevaroyan temple and cave",
      "Killiyur Falls",
      "Coffee and pepper estates"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Yercaud",
        "location": "Yercaud",
        "description": "Drive via Salem, up the 20-hairpin ghat road, then the lake and Lady's Seat.",
        "bullets": [
          "Pickup from Madurai (about 230 km, 5 hours)",
          "Check-in and lunch",
          "Yercaud Lake and Anna Park",
          "Lady's Seat at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Viewpoints, Falls and Return",
        "location": "Yercaud",
        "description": "Pagoda Point, the Shevaroyan temple and Killiyur Falls, then the drive back.",
        "bullets": [
          "Pagoda Point and Shevaroyan temple",
          "Killiyur Falls (a short walk down)",
          "Coffee estate visit",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "Pleasant almost all year. October to June is best; Killiyur Falls flows well after the monsoon.",
    "gettingThere": "Yercaud is about 230 km from Madurai via Dindigul, Karur and Salem (around 5 hours). Salem Junction is 30 km away.",
    "faqs": [
      {
        "question": "How far is Yercaud from Madurai?",
        "answer": "About 230 km, roughly 5 hours by road via Salem."
      },
      {
        "question": "Is Yercaud worth visiting in summer?",
        "answer": "Yes. It is cooler than the plains and far less crowded than Ooty or Kodaikanal in April and May."
      },
      {
        "question": "Is the Yercaud ghat road difficult?",
        "answer": "It has 20 hairpin bends but is well maintained. Our drivers drive it regularly."
      }
    ]
  },
  {
    "id": "ooty",
    "slug": "ooty",
    "title": "Ooty - Nilgiri Hills, Tamil Nadu",
    "subtitle": "Ooty tour package from Madurai: Nilgiri toy train, Botanical Garden, Ooty Lake, Doddabetta and Pykara in 2 days, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ooty",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/ooty.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Ooty tour package from Madurai takes you up to the Nilgiris via Coimbatore and Mettupalayam, about 300 km and 7 to 8 hours by road. Because the drive is long, day one covers the sights closest to town: the Government Botanical Garden, Ooty Lake and the rose garden. Day two starts with the view from Doddabetta, the highest point in the Nilgiris, then a tea factory and Pykara falls and lake. If you want the Nilgiri Mountain Railway toy train, we plan your route so you ride it between Mettupalayam and Ooty or Coonoor, depending on the seats you get. For a relaxed trip we suggest adding a night, but two days work if you start early.",
    "highlights": [
      "Nilgiri Mountain Railway toy train (UNESCO)",
      "Government Botanical Garden",
      "Ooty Lake boating",
      "Doddabetta Peak viewpoint",
      "Pykara falls and lake",
      "Tea factory and chocolate shops"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Ooty and Town Sights",
        "location": "Ooty",
        "description": "Early start from Madurai, ghat drive from Mettupalayam, and the garden and lake.",
        "bullets": [
          "Very early pickup from Madurai (about 300 km, 7–8 hours)",
          "Optional toy train from Mettupalayam if tickets are confirmed",
          "Government Botanical Garden and rose garden",
          "Ooty Lake boating at sunset"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Doddabetta, Pykara and Return",
        "location": "Ooty",
        "description": "Morning viewpoints and Pykara, then the drive back down.",
        "bullets": [
          "Doddabetta Peak in the morning",
          "Tea factory and museum",
          "Pykara falls and lake",
          "Return to Madurai (late evening arrival)"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to June. April and May are peak season with heavy traffic. The July–August monsoon is wet and misty.",
    "gettingThere": "Ooty is about 300 km from Madurai via Coimbatore and Mettupalayam (7–8 hours). Coimbatore airport is about 90 km from Ooty.",
    "faqs": [
      {
        "question": "How to book the Ooty toy train?",
        "answer": "Seats are booked through IRCTC and sell out weeks ahead in season. Book as soon as your dates are fixed; we build the route around the train you get."
      },
      {
        "question": "Is 2 days enough for an Ooty trip from Madurai?",
        "answer": "It is tight because of the long drive. Three days, adding Coonoor (Sim's Park, Dolphin's Nose), is more comfortable."
      },
      {
        "question": "Do we need an e-pass to enter the Nilgiris?",
        "answer": "The Nilgiris district has required an e-pass for visiting vehicles in recent seasons. We check the current rule and arrange it for your cab."
      }
    ]
  },
  {
    "id": "munnar",
    "slug": "munnar",
    "title": "Munnar - Kerala Hill Station",
    "subtitle": "Munnar tour package from Madurai: tea gardens, Eravikulam, Mattupetty, Top Station and Echo Point in 2 days, with private cab and hotel.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Munnar",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/munnar.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Munnar tour package from Madurai takes the scenic Bodimettu ghat road into Kerala's tea country, about 160 km and 4.5 to 5 hours away. Day one covers the Tea Museum, Mattupetty Dam, Echo Point and Kundala Lake. Day two starts early for Eravikulam National Park, home of the Nilgiri tahr, then Top Station on the Tamil Nadu border before the drive back. Hotels are chosen for tea estate views, and your driver plans the order of stops around the queue at Eravikulam, which is the one place where timing matters. It suits families, couples and first-time Kerala visitors.",
    "highlights": [
      "Bodimettu ghat drive through cardamom hills",
      "Tea Museum and tea estate views",
      "Mattupetty Dam and Echo Point",
      "Kundala Lake boating",
      "Eravikulam National Park and the Nilgiri tahr",
      "Top Station viewpoint"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Munnar via Bodimettu",
        "location": "Munnar",
        "description": "Ghat drive into Kerala, then the lake and dam circuit.",
        "bullets": [
          "Early pickup from Madurai (about 160 km, 4.5–5 hours via Theni and Bodi)",
          "Tea estate photo stops at Bodimettu and Poopara",
          "Check-in, then the Tea Museum",
          "Mattupetty Dam, Echo Point and Kundala Lake",
          "Evening in Munnar town for spices and tea"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Eravikulam and Top Station",
        "location": "Munnar",
        "description": "Early start for the national park, then Top Station and the drive home.",
        "bullets": [
          "Eravikulam National Park (Rajamalai) by the park's own bus",
          "Photo stops at tea estates and Lakkam waterfalls",
          "Top Station viewpoint",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "September to May. Eravikulam usually closes for a few weeks in February and March for the Nilgiri tahr calving season. June to August is heavy monsoon.",
    "gettingThere": "Munnar is about 160 km from Madurai via Theni and Bodimettu (4.5–5 hours). Pickup is also possible from Kochi airport or Aluva station (about 110 km).",
    "faqs": [
      {
        "question": "Which is the best route from Madurai to Munnar?",
        "answer": "The Bodimettu route via Theni and Bodinayakanur is the shortest, about 160 km. Our Madurai to Munnar road guide explains the route in detail."
      },
      {
        "question": "Is Eravikulam National Park open all year?",
        "answer": "No. It usually closes for a few weeks between February and March for the Nilgiri tahr calving season. We check the dates and swap in other sights if it is closed."
      },
      {
        "question": "Is 2 days enough for Munnar?",
        "answer": "Two days cover the main sights. Add a third day for the Kolukkumalai sunrise jeep safari or Marayoor and Kanthalloor."
      },
      {
        "question": "Is Munnar good for a honeymoon?",
        "answer": "Yes. We can upgrade the stay to a resort with valley views; just tell us when you enquire."
      }
    ]
  },
  {
    "id": "andaman-nicobar-islands-tour",
    "slug": "andaman-nicobar-islands-tour",
    "title": "Andaman & Nicobar Islands",
    "subtitle": "Andaman tour package: Port Blair, Havelock (Radhanagar Beach), Neil Island and Cellular Jail in 6 days, with ferries, hotels and transfers.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Andaman & Nicobar Islands",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/andaman-nicobar-islands-tour.webp",
    "theme": "Honeymoon",
    "isFeatured": false,
    "overview": "This 6-day Andaman tour package covers Port Blair (now officially Sri Vijaya Puram), Havelock Island (Swaraj Dweep) and Neil Island (Shaheed Dweep). You fly into Port Blair, usually via Chennai. The plan includes the Cellular Jail and its light and sound show, Radhanagar Beach at sunset, snorkelling at Elephant Beach, Neil Island's natural rock bridge and Laxmanpur beach, and Ross Island and North Bay on your last day. We book the inter-island ferries in advance, since seats fill fast in season. It suits honeymooners and families.",
    "highlights": [
      "Cellular Jail and light and sound show",
      "Radhanagar Beach, Havelock",
      "Elephant Beach snorkelling",
      "Neil Island natural bridge",
      "Ross Island and North Bay",
      "Inter-island ferries booked in advance"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Flights and train tickets",
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive in Port Blair",
        "location": "Port Blair",
        "description": "Pickup, Cellular Jail and the evening show.",
        "bullets": [
          "Pickup from Port Blair airport",
          "Cellular Jail and Corbyn's Cove beach",
          "Light and sound show at Cellular Jail"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Ferry to Havelock",
        "location": "Havelock",
        "description": "Ferry to Havelock and sunset at Radhanagar.",
        "bullets": [
          "Morning ferry to Havelock",
          "Check-in",
          "Radhanagar Beach at sunset"
        ],
        "activities": []
      },
      {
        "day": 3,
        "title": "Elephant Beach",
        "location": "Havelock",
        "description": "Snorkelling and water activities.",
        "bullets": [
          "Boat to Elephant Beach",
          "Snorkelling (sea walk and scuba optional)",
          "Kalapathar Beach"
        ],
        "activities": []
      },
      {
        "day": 4,
        "title": "Neil Island",
        "location": "Neil Island",
        "description": "Ferry to Neil and its beaches.",
        "bullets": [
          "Ferry to Neil Island",
          "Natural bridge and Bharatpur Beach",
          "Sunset at Laxmanpur Beach"
        ],
        "activities": []
      },
      {
        "day": 5,
        "title": "Back to Port Blair",
        "location": "Port Blair",
        "description": "Ferry back and an easy evening.",
        "bullets": [
          "Ferry to Port Blair",
          "Anthropological Museum",
          "Evening at leisure"
        ],
        "activities": []
      },
      {
        "day": 6,
        "title": "Ross Island, North Bay and Departure",
        "location": "Port Blair",
        "description": "Harbour islands, then drop.",
        "bullets": [
          "Ross Island (Netaji Subhas Chandra Bose Dweep)",
          "North Bay for coral viewing",
          "Drop at the airport"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "lakshadweep-tour",
      "varkala-munroe-island-tour"
    ],
    "bestTime": "October to May. The southwest monsoon (June–September) brings rough seas and ferry cancellations.",
    "gettingThere": "Fly to Port Blair from Chennai, Bengaluru or Kolkata. Madurai to Chennai is a short flight or an overnight train.",
    "faqs": [
      {
        "question": "Do Indians need a permit for Andaman?",
        "answer": "No permit is needed for Port Blair, Havelock and Neil. Some tribal and restricted areas are off limits."
      },
      {
        "question": "Is Andaman good for a honeymoon?",
        "answer": "Yes. Havelock and Neil have quiet beaches and good resorts. Tell us and we will suggest honeymoon stays."
      },
      {
        "question": "How do we travel between the Andaman islands?",
        "answer": "By government or private ferries. Private ferries are faster and more comfortable; we book them in advance."
      }
    ]
  },
  {
    "id": "alappuzha-houseboat-backwater-tour",
    "slug": "alappuzha-houseboat-backwater-tour",
    "title": "Alleppey Houseboat Tour - Kerala Backwaters",
    "subtitle": "Alleppey houseboat package from Madurai: overnight private houseboat on the Kerala backwaters with Kerala meals, plus Alleppey beach, by private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Alleppey Houseboat Tour - Kerala Backwaters",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/alappuzha-houseboat-backwater-tour.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Alleppey houseboat package from Madurai is the classic Kerala backwater experience: a night on a private houseboat with your own crew and cook. You drive from Madurai via Kumily and Kottayam, about 270 km and 6.5 to 7 hours, and board around midday. The boat cruises through the Kuttanad canals, paddy fields and villages until evening, when houseboats must anchor, and you eat freshly cooked Kerala meals on board. Next morning you check out after breakfast, visit Alleppey beach, and drive back. We help you choose between one, two or three-bedroom boats and AC options based on your group.",
    "highlights": [
      "Overnight private houseboat cruise",
      "Kerala lunch, dinner and breakfast on board",
      "Kuttanad canals and paddy fields",
      "Vembanad Lake views",
      "Alleppey beach and old pier",
      "Village life along the backwaters"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Alleppey and Houseboat Cruise",
        "location": "Alappuzha",
        "description": "Drive to Alleppey, board the houseboat and cruise the backwaters.",
        "bullets": [
          "Early pickup from Madurai (about 270 km, 6.5–7 hours via Kumily and Kottayam)",
          "Board the houseboat around midday",
          "Afternoon cruise through Kuttanad canals",
          "Evening anchor near a village; dinner on board"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Check-out and Alleppey Beach",
        "location": "Alappuzha",
        "description": "Breakfast on the boat, a beach stop, then the drive back.",
        "bullets": [
          "Breakfast on board and check-out around 9 am",
          "Alleppey beach and pier",
          "Optional short canoe ride in the narrow canals",
          "Return to Madurai and drop"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "September to March. The monsoon (June–August) is quieter and cheaper, with green paddy fields but frequent rain.",
    "gettingThere": "Alleppey is about 270 km from Madurai via Kumily and Kottayam (6.5–7 hours). Kochi airport is about 85 km away.",
    "faqs": [
      {
        "question": "What is the check-in time for an Alleppey houseboat?",
        "answer": "Usually around 12 noon, with check-out around 9 am the next morning. Boats stop cruising in the evening and anchor overnight, as local rules require."
      },
      {
        "question": "Are meals included on the houseboat?",
        "answer": "Overnight houseboat stays normally include lunch, evening tea, dinner and breakfast, cooked on board. Tell us about vegetarian or other food needs in advance."
      },
      {
        "question": "Is an AC houseboat necessary?",
        "answer": "Most boats run AC only at night. It is useful from March to May. In the cooler months a non-AC bedroom is often comfortable."
      }
    ]
  },
  {
    "id": "alappuzha-boathouse-varkala",
    "slug": "alappuzha-boathouse-varkala",
    "title": "Alappuzha & Varkala Tour - Kerala Backwaters",
    "subtitle": "Alleppey and Varkala tour package from Madurai: houseboat on the backwaters and Varkala cliff beach in 2 days, with private cab.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Alappuzha & Varkala Tour - Kerala Backwaters",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "/images/tours/alappuzha-boathouse-varkala.webp",
    "theme": "Family",
    "isFeatured": false,
    "overview": "This 2-day Alleppey and Varkala tour package from Madurai combines the Kerala backwaters with its best-known cliff beach. You drive to Alleppey, board a private houseboat around midday and spend the night on the backwaters with meals cooked on board. Next morning you drive south about 85 km to Varkala for the red cliffs, Papanasam beach and the Janardhana Swamy Temple, then return to Madurai via Kollam and Shencottai. It suits couples and small families who want both water and beach in a short trip.",
    "highlights": [
      "Overnight private houseboat in Alleppey",
      "Kuttanad canals and paddy fields",
      "Varkala cliff walk",
      "Papanasam beach",
      "Janardhana Swamy Temple",
      "Cliff-top cafes at sunset"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & experienced, polite driver",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "On-trip support from the Gateway Holidays team by phone and WhatsApp"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Driver Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Alleppey Houseboat",
        "location": "Alappuzha",
        "description": "Drive to Alleppey and cruise the backwaters on your own houseboat.",
        "bullets": [
          "Early pickup from Madurai (about 270 km, 6.5–7 hours)",
          "Board the houseboat around midday",
          "Backwater cruise and village stops",
          "Dinner and overnight on the houseboat"
        ],
        "activities": []
      },
      {
        "day": 2,
        "title": "Varkala Cliff Beach and Return",
        "location": "Varkala",
        "description": "Drive to Varkala for the cliffs and beach, then return to Madurai.",
        "bullets": [
          "Check-out after breakfast",
          "Drive to Varkala (about 85 km)",
          "Cliff walk, Papanasam beach and Janardhana Swamy Temple",
          "Return to Madurai via Kollam and Shencottai"
        ],
        "activities": []
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ],
    "bestTime": "October to March. Varkala's beach is rough in the monsoon, and swimming is not safe from June to August.",
    "gettingThere": "Start from Madurai. Alleppey is about 270 km away; Varkala to Madurai is about 260 km via Kollam and Shencottai.",
    "faqs": [
      {
        "question": "How far is Varkala from Alleppey?",
        "answer": "About 85 km, roughly 2 hours by road."
      },
      {
        "question": "Can we swim at Varkala beach?",
        "answer": "In calm months (roughly October to March) you can swim in the flagged areas with lifeguards. Currents can be strong, so stay where the guards say it is safe."
      },
      {
        "question": "Can we add a night in Varkala?",
        "answer": "Yes. Many couples add a night at a cliff-top stay. Tell us when you enquire."
      }
    ]
  }
];

export function getTourBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((t) => t.slug === slug);
}

export function getToursByCategory(category: TourCategory): TourPackage[] {
  return tourPackages.filter((t) => t.category === category);
}

export function getRelatedTours(currentSlug: string): TourPackage[] {
  const current = getTourBySlug(currentSlug);
  if (!current) return tourPackages.slice(0, 3);
  
  const matches = tourPackages.filter(
    (t) => t.slug !== currentSlug && (current.relatedTourSlugs.includes(t.slug) || t.category === current.category)
  );
  return matches.slice(0, 3);
}
