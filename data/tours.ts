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
}

export const tourCategories = [
  {
    id: "south-india",
    name: "South India Tours",
    subtitle: "Misty hill stations, serene backwaters & tea plantations",
    icon: "Mountain",
    badge: "Most Popular",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "heritage-temple",
    name: "Heritage & Temple Tours",
    subtitle: "Sacred pilgrimage circuits, ancient architectural wonders & sacred temples",
    icon: "Landmark",
    badge: "Spiritual",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "adventure-trekking",
    name: "Adventure & Trekking Tours",
    subtitle: "Sunrise jeep safaris, high-altitude cloud walks & theme park adventures",
    icon: "Compass",
    badge: "Thrill & Safari",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "island",
    name: "Island & Beach Tours",
    subtitle: "Turquoise lagoons, white coral beaches & romantic coastal resorts",
    icon: "Palmtree",
    badge: "Exotic Escapes",
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "north-india",
    name: "North India Tours",
    subtitle: "Snow-capped Himalayan peaks, royal palaces & sacred ghats",
    icon: "Sparkles",
    badge: "Royal & Alpine",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "international",
    name: "International Tours",
    subtitle: "Tropical luxury pool villas, skyline wonders & global holiday gateways",
    icon: "Plane",
    badge: "Passport Ready",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
];

export const tourPackages: TourPackage[] = [
  {
    "id": "kanyakumari-thiruvananthapuram",
    "slug": "kanyakumari-thiruvananthapuram",
    "title": "Kanyakumari & Thiruvananthapuram",
    "subtitle": "Visit the southernmost tip of India and explore Thiruvananthapuram Padmanabhaswamy Temple. Book your Kerala tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanyakumari & Thiruvananthapuram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Visit the southernmost tip of India and explore Thiruvananthapuram Padmanabhaswamy Temple. Book your Kerala tour with Gateway Holidays.",
    "highlights": [
      "Vivekananda",
      "Rock",
      "Memorial",
      "Thiruvalluvar",
      "Statue",
      "Kumari"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Kanyakumari —",
        "location": "Kanyakumari & Thiruvananthapuram",
        "description": "Kanyakumari — Land's End Sightseeing Direct reception and pickup upon arrival by your dedicated private chauffeur Kumari Amman Temple darshan Ferry ride to Vivekananda Rock Memorial and Thiruvalluvar Statue rising from the sea Gandhi Memorial Museum Evening drive to Padmanabhapuram Palace Check-in at hotel in Kanyakumari Evening sunset at th",
        "activities": [
          "Land's",
          "Sightseeing",
          "Kumari"
        ]
      },
      {
        "day": 2,
        "title": "Thiruvananthapuram —",
        "location": "Kanyakumari & Thiruvananthapuram",
        "description": "Thiruvananthapuram — Royal Heritage & Beach Morning check-out — drive to Thiruvananthapuram Padmanabhaswamy Temple Kuthiramalika (Puthenmalika) Palace Museum Vizhinjam Rock Cave Temple Kovalam Beach — relax at the famous crescent-shaped lighthouse beach Drop-off at airport, railway station, or your next destination",
        "activities": [
          "Heritage &",
          "Morning check-out — drive to",
          "Thiruvananthapuram",
          "Padmanabhaswamy"
        ]
      }
    ],
    "relatedTourSlugs": [
      "varkala-jatayu-earths-center-tour",
      "bangalore",
      "varkala"
    ]
  },
  {
    "id": "goa-island-beach-tour",
    "slug": "goa-island-beach-tour",
    "title": "Goa Island & Beach Tour",
    "subtitle": "Enjoy island cruises, dolphin spotting, water sports and pristine beaches in Goa. Book your Goa Island and Beach tour package with Gateway Holidays.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "3 Nights / 4 Days",
    "daysCount": 4,
    "nightsCount": 3,
    "destination": "Goa",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "theme": "Honeymoon",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Enjoy island cruises, dolphin spotting, water sports and pristine beaches in Goa. Book your Goa Island and Beach tour package with Gateway Holidays.",
    "highlights": [
      "Grand",
      "Island snorkelling & dolphin spotting",
      "Butterfly",
      "Beach",
      "Palolem",
      "Beach"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 3 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Goa",
        "description": "Arrive North Goa Arrive in Goa — check into a North Goa beach resort Afternoon at Calangute, Baga and Candolim beaches Sunset at Fort Aguada cliff Dinner at a fresh seafood beach shack",
        "activities": [
          "Arrive in",
          "Goa — check into a",
          "Goa beach resort"
        ]
      },
      {
        "day": 2,
        "title": "Grand",
        "location": "Goa",
        "description": "Grand Island Adventure Morning Grand Island boat trip (3 km offshore) — snorkelling over coral reefs Dolphin spotting in the open sea and banana boat rides Afternoon at Anjuna and Vagator beaches Evening Anjuna Flea Market",
        "activities": [
          "Island",
          "Adventure",
          "Morning",
          "Island boat trip (3 km offshore) — snorkelling over coral reefs",
          "Dolphin spotting in the open sea and banana boat rides"
        ]
      },
      {
        "day": 3,
        "title": "South",
        "location": "Goa",
        "description": "South Goa Beaches Morning Old Goa churches (UNESCO) Spice plantation visit Shopping for Goan cashews, feni and ceramics Departure",
        "activities": [
          "Beaches",
          "Morning",
          "Goa churches (UNESCO)",
          "Spice plantation visit"
        ]
      },
      {
        "day": 4,
        "title": "Old",
        "location": "Goa",
        "description": "Old Goa & Departure Early morning drive or walk up the Tirumala Ghat Road to the sacred hills Darshan at Sri Venkateswara Temple with specially arranged Darshan tickets Head tonsuring (optional) Sri Padmavathi Ammavari Temple at Tiruchanur (7 km) Departure",
        "activities": [
          "Goa &",
          "Departure",
          "Early morning drive or walk up the",
          "Tirumala",
          "Road to the sacred hills"
        ]
      }
    ],
    "relatedTourSlugs": [
      "lakshadweep-tour",
      "varkala-munroe-island-tour",
      "andaman-nicobar-islands-tour"
    ]
  },
  {
    "id": "lakshadweep-tour",
    "slug": "lakshadweep-tour",
    "title": "Lakshadweep - Coral Island",
    "subtitle": "Explore pristine coral islands, turquoise lagoons and underwater coral reefs in Lakshadweep. Book your Lakshadweep tour with Gateway Holidays.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Lakshadweep - Coral Island",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "theme": "Honeymoon",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Explore pristine coral islands, turquoise lagoons and underwater coral reefs in Lakshadweep. Book your Lakshadweep tour with Gateway Holidays.",
    "highlights": [
      "Venkateswara",
      "Temple",
      "Tirumala",
      "Hills",
      "Kapila",
      "Theertham waterfall"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Lakshadweep - Coral Island",
        "description": "Arrive Agatti Island Fly to Agatti Island — transfer by boat to resort Afternoon introductory snorkelling in the Agatti lagoon — see corals, rays and tropical fish Sunset beach walk Overnight stay",
        "activities": [
          "Agatti",
          "Island",
          "Fly to",
          "Agatti",
          "Island — transfer by boat to resort",
          "Afternoon introductory snorkelling in the"
        ]
      },
      {
        "day": 2,
        "title": "Bangaram",
        "location": "Lakshadweep - Coral Island",
        "description": "Bangaram Island Day Trip Day trip to Bangaram Island (uninhabited) — the jewel of Lakshadweep Full-day beach picnic Snorkelling on the outer reef Glass-bottom boat ride Return to resort Overnight stay",
        "activities": [
          "Island",
          "Day trip to",
          "Bangaram",
          "Island (uninhabited) — the jewel of"
        ]
      },
      {
        "day": 3,
        "title": "Scuba",
        "location": "Lakshadweep - Coral Island",
        "description": "Scuba Diving & Kayaking Scuba diving (certified divers) or beginner discover scuba programme Dive sites include sharks, turtles and pristine hard coral formations Afternoon kayaking through the lagoon and mangrove channels Overnight stay",
        "activities": [
          "Diving &",
          "Kayaking",
          "Scuba diving (certified divers) or beginner discover scuba programme",
          "Dive sites include sharks, turtles and pristine hard coral formations",
          "Afternoon kayaking through the lagoon and mangrove channels",
          "Overnight stay"
        ]
      },
      {
        "day": 4,
        "title": "Tinnakara",
        "location": "Lakshadweep - Coral Island",
        "description": "Tinnakara Island Day trip to Tinnakara Island — another uninhabited island Beach bonfire dinner under stars Sea fishing trip at dawn Overnight stay",
        "activities": [
          "Island",
          "Day trip to",
          "Tinnakara",
          "Island — another uninhabited island",
          "Beach bonfire dinner under stars",
          "Sea fishing trip at dawn"
        ]
      },
      {
        "day": 5,
        "title": "Farewell",
        "location": "Lakshadweep - Coral Island",
        "description": "Farewell Swim & Departure Morning final lagoon swim and beach time Souvenir shopping for Lakshadweep coconut products and shell crafts Departure flight from Agatti",
        "activities": [
          "Swim &",
          "Departure",
          "Morning final lagoon swim and beach time",
          "Souvenir shopping for",
          "Lakshadweep coconut products and shell crafts",
          "Departure flight from"
        ]
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "varkala-munroe-island-tour",
      "andaman-nicobar-islands-tour"
    ]
  },
  {
    "id": "sri-lanka-tour",
    "slug": "sri-lanka-tour",
    "title": "Sri Lanka",
    "subtitle": "Explore Sigiriya Rock, Kandy Temple of the Tooth, Nuwara Eliya tea gardens and more in Sri Lanka. Book your Sri Lanka tour with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Sri Lanka",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Explore Sigiriya Rock, Kandy Temple of the Tooth, Nuwara Eliya tea gardens and more in Sri Lanka. Book your Sri Lanka tour with Gateway Holidays.",
    "highlights": [
      "Sigiriya",
      "Rock",
      "Fortress",
      "Temple of the",
      "Tooth",
      "Relic"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Sri Lanka",
        "description": "Arrive Sigiriya Fly to Colombo — transfer to Sigiriya Afternoon at Sigiriya Rock Fortress (193 m) — 5th-century royal citadel with stunning frescoes Pidurangala Rock alternative climb for panoramic views",
        "activities": [
          "Sigiriya",
          "Fly to",
          "Colombo — transfer to",
          "Sigiriya",
          "Afternoon at",
          "Sigiriya"
        ]
      },
      {
        "day": 2,
        "title": "Sigiriya to",
        "location": "Sri Lanka",
        "description": "Sigiriya to Kandy En route Dambulla Cave Temple (UNESCO) — five magnificent Buddhist cave shrines Arrive Kandy — evening at Temple of the Sacred Tooth Relic Kandy Cultural Show — traditional Kandyan dance",
        "activities": [
          "En route",
          "Dambulla",
          "Temple (UNESCO) — five magnificent",
          "Buddhist cave shrines"
        ]
      },
      {
        "day": 3,
        "title": "Nuwara",
        "location": "Sri Lanka",
        "description": "Nuwara Eliya Morning Peradeniya Royal Botanical Gardens — 150 acres of orchids, palms and exotic trees Drive to Nuwara Eliya (3 hours through tea country) Afternoon tea factory visit and tea tasting Nuwara Eliya Lake walk",
        "activities": [
          "Morning",
          "Peradeniya",
          "Botanical",
          "Gardens — 150 acres of orchids, palms and exotic trees"
        ]
      },
      {
        "day": 4,
        "title": "Drive to",
        "location": "Sri Lanka",
        "description": "Drive to Mirissa Drive Nuwara Eliya to Mirissa (5 hours) En route Ella — Nine Arch Bridge and Little Adam's Peak hike Arrive Mirissa/Unawatuna Beach — check into a beachfront villa",
        "activities": [
          "Mirissa",
          "Nuwara",
          "Eliya to",
          "Mirissa (5 hours)",
          "En route"
        ]
      },
      {
        "day": 5,
        "title": "Whale",
        "location": "Sri Lanka",
        "description": "Whale Watching & Galle Fort Morning whale and dolphin watching boat trip from Mirissa (December–April) Afternoon at Galle Fort (UNESCO) — magnificent 17th-century Dutch fortified city Galle Fort lighthouse and rampart walk at sunset",
        "activities": [
          "Watching &",
          "Morning whale and dolphin watching boat trip from",
          "Mirissa (",
          "December–"
        ]
      },
      {
        "day": 6,
        "title": "Colombo &",
        "location": "Sri Lanka",
        "description": "Colombo & Departure Drive to Colombo City tour: Gangaramaya Temple, Pettah Market, Beira Lake Shopping for Ceylon tea, batik and gems",
        "activities": [
          "Departure",
          "Drive to",
          "Colombo",
          "City tour:",
          "Gangaramaya",
          "Temple,"
        ]
      }
    ],
    "relatedTourSlugs": [
      "singapore-tour",
      "malaysia-tour",
      "vietnam-tour"
    ]
  },
  {
    "id": "singapore-tour",
    "slug": "singapore-tour",
    "title": "Singapore",
    "subtitle": "Explore Marina Bay Sands, Gardens by the Bay, Sentosa Island and Universal Studios in Singapore. Book your Singapore tour with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Singapore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Explore Marina Bay Sands, Gardens by the Bay, Sentosa Island and Universal Studios in Singapore. Book your Singapore tour with Gateway Holidays.",
    "highlights": [
      "Gardens by the",
      "Supertree",
      "Grove",
      "Universal",
      "Studios",
      "Singapore"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Singapore",
        "description": "Arrive Singapore Arrive in Singapore (Changi Airport) — hotel check-in Afternoon at Marina Bay Sands SkyPark Observation Deck Gardens by the Bay — futuristic Supertrees and Glass Greenhouses Supertree Grove light show at night",
        "activities": [
          "Singapore",
          "Arrive in",
          "Singapore (",
          "Changi",
          "Airport) — hotel check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Sentosa",
        "location": "Singapore",
        "description": "Sentosa Island Full day Sentosa Island — Universal Studios Singapore Thrill rides, shows and themed zones (Transformers, Jurassic World, Minions) S.E.A. Aquarium Cable car back to mainland Evening Clarke Quay riverfront dining",
        "activities": [
          "Island",
          "Full day",
          "Sentosa",
          "Island —",
          "Universal",
          "Studios"
        ]
      },
      {
        "day": 3,
        "title": "Zoo &",
        "location": "Singapore",
        "description": "Zoo & Night Safari Morning Singapore Zoo — one of the world's best Night Safari — world's first nocturnal zoo Afternoon Singapore Botanic Gardens (UNESCO) Orchard Road shopping",
        "activities": [
          "Safari",
          "Morning",
          "Singapore",
          "Zoo — one of the world's best"
        ]
      },
      {
        "day": 4,
        "title": "Cultural",
        "location": "Singapore",
        "description": "Cultural Heritage Day Little India — Sri Veeramakaliamman Temple, Tekka Market Arab Street — Sultan Mosque and Kampong Glam Chinatown — Buddha Tooth Relic Temple Hawker Centre lunch — Chicken Rice, Char Kway Teow and Laksa",
        "activities": [
          "Heritage",
          "Little",
          "India —",
          "Veeramakaliamman"
        ]
      },
      {
        "day": 5,
        "title": "Merlion",
        "location": "Singapore",
        "description": "Merlion Park & Departure Morning Merlion Park and ArtScience Museum Jewel Changi — the stunning airport waterfall Last-minute shopping at Mustafa Centre Departure",
        "activities": [
          "Park &",
          "Departure",
          "Morning",
          "Merlion",
          "Park and"
        ]
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "malaysia-tour",
      "vietnam-tour"
    ]
  },
  {
    "id": "malaysia-tour",
    "slug": "malaysia-tour",
    "title": "Malaysia",
    "subtitle": "Visit Petronas Twin Towers, Langkawi beaches, cultural heritage and scenic rainforests in Malaysia. Book your Malaysia tour with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Malaysia",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "badge": "Signature Circuit",
    "isFeatured": true,
    "overview": "Visit Petronas Twin Towers, Langkawi beaches, cultural heritage and scenic rainforests in Malaysia. Book your Malaysia tour with Gateway Holidays.",
    "highlights": [
      "Petronas",
      "Twin",
      "Towers",
      "Batu",
      "Caves",
      "Penang UNESCO"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Malaysia",
        "description": "Arrive Kuala Lumpur Fly to Kuala Lumpur — check-in Afternoon at Petronas Twin Towers (Skybridge visit) KLCC Park and Aquaria KLCC Bukit Bintang for dinner",
        "activities": [
          "Lumpur",
          "Fly to",
          "Lumpur — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Batu",
        "location": "Malaysia",
        "description": "Batu Caves & Old KL Morning at Batu Caves — 272 steps to the Hindu shrine inside a giant limestone cave Thean Hou Temple and National Museum Afternoon Merdeka Square and Sultan Abdul Samad Building Night market at Jalan Alor",
        "activities": [
          "Caves &",
          "Old KL",
          "Morning at",
          "Caves — 272 steps to the",
          "Hindu shrine inside a giant limestone cave"
        ]
      },
      {
        "day": 3,
        "title": "Cameron",
        "location": "Malaysia",
        "description": "Cameron Highlands Day Trip Day trip to Cameron Highlands (3 hours) — BOH Tea Plantation Walk through emerald tea fields and tour the factory Mossy Forest trail Strawberry and honey bee farms Rose Garden Return to KL",
        "activities": [
          "Highlands",
          "Day trip to",
          "Cameron",
          "Highlands (3 hours) — BOH"
        ]
      },
      {
        "day": 4,
        "title": "Flight to",
        "location": "Malaysia",
        "description": "Flight to Penang Morning flight to Penang — check-in at a heritage hotel in Georgetown Afternoon UNESCO George Town heritage walk — Khoo Kongsi clan house, Cheong Fatt Tze Mansion Penang Street Art trail Evening Gurney Drive hawker food — famous Char Koay Teow and Assam Laksa",
        "activities": [
          "Penang",
          "Morning flight to",
          "Penang — check-in at a heritage hotel in",
          "Georgetown",
          "Afternoon UNESCO",
          "George"
        ]
      },
      {
        "day": 6,
        "title": "Putrajaya &",
        "location": "Malaysia",
        "description": "Putrajaya & Departure Morning return to KL Afternoon Putrajaya — Malaysia's stunning planned capital with Islamic architecture and man-made lake Departure from KLIA",
        "activities": [
          "Departure",
          "Morning return to KL",
          "Afternoon",
          "Putrajaya —",
          "Malaysia's stunning planned capital with",
          "Islamic architecture and man-made lake"
        ]
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "vietnam-tour"
    ]
  },
  {
    "id": "vietnam-tour",
    "slug": "vietnam-tour",
    "title": "Vietnam",
    "subtitle": "Cruise Ha Long Bay, explore Hoi An ancient town and Ho Chi Minh City landmarks in Vietnam. Book your Vietnam tour with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "6 Nights / 7 Days",
    "daysCount": 7,
    "nightsCount": 6,
    "destination": "Vietnam",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "isFeatured": true,
    "overview": "Cruise Ha Long Bay, explore Hoi An ancient town and Ho Chi Minh City landmarks in Vietnam. Book your Vietnam tour with Gateway Holidays.",
    "highlights": [
      "Halong",
      "Bay cruise",
      "Ancient",
      "Town",
      "Hanoi",
      "Quarter"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 6 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Vietnam",
        "description": "Arrive Hanoi Fly to Hanoi — check-in Afternoon Hoan Kiem Lake and Ngoc Son Temple Evening Hanoi Old Quarter walk — 36 ancient trade guild streets Water Puppet Show",
        "activities": [
          "Fly to",
          "Hanoi — check-in",
          "Afternoon"
        ]
      },
      {
        "day": 2,
        "title": "Hanoi",
        "location": "Vietnam",
        "description": "Hanoi City Tour Ho Chi Minh Mausoleum and Museum One Pillar Pagoda Temple of Literature (11th century) Vietnam Museum of Ethnology Evening Train Street and street food tour",
        "activities": [
          "Mausoleum and"
        ]
      },
      {
        "day": 3,
        "title": "Halong",
        "location": "Vietnam",
        "description": "Halong Bay Cruise Halong Bay cruise (2-day/1-night): board a traditional junk boat in Ha Long Kayaking through grottos, swimming in emerald water Visit Thien Cung Cave Sunset cocktails on deck Overnight on boat",
        "activities": [
          "Cruise",
          "Halong",
          "Bay cruise (2-day/1-night): board a traditional junk boat in"
        ]
      },
      {
        "day": 4,
        "title": "Halong to",
        "location": "Vietnam",
        "description": "Halong to Hoi An Morning tai chi on the boat deck Visit Vung Vieng Fishing Village Return to Hanoi — afternoon flight to Danang Check-in at Hoi An",
        "activities": [
          "Morning tai chi on the boat deck"
        ]
      },
      {
        "day": 5,
        "title": "Hoi",
        "location": "Vietnam",
        "description": "Hoi An & My Son Hoi An Ancient Town (UNESCO): lantern street walk, Japanese Covered Bridge, merchant houses Cooking class Afternoon My Son Sanctuary (40 km) — ancient Cham Hindu temple ruins in a jungle valley",
        "activities": [
          "An &",
          "Ancient"
        ]
      },
      {
        "day": 6,
        "title": "Ho",
        "location": "Vietnam",
        "description": "Ho Chi Minh City & Cu Chi Flight to Ho Chi Minh City Cu Chi Tunnels (70 km) — legendary 250 km underground tunnel network Ben Dinh entry and tunnel crawl experience Evening Ben Thanh Market and rooftop dining",
        "activities": [
          "City &",
          "Flight to"
        ]
      },
      {
        "day": 7,
        "title": "Mekong",
        "location": "Vietnam",
        "description": "Mekong Delta & Departure Ho Chi Minh City: Reunification Palace, War Remnants Museum, Notre Dame Cathedral Mekong Delta half-day: boat ride, coconut candy factory, floating market Departure",
        "activities": [
          "Delta &",
          "Departure"
        ]
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ]
  },
  {
    "id": "bali-tour",
    "slug": "bali-tour",
    "title": "Bali - Indonesia",
    "subtitle": "Explore Bali rice terraces, Tanah Lot temple, Ubud and pristine beaches. Book your Bali, Indonesia tour package with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Bali",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "isFeatured": true,
    "overview": "Explore Bali rice terraces, Tanah Lot temple, Ubud and pristine beaches. Book your Bali, Indonesia tour package with Gateway Holidays.",
    "highlights": [
      "Tanah",
      "Lot &",
      "Uluwatu cliff temples",
      "Tegallalang",
      "Rice",
      "Terrace,"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Bali",
        "description": "Arrive Bali — Tanah Lot Fly to Bali — check-in at Seminyak Afternoon Seminyak Beach and beach clubs Sunset at Tanah Lot Temple — iconic Bali sight rising from a sea rock",
        "activities": [
          "Bali —",
          "Fly to",
          "Bali — check-in at",
          "Seminyak"
        ]
      },
      {
        "day": 2,
        "title": "Ubud",
        "location": "Bali",
        "description": "Ubud Drive to Ubud (1.5 hours) — check-in at a rice field resort Tegallalang Rice Terrace — spectacular terraced paddies Tirta Empul Temple (holy spring water purification ritual) Bali Swing over the jungle Ubud Monkey Forest",
        "activities": [
          "Drive to",
          "Ubud (1.5 hours) — check-in at a rice field resort",
          "Tegallalang",
          "Terrace — spectacular terraced paddies"
        ]
      },
      {
        "day": 3,
        "title": "Ubud",
        "location": "Bali",
        "description": "Ubud Arts & Culture Ubud Palace and Ubud Art Market Traditional Balinese cooking class Silver jewellery workshop in Celuk and woodcarving village in Mas Barong & Kris Dance performance",
        "activities": [
          "Arts &",
          "Culture",
          "Palace and"
        ]
      },
      {
        "day": 4,
        "title": "Mount",
        "location": "Bali",
        "description": "Mount Batur Sunrise Trek Mount Batur Sunrise Trek (2 AM start) — trek 2 hours in darkness to the 1,717 m volcanic rim One of Bali's most spectacular sunrises over the caldera lake Breakfast cooked by volcanic steam Afternoon Kintamani volcano viewpoint Coffee plantation — taste Kopi Luwak (civ",
        "activities": [
          "Sunrise",
          "Sunrise"
        ]
      },
      {
        "day": 5,
        "title": "Uluwatu &",
        "location": "Bali",
        "description": "Uluwatu & Kecak Fire Dance South Bali: Uluwatu Temple at sunset — perched on a 70-metre cliff over the Indian Ocean Kecak Fire Dance performance as the sun sets into the sea Jimbaran Bay fresh seafood dinner on the beach by torchlight",
        "activities": [
          "Uluwatu"
        ]
      },
      {
        "day": 6,
        "title": "Beach,",
        "location": "Bali",
        "description": "Beach, Shopping & Departure Morning Nusa Dua beach, spa or surfing lesson at Kuta Souvenir shopping — batik sarongs, silver, woodcarvings and Bali coffee Departure",
        "activities": [
          "Shopping &",
          "Departure",
          "Morning",
          "Dua beach, spa or surfing lesson at"
        ]
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ]
  },
  {
    "id": "munnar-trekking-tour",
    "slug": "munnar-trekking-tour",
    "title": "Munnar Trekking Tour - Western Ghats, Kerala",
    "subtitle": "Trek through tea gardens, shola forests and Anamudi peak in Munnar, Western Ghats. Book your Munnar trekking adventure with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Munnar",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Trek through tea gardens, shola forests and Anamudi peak in Munnar, Western Ghats. Book your Munnar trekking adventure with Gateway Holidays.",
    "highlights": [
      "Anamudi",
      "Peak trek — highest peak in",
      "South",
      "India",
      "Meesapulimala trek — above the clouds",
      "Kolukkumalai — world's highest tea estate"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Acclimatisation &",
        "location": "Munnar",
        "description": "Acclimatisation & Briefing Arrive in Munnar — check-in Afternoon acclimatisation nature walk through a tea estate Briefing on the planned treks — routes, difficulty and gear Early dinner and rest Overnight stay",
        "activities": [
          "Briefing",
          "Arrive in",
          "Munnar — check-in",
          "Afternoon acclimatisation nature walk through a tea estate",
          "Briefing on the planned treks — routes, difficulty and gear",
          "Early dinner and rest"
        ]
      },
      {
        "day": 2,
        "title": "Kolukkumalai /",
        "location": "Munnar",
        "description": "Kolukkumalai / Meesapulimala Trek Kolukkumalai Trek: jeep ride to base, 3-hour trek through tea bushes and grasslands to the world's highest tea estate at 2,100 m Visit the old Kolukkumalai tea factory OR Meesapulimala Trek (13 km): guided trek through rhododendron forests to the second-highes",
        "activities": [
          "Meesapulimala",
          "Kolukkumalai",
          "Visit the old",
          "Kolukkumalai tea factory OR"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour",
      "vagamon-adventure-tour"
    ]
  },
  {
    "id": "varkala-munroe-island-tour",
    "slug": "varkala-munroe-island-tour",
    "title": "Varkala & Munroe Island Tour - Kerala",
    "subtitle": "Explore Varkala cliff beach and canoe through serene backwaters of Munroe Island, Kollam. Book your Kerala coastal tour with Gateway Holidays.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "2 Nights / 3 Days",
    "daysCount": 3,
    "nightsCount": 2,
    "destination": "Varkala & Munroe Island Tour - Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Honeymoon",
    "isFeatured": false,
    "overview": "Explore Varkala cliff beach and canoe through serene backwaters of Munroe Island, Kollam. Book your Kerala coastal tour with Gateway Holidays.",
    "highlights": [
      "Munroe",
      "Island backwater canoe tour",
      "Coir making & village life experience",
      "Varkala",
      "Cliff",
      "Mangrove forest"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 2 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Munroe",
        "location": "Varkala & Munroe Island Tour - Kerala",
        "description": "Munroe Island Canoe Tour Arrive at Kollam — check-in near Ashtamudi Lake Afternoon Munroe Island full-day backwater canoe tour Navigate through narrow canals — observe coir making, fishing and rice paddy cultivation Interaction with island families Sunset over Ashtamudi Lake Overnight stay",
        "activities": [
          "Island",
          "Arrive at",
          "Kollam — check-in near",
          "Ashtamudi"
        ]
      },
      {
        "day": 2,
        "title": "Varkala",
        "location": "Varkala & Munroe Island Tour - Kerala",
        "description": "Varkala Cliff Beach Drive to Varkala (50 km) — check-in at a cliff-top resort Afternoon North Cliff promenade walk Janardhana Swamy Temple darshan Swim at Papanasam Beach Cliff-top restaurant dinner with ocean views Overnight stay",
        "activities": [
          "Drive to",
          "Varkala (50 km) — check-in at a cliff-top resort",
          "Afternoon"
        ]
      },
      {
        "day": 3,
        "title": "Sivagiri",
        "location": "Varkala & Munroe Island Tour - Kerala",
        "description": "Sivagiri Mutt & Departure Morning at Sivagiri Mutt — ashram of Sree Narayana Guru Anjengo Fort (30 km) — an old British fort on a narrow sand spit Departure",
        "activities": [
          "Mutt &",
          "Departure",
          "Morning at",
          "Sivagiri",
          "Mutt — ashram of"
        ]
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "lakshadweep-tour",
      "andaman-nicobar-islands-tour"
    ]
  },
  {
    "id": "kanakapura-adventure-park-tour",
    "slug": "kanakapura-adventure-park-tour",
    "title": "Kanakapura Adventure Park Tour - Karnataka",
    "subtitle": "Try rock climbing, zip lining, rappelling and water activities at Kanakapura adventure park. Book your Karnataka adventure tour with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanakapura Adventure Park Tour - Karnataka",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Try rock climbing, zip lining, rappelling and water activities at Kanakapura adventure park. Book your Karnataka adventure tour with Gateway Holidays.",
    "highlights": [
      "Rock climbing on granite boulders",
      "White-water rafting on",
      "Cauvery",
      "River",
      "Kayaking & coracle rides",
      "Jungle camping on the riverbank"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Rock",
        "location": "Kanakapura Adventure Park Tour - Karnataka",
        "description": "Rock Climbing & Kayaking Drive from Bengaluru to Kanakapura (2 hours) Check into a riverside camp Afternoon rock climbing and bouldering on the famous granite faces Evening kayaking on the Cauvery at golden hour Riverside campfire dinner Overnight stay",
        "activities": [
          "Climbing &",
          "Kayaking",
          "Drive from",
          "Bengaluru to",
          "Kanakapura (2 hours)",
          "Check into a riverside camp"
        ]
      },
      {
        "day": 2,
        "title": "Rafting &",
        "location": "Kanakapura Adventure Park Tour - Karnataka",
        "description": "Rafting & Departure Morning white-water rafting on the Cauvery (Grade 1–3 rapids, suitable for beginners) Coracle ride — circular bamboo-and-hide boat unique to the Cauvery Rappelling session Pack-up and drive back to Bengaluru Departure",
        "activities": [
          "Departure",
          "Morning white-water rafting on the",
          "Cauvery (",
          "Grade 1–3 rapids, suitable for beginners)",
          "Coracle ride — circular bamboo-and-hide boat unique to the",
          "Cauvery"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "mysore-adventure-tour",
      "vagamon-adventure-tour"
    ]
  },
  {
    "id": "thailand-tour",
    "slug": "thailand-tour",
    "title": "Thailand",
    "subtitle": "Experience Bangkok temples, Phuket beaches, Chiang Mai elephant sanctuary and Krabi limestone cliffs. Book your Thailand tour with Gateway Holidays.",
    "category": "international",
    "categoryLabel": "International Tour",
    "duration": "6 Nights / 7 Days",
    "daysCount": 7,
    "nightsCount": 6,
    "destination": "Thailand",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
    "theme": "Luxury",
    "isFeatured": false,
    "overview": "Experience Bangkok temples, Phuket beaches, Chiang Mai elephant sanctuary and Krabi limestone cliffs. Book your Thailand tour with Gateway Holidays.",
    "highlights": [
      "Pho &",
      "Arun temples",
      "Grand",
      "Palace &",
      "Emerald",
      "Buddha"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 6 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "4-Star Premium Resorts & City Hotels",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Thailand",
        "description": "Arrive Bangkok Fly to Bangkok — check-in Evening at Asiatique The Riverfront — riverside night market Chao Phraya River cruise",
        "activities": [
          "Bangkok",
          "Fly to",
          "Bangkok — check-in",
          "Evening at",
          "Asiatique"
        ]
      },
      {
        "day": 2,
        "title": "Bangkok",
        "location": "Thailand",
        "description": "Bangkok Heritage Day Grand Palace and Wat Phra Kaew (Temple of the Emerald Buddha) Wat Pho — magnificent reclining Buddha (46 m long) Boat ride to Wat Arun (Temple of Dawn) Afternoon Jim Thompson House museum",
        "activities": [
          "Heritage",
          "Palace and"
        ]
      },
      {
        "day": 3,
        "title": "Floating",
        "location": "Thailand",
        "description": "Floating Market & Safari World Morning Damnoen Saduak Floating Market Maeklong Railway Market Afternoon Safari World and Marine Park",
        "activities": [
          "Market &",
          "Safari",
          "Morning",
          "Damnoen",
          "Saduak"
        ]
      },
      {
        "day": 4,
        "title": "Fly to",
        "location": "Thailand",
        "description": "Fly to Phuket Fly to Phuket — check into a Patong or Kamala beach resort Afternoon Patong Beach Big Buddha of Phuket (45 m white marble statue) Evening Bangla Road walking street",
        "activities": [
          "Phuket",
          "Fly to",
          "Phuket — check into a",
          "Patong or",
          "Kamala beach resort",
          "Afternoon"
        ]
      },
      {
        "day": 5,
        "title": "Phi",
        "location": "Thailand",
        "description": "Phi Phi Islands Day Trip Phi Phi Islands speedboat day trip Phi Phi Le — Maya Bay (The Beach movie location) Shark point snorkelling and Viking Cave Pileh Lagoon and Monkey Beach Return via sunset",
        "activities": [
          "Islands"
        ]
      },
      {
        "day": 6,
        "title": "James",
        "location": "Thailand",
        "description": "James Bond Island James Bond Island (Phang Nga Bay) by longtail boat — iconic limestone karst island Sea kayaking through caves and lagoons Afternoon return to Phuket — Phuket old town walk",
        "activities": [
          "Island",
          "Island ("
        ]
      },
      {
        "day": 7,
        "title": "Departure from",
        "location": "Thailand",
        "description": "Departure from Phuket Morning Thai cooking class or Muay Thai boxing experience Departure from Phuket",
        "activities": [
          "Phuket",
          "Morning",
          "Thai cooking class or",
          "Thai boxing experience",
          "Departure from"
        ]
      }
    ],
    "relatedTourSlugs": [
      "sri-lanka-tour",
      "singapore-tour",
      "malaysia-tour"
    ]
  },
  {
    "id": "mysore-adventure-tour",
    "slug": "mysore-adventure-tour",
    "title": "Mysore Adventure Tour - Karnataka",
    "subtitle": "Enjoy outdoor trekking, nature walks and adventure activities in and around Mysore, Karnataka. Book your Mysore adventure tour with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Mysore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f4439c65?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Enjoy outdoor trekking, nature walks and adventure activities in and around Mysore, Karnataka. Book your Mysore adventure tour with Gateway Holidays.",
    "highlights": [
      "Nagarhole",
      "National",
      "Park jeep safari",
      "Shivanasamudra",
      "Falls — twin waterfalls",
      "Kabini"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Mysore",
        "location": "Mysore",
        "description": "Mysore Palace & Heritage Arrive in Mysore — check-in Afternoon at Mysore Palace and heritage sightseeing Evening Brindavan Gardens fountain show Overnight stay",
        "activities": [
          "Palace &",
          "Heritage",
          "Arrive in",
          "Mysore — check-in",
          "Afternoon at",
          "Mysore"
        ]
      },
      {
        "day": 2,
        "title": "Nagarhole",
        "location": "Mysore",
        "description": "Nagarhole Safari & Falls Full day at Nagarhole National Park (80 km) — morning jeep safari Spot elephants, leopards, deer and bison Afternoon Kabini River boat safari Shivanasamudra Falls — Cauvery River plunging dramatically Departure",
        "activities": [
          "Safari &",
          "Full day at",
          "Nagarhole",
          "National",
          "Park (80 km) — morning jeep safari"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "vagamon-adventure-tour"
    ]
  },
  {
    "id": "kashmir",
    "slug": "kashmir",
    "title": "Kashmir - Paradise on Earth",
    "subtitle": "Experience Dal Lake houseboats, Gulmarg snowfields, Pahalgam meadows and Mughal gardens in Kashmir. Book your Kashmir tour with Gateway Holidays.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Kashmir",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Experience Dal Lake houseboats, Gulmarg snowfields, Pahalgam meadows and Mughal gardens in Kashmir. Book your Kashmir tour with Gateway Holidays.",
    "highlights": [
      "Shikara ride on",
      "Lake",
      "Gulmarg",
      "Gondola",
      "Pahalgam —",
      "Valley of"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Kashmir",
        "description": "Arrive Srinagar Fly to Srinagar — transfer to houseboat on Dal Lake Afternoon shikara ride — floating vegetable market and lotus gardens Evening sunset from the houseboat deck",
        "activities": [
          "Srinagar",
          "Fly to",
          "Srinagar — transfer to houseboat on",
          "Afternoon shikara ride — floating vegetable market and lotus gardens"
        ]
      },
      {
        "day": 2,
        "title": "Srinagar",
        "location": "Kashmir",
        "description": "Srinagar Sightseeing Shankaracharya Temple — hilltop Shiva temple Mughal Gardens — Shalimar Bagh, Nishat Bagh and Chashme Shahi with terraced lawns",
        "activities": [
          "Sightseeing",
          "Shankaracharya",
          "Temple — hilltop",
          "Shiva temple",
          "Mughal",
          "Gardens —"
        ]
      },
      {
        "day": 3,
        "title": "Gulmarg",
        "location": "Kashmir",
        "description": "Gulmarg Day Trip Day trip to Gulmarg (52 km) — the Meadow of Flowers at 2,650 m Gondola ride (Phase 1 + Phase 2) to 4,390 m — one of Asia's highest cable cars Snow activities in winter, golf in summer",
        "activities": [
          "Day trip to",
          "Gulmarg (52 km) — the",
          "Meadow of",
          "Flowers at 2,650 m"
        ]
      },
      {
        "day": 4,
        "title": "Pahalgam",
        "location": "Kashmir",
        "description": "Pahalgam Day Trip Day trip to Pahalgam (96 km) — the Valley of Shepherds on the Lidder River Visit Betaab Valley, Aru Valley and Chandanwari meadow",
        "activities": [
          "Day trip to",
          "Pahalgam (96 km) — the",
          "Valley of",
          "Shepherds on the"
        ]
      },
      {
        "day": 5,
        "title": "Sonamarg",
        "location": "Kashmir",
        "description": "Sonamarg Day Trip Sonamarg (80 km) — the Meadow of Gold Glacier excursion to Thajiwas Glacier by pony or on foot Glaciers, alpine lakes and wildflower meadows",
        "activities": [
          "Sonamarg (80 km) — the",
          "Meadow of",
          "Glacier excursion to"
        ]
      },
      {
        "day": 6,
        "title": "Old",
        "location": "Kashmir",
        "description": "Old City & Departure Morning at Hazratbal Mosque — Kashmir's holiest mosque on Dal Lake Old City walk — Jama Masjid and Shah Hamdan Mosque Shopping for Pashmina shawls, Kashmiri carpets and saffron Departure",
        "activities": [
          "City &",
          "Departure",
          "Morning at",
          "Hazratbal",
          "Mosque —",
          "Kashmir's holiest mosque on"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kullu-manali",
      "golden-triangle-tour-delhi-agra-jaipur",
      "kanyakumari-thiruvananthapuram"
    ]
  },
  {
    "id": "madurai-meenakshi-amman-temple-tour",
    "slug": "madurai-meenakshi-amman-temple-tour",
    "title": "Madurai Meenakshi Temple Tour - Tamil Nadu",
    "subtitle": "Explore the magnificent Meenakshi Amman Temple and cultural heritage of Madurai. Book your Madurai temple tour package with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Madurai",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Explore the magnificent Meenakshi Amman Temple and cultural heritage of Madurai. Book your Madurai temple tour package with Gateway Holidays.",
    "highlights": [
      "Gopurams — tallest rises to 52 metres 1,000-",
      "Pillar",
      "Hall (",
      "Aaayiram",
      "Kaal",
      "Mandapam)"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Temple",
        "location": "Madurai",
        "description": "Temple Darshan & Aalankaram Arrive in Madurai — check-in Afternoon at Meenakshi Amman Temple with a licensed temple guide Explore the Golden Lotus Tank, 1,000-pillar hall with musical pillars, Ashta Shakthi Mandapam Evening spectacular Aalankaram ceremony — deities adorned and taken in processio",
        "activities": [
          "Darshan &",
          "Aalankaram",
          "Arrive in",
          "Madurai — check-in",
          "Afternoon at",
          "Meenakshi"
        ]
      },
      {
        "day": 2,
        "title": "Palace,",
        "location": "Madurai",
        "description": "Palace, Museum & Departure Morning early darshan at the temple (less crowded) Thirumalai Nayakkar Mahal Palace Gandhi Museum Afternoon shopping for silk, cotton and temple jewellery Departure",
        "activities": [
          "Museum &",
          "Departure",
          "Morning early darshan at the temple (less crowded)",
          "Thirumalai",
          "Nayakkar"
        ]
      }
    ],
    "relatedTourSlugs": [
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour",
      "tiruchendur-rameshwaram"
    ]
  },
  {
    "id": "thanjavur-big-temple-tour",
    "slug": "thanjavur-big-temple-tour",
    "title": "Thanjavur Big Temple Tour - Brihadeeswarar",
    "subtitle": "Visit the UNESCO World Heritage Brihadeeswarar Temple and royal heritage of Thanjavur. Book your Thanjavur Big Temple tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thanjavur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit the UNESCO World Heritage Brihadeeswarar Temple and royal heritage of Thanjavur. Book your Thanjavur Big Temple tour with Gateway Holidays.",
    "highlights": [
      "66-metre",
      "Vimana — tallest",
      "Chola tower",
      "World's largest",
      "Shivalinga inside the sanctum",
      "Chola murals — recovered after 1,000 years 25-tonne"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Big",
        "location": "Thanjavur",
        "description": "Big Temple & Royal Palace Arrive in Thanjavur — check-in Afternoon at Brihadeeswara Temple — guided tour of main sanctum, vimana and Nandi mandapam Specially arranged torch-guided tour of Chola murals in the inner corridor Evening at Royal Palace and art gallery Overnight stay",
        "activities": [
          "Temple &",
          "Palace",
          "Arrive in",
          "Thanjavur — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Library,",
        "location": "Thanjavur",
        "description": "Library, Arts & Departure Morning at Saraswathi Mahal Library — 60,000 manuscripts Schwartz Church Afternoon Tanjore Painting workshop visit Bronze casting artisan studio Shopping for Tanjore handicrafts Departure",
        "activities": [
          "Arts &",
          "Departure",
          "Morning at",
          "Saraswathi",
          "Library — 60,000 manuscripts"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "velankanni-shrine-tour",
      "tiruchendur-rameshwaram"
    ]
  },
  {
    "id": "velankanni-shrine-tour",
    "slug": "velankanni-shrine-tour",
    "title": "Velankanni Shrine Tour - Our Lady of Health",
    "subtitle": "Visit the sacred Basilica of Our Lady of Health at Velankanni, Tamil Nadu. Book your Velankanni Shrine pilgrimage tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Velankanni",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit the sacred Basilica of Our Lady of Health at Velankanni, Tamil Nadu. Book your Velankanni Shrine pilgrimage tour with Gateway Holidays.",
    "highlights": [
      "Basilica of",
      "Lady of",
      "Good",
      "Health",
      "Velankanni",
      "Beach"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Basilica &",
        "location": "Velankanni",
        "description": "Basilica & Shrine Arrive at Velankanni — check-in at a pilgrim rest house or hotel Afternoon at Basilica of Our Lady of Good Health — attend mass or pray Museum of Miracles — display of offerings and testimonies Sacred Shrine Tank Evening Velankanni Beach walk Overnight stay",
        "activities": [
          "Shrine",
          "Arrive at",
          "Velankanni — check-in at a pilgrim rest house or hotel",
          "Afternoon at",
          "Basilica of"
        ]
      },
      {
        "day": 2,
        "title": "Church",
        "location": "Velankanni",
        "description": "Church Circuit & Departure Morning early mass at the Basilica Visit the old Annai Velankanni Church Nearby Nagapattinam Kayarohana Swamy Temple Departure",
        "activities": [
          "Circuit &",
          "Departure",
          "Morning early mass at the",
          "Basilica",
          "Visit the old"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "tiruchendur-rameshwaram"
    ]
  },
  {
    "id": "varkala-jatayu-earths-center-tour",
    "slug": "varkala-jatayu-earths-center-tour",
    "title": "Varkala & Jatayu Earth Center Tour - Kerala",
    "subtitle": "Visit the world largest bird sculpture at Jatayu Nature Park and relax at Varkala cliff beach. Book your Kerala tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Varkala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Visit the world largest bird sculpture at Jatayu Nature Park and relax at Varkala cliff beach. Book your Kerala tour with Gateway Holidays.",
    "highlights": [
      "Jatayu",
      "Sculpture — world's largest bird statue",
      "Ropeway ride to the summit",
      "Digital",
      "Ramayana museum",
      "Adventure park"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Jatayu",
        "location": "Varkala",
        "description": "Jatayu Earth's Center Arrive at Chadayamangalam (65 km from Thiruvananthapuram) — check into a resort Afternoon at Jatayu Earth's Center — ropeway ride to the hilltop Walk to the massive Jatayu sculpture Digital Ramayana Museum — immersive storytelling Adventure activities — ziplining, rock cl",
        "activities": [
          "Earth's",
          "Center",
          "Arrive at",
          "Chadayamangalam (65 km from",
          "Thiruvananthapuram) — check into a resort",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Varkala",
        "location": "Varkala",
        "description": "Varkala Cliff & Departure Morning revisit Jatayu Earth's Center or explore nearby Varkala Cliff promenade walk Janardhana Swamy Temple darshan Papanasam Beach sacred bath Departure",
        "activities": [
          "Cliff &",
          "Departure",
          "Morning revisit",
          "Jatayu",
          "Earth's",
          "Center or explore nearby"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "bangalore",
      "varkala"
    ]
  },
  {
    "id": "vagamon-adventure-tour",
    "slug": "vagamon-adventure-tour",
    "title": "Vagamon Adventure Tour - Paragliding, Kerala",
    "subtitle": "Experience paragliding, trekking, zipline and camping in the lush meadows of Vagamon, Kerala. Book your adventure tour with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Vagamon",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Experience paragliding, trekking, zipline and camping in the lush meadows of Vagamon, Kerala. Book your adventure tour with Gateway Holidays.",
    "highlights": [
      "Rock climbing & rappelling",
      "Vagamon",
      "Pine",
      "Forest trek",
      "Zip-lining &",
      "Burma"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Rock",
        "location": "Vagamon",
        "description": "Rock Climbing & Campfire Arrive at Vagamon — check-in at an adventure camp Afternoon orientation and basic rock climbing session Evening campfire at the meadow with stargazing Overnight stay at adventure camp",
        "activities": [
          "Climbing &",
          "Campfire",
          "Arrive at",
          "Vagamon — check-in at an adventure camp",
          "Afternoon orientation and basic rock climbing session",
          "Evening campfire at the meadow with stargazing"
        ]
      },
      {
        "day": 2,
        "title": "Paragliding &",
        "location": "Vagamon",
        "description": "Paragliding & Zip-Line Full day adventure — morning paragliding session (6:00–9:00 AM — best wind window) Afternoon zip-lining and Burma Bridge challenge course in the pine forest Trek to Kurisumala Monastery for panoramic hilltop views Departure",
        "activities": [
          "Full day adventure — morning paragliding session (6:00–9:00 AM — best wind window)",
          "Afternoon zip-lining and",
          "Bridge challenge course in the pine forest"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ]
  },
  {
    "id": "tiruchendur-rameshwaram",
    "slug": "tiruchendur-rameshwaram",
    "title": "Tiruchendur & Rameshwaram Pilgrimage Tour",
    "subtitle": "Seek blessings at Thiruchendur Murugan Temple and Ramanathaswamy Temple in Rameshwaram. Book your Tamil Nadu pilgrimage tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Tiruchendur & Rameshwaram Pilgrimage Tour",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Seek blessings at Thiruchendur Murugan Temple and Ramanathaswamy Temple in Rameshwaram. Book your Tamil Nadu pilgrimage tour with Gateway Holidays.",
    "highlights": [
      "Tiruchendur",
      "Murugan",
      "Temple on the sea",
      "Ramanathaswamy",
      "Temple & 22",
      "Theerthams"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Tiruchendur",
        "location": "Tiruchendur & Rameshwaram Pilgrimage Tour",
        "description": "Tiruchendur Murugan Temple Arrive at Tiruchendur — check-in Evening at Tiruchendur Murugan Temple — one of the six sacred abodes of Lord Murugan Built into the sea cliff — witness the evening pooja with the ocean as backdrop Overnight stay",
        "activities": [
          "Murugan",
          "Temple",
          "Arrive at",
          "Tiruchendur — check-in",
          "Evening at",
          "Tiruchendur"
        ]
      },
      {
        "day": 2,
        "title": "Rameshwaram &",
        "location": "Tiruchendur & Rameshwaram Pilgrimage Tour",
        "description": "Rameshwaram & Departure Morning full temple circuit at Tiruchendur Drive to Rameshwaram (170 km) Agni Theertham — sacred sea bath Ramanathaswamy Temple darshan and 22 Theerthams Dhanushkodi ghost town visit Pamban Bridge photo stop Departure",
        "activities": [
          "Departure",
          "Morning full temple circuit at",
          "Tiruchendur",
          "Drive to",
          "Rameshwaram (170 km)"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "palani-murugan-temple-tour",
    "slug": "palani-murugan-temple-tour",
    "title": "Palani Murugan Temple Tour - Tamil Nadu",
    "subtitle": "Seek blessings at the hilltop Palani Dhandayuthapani Swamy Temple in Tamil Nadu. Book your Palani Murugan Temple pilgrimage tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Palani Murugan Temple Tour - Tamil Nadu",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Seek blessings at the hilltop Palani Dhandayuthapani Swamy Temple in Tamil Nadu. Book your Palani Murugan Temple pilgrimage tour with Gateway Holidays.",
    "highlights": [
      "Dhandayuthapani",
      "Swamy idol",
      "Sacred",
      "Panchamirtham prasad",
      "Thiru",
      "Avinankudi"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Temple",
        "location": "Palani Murugan Temple Tour - Tamil Nadu",
        "description": "Temple Climb & Evening Darshan Arrive at Palani — check-in Afternoon at Thiru Avinankudi Temple at the base of the hill Evening ascend via the 693 steps or rope car to the main temple Darshan of Lord Dhandayuthapani Witness the evening alankaram Return to hotel — overnight stay",
        "activities": [
          "Climb &",
          "Evening",
          "Darshan",
          "Arrive at",
          "Palani — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Morning",
        "location": "Palani Murugan Temple Tour - Tamil Nadu",
        "description": "Morning Darshan & Departure Morning early darshan and receive the sacred Panchamirtham prasad Explore the temple's mandapams and hill surroundings Visit the local herbal medicine market Departure",
        "activities": [
          "Darshan &",
          "Departure",
          "Morning early darshan and receive the sacred",
          "Panchamirtham prasad",
          "Explore the temple's mandapams and hill surroundings",
          "Visit the local herbal medicine market"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "wonderla-adventure-park-tour",
    "slug": "wonderla-adventure-park-tour",
    "title": "Wonderla Adventure Park Tour - Kochi, Kerala",
    "subtitle": "Enjoy thrilling rides, water slides and live shows at Wonderla Adventure Park in Kochi. Book your Wonderla tour package with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Wonderla Adventure Park Tour - Kochi, Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Enjoy thrilling rides, water slides and live shows at Wonderla Adventure Park in Kochi. Book your Wonderla tour package with Gateway Holidays.",
    "highlights": [
      "50+ rides including roller coasters & water rides",
      "Wave pool & rain disco",
      "Kids'",
      "Adventure",
      "Zone",
      "Cyclone rides"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Wonderla",
        "location": "Wonderla Adventure Park Tour - Kochi, Kerala",
        "description": "Wonderla Full Day Arrive at Wonderla (Kochi / Bengaluru / Hyderabad) — check into a nearby hotel Afternoon at Wonderla Park — signature thrill rides (Recoil, Cyclone) Water park section — wave pool, rain disco, lazy river Evening Fantasy Parade and live entertainment show Overnight stay",
        "activities": [
          "Arrive at",
          "Wonderla (",
          "Kochi /",
          "Bengaluru /"
        ]
      },
      {
        "day": 2,
        "title": "Park",
        "location": "Wonderla Adventure Park Tour - Kochi, Kerala",
        "description": "Park Revisit & Departure Morning return to the park for rides missed on",
        "activities": [
          "Revisit &",
          "Departure",
          "Morning return to the park for rides missed on"
        ]
      },
      {
        "day": 1,
        "title": "Kids'",
        "location": "Wonderla Adventure Park Tour - Kochi, Kerala",
        "description": "Kids' Zone for younger guests Lunch at the park restaurant Afternoon departure",
        "activities": [
          "Zone for younger guests",
          "Lunch at the park restaurant",
          "Afternoon departure"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ]
  },
  {
    "id": "ayodhya-tour",
    "slug": "ayodhya-tour",
    "title": "Ayodhya - Ram Mandir Pilgrimage",
    "subtitle": "Visit the sacred Ram Mandir and holy ghats of Saryu River in Ayodhya. Book your Ayodhya pilgrimage tour package with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ayodhya",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit the sacred Ram Mandir and holy ghats of Saryu River in Ayodhya. Book your Ayodhya pilgrimage tour package with Gateway Holidays.",
    "highlights": [
      "Mandir",
      "Janmabhoomi",
      "Hanuman",
      "Garhi",
      "Temple",
      "Sarayu"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Hanuman",
        "location": "Ayodhya",
        "description": "Hanuman Garhi & Sarayu Aarti Arrive at Ayodhya (via Lucknow) — check-in Afternoon at Hanuman Garhi Temple — the hilltop fortress-temple of Lord Hanuman Evening Sarayu Ghat Aarti — a moving lamp ceremony on the sacred river Overnight stay",
        "activities": [
          "Garhi &",
          "Sarayu",
          "Arrive at",
          "Ayodhya (via",
          "Lucknow) — check-in"
        ]
      },
      {
        "day": 2,
        "title": "Ram",
        "location": "Ayodhya",
        "description": "Ram Mandir & Departure Morning at Ram Janmabhoomi — visit the grand Ram Mandir Kanak Bhavan (Sone ka Ghar) — ornate temple with golden interiors Nageshwarnath Temple Treta ke Thakur — site where Ram performed Ashwamedha Yagna Guptar Ghat — where Lord Rama took Jal Samadhi Departure",
        "activities": [
          "Mandir &",
          "Departure",
          "Morning at",
          "Janmabhoomi — visit the grand"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "black-thunder-water-theme-park-tour",
    "slug": "black-thunder-water-theme-park-tour",
    "title": "Black Thunder Water Park Tour - Tamil Nadu",
    "subtitle": "Experience thrilling water rides and wave pools at Black Thunder, Tamil Nadu top water theme park. Book your tour with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Black Thunder Water Park Tour - Tamil Nadu",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Experience thrilling water rides and wave pools at Black Thunder, Tamil Nadu top water theme park. Book your tour with Gateway Holidays.",
    "highlights": [
      "Giant water slides &",
      "Black",
      "Hole ride",
      "Wave",
      "Pool and",
      "Lazy"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Black",
        "location": "Black Thunder Water Park Tour - Tamil Nadu",
        "description": "Black Thunder Full Day Arrive at Mettupalayam / Coimbatore — check-in Afternoon at Black Thunder Park — Black Hole and Twister water slides Wave pool and lazy river Amusement rides and games Evening shows Return to hotel for dinner Overnight stay",
        "activities": [
          "Thunder",
          "Arrive at",
          "Mettupalayam /",
          "Coimbatore — check-in"
        ]
      },
      {
        "day": 2,
        "title": "Park",
        "location": "Black Thunder Water Park Tour - Tamil Nadu",
        "description": "Park Revisit or Ooty Option Morning continue park exploration and kids' water play zone Optional Ooty day excursion (30 km by Toy Train or road) Departure",
        "activities": [
          "Revisit or",
          "Option",
          "Morning continue park exploration and kids' water play zone",
          "Optional",
          "Ooty day excursion (30 km by"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ]
  },
  {
    "id": "kanthalur-adventure-tour",
    "slug": "kanthalur-adventure-tour",
    "title": "Kanthalur Adventure Tour - Munnar, Kerala",
    "subtitle": "Explore strawberry farms, spice gardens and adventure activities in Kanthalur near Munnar, Kerala. Book your tour with Gateway Holidays.",
    "category": "adventure-trekking",
    "categoryLabel": "Adventure & Trekking",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanthalur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Adventure",
    "isFeatured": false,
    "overview": "Explore strawberry farms, spice gardens and adventure activities in Kanthalur near Munnar, Kerala. Book your tour with Gateway Holidays.",
    "highlights": [
      "Apple orchards of",
      "Kerala's own",
      "Kashmir",
      "Kanthalur",
      "Kalayar",
      "Temple"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Scenic Hill Cottages & Plantation Stays",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Apple",
        "location": "Kanthalur",
        "description": "Apple Orchards & Sunset Arrive at Kanthalur (accessible from Munnar or Kodaikanal) Check into a homestay or eco-resort Afternoon walk through apple orchards — unique sight in tropical Kerala Kanthalur Kalayar Temple visit Evening sunset from the plateau with views stretching into Tamil Nadu Over",
        "activities": [
          "Orchards &",
          "Sunset",
          "Arrive at",
          "Kanthalur (accessible from",
          "Munnar or",
          "Kodaikanal)"
        ]
      },
      {
        "day": 2,
        "title": "Trek &",
        "location": "Kanthalur",
        "description": "Trek & Departure Morning trek to nearby Rajamala meadows or Vattavada (strawberry village) Freshly picked local produce breakfast Nature trail through shola forests Departure",
        "activities": [
          "Departure",
          "Morning trek to nearby",
          "Rajamala meadows or",
          "Vattavada (strawberry village)",
          "Freshly picked local produce breakfast",
          "Nature trail through shola forests"
        ]
      }
    ],
    "relatedTourSlugs": [
      "munnar-trekking-tour",
      "kanakapura-adventure-park-tour",
      "mysore-adventure-tour"
    ]
  },
  {
    "id": "padmanabhaswamy-temple-tour",
    "slug": "padmanabhaswamy-temple-tour",
    "title": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
    "subtitle": "Visit the magnificent Sri Padmanabhaswamy Temple in Thiruvananthapuram, one of India richest temples. Book your pilgrimage tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit the magnificent Sri Padmanabhaswamy Temple in Thiruvananthapuram, one of India richest temples. Book your pilgrimage tour with Gateway Holidays.",
    "highlights": [
      "Main sanctum —",
      "Lord",
      "Vishnu in reclining pose 17th-century",
      "Dravidian-",
      "Kerala style architecture",
      "Thiruvananthapuram city temple circuit"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Temple",
        "location": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
        "description": "Temple Darshan & Palace Arrive in Thiruvananthapuram — check-in Arrange traditional attire (available for rental nearby) Afternoon at Padmanabhaswamy Temple — darshan and exploration of mandapas and sacred pond Evening at Kuthiramalika Palace Museum Dinner at a traditional Kerala restaurant Over",
        "activities": [
          "Darshan &",
          "Palace",
          "Arrive in",
          "Thiruvananthapuram — check-in",
          "Arrange traditional attire (available for rental nearby)",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "City",
        "location": "Padmanabhaswamy Temple Tour - Thiruvananthapuram",
        "description": "City Temples & Departure Morning at Attukal Devi Temple (known as the Sabarimala of Women) Neyyattinkara Balasubramania Swamy Temple Visit Napier Museum Departure",
        "activities": [
          "Temples &",
          "Departure",
          "Morning at",
          "Attukal",
          "Temple (known as the"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "tirupathi-balaji-temple-tour",
    "slug": "tirupathi-balaji-temple-tour",
    "title": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
    "subtitle": "Visit Lord Venkateswara at Tirupathi, the most visited pilgrimage site in India. Book your Tirupathi Balaji Temple tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit Lord Venkateswara at Tirupathi, the most visited pilgrimage site in India. Book your Tirupathi Balaji Temple tour with Gateway Holidays.",
    "highlights": [
      "Venkateswara",
      "Temple",
      "Tirumala",
      "Hills",
      "Kapila",
      "Theertham waterfall"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Tirupathi",
        "location": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
        "description": "Tirupathi Town Temples Arrive at Tirupathi — check-in Afternoon at Sri Govindarajaswamy Temple in town Visit Kapila Theertham — sacred waterfall at the base of Tirumala Evening at Akasha Ganga and Papavinasam waterfalls Overnight stay",
        "activities": [
          "Temples",
          "Arrive at",
          "Tirupathi — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Tirumala",
        "location": "Tirupathi Balaji Temple Tour - Andhra Pradesh",
        "description": "Tirumala Darshan & Departure Early morning drive or walk up the Tirumala Ghat Road to the sacred hills Darshan at Sri Venkateswara Temple with specially arranged Darshan tickets Head tonsuring (optional) Sri Padmavathi Ammavari Temple at Tiruchanur (7 km) Departure",
        "activities": [
          "Darshan &",
          "Departure",
          "Early morning drive or walk up the",
          "Tirumala",
          "Road to the sacred hills"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "kullu-manali",
    "slug": "kullu-manali",
    "title": "Kullu Manali - Himachal Pradesh",
    "subtitle": "Experience snow-capped mountains, Rohtang Pass and river rafting in Kullu and Manali. Book your Himachal Pradesh tour with Gateway Holidays.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Kullu Manali - Himachal Pradesh",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Experience snow-capped mountains, Rohtang Pass and river rafting in Kullu and Manali. Book your Himachal Pradesh tour with Gateway Holidays.",
    "highlights": [
      "Rohtang",
      "Pass",
      "Solang",
      "Valley",
      "Hadimba",
      "Devi"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Arrive Kullu Fly to Chandigarh or Kullu Airport Drive to Kullu — check-in Evening at Kullu shawl and handicraft market",
        "activities": [
          "Fly to",
          "Chandigarh or",
          "Airport",
          "Drive to"
        ]
      },
      {
        "day": 2,
        "title": "Kullu",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Kullu Sightseeing Bijli Mahadev Temple (10 km trek or drive) — lightning temple with spectacular valley views Great Himalayan National Park entrance River rafting on the Beas — thrilling rapids through apple orchards",
        "activities": [
          "Sightseeing",
          "Mahadev",
          "Temple (10 km trek or drive) — lightning temple with spectacular valley views",
          "Himalayan"
        ]
      },
      {
        "day": 3,
        "title": "Drive to",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Drive to Manali Drive to Manali (40 km) — check-in Afternoon at Hadimba Devi Temple — unique 1553 CE wooden pagoda temple in a cedar forest Manu Temple and Manali town walk Old Manali cafés and backpacker scene",
        "activities": [
          "Manali",
          "Drive to",
          "Manali (40 km) — check-in",
          "Afternoon at",
          "Hadimba"
        ]
      },
      {
        "day": 4,
        "title": "Solang",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Solang Valley Full day Solang Valley — skiing in winter, zorbing and cable car in summer Beas Kund trek (optional) Evening Mall Road, Manali for shopping",
        "activities": [
          "Valley",
          "Full day",
          "Solang",
          "Valley — skiing in winter, zorbing and cable car in summer",
          "Kund trek (optional)"
        ]
      },
      {
        "day": 5,
        "title": "Rohtang",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Rohtang Pass Rohtang Pass (open May–November) — 51 km from Manali at 3,978 m Snow fields, moraine landscape and stunning views of Lahaul Visit Rahala Falls and Marhi",
        "activities": [
          "Rohtang",
          "Pass (open",
          "November) — 51 km from",
          "Manali at 3,978 m"
        ]
      },
      {
        "day": 6,
        "title": "Naggar &",
        "location": "Kullu Manali - Himachal Pradesh",
        "description": "Naggar & Departure Morning at Naggar Castle (15th century) and Roerich Art Gallery Jana Waterfall Departure from Kullu/Chandigarh",
        "activities": [
          "Departure",
          "Morning at",
          "Naggar",
          "Castle (15th century) and",
          "Roerich"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kashmir",
      "golden-triangle-tour-delhi-agra-jaipur",
      "kanyakumari-thiruvananthapuram"
    ]
  },
  {
    "id": "golden-triangle-tour-delhi-agra-jaipur",
    "slug": "golden-triangle-tour-delhi-agra-jaipur",
    "title": "Golden Triangle Tour - Delhi, Agra & Jaipur",
    "subtitle": "Discover the Taj Mahal, Red Fort, Amber Fort and iconic landmarks on the Golden Triangle tour. Book your Delhi-Agra-Jaipur package with Gateway Holidays.",
    "category": "north-india",
    "categoryLabel": "North India Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Golden Triangle Tour - Delhi, Agra & Jaipur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Discover the Taj Mahal, Red Fort, Amber Fort and iconic landmarks on the Golden Triangle tour. Book your Delhi-Agra-Jaipur package with Gateway Holidays.",
    "highlights": [
      "Mahal",
      "Fort &",
      "Humayun's",
      "Tomb",
      "Amber",
      "Fort &"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Arrive Delhi Arrive in Delhi — check-in Afternoon at India Gate and Rashtrapati Bhavan Evening at Connaught Place for dinner and exploration",
        "activities": [
          "Arrive in",
          "Delhi — check-in",
          "Afternoon at",
          "Gate and"
        ]
      },
      {
        "day": 2,
        "title": "Delhi",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Delhi Sightseeing Red Fort (UNESCO), Jama Masjid and Chandni Chowk bazaar Afternoon at Humayun's Tomb (UNESCO) and Qutub Minar (UNESCO) Evening at Akshardham Temple",
        "activities": [
          "Sightseeing",
          "Fort (UNESCO),",
          "Masjid and",
          "Chandni"
        ]
      },
      {
        "day": 3,
        "title": "Delhi to",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Delhi to Agra Drive to Agra (200 km, 3 hours) Afternoon at Agra Fort — majestic red sandstone fort Evening at Mehtab Bagh — moonlit view of the Taj Mahal across the Yamuna",
        "activities": [
          "Drive to",
          "Agra (200 km, 3 hours)",
          "Afternoon at",
          "Fort — majestic red sandstone fort"
        ]
      },
      {
        "day": 4,
        "title": "Taj",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Taj Mahal & Jaipur Sunrise at the Taj Mahal — experience the most beautiful monument in the world Visit the interior of the Taj Midday at Fatehpur Sikri — Akbar's well-preserved ghost capital Drive to Jaipur",
        "activities": [
          "Mahal &",
          "Jaipur",
          "Sunrise at the",
          "Mahal — experience the most beautiful monument in the world",
          "Visit the interior of the"
        ]
      },
      {
        "day": 5,
        "title": "Jaipur —",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Jaipur — Pink City Amber Fort — majestic hilltop fort with elephant rides and mirror palace City Palace — the residence of Jaipur's royal family Hawa Mahal — the Palace of Winds Jantar Mantar (UNESCO) — world's largest stone observatory",
        "activities": [
          "Fort — majestic hilltop fort with elephant rides and mirror palace",
          "Palace — the residence of"
        ]
      },
      {
        "day": 6,
        "title": "Jaipur &",
        "location": "Golden Triangle Tour - Delhi, Agra & Jaipur",
        "description": "Jaipur & Departure Morning at Jal Mahal and Birla Mandir Johari Bazaar — Jaipur's famous gem and jewellery market Departure from Jaipur",
        "activities": [
          "Departure",
          "Morning at",
          "Mahal and",
          "Mandir"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kashmir",
      "kullu-manali",
      "kanyakumari-thiruvananthapuram"
    ]
  },
  {
    "id": "bangalore",
    "slug": "bangalore",
    "title": "Bangalore - Garden City, Karnataka",
    "subtitle": "Explore Bangalore Lalbagh Garden, Cubbon Park, Vidhana Soudha and vibrant markets. Book your Bangalore city tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Bangalore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Bangalore Lalbagh Garden, Cubbon Park, Vidhana Soudha and vibrant markets. Book your Bangalore city tour with Gateway Holidays.",
    "highlights": [
      "Bangalore",
      "Palace",
      "Cubbon",
      "Park &",
      "Vidhana",
      "Soudha ISKCON"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Palace &",
        "location": "Bangalore",
        "description": "Palace & Gardens Arrive in Bangalore — check-in Afternoon at Bangalore Palace — Tudor-style royal palace Lalbagh Botanical Garden — 240 acres of exotic flora and the famous Glass House Evening Cubbon Park walk and Vidhana Soudha illumination Overnight stay",
        "activities": [
          "Gardens",
          "Arrive in",
          "Bangalore — check-in",
          "Afternoon at",
          "Bangalore",
          "Palace —"
        ]
      },
      {
        "day": 2,
        "title": "Temples &",
        "location": "Bangalore",
        "description": "Temples & Shopping Morning at ISKCON Temple Bangalore Bull Temple (Dodda Ganesha Temple) Afternoon at Tipu Sultan's Summer Palace MG Road and Brigade Road shopping Departure",
        "activities": [
          "Shopping",
          "Morning at ISKCON",
          "Temple",
          "Bangalore",
          "Temple ("
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "varkala"
    ]
  },
  {
    "id": "varkala",
    "slug": "varkala",
    "title": "Varkala - Cliff Beach, Kerala",
    "subtitle": "Relax on Varkala stunning cliff beach, explore Papanasam beach and Janardanaswamy Temple. Book your Varkala tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Varkala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Relax on Varkala stunning cliff beach, explore Papanasam beach and Janardanaswamy Temple. Book your Varkala tour with Gateway Holidays.",
    "highlights": [
      "Varkala",
      "Cliff",
      "Janardhana",
      "Swamy",
      "Temple",
      "Papanasam"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Beach &",
        "location": "Varkala",
        "description": "Beach & Island Tour Arrive at Varkala — check-in at a cliff-top resort Munroe Island canoe tour Evening at Varkala Cliff beach Cliff-top dinner with ocean views Overnight stay",
        "activities": [
          "Island",
          "Arrive at",
          "Varkala — check-in at a cliff-top resort",
          "Munroe",
          "Island canoe tour"
        ]
      },
      {
        "day": 2,
        "title": "Temple &",
        "location": "Varkala",
        "description": "Temple & Jatayu Morning at Janardhana Swamy Temple Papanasam Beach sacred bath Visit Jatayu Earth's Center Sivagiri Mutt ashram Departure",
        "activities": [
          "Jatayu",
          "Morning at",
          "Janardhana",
          "Temple",
          "Papanasam"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "athirapally",
    "slug": "athirapally",
    "title": "Athirapally Waterfall Tour - Kerala",
    "subtitle": "Visit Athirapally, the Niagara of India, and Vazhachal forest waterfalls in Thrissur district. Book your Athirapally tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Athirapally Waterfall Tour - Kerala",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Visit Athirapally, the Niagara of India, and Vazhachal forest waterfalls in Thrissur district. Book your Athirapally tour with Gateway Holidays.",
    "highlights": [
      "Athirapally",
      "Falls",
      "Vazhachal",
      "Falls",
      "Charpa",
      "Falls"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Waterfalls &",
        "location": "Athirapally Waterfall Tour - Kerala",
        "description": "Waterfalls & Forest Arrive near Athirapally — check-in at a forest resort Afternoon at Athirapally Falls — walk to the base Evening at Vazhachal Falls Night at resort with sounds of the forest Overnight stay",
        "activities": [
          "Forest",
          "Arrive near",
          "Athirapally — check-in at a forest resort",
          "Afternoon at",
          "Athirapally",
          "Falls — walk to the base"
        ]
      },
      {
        "day": 2,
        "title": "Bird",
        "location": "Athirapally Waterfall Tour - Kerala",
        "description": "Bird Watching & Departure Early morning bird watching walk in Sholayar Forest Reserve Look for the Great Indian Hornbill and Malabar Grey Hornbill Visit Charpa Falls Return via scenic forest drive Departure",
        "activities": [
          "Watching &",
          "Departure",
          "Early morning bird watching walk in",
          "Sholayar",
          "Forest",
          "Reserve"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "coorg",
    "slug": "coorg",
    "title": "Coorg - Coffee Hills, Karnataka",
    "subtitle": "Explore Coorg coffee plantations, Abbey Falls, Dubare elephant camp and Namdroling monastery. Book your Coorg tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Coorg",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Coorg coffee plantations, Abbey Falls, Dubare elephant camp and Namdroling monastery. Book your Coorg tour with Gateway Holidays.",
    "highlights": [
      "Abbey",
      "Falls",
      "Raja's",
      "Seat — sunset viewpoint",
      "Dubare",
      "Elephant"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madikeri &",
        "location": "Coorg",
        "description": "Madikeri & Coffee Estate Arrive at Madikeri, Coorg — check into a coffee estate resort Afternoon at Raja's Seat sunset viewpoint with manicured gardens Visit Madikeri Fort and Omkareshwara Temple Authentic Kodava dinner Overnight stay",
        "activities": [
          "Coffee",
          "Estate",
          "Arrive at",
          "Madikeri,",
          "Coorg — check into a coffee estate resort",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Elephant",
        "location": "Coorg",
        "description": "Elephant Camp, Falls & Departure Morning at Dubare Elephant Camp — help bathe and feed elephants Abbey Falls trek through coffee and spice plantations Shopping for Coorg coffee and spices Departure",
        "activities": [
          "Falls &",
          "Departure",
          "Morning at",
          "Dubare",
          "Elephant"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "gokarna",
    "slug": "gokarna",
    "title": "Gokarna - Beach & Temple, Karnataka",
    "subtitle": "Relax on Om Beach, Half Moon Beach and visit the Mahabaleshwar Temple in Gokarna. Book your Gokarna tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "4 Nights / 5 Days",
    "daysCount": 5,
    "nightsCount": 4,
    "destination": "Gokarna",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Relax on Om Beach, Half Moon Beach and visit the Mahabaleshwar Temple in Gokarna. Book your Gokarna tour package with Gateway Holidays.",
    "highlights": [
      "Mahabaleshwara",
      "Temple",
      "Beach",
      "Half",
      "Moon",
      "Beach"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 4 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Temple &",
        "location": "Gokarna",
        "description": "Temple & Beach Sunset Arrive at Gokarna — check into a beachside resort Afternoon Mahabaleshwara Temple darshan — see the sacred Atmalinga Evening at Gokarna Main Beach sunset Overnight stay",
        "activities": [
          "Sunset",
          "Arrive at",
          "Gokarna — check into a beachside resort",
          "Afternoon",
          "Mahabaleshwara"
        ]
      },
      {
        "day": 2,
        "title": "Beach",
        "location": "Gokarna",
        "description": "Beach Trek & Departure Morning sunrise at Kudle Beach Coastal trek to Om Beach — shaped like the sacred OM symbol Continue to Half Moon Beach and Paradise Beach Afternoon departure",
        "activities": [
          "Trek &",
          "Departure",
          "Morning sunrise at",
          "Coastal trek to"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "ramoji-film-city",
    "slug": "ramoji-film-city",
    "title": "Ramoji Film City Tour - Hyderabad",
    "subtitle": "Explore the world largest film studio at Ramoji Film City, Hyderabad. Book your Ramoji Film City guided tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ramoji Film City",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore the world largest film studio at Ramoji Film City, Hyderabad. Book your Ramoji Film City guided tour package with Gateway Holidays.",
    "highlights": [
      "World's largest film studio",
      "Ramoji's themed streets",
      "Filmi",
      "Duniya",
      "Gardens, rides & evening cultural show",
      "Local sightseeing"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Full",
        "location": "Ramoji Film City",
        "description": "Full Day Film City Arrive at Ramoji Film City — check into on-campus hotel Full day exploration — film sets, Eureka zone, Ramoji Square Live stunt shows, street performances and amusement rides Evening grand cultural show with dance and lights Overnight stay",
        "activities": [
          "Arrive at",
          "Ramoji"
        ]
      },
      {
        "day": 2,
        "title": "Filmi",
        "location": "Ramoji Film City",
        "description": "Filmi Duniya & Departure Morning revisit favourite zones and rides Filmi Duniya — learn how films are made, try on costumes and see props Explore themed garden zones and butterfly garden Lunch and departure",
        "activities": [
          "Duniya &",
          "Departure",
          "Morning revisit favourite zones and rides",
          "Duniya — learn how films are made, try on costumes and see props",
          "Explore themed garden zones and butterfly garden"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "mysore",
    "slug": "mysore",
    "title": "Mysore - Palace City, Karnataka",
    "subtitle": "Visit Mysore Palace, Chamundeshwari Temple and Brindavan Gardens in the royal city. Book your Mysore city tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Mysore",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f4439c65?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Visit Mysore Palace, Chamundeshwari Temple and Brindavan Gardens in the royal city. Book your Mysore city tour package with Gateway Holidays.",
    "highlights": [
      "Mysore",
      "Palace",
      "Chamundi",
      "Hills &",
      "Mahishasura",
      "Statue"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Palace",
        "location": "Mysore",
        "description": "Palace Arrive in Mysore — check-in Afternoon at Mysore Palace — Durbar Hall, royal armoury and Kalyana Mantapa Overnight stay",
        "activities": [
          "Arrive in",
          "Mysore — check-in",
          "Afternoon at",
          "Mysore",
          "Palace —",
          "Durbar"
        ]
      },
      {
        "day": 2,
        "title": "Chamundi",
        "location": "Mysore",
        "description": "Chamundi Hills & Departure Morning at Chamundi Hills — 1,000-step climb to Chamundeshwari Temple View the giant Mahishasura statue Brindavan Gardens — terraced gardens with musical fountain show Local market for sandalwood and silk Departure",
        "activities": [
          "Hills &",
          "Departure",
          "Morning at",
          "Chamundi",
          "Hills — 1,000-step climb to",
          "Chamundeshwari"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "hyderabad",
    "slug": "hyderabad",
    "title": "Hyderabad - City of Nizams",
    "subtitle": "Explore Charminar, Golconda Fort, Hussain Sagar Lake and Ramoji Film City in Hyderabad. Book your Hyderabad city tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Hyderabad",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Charminar, Golconda Fort, Hussain Sagar Lake and Ramoji Film City in Hyderabad. Book your Hyderabad city tour with Gateway Holidays.",
    "highlights": [
      "Charminar",
      "Golconda",
      "Fort",
      "Qutb",
      "Shahi",
      "Tombs"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Charminar &",
        "location": "Hyderabad",
        "description": "Charminar & Old City Arrive in Hyderabad — check-in Afternoon at Charminar — the 1591 monument at the heart of old city Mecca Masjid — one of India's oldest and largest mosques Laad Bazaar — famous for lac bangles and pearls Evening at Hussain Sagar lakefront Dinner with authentic Dum Biry",
        "activities": [
          "Arrive in",
          "Hyderabad — check-in",
          "Afternoon at",
          "Charminar — the 1591 monument at the heart of old city"
        ]
      },
      {
        "day": 2,
        "title": "Golconda &",
        "location": "Hyderabad",
        "description": "Golconda & Departure Morning at Golconda Fort — 12th-century hilltop fort famous for its acoustics Qutb Shahi Tombs — seven magnificent domed mausoleums Salar Jung Museum — one of the world's largest one-man art collections Shopping for Hyderabadi pearls and Kalamkari craft Departure",
        "activities": [
          "Departure",
          "Morning at",
          "Golconda",
          "Fort — 12th-century hilltop fort famous for its acoustics"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "thekkady",
    "slug": "thekkady",
    "title": "Thekkady - Periyar Wildlife, Kerala",
    "subtitle": "Enjoy a boat safari on Periyar Lake and explore spice plantations in Thekkady. Book your Thekkady wildlife tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thekkady",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Enjoy a boat safari on Periyar Lake and explore spice plantations in Thekkady. Book your Thekkady wildlife tour with Gateway Holidays.",
    "highlights": [
      "Periyar",
      "Lake boat cruise",
      "Periyar",
      "Tiger",
      "Reserve jeep safari",
      "Spice plantation tour"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Spice",
        "location": "Thekkady",
        "description": "Spice Plantation & Cultural Show Arrive at Thekkady — check into a spice plantation resort Guided spice plantation walk — cardamom, black pepper, nutmeg and clove Afternoon Periyar Lake boat cruise Evening Kalaripayattu martial arts performance Overnight stay",
        "activities": [
          "Plantation &",
          "Cultural",
          "Arrive at",
          "Thekkady — check into a spice plantation resort",
          "Guided spice plantation walk — cardamom, black pepper, nutmeg and clove"
        ]
      },
      {
        "day": 2,
        "title": "Safari &",
        "location": "Thekkady",
        "description": "Safari & Departure Early morning jeep safari into Periyar Tiger Reserve core zone Shopping for spices, honey and Ayurvedic products Departure",
        "activities": [
          "Departure",
          "Early morning jeep safari into",
          "Periyar",
          "Reserve core zone",
          "Shopping for spices, honey and"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "chikmagalur",
    "slug": "chikmagalur",
    "title": "Chikmagalur - Coffee Land, Karnataka",
    "subtitle": "Trek Mullayanagiri peak, explore coffee estates and Baba Budangiri hills in Chikmagalur. Book your Chikmagalur tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Chikmagalur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Trek Mullayanagiri peak, explore coffee estates and Baba Budangiri hills in Chikmagalur. Book your Chikmagalur tour with Gateway Holidays.",
    "highlights": [
      "Mullayanagiri",
      "Peak",
      "Baba",
      "Budan",
      "Giri",
      "Hills"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Coffee",
        "location": "Chikmagalur",
        "description": "Coffee Estate & Bonfire Arrive at Chikmagalur — check into a coffee plantation resort Afternoon coffee estate guided tour — learn about Indian coffee See the harvesting, pulping and drying process Enjoy a fresh pour-over of estate-grown coffee Evening campfire at the resort Overnight stay",
        "activities": [
          "Estate &",
          "Bonfire",
          "Arrive at",
          "Chikmagalur — check into a coffee plantation resort",
          "Afternoon coffee estate guided tour — learn about",
          "Indian coffee"
        ]
      },
      {
        "day": 2,
        "title": "Peak,",
        "location": "Chikmagalur",
        "description": "Peak, Falls & Departure Morning Mullayanagiri Peak trek (1,930 m) — Karnataka's rooftop Baba Budan Giri Hills and Dattatreya Peetha Hebbe Falls — beautiful two-tiered waterfall Shopping for premium Arabica and Robusta coffee beans Departure",
        "activities": [
          "Falls &",
          "Departure",
          "Morning",
          "Mullayanagiri",
          "Peak trek (1,930 m) —",
          "Karnataka's rooftop"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "vagamon",
    "slug": "vagamon",
    "title": "Vagamon - Hill Station, Kerala",
    "subtitle": "Explore Vagamon misty meadows, pine forests and tea gardens in Kerala. Book your Vagamon hill station tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Vagamon",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Vagamon misty meadows, pine forests and tea gardens in Kerala. Book your Vagamon hill station tour package with Gateway Holidays.",
    "highlights": [
      "Vagamon",
      "Meadows",
      "Vagamon",
      "Lake",
      "Pine",
      "Forest &"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Three",
        "location": "Vagamon",
        "description": "Three Hills & Pine Forest Arrive at Vagamon — check into a meadow resort Afternoon explore the Three Hills — Murugan Hill, Kurisumala and Thangal Hill Evening walk through the famous pine forest Dinner at the resort Overnight stay",
        "activities": [
          "Hills &",
          "Forest",
          "Arrive at",
          "Vagamon — check into a meadow resort",
          "Afternoon explore the"
        ]
      },
      {
        "day": 2,
        "title": "Lake &",
        "location": "Vagamon",
        "description": "Lake & Departure Morning paragliding over Vagamon Meadows (subject to weather) Visit Vagamon Lake and surrounding green pastures Kuttikkanam viewpoint Afternoon departure",
        "activities": [
          "Departure",
          "Morning paragliding over",
          "Vagamon",
          "Meadows (subject to weather)",
          "Vagamon"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "pondicherry",
    "slug": "pondicherry",
    "title": "Pondicherry - French Town & Beaches",
    "subtitle": "Explore Pondicherry French Quarter, Auroville, serene beaches and colonial heritage. Book your Pondicherry tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Pondicherry - French Town & Beaches",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Pondicherry French Quarter, Auroville, serene beaches and colonial heritage. Book your Pondicherry tour package with Gateway Holidays.",
    "highlights": [
      "French",
      "Quarter (",
      "White",
      "Town)",
      "Auroville",
      "Aurobindo"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Ashram,",
        "location": "Pondicherry - French Town & Beaches",
        "description": "Ashram, Auroville & Beach Arrive in Pondicherry — check-in at hotel Visit Sri Aurobindo Ashram Auroville and Matrimandir visit Vinayagar Temple darshan Evening at Promenade Beach and Rock Beach French Quarter heritage walk Overnight stay",
        "activities": [
          "Auroville &",
          "Arrive in",
          "Pondicherry — check-in at hotel"
        ]
      },
      {
        "day": 2,
        "title": "Pichavaram &",
        "location": "Pondicherry - French Town & Beaches",
        "description": "Pichavaram & Departure Morning visit to Pichavaram mangrove forest — boat ride through green canopy Explore Paradise Beach (by boat) Lunch at a seaside restaurant Departure",
        "activities": [
          "Departure",
          "Morning visit to",
          "Pichavaram mangrove forest — boat ride through green canopy",
          "Explore",
          "Paradise",
          "Beach (by boat)"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "thiruvananthapuram",
    "slug": "thiruvananthapuram",
    "title": "Thiruvananthapuram Tour - Kerala Capital City",
    "subtitle": "Explore Padmanabhaswamy Temple, Kovalam beach and Napier Museum in Thiruvananthapuram. Book your Trivandrum city tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thiruvananthapuram Tour - Kerala Capital City",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Padmanabhaswamy Temple, Kovalam beach and Napier Museum in Thiruvananthapuram. Book your Trivandrum city tour with Gateway Holidays.",
    "highlights": [
      "Padmanabhaswamy",
      "Temple",
      "Napier",
      "Museum &",
      "Kovalam",
      "Beach"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Temple &",
        "location": "Thiruvananthapuram Tour - Kerala Capital City",
        "description": "Temple & Heritage Arrive in Thiruvananthapuram — check-in Morning at Padmanabhaswamy Temple (traditional attire required) Visit Napier Museum and Kerala Zoo Evening at Kuthiramalika Palace Museum Overnight stay",
        "activities": [
          "Heritage",
          "Arrive in",
          "Thiruvananthapuram — check-in",
          "Morning at",
          "Padmanabhaswamy",
          "Temple (traditional attire required)"
        ]
      },
      {
        "day": 2,
        "title": "Kovalam",
        "location": "Thiruvananthapuram Tour - Kerala Capital City",
        "description": "Kovalam Beach & Departure Morning at Kovalam Beach — sunrise swim or Ayurvedic massage Visit the famous Lighthouse Enjoy panoramic ocean view Evening fresh seafood dinner at a beach shack Departure",
        "activities": [
          "Beach &",
          "Departure",
          "Morning at",
          "Kovalam",
          "Beach — sunrise swim or",
          "Ayurvedic massage"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "kochi",
    "slug": "kochi",
    "title": "Kochi - Fort Kochi, Kerala",
    "subtitle": "Discover Fort Kochi Chinese fishing nets, Mattancherry Palace and vibrant cultural shows. Book your Kochi city tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kochi",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Discover Fort Kochi Chinese fishing nets, Mattancherry Palace and vibrant cultural shows. Book your Kochi city tour package with Gateway Holidays.",
    "highlights": [
      "Chinese",
      "Fishing",
      "Nets",
      "Francis",
      "Church",
      "Mattancherry"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Wonderla",
        "location": "Kochi",
        "description": "Wonderla Amusement Park Arrive at Kochi — check-in Full day at Wonderla Amusement Park — thrill rides, water park and live shows Evening leisure Overnight stay",
        "activities": [
          "Amusement",
          "Arrive at",
          "Kochi — check-in",
          "Full day at",
          "Wonderla"
        ]
      },
      {
        "day": 2,
        "title": "City",
        "location": "Kochi",
        "description": "City Tour & Departure Morning Fort Kochi heritage walk — Chinese Fishing Nets, St. Francis Church Mattancherry Dutch Palace and Jew Town Shopping at Lulu Mall Departure",
        "activities": [
          "Tour &",
          "Departure",
          "Morning",
          "Kochi heritage walk —",
          "Chinese"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "rameshwaram",
    "slug": "rameshwaram",
    "title": "Rameshwaram - Pilgrimage, Tamil Nadu",
    "subtitle": "Visit the sacred Ramanathaswamy Temple, Dhanushkodi ruins and Pamban Bridge in Rameshwaram. Book your pilgrimage tour with Gateway Holidays.",
    "category": "heritage-temple",
    "categoryLabel": "Heritage & Temple Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Rameshwaram",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    "theme": "Pilgrimage",
    "isFeatured": false,
    "overview": "Visit the sacred Ramanathaswamy Temple, Dhanushkodi ruins and Pamban Bridge in Rameshwaram. Book your pilgrimage tour with Gateway Holidays.",
    "highlights": [
      "Ramanathaswamy",
      "Temple",
      "Dhanushkodi",
      "Pamban",
      "Railway",
      "Bridge"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival &",
        "location": "Rameshwaram",
        "description": "Arrival & Temple Darshan Arrive at Rameshwaram — hotel check-in and freshen up Darshan at Ramanathaswamy Temple Participate in the sacred rituals at Agni Theertham Take ritual baths at 22 Theerthams inside the temple Overnight stay at hotel",
        "activities": [
          "Temple",
          "Darshan",
          "Arrive at",
          "Rameshwaram — hotel check-in and freshen up",
          "Darshan at",
          "Ramanathaswamy"
        ]
      },
      {
        "day": 2,
        "title": "Dhanushkodi &",
        "location": "Rameshwaram",
        "description": "Dhanushkodi & Departure Morning visit to Dhanushkodi ghost town Scenic drive past Pamban Bridge APJ Abdul Kalam Memorial Five-Faced Hanuman Temple (Panchamukha Anjaneya Temple) Drop-off at airport, railway station, or your next destination",
        "activities": [
          "Departure",
          "Morning visit to",
          "Dhanushkodi ghost town",
          "Scenic drive past",
          "Pamban",
          "Bridge APJ"
        ]
      }
    ],
    "relatedTourSlugs": [
      "madurai-meenakshi-amman-temple-tour",
      "thanjavur-big-temple-tour",
      "velankanni-shrine-tour"
    ]
  },
  {
    "id": "courtallam",
    "slug": "courtallam",
    "title": "Courtallam - Waterfalls, Tamil Nadu",
    "subtitle": "Enjoy the refreshing falls at Courtallam, the spa of South India. Book your Courtallam waterfall tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Courtallam",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Enjoy the refreshing falls at Courtallam, the spa of South India. Book your Courtallam waterfall tour package with Gateway Holidays.",
    "highlights": [
      "Main",
      "Falls",
      "Five",
      "Falls",
      "Courtallam",
      "Kutralanathar"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in",
        "location": "Courtallam",
        "description": "Arrival in Courtallam Morning visit to the Main Falls — therapeutic shower in gushing waters Afternoon explore the Five Falls (Aintharuvi) Evening leisure at the resort Overnight stay",
        "activities": [
          "Courtallam",
          "Morning visit to the",
          "Falls — therapeutic shower in gushing waters",
          "Afternoon explore the"
        ]
      },
      {
        "day": 2,
        "title": "Old",
        "location": "Courtallam",
        "description": "Old Falls & Departure Morning visit to Old Courtallam Falls through forest trail Darshan at Kutralanathar Temple Lunch at a local restaurant Light shopping for local pickles, honey and herbal products Return journey to Madurai",
        "activities": [
          "Falls &",
          "Departure",
          "Morning visit to",
          "Courtallam",
          "Falls through forest trail"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "kodaikanal",
    "slug": "kodaikanal",
    "title": "Kodaikanal - Hill Station, Tamil Nadu",
    "subtitle": "Discover misty valleys, Bryant Park, Pillar Rocks and Coakers Walk in Kodaikanal. Book your Kodaikanal hill station tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kodaikanal",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Discover misty valleys, Bryant Park, Pillar Rocks and Coakers Walk in Kodaikanal. Book your Kodaikanal hill station tour with Gateway Holidays.",
    "highlights": [
      "Kodaikanal",
      "Lake",
      "Bryant",
      "Park",
      "Botanical",
      "Garden"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in",
        "location": "Kodaikanal",
        "description": "Arrival in Kodaikanal Kodaikanal Lake — enjoy boating on the iconic star-shaped lake Bryant Park Botanical Garden — stroll through rare flowers and exotic plants Coaker's Walk — kilometre-long scenic pathway with breathtaking panoramic valley views Pillar Rocks — three giant vertical rock form",
        "activities": [
          "Kodaikanal",
          "Kodaikanal",
          "Lake — enjoy boating on the iconic star-shaped lake",
          "Bryant",
          "Botanical"
        ]
      },
      {
        "day": 2,
        "title": "Murugan",
        "location": "Kodaikanal",
        "description": "Murugan Temple, Poomparai & Pine Forest Morning darshan at Kurinchi Andavar Murugan Temple Scenic drive to Poomparai village — charming village surrounded by terraced farmlands and valley vistas Walk through the famous Kodaikanal Pine Forest — towering pine trees with misty morning light Silver",
        "activities": [
          "Temple,",
          "Poomparai &",
          "Forest",
          "Morning darshan at",
          "Kurinchi"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "thanjavur",
    "slug": "thanjavur",
    "title": "Thanjavur - Big Temple, Tamil Nadu",
    "subtitle": "Visit the UNESCO-listed Brihadeeswarar Temple and Royal Palace in Thanjavur. Book your Thanjavur cultural tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Thanjavur",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Visit the UNESCO-listed Brihadeeswarar Temple and Royal Palace in Thanjavur. Book your Thanjavur cultural tour package with Gateway Holidays.",
    "highlights": [
      "Brihadeeswara",
      "Temple",
      "Thanjavur",
      "Royal",
      "Palace &",
      "Gallery"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Big",
        "location": "Thanjavur",
        "description": "Big Temple & Royal Palace Arrive in Thanjavur — check-in Afternoon at Brihadeeswara Temple (Big Temple) — 66-metre vimana, world's largest Shivalinga Evening visit to Thanjavur Royal Palace and art gallery Light shopping for Tanjore paintings and handicrafts Overnight stay",
        "activities": [
          "Temple &",
          "Palace",
          "Arrive in",
          "Thanjavur — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Kallanai &",
        "location": "Thanjavur",
        "description": "Kallanai & Departure Morning visit to Kallanai Dam (Grand Anicut) Poondi Matha Temple Departure",
        "activities": [
          "Departure",
          "Morning visit to",
          "Kallanai",
          "Anicut)"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "wayanad",
    "slug": "wayanad",
    "title": "Wayanad - Wildlife & Nature, Kerala",
    "subtitle": "Trek Chembra Peak, explore Edakkal Caves and discover Wayanad wildlife sanctuaries. Book your Wayanad tour package with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Wayanad",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Trek Chembra Peak, explore Edakkal Caves and discover Wayanad wildlife sanctuaries. Book your Wayanad tour package with Gateway Holidays.",
    "highlights": [
      "Kandi",
      "Park",
      "Soochipara",
      "Falls",
      "Edakkal",
      "Caves"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in",
        "location": "Wayanad",
        "description": "Arrival in Wayanad 900 Kandi Eco Park — trekking trails and rare flora at 900 metres altitude with breathtaking valley and forest views Soochipara Falls (Sentinel Rock Waterfalls) — spectacular three-tiered waterfall amidst dense Western Ghats forests Cool off with a refreshing swim in the natural p",
        "activities": [
          "Wayanad 900",
          "Soochipara",
          "Falls ("
        ]
      },
      {
        "day": 2,
        "title": "Edakkal",
        "location": "Wayanad",
        "description": "Edakkal Caves, Heritage Museum & Banasura Dam Morning visit to Edakkal Caves Climb to the cave entrance — moderate 1 km trek with scenic views Wayanad Heritage Museum at Ambalavayal Banasura Sagar Dam — India's largest earthen dam Shopping for Wayanad coffee, bamboo products and tribal han",
        "activities": [
          "Caves,",
          "Heritage",
          "Museum &",
          "Banasura",
          "Morning visit to"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "kanyakumari",
    "slug": "kanyakumari",
    "title": "Kanyakumari",
    "subtitle": "Experience the sunrise at Kanyakumari, visit Vivekananda Rock Memorial and Thiruvalluvar Statue. Book your Kanyakumari tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Kanyakumari",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Experience the sunrise at Kanyakumari, visit Vivekananda Rock Memorial and Thiruvalluvar Statue. Book your Kanyakumari tour with Gateway Holidays.",
    "highlights": [
      "Sunset at the confluence of seas",
      "Vivekananda",
      "Rock",
      "Memorial",
      "Thiruvalluvar",
      "Statue"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Kanyakumari",
        "location": "Kanyakumari",
        "description": "Kanyakumari Arrival Direct reception and pickup upon arrival by your dedicated private chauffeur Kumari Amman Temple darshan Ferry ride to Vivekananda Rock Memorial and Thiruvalluvar Statue Afternoon visit to Gandhi Memorial Evening leisure at the beach and sunset Visit Suchindram Thanumalayan Temple Check-in and overnight stay",
        "activities": [
          "Arrival",
          "Kumari",
          "Temple darshan"
        ]
      },
      {
        "day": 2,
        "title": "Palace,",
        "location": "Kanyakumari",
        "description": "Palace, Falls & Departure Morning excursion to Padmanabhapuram Palace and Udiragiri Fort Visit the scenic bridge and falls Lunch at a local restaurant Drop-off at airport, railway station, or your next destination",
        "activities": [
          "Falls &",
          "Departure",
          "Morning excursion to",
          "Padmanabhapuram",
          "Palace and",
          "Udiragiri"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "madurai",
    "slug": "madurai",
    "title": "Madurai - Meenakshi Temple, Tamil Nadu",
    "subtitle": "Explore the iconic Meenakshi Amman Temple, local markets and cultural heritage of Madurai. Book your Madurai sightseeing tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Madurai",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore the iconic Meenakshi Amman Temple, local markets and cultural heritage of Madurai. Book your Madurai sightseeing tour with Gateway Holidays.",
    "highlights": [
      "Meenakshi",
      "Amman",
      "Temple",
      "Thirumalai",
      "Nayakkar",
      "Palace"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai",
        "location": "Madurai",
        "description": "Madurai City Sightseeing Arrive in Madurai — check-in at hotel Morning visit to Meenakshi Amman Temple Thirumalai Nayakkar Palace Gandhi Memorial Museum Overnight stay",
        "activities": [
          "Sightseeing",
          "Arrive in",
          "Madurai — check-in at hotel",
          "Morning visit to",
          "Meenakshi"
        ]
      },
      {
        "day": 2,
        "title": "Azhagar",
        "location": "Madurai",
        "description": "Azhagar Hills & Departure Morning excursion to Azhagar Kovil (Kallazhagar Temple) Visit Pazhamudhir Cholai temple Evening at Tiruparankundram Shopping at local silk and handicraft stores Departure",
        "activities": [
          "Hills &",
          "Departure",
          "Morning excursion to",
          "Azhagar",
          "Kovil (",
          "Kallazhagar"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "yercaud",
    "slug": "yercaud",
    "title": "Yercaud - Hill Station, Tamil Nadu",
    "subtitle": "Explore Yercaud Shevaroy Hills, coffee estates, Killiyur Falls and scenic lake. Book your Yercaud hill station tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Day",
    "daysCount": 1,
    "nightsCount": 1,
    "destination": "Yercaud",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Yercaud Shevaroy Hills, coffee estates, Killiyur Falls and scenic lake. Book your Yercaud hill station tour with Gateway Holidays.",
    "highlights": [
      "Yercaud",
      "Lake",
      "Anna",
      "Park &",
      "Botanical",
      "Garden"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Yercaud - Hill Station, Tamil Nadu Highlights",
        "location": "Yercaud",
        "description": "Direct reception upon arrival at destination or airport/station. Check-in and private sightseeing tour.",
        "activities": [
          "Welcome & transfer",
          "Local landmark exploration",
          "Overnight stay"
        ]
      },
      {
        "day": 2,
        "title": "Yercaud - Hill Station, Tamil Nadu Excursion & Return",
        "location": "Yercaud",
        "description": "Morning sightseeing, scenic viewpoints, local market visits, and departure assistance.",
        "activities": [
          "Scenic morning tour",
          "Cultural exploration",
          "Drop-off"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "ooty",
    "slug": "ooty",
    "title": "Ooty - Nilgiri Hills, Tamil Nadu",
    "subtitle": "Ride the Nilgiri Mountain Railway, visit Botanical Gardens and Doddabetta Peak in Ooty. Book your Ooty hill station tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Ooty",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Ride the Nilgiri Mountain Railway, visit Botanical Gardens and Doddabetta Peak in Ooty. Book your Ooty hill station tour with Gateway Holidays.",
    "highlights": [
      "Ooty",
      "Botanical",
      "Gardens",
      "Lake boating",
      "Tea factory visit",
      "Train ride"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Toy",
        "location": "Ooty",
        "description": "Toy Train & Tea Factory Arrive at Ooty Early morning Nilgiri Mountain Railway (Toy Train) ride — UNESCO World Heritage experience Visit a working tea factory and taste freshly brewed Nilgiri tea Evening leisure at Ooty Lake Overnight stay",
        "activities": [
          "Train &",
          "Factory",
          "Arrive at",
          "Early morning"
        ]
      },
      {
        "day": 2,
        "title": "Ooty and",
        "location": "Ooty",
        "description": "Ooty and Toy Train Morning visit to Rose Garden — home to 20,000+ varieties of roses Visit Emerald Lake and Avalanche Lake (seasonal) Light shopping for Nilgiri tea, spices and eucalyptus oil Departure",
        "activities": [
          "Morning visit to",
          "Garden — home to 20,000+ varieties of roses"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "munnar",
    "slug": "munnar",
    "title": "Munnar - Kerala Hill Station",
    "subtitle": "Explore Munnar lush tea plantations, Eravikulam National Park and Chokramudi Peak. Book affordable Munnar tour packages with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Munnar",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Explore Munnar lush tea plantations, Eravikulam National Park and Chokramudi Peak. Book affordable Munnar tour packages with Gateway Holidays.",
    "highlights": [
      "Mattupetty",
      "Echo",
      "Point",
      "Eravikulam",
      "National",
      "Park"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in",
        "location": "Munnar",
        "description": "Arrival in Munnar Mattupetty Dam — scenic boating on the reservoir surrounded by tea estates Indo-Swiss Dairy Farm — visit the famous cattle breeding station Echo Point — experience the natural echo over the Madupetty Lake Eravikulam National Park (Rajamalai) — spot the endangered Nilgiri Tahr (Hima",
        "activities": [
          "Munnar",
          "Mattupetty",
          "Dam — scenic boating on the reservoir surrounded by tea estates"
        ]
      },
      {
        "day": 2,
        "title": "Jeep",
        "location": "Munnar",
        "description": "Jeep Safari, Top Station & Waterfalls Early morning jeep safari through winding tea estate roads and misty forest trails Top Station — highest viewpoint in Munnar with stunning views stretching into Tamil Nadu Attukal Waterfalls — gentle trek through shola forest to a scenic cascade Cheeyappara",
        "activities": [
          "Safari,",
          "Station &",
          "Waterfalls",
          "Early morning jeep safari through winding tea estate roads and misty forest trails"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "andaman-nicobar-islands-tour",
    "slug": "andaman-nicobar-islands-tour",
    "title": "Andaman & Nicobar Islands",
    "subtitle": "Snorkel in crystal-clear waters, visit Radhanagar Beach and Cellular Jail in Andaman. Book your island tour package with Gateway Holidays.",
    "category": "island",
    "categoryLabel": "Island & Beach Tour",
    "duration": "5 Nights / 6 Days",
    "daysCount": 6,
    "nightsCount": 5,
    "destination": "Andaman & Nicobar Islands",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "theme": "Honeymoon",
    "isFeatured": false,
    "overview": "Snorkel in crystal-clear waters, visit Radhanagar Beach and Cellular Jail in Andaman. Book your island tour package with Gateway Holidays.",
    "highlights": [
      "Radhanagar",
      "Beach",
      "Scuba diving & snorkelling",
      "Cellular",
      "Jail",
      "Neil"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 5 Nights in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "location": "Andaman & Nicobar Islands",
        "description": "Arrive Port Blair Fly to Port Blair — check-in Afternoon at Cellular Jail (Kala Pani) — historic prison of India's freedom fighters Evening Cellular Jail Light and Sound Show — deeply moving tribute to the freedom struggle",
        "activities": [
          "Fly to",
          "Blair — check-in",
          "Afternoon at"
        ]
      },
      {
        "day": 2,
        "title": "Havelock",
        "location": "Andaman & Nicobar Islands",
        "description": "Havelock Island Ferry to Havelock Island (1 hour) — check into a beach resort Afternoon at Radhanagar Beach (Beach 7) — rated one of Asia's finest beaches Sunset walk along the beach",
        "activities": [
          "Island",
          "Ferry to",
          "Havelock",
          "Island (1 hour) — check into a beach resort",
          "Afternoon at",
          "Radhanagar"
        ]
      },
      {
        "day": 3,
        "title": "Scuba",
        "location": "Andaman & Nicobar Islands",
        "description": "Scuba Diving & Snorkelling Morning scuba diving at Elephant Beach — one of the best coral diving sites in India Snorkelling tour Kayaking through mangroves Afternoon at Kalapathar Beach — dramatic black pebble beach at sunset",
        "activities": [
          "Diving &",
          "Snorkelling",
          "Morning scuba diving at",
          "Elephant",
          "Beach — one of the best coral diving sites in"
        ]
      },
      {
        "day": 4,
        "title": "Neil",
        "location": "Andaman & Nicobar Islands",
        "description": "Neil Island Ferry to Neil Island (45 minutes) Natural Bridge and Laxmanpur Beach — pristine and uncrowded Natural Rock Formation Afternoon glass-bottom boat ride over shallow coral gardens Sea walking experience",
        "activities": [
          "Island",
          "Ferry to",
          "Island (45 minutes)",
          "Natural",
          "Bridge and"
        ]
      },
      {
        "day": 5,
        "title": "Back to",
        "location": "Andaman & Nicobar Islands",
        "description": "Back to Port Blair Return to Port Blair Corbyn's Cove Beach Water Sports Complex — jet skiing and banana boat Samudrika Naval Marine Museum Ross Island (Netaji Subhash Chandra Bose Island) — abandoned British colonial ruins",
        "activities": [
          "Return to",
          "Corbyn's"
        ]
      },
      {
        "day": 6,
        "title": "North",
        "location": "Andaman & Nicobar Islands",
        "description": "North Bay & Departure Morning at North Bay Island — coral reef snorkelling, sea walking and underwater observatory Afternoon souvenir shopping for shells, pearls and Andaman wood crafts Departure",
        "activities": [
          "Bay &",
          "Departure",
          "Morning at",
          "Island — coral reef snorkelling, sea walking and underwater observatory"
        ]
      }
    ],
    "relatedTourSlugs": [
      "goa-island-beach-tour",
      "lakshadweep-tour",
      "varkala-munroe-island-tour"
    ]
  },
  {
    "id": "alappuzha-houseboat-backwater-tour",
    "slug": "alappuzha-houseboat-backwater-tour",
    "title": "Alleppey Houseboat Tour - Kerala Backwaters",
    "subtitle": "Cruise the serene Kerala backwaters on a luxury houseboat in Alappuzha (Alleppey). Book your Alleppey houseboat tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Day",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Alleppey Houseboat Tour - Kerala Backwaters",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Cruise the serene Kerala backwaters on a luxury houseboat in Alappuzha (Alleppey). Book your Alleppey houseboat tour with Gateway Holidays.",
    "highlights": [
      "Vembanad",
      "Lake",
      "Alappuzha",
      "Beach &",
      "Lighthouse",
      "Kumarakom"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Houseboat",
        "location": "Alleppey Houseboat Tour - Kerala Backwaters",
        "description": "Houseboat Cruise Arrive at Alappuzha Board private houseboat (kettuvallam) Cruise through narrow canals Observe rural Kerala life and watch birds Freshly cooked Kerala meals on board Vembanad Lake sunset Overnight stay on the houseboat",
        "activities": [
          "Cruise",
          "Arrive at",
          "Alappuzha",
          "Board private houseboat (kettuvallam)",
          "Cruise through narrow canals",
          "Observe rural"
        ]
      },
      {
        "day": 2,
        "title": "Beach &",
        "location": "Alleppey Houseboat Tour - Kerala Backwaters",
        "description": "Beach & Departure Morning at Alappuzha Beach and Lighthouse Visit Krishnapuram Palace Museum Light shopping for local products Departure",
        "activities": [
          "Departure",
          "Morning at",
          "Alappuzha",
          "Beach and",
          "Lighthouse"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
    ]
  },
  {
    "id": "alappuzha-boathouse-varkala",
    "slug": "alappuzha-boathouse-varkala",
    "title": "Alappuzha & Varkala Tour - Kerala Backwaters",
    "subtitle": "Cruise Kerala backwaters on a luxury houseboat in Alappuzha and relax on scenic Varkala cliff beach. Book your Kerala tour with Gateway Holidays.",
    "category": "south-india",
    "categoryLabel": "South India Tour",
    "duration": "1 Night / 2 Days",
    "daysCount": 2,
    "nightsCount": 1,
    "destination": "Alappuzha & Varkala Tour - Kerala Backwaters",
    "pickupAssistance": "On Arrival at Destination, Airport, or Station (Doorstep Private Cab Arranged)",
    "startingHub": "Flexible On-Arrival Pickup",
    "image": "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    "theme": "Family",
    "isFeatured": false,
    "overview": "Cruise Kerala backwaters on a luxury houseboat in Alappuzha and relax on scenic Varkala cliff beach. Book your Kerala tour with Gateway Holidays.",
    "highlights": [
      "Vembanad",
      "Lake",
      "Papanasam",
      "Beach",
      "Varkala",
      "North"
    ],
    "inclusions": [
      "Dedicated AC private vehicle & certified polite chauffeur",
      "Accommodation for 1 Night in handpicked hotels / resorts",
      "Daily breakfast at hotel / resort",
      "All fuel, tolls, parking fees, and interstate permits included",
      "Complete sightseeing as per customized itinerary",
      "24/7 on-tour customer concierge support from Gateway Holidays team"
    ],
    "exclusions": [
      "Monument entry fees, camera tickets, and adventure ride tickets",
      "Lunch, dinner, and personal laundry / beverages unless specified",
      "Any personal expenses or optional activities"
    ],
    "stayStyle": "Handpicked Deluxe AC Hotels & Resorts",
    "transportIncluded": "Private AC Cab & Dedicated Chauffeur Included (Pickup on Arrival)",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in",
        "location": "Alappuzha & Varkala Tour - Kerala Backwaters",
        "description": "Arrival in Alappuzha (Alleppey) Arrive at Alappuzha (Alleppey) — afternoon check-in at private houseboat Cruise through the shimmering network of narrow backwater canals Observe rural Kerala life — toddy tapping, coir making and paddy cultivation along the banks Vembanad Lake — cruise through Kerala",
        "activities": [
          "Alappuzha (",
          "Alleppey)",
          "Arrive at",
          "Alappuzha (",
          "Alleppey) — afternoon check-in at private houseboat",
          "Cruise through the shimmering network of narrow backwater canals"
        ]
      },
      {
        "day": 2,
        "title": "Varkala",
        "location": "Alappuzha & Varkala Tour - Kerala Backwaters",
        "description": "Varkala Cliff Beach Morning check-out from houseboat Drive to Varkala Papanasam Beach — sacred bathing beach believed to wash away sins, at the base of the red laterite cliffs North Cliff promenade walk — yoga studios, Ayurveda centres and cliff-top shacks Cliff-top lunch with panoramic Arabian Sea",
        "activities": [
          "Morning check-out from houseboat",
          "Drive to",
          "Varkala",
          "Papanasam"
        ]
      }
    ],
    "relatedTourSlugs": [
      "kanyakumari-thiruvananthapuram",
      "varkala-jatayu-earths-center-tour",
      "bangalore"
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
