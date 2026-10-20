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
  startingHub: string;
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
    subtitle: "Sunrise jeep safaris, high-altitude treks, river rafting & jungle camping",
    icon: "Compass",
    badge: "Thrilling",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "island",
    name: "Island Tours",
    subtitle: "Turquoise coral lagoons, scuba diving & white sand beaches",
    icon: "Palmtree",
    badge: "Exotic",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "north-india",
    name: "North India Tours",
    subtitle: "Snow-peaked Himalayan valleys, royal palaces & golden desert dunes",
    icon: "Sparkles",
    badge: "Majestic",
    heroImage: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "international",
    name: "International Tours",
    subtitle: "Global wonderlands, private island villas & luxury city escapes",
    icon: "Plane",
    badge: "Passport Ready",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  },
];

export const tourPackages: TourPackage[] = [
  // 1. South India
  {
    id: "tour-munnar-alleppey",
    slug: "munnar-alleppey-kerala-paradise",
    title: "Munnar & Alleppey Kerala Paradise",
    subtitle: "Emerald tea garden valleys, cool mist & luxury backwater houseboat",
    category: "south-india",
    categoryLabel: "South India",
    duration: "3 Nights / 4 Days",
    daysCount: 4,
    nightsCount: 3,
    startingHub: "Madurai / Cochin",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    theme: "Honeymoon",
    badge: "Best Seller",
    isFeatured: true,
    overview: "Experience God's Own Country with our signature Kerala itinerary starting conveniently from Madurai or Cochin. Drive through misty mountain passes, breathe fresh aroma at spice plantations, witness cascading waterfalls, and unwind on a private luxury houseboat gliding across Vembanad Lake in Alleppey.",
    highlights: [
      "Scenic tea garden walks & Mattupetty Dam boat ride",
      "Private luxury backwater houseboat stay with traditional Kerala meals",
      "Cheeyappara and Valara waterfall photo stops",
      "Private sanitized AC cab with experienced chauffeur",
      "Complimentary flower bed decor & candle light dinner for couples",
    ],
    inclusions: [
      "Comfortable sanitized AC Private Vehicle for entire tour & sightseeing",
      "2 Nights stay at verified 3-Star/4-Star valley resort in Munnar",
      "1 Night stay in fully air-conditioned private luxury Houseboat in Alleppey",
      "Daily breakfast at hotels + All meals on Houseboat (Lunch, Evening Tea/Snacks, Dinner, Breakfast)",
      "Driver allowance, fuel, toll gates, parking, and interstate permits",
      "24/7 Dedicated Trip Coordinator via phone & WhatsApp",
    ],
    exclusions: [
      "Personal expenses such as laundry, phone calls, and alcoholic beverages",
      "Optional adventure activities (zipline, elephant ride, spice garden entry fees)",
      "Airfare or train tickets (can be arranged on request)",
      "Anything not mentioned under inclusions",
    ],
    stayStyle: "Handpicked Premium Valley Resorts + Deluxe AC Houseboat",
    transportIncluded: "Private AC Cab (Sedan / Ertiga / Innova Crysta)",
    itinerary: [
      {
        day: 1,
        title: "Journey to the Mist — Arrival in Munnar",
        location: "Munnar",
        description: "Pickup from Madurai / Cochin. Enjoy a picturesque drive through the Western Ghats with photo stops at Cheeyappara and Valara waterfalls. Check in to your resort, relax, and explore the local Munnar town in the evening.",
        activities: ["Scenic drive through mountain passes", "Waterfall viewpoint stops", "Resort check-in & leisure"],
      },
      {
        day: 2,
        title: "Munnar Sightseeing & Tea Estates",
        location: "Munnar",
        description: "Full day tour of Munnar. Visit Mattupetty Dam, Echo Point, Kundala Lake, and the world-famous Tea Museum. Walk through aromatic cardamom and tea plantations.",
        activities: ["Mattupetty Dam boat ride", "Echo Point listening experience", "Tea museum & plantation walk"],
      },
      {
        day: 3,
        title: "Munnar to Alleppey — The Backwater Cruise",
        location: "Alleppey",
        description: "After breakfast, descend toward the tranquil backwaters of Alleppey. Check into your private luxury houseboat by 12:30 PM. Cruise through palm-fringed canals, paddy fields, and lagoons while enjoying authentic freshly prepared Kerala cuisine.",
        activities: ["Private houseboat check-in", "Sunset cruise along lagoons", "Traditional Kerala dinner on water"],
      },
      {
        day: 4,
        title: "Morning Cruise & Farewell Departure",
        location: "Cochin / Madurai",
        description: "Wake up to misty morning backwaters and a delicious breakfast. Disembark from the houseboat and transfer comfortably back to Madurai or Cochin airport/station.",
        activities: ["Morning sunrise cruise", "Memorable souvenir shopping", "Return drop at airport or station"],
      },
    ],
    relatedTourSlugs: ["kodaikanal-misty-hills-escape", "vagamon-kolukkumalai-adventure-safari", "ooty-coonoor-nilgiri-heritage"],
  },

  {
    id: "tour-kodaikanal",
    slug: "kodaikanal-misty-hills-escape",
    title: "Kodaikanal Misty Hills & Lake Escape",
    subtitle: "The Princess of Hill Stations — pine forests, roaring falls & cool climate",
    category: "south-india",
    categoryLabel: "South India",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    nightsCount: 2,
    startingHub: "Madurai",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    theme: "Family",
    badge: "Weekend Special",
    isFeatured: true,
    overview: "Located just a 3-hour drive from Madurai, Kodaikanal is the quintessential mountain retreat. Walk along Coaker's Walk amidst drifting clouds, boat across the star-shaped Kodai Lake, visit the majestic Silver Cascade and Pillar Rocks, and enjoy cool, crisp hill weather.",
    highlights: [
      "Serene boating on Kodaikanal Star Lake",
      "Strolling along Coaker's Walk with panoramic valley views",
      "Exploring Pine Forest and Guna Caves (Devil's Kitchen)",
      "Silver Cascade & Bear Shola Falls stops",
      "Private direct round-trip transport from Madurai",
    ],
    inclusions: [
      "Direct Private AC cab pickup and drop from anywhere in Madurai",
      "2 Nights stay in family/couple friendly hill-view hotel or resort",
      "Daily fresh breakfast buffet",
      "All sightseeing transfers with experienced mountain driver",
      "Driver batta, toll fees, parking, and hill permit charges",
      "24/7 Trip assistance",
    ],
    exclusions: [
      "Boating, cycling, and park entry tickets at Kodai Lake",
      "Lunch, dinner, and personal shopping expenses",
      "Room heater charges (if requested directly at hotel)",
    ],
    stayStyle: "Comfortable Hill-View Mountain Resort",
    transportIncluded: "Private AC Cab (Sedan / Ertiga / Innova Crysta)",
    itinerary: [
      {
        day: 1,
        title: "Madurai to Kodaikanal Ascent",
        location: "Kodaikanal",
        description: "Morning pickup from your home, hotel, or station in Madurai. Climb the ghat road with stops at Dum Dum Rock and Silver Cascade. Check in to your hotel, freshen up, and enjoy evening pedal boating at the lake.",
        activities: ["Ghat road hill drive", "Silver Cascade falls viewpoint", "Evening Kodai Lake boat ride"],
      },
      {
        day: 2,
        title: "Full Day Scenic Mountain Tour",
        location: "Kodaikanal",
        description: "Explore Upper Lake View, Pillar Rocks, Green Valley View, Pine Forest, and Moir Point. Visit Bryant Park and walk through the picturesque Coaker's Walk cliff trail.",
        activities: ["Pillar rocks viewpoint", "Pine forest photography", "Coaker's Walk panoramic stroll"],
      },
      {
        day: 3,
        title: "Leisure, Homemade Chocolates & Return",
        location: "Madurai",
        description: "Visit Kurinji Andavar Temple and Chettiar Park. Shop for Kodai's famous homemade chocolates, natural oils, and spices before descending back to Madurai.",
        activities: ["Temple visit", "Homemade chocolate shopping", "Comfortable return drop to Madurai"],
      },
    ],
    relatedTourSlugs: ["munnar-alleppey-kerala-paradise", "ooty-coonoor-nilgiri-heritage", "vagamon-kolukkumalai-adventure-safari"],
  },

  // 2. Heritage & Temple Tours
  {
    id: "tour-rameswaram-dhanushkodi",
    slug: "rameswaram-dhanushkodi-sacred-island",
    title: "Rameswaram & Dhanushkodi Island Darshan",
    subtitle: "Spiritual sanctity, holy theertham baths, and the legendary ghost town border",
    category: "heritage-temple",
    categoryLabel: "Heritage & Temple",
    duration: "1 Night / 2 Days",
    daysCount: 2,
    nightsCount: 1,
    startingHub: "Madurai",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    theme: "Pilgrimage",
    badge: "Sacred Circuit",
    isFeatured: true,
    overview: "A deeply revered spiritual pilgrimage from Madurai to the holy island of Rameswaram. Drive across the magnificent Pamban Sea Bridge, take holy baths at the 22 sacred Theerthams inside Ramanathaswamy Temple, pray at Agnitheertham, and travel to Dhanushkodi where the Indian Ocean meets the Bay of Bengal.",
    highlights: [
      "Crossing the iconic Pamban Bridge over the turquoise ocean",
      "Smooth darshan at Sri Ramanathaswamy Temple (Longest temple corridor)",
      "Holy Theertham bath coordination assistance",
      "Drive to the tip of India: Dhanushkodi & Ram Setu viewpoint",
      "Visit Dr. APJ Abdul Kalam National Memorial",
    ],
    inclusions: [
      "Private AC Cab dedicated throughout from Madurai to Rameswaram and back",
      "1 Night stay in clean, verified AC hotel near temple premises",
      "Complimentary breakfast at hotel",
      "Experienced local driver familiar with temple timings and ritual flow",
      "All tolls, parking fees, and driver allowances",
    ],
    exclusions: [
      "Special temple entry / puja tickets (payable directly at temple counter)",
      "Lunch, dinner, and personal pooja materials",
      "Custom auto/jeep charges inside restricted zones if applicable",
    ],
    stayStyle: "Comfortable AC Pilgrim Hotel / 3-Star Stay",
    transportIncluded: "Private AC Cab (Sedan / Ertiga / Innova)",
    itinerary: [
      {
        day: 1,
        title: "Madurai to Rameswaram via Pamban Bridge",
        location: "Rameswaram",
        description: "Early morning pickup from Madurai. Drive across the landmark Pamban Sea Bridge. Check in to your hotel, take a holy dip in Agnitheertham, perform the 22 holy Theertham baths, and have darshan of Lord Ramanathaswamy and Goddess Parvathavardhini.",
        activities: ["Pamban Bridge photo stop", "22 sacred theertham bath", "Temple darshan & corridor walk"],
      },
      {
        day: 2,
        title: "Dhanushkodi, Kalam Memorial & Return",
        location: "Dhanushkodi / Madurai",
        description: "Early morning drive to Dhanushkodi, the submerged ghost town, and Arichal Munai (border point). Visit the Ramar Padam (Rama's Footprints) and the APJ Abdul Kalam Memorial before returning to Madurai.",
        activities: ["Arichal Munai ocean point", "Ruins of Dhanushkodi church", "Dr. APJ Abdul Kalam memorial"],
      },
    ],
    relatedTourSlugs: ["madurai-kanyakumari-rameswaram-grand-circuit", "munnar-alleppey-kerala-paradise"],
  },

  {
    id: "tour-madurai-kanyakumari-rameswaram",
    slug: "madurai-kanyakumari-rameswaram-grand-circuit",
    title: "Madurai - Rameswaram - Kanyakumari Grand Circuit",
    subtitle: "The ultimate South Tamil Nadu spiritual and coastal odyssey",
    category: "heritage-temple",
    categoryLabel: "Heritage & Temple",
    duration: "3 Nights / 4 Days",
    daysCount: 4,
    nightsCount: 3,
    startingHub: "Madurai",
    image: "https://images.unsplash.com/photo-1629853381665-2741982b6834?auto=format&fit=crop&w=1000&q=80",
    theme: "Pilgrimage",
    badge: "Grand Circuit",
    overview: "A comprehensive 4-day temple and ocean journey covering the crown jewels of Tamil Nadu: the architectural splendor of Madurai Meenakshi Temple, the sanctity of Rameswaram and Dhanushkodi, and the confluence of three oceans at Kanyakumari with Vivekananda Rock Memorial.",
    highlights: [
      "Madurai Meenakshi Amman Temple & Thirumalai Nayakkar Palace",
      "Rameswaram Ramanathaswamy Temple & Dhanushkodi ocean tip",
      "Kanyakumari Sunset, Sunrise & Vivekananda Rock Memorial ferry",
      "Suchindram Thanumalayan Temple unique Trinity darshan",
    ],
    inclusions: [
      "Private AC vehicle from Madurai pickup to drop",
      "3 Nights hotel accommodation (1N Madurai, 1N Rameswaram, 1N Kanyakumari)",
      "Daily breakfast at hotels",
      "All fuel, tolls, parking, and driver charges",
    ],
    exclusions: ["Monument entry fees, ferry tickets, and temple special darshan tickets", "Meals other than breakfast"],
    stayStyle: "Handpicked 3-Star AC Hotels throughout",
    transportIncluded: "Private AC Cab (Sedan / Ertiga / Innova)",
    itinerary: [
      { day: 1, title: "Madurai Meenakshi Darshan & Heritage", location: "Madurai", description: "Pickup and check-in. Visit Meenakshi Temple, Nayakkar Palace, and Gandhi Museum.", activities: ["Temple darshan", "Palace architecture walk"] },
      { day: 2, title: "Madurai to Rameswaram Pilgrimage", location: "Rameswaram", description: "Drive via Pamban Bridge. Complete holy baths and temple darshan.", activities: ["Pamban view", "Theertham baths"] },
      { day: 3, title: "Dhanushkodi to Kanyakumari Sunset", location: "Kanyakumari", description: "Visit Dhanushkodi, then drive to Kanyakumari for evening sunset over the ocean.", activities: ["Dhanushkodi border", "Triveni Sangam sunset"] },
      { day: 4, title: "Sunrise, Vivekananda Rock & Departure", location: "Kanyakumari / Madurai", description: "Witness the golden sunrise. Ferry to Vivekananda Rock & Thiruvalluvar Statue, Suchindram Temple, and return drop.", activities: ["Sunrise watch", "Vivekananda rock ferry"] },
    ],
    relatedTourSlugs: ["rameswaram-dhanushkodi-sacred-island", "munnar-alleppey-kerala-paradise"],
  },

  // 3. Adventure & Trekking Tours (NEWLY ADDED AS REQUESTED)
  {
    id: "tour-vagamon-kolukkumalai",
    slug: "vagamon-kolukkumalai-adventure-safari",
    title: "Vagamon & Kolukkumalai Adventure Safari",
    subtitle: "High-altitude 4x4 jeep safari, sunrise cloud bed, and glass bridge thrills",
    category: "adventure-trekking",
    categoryLabel: "Adventure & Trekking",
    duration: "2 Nights / 3 Days",
    daysCount: 3,
    nightsCount: 2,
    startingHub: "Madurai",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80",
    theme: "Adventure",
    badge: "Adventure Thrill",
    isFeatured: true,
    overview: "Crafted for adrenaline seekers, friend groups, and young couples. Experience the world's highest tea plantation at Kolukkumalai via a thrilling off-road 4x4 jeep ascent to watch the sunrise above cloud beds, walk India's longest glass bridge at Vagamon, and camp under the stars.",
    highlights: [
      "Rugged 4x4 off-road jeep safari to Kolukkumalai sunrise viewpoint",
      "Standing above the ocean of clouds (7,130 ft altitude)",
      "Walking on the famous Vagamon cantilever glass bridge",
      "Pine forest hike and Kurisumala viewpoint trek",
      "Cozy mountain campfire night with barbecue under starry skies",
    ],
    inclusions: [
      "Round-trip private cab from Madurai to base camp and sightseeing",
      "Off-road 4x4 Jeep Safari for Kolukkumalai sunrise trip",
      "2 Nights stay at adventure resort / luxury camping tents in Vagamon",
      "Daily breakfast + 1 campfire dinner",
      "All driver allowances, tolls, and off-road coordination",
    ],
    exclusions: [
      "Glass bridge and adventure park activity tickets (zipline, off-road ATV)",
      "Personal gear and specialized trekking equipment",
    ],
    stayStyle: "Adventure Luxury Glamping / Boutique Hill Chalet",
    transportIncluded: "Private AC Cab + 4x4 Mountain Jeep",
    itinerary: [
      {
        day: 1,
        title: "Madurai to Vagamon Pine Valleys",
        location: "Vagamon",
        description: "Morning pickup from Madurai. Ascend the lush scenic curves into Vagamon. Visit Pine Forest, Marmala Waterfalls, and the Vagamon Glass Bridge. Evening campfire at the campsite.",
        activities: ["Ghat ascent", "Glass bridge thrill walk", "Pine forest walk", "Campfire"],
      },
      {
        day: 2,
        title: "Kolukkumalai 4x4 Off-Road Jeep Safari",
        location: "Kolukkumalai",
        description: "Early 4:00 AM off-road jeep drive up the rugged terrain of Kolukkumalai. Witness an unforgettable sunrise over the sea of clouds at 7,130 feet. Visit the organic tea factory.",
        activities: ["Extreme off-road 4x4 climb", "Sunrise cloud bed spectacle", "World's highest tea tasting"],
      },
      {
        day: 3,
        title: "Trekking & Descent to Madurai",
        location: "Madurai",
        description: "Short morning hike across Vagamon rolling meadows and green meadows. Delicious lunch and comfortable descent back to Madurai by evening.",
        activities: ["Meadow nature trek", "Scenic viewpoints", "Return to Madurai"],
      },
    ],
    relatedTourSlugs: ["munnar-alleppey-kerala-paradise", "kodaikanal-misty-hills-escape"],
  },

  // 4. Island Tours
  {
    id: "tour-andaman-island",
    slug: "andaman-island-paradise-havelock",
    title: "Andaman Island Paradise & Havelock Scuba",
    subtitle: "Turquoise lagoons, Radhanagar beach sunset, and vibrant coral reefs",
    category: "island",
    categoryLabel: "Island Holidays",
    duration: "4 Nights / 5 Days",
    daysCount: 5,
    nightsCount: 4,
    startingHub: "Port Blair (Flights from Chennai/Madurai)",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    theme: "Honeymoon",
    badge: "Exotic Escape",
    isFeatured: true,
    overview: "Escape to India's most breathtaking tropical paradise. Sail across the blue Bay of Bengal on high-speed catamarans to Havelock Island, walk barefoot on Radhanagar Beach (voted Asia's best beach), explore historic Cellular Jail, and snorkel among live coral reefs at Elephant Beach.",
    highlights: [
      "High-speed luxury Makruzz / Nautika ferry between Port Blair & Havelock",
      "Sunset on the white powdery sands of Radhanagar Beach",
      "Scuba diving / snorkeling session at Elephant Beach reef",
      "Cellular Jail light & sound evening show",
      "Handpicked beachfront luxury resort stays",
    ],
    inclusions: [
      "All airport transfers and private sightseeing cabs on both islands",
      "Confirmed round-trip luxury ferry tickets (Port Blair - Havelock - Port Blair)",
      "4 Nights accommodation (2N Port Blair, 2N Havelock Island)",
      "Daily buffet breakfast at resorts",
      "Boat transfers to Elephant Beach with complimentary snorkeling",
      "All entry permits and island harbor assistance",
    ],
    exclusions: ["Flight tickets to Port Blair (can be booked at best fares)", "Scuba diving and water sports upgrades"],
    stayStyle: "Premium Beachfront Resorts with Private Balconies",
    transportIncluded: "Private AC Island Cabs + Luxury Speed Catamaran",
    itinerary: [
      { day: 1, title: "Arrival in Port Blair & Cellular Jail", location: "Port Blair", description: "Arrive at Port Blair. Check in and visit Cellular Jail, concluding with the moving Light & Sound Show.", activities: ["Airport welcome", "Cellular Jail visit", "Light & Sound show"] },
      { day: 2, title: "Cruise to Havelock & Radhanagar Beach", location: "Havelock Island", description: "Board high-speed cruise to Havelock Island. Check in to beach resort. Spend evening at Asia's best beach: Radhanagar.", activities: ["Catamaran cruise", "Radhanagar beach sunset"] },
      { day: 3, title: "Elephant Beach Corals & Water Sports", location: "Havelock Island", description: "Speed boat to Elephant Beach for water activities, sea walk, scuba diving, and coral viewing.", activities: ["Speed boat ride", "Snorkeling & corals", "Beach relaxation"] },
      { day: 4, title: "Havelock to Port Blair & Souvenirs", location: "Port Blair", description: "Cruise back to Port Blair. Visit Sagarika Emporium for pearl jewelry and shell crafts.", activities: ["Return cruise", "Pearl shopping"] },
      { day: 5, title: "Airport Departure with Tropical Memories", location: "Port Blair", description: "Breakfast and private drop at Port Blair airport for flight home.", activities: ["Airport transfer"] },
    ],
    relatedTourSlugs: ["bali-luxury-villas-tropical-escape", "munnar-alleppey-kerala-paradise"],
  },

  // 5. North India Tours
  {
    id: "tour-kashmir-paradise",
    slug: "kashmir-paradise-gulmarg-pahalgam",
    title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
    subtitle: "Heaven on Earth — snow-clad peaks, Dal Lake Shikara & Pine Valleys",
    category: "north-india",
    categoryLabel: "North India",
    duration: "5 Nights / 6 Days",
    daysCount: 6,
    nightsCount: 5,
    startingHub: "Srinagar (Flights from Madurai/Chennai)",
    image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=1000&q=80",
    theme: "Family",
    badge: "Himalayan Crown",
    isFeatured: true,
    overview: "Experience the timeless magic of the Kashmir Valley. Glide across Dal Lake in a traditional wooden Shikara at golden hour, ride the world's second-highest cable car (Gulmarg Gondola) to snow peaks, and stroll through the river valleys and saffron fields of Pahalgam.",
    highlights: [
      "1 Night stay in handcrafted luxury Dal Lake Houseboat",
      "Sunset Shikara ride across floating markets & lotus gardens",
      "Gulmarg Gondola ride to Apharwat Peak snow line",
      "Pahalgam Betaab Valley & Aru Valley excursion",
      "Mughal Gardens of Srinagar (Shalimar & Nishat Bagh)",
    ],
    inclusions: [
      "Private sanitized AC vehicle for all transfers and sightseeing throughout Kashmir",
      "4 Nights in premium 4-Star hotels (Srinagar & Pahalgam) + 1 Night in Deluxe Houseboat",
      "Daily breakfast and dinner (MAP plan)",
      "1 Hour complimentary Shikara ride on Dal Lake",
      "Toll taxes, parking, driver allowances, and union vehicle coordination",
    ],
    exclusions: ["Air tickets to Srinagar", "Gondola ticket phase 1/2 fees (assisted advance booking)", "Pony rides in Pahalgam"],
    stayStyle: "Premium Heated Hotel Resorts + Handcrafted Carved Cedar Houseboat",
    transportIncluded: "Private AC Cab with local experienced mountain driver",
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Dal Lake Shikara", location: "Srinagar", description: "Arrive at Srinagar airport. Check into your houseboat on Dal Lake. Enjoy evening Shikara ride.", activities: ["Houseboat check-in", "Sunset Shikara ride"] },
      { day: 2, title: "Srinagar to Gulmarg Snow Meadows", location: "Gulmarg", description: "Drive to the meadow of flowers: Gulmarg. Experience the Gondola cable car ride to snow.", activities: ["Gondola cable car", "Snow activities"] },
      { day: 3, title: "Gulmarg to Pahalgam Valley of Shepherds", location: "Pahalgam", description: "Scenic drive through saffron fields and willow cricket bat factories to Pahalgam along Lidder River.", activities: ["Saffron fields stop", "Lidder river walk"] },
      { day: 4, title: "Pahalgam Valley Exploration", location: "Pahalgam", description: "Visit Betaab Valley, Chandanwari, and Aru Valley. Enjoy mountain photography and pine forest trails.", activities: ["Betaab valley walk", "Pine forest picnic"] },
      { day: 5, title: "Pahalgam to Srinagar Mughal Gardens", location: "Srinagar", description: "Return to Srinagar. Tour Nishat Bagh, Shalimar Bagh, and Shankaracharya Temple.", activities: ["Mughal garden visit", "Local dry fruit & pashmina shopping"] },
      { day: 6, title: "Departure Flight from Srinagar", location: "Srinagar", description: "Breakfast and private transfer to Srinagar airport for departure.", activities: ["Airport drop"] },
    ],
    relatedTourSlugs: ["munnar-alleppey-kerala-paradise", "andaman-island-paradise-havelock"],
  },

  // 6. International Tours
  {
    id: "tour-bali-luxury",
    slug: "bali-luxury-villas-tropical-escape",
    title: "Bali Luxury Villas & Tropical Escape",
    subtitle: "Ubud rice terraces, private pool villas, cliffside temples & ocean sunsets",
    category: "international",
    categoryLabel: "International",
    duration: "5 Nights / 6 Days",
    daysCount: 6,
    nightsCount: 5,
    startingHub: "Denpasar, Bali (Flights via KL/Singapore)",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    theme: "Luxury",
    badge: "Passport Favorite",
    isFeatured: true,
    overview: "Bali is the ultimate international island holiday. Split your stay between the cultural rainforest heart of Ubud with rolling rice terraces, and the chic beaches of Seminyak with your own private pool villa. Visit cliffside Uluwatu Temple, watch the sunset at Tanah Lot, and swing over jungle ravines.",
    highlights: [
      "Private luxury pool villa stay in Seminyak / Kuta",
      "Tegalalang Rice Terraces & famous Bali Jungle Swing",
      "Cliffside Uluwatu Temple with traditional Kecak fire dance",
      "Tanah Lot sunset temple perched on an ocean rock",
      "Nusa Penida Island day tour to Kelingking T-Rex cliff (optional)",
    ],
    inclusions: [
      "All private airport transfers and full day sightseeing in private AC vehicle",
      "3 Nights stay in premium 4-Star resort in Ubud",
      "2 Nights stay in luxury Private Pool Villa in Seminyak",
      "Daily buffet breakfast + 1 floating breakfast experience in villa",
      "English speaking private driver-cum-guide throughout Bali",
      "Indonesian SIM card with data",
    ],
    exclusions: ["International flights from India to Bali", "Visa on arrival fees (~$35 USD)", "Personal shopping and spa upgrades"],
    stayStyle: "Boutique Rainforest Resort + Private Pool Villa",
    transportIncluded: "Private AC Vehicle with Dedicated English-Speaking Chauffeur",
    itinerary: [
      { day: 1, title: "Welcome to the Island of Gods", location: "Ubud", description: "Warm airport welcome in Denpasar. Transfer to your Ubud rainforest sanctuary. Evening at leisure.", activities: ["Airport meet & greet", "Villa check-in"] },
      { day: 2, title: "Ubud Culture, Waterfall & Jungle Swing", location: "Ubud", description: "Visit Tegenungan Waterfall, Sacred Monkey Forest, and experience the iconic Bali jungle swing.", activities: ["Waterfall trek", "Jungle swing experience", "Monkey forest"] },
      { day: 3, title: "Kintamani Volcano & Rice Terraces", location: "Kintamani / Ubud", description: "Marvel at Mount Batur active volcano viewpoints, coffee plantations, and Tegalalang terraces.", activities: ["Volcano viewpoint", "Luwak coffee tasting", "Rice terrace walk"] },
      { day: 4, title: "Transfer to Seminyak Private Pool Villa", location: "Seminyak", description: "Check out of Ubud and move to your coastal private pool villa. Sunset visit to Tanah Lot temple.", activities: ["Private pool villa check-in", "Tanah Lot ocean sunset"] },
      { day: 5, title: "Uluwatu Clifftop Temple & Fire Dance", location: "Uluwatu", description: "Explore the dramatic cliffs of Uluwatu 70 meters above the Indian Ocean. Witness the Kecak dance.", activities: ["Clifftop ocean walk", "Kecak fire dance"] },
      { day: 6, title: "Floating Breakfast & Departure", location: "Denpasar", description: "Enjoy a signature floating breakfast in your private pool. Transfer to Denpasar airport.", activities: ["Floating breakfast", "Airport transfer"] },
    ],
    relatedTourSlugs: ["andaman-island-paradise-havelock", "munnar-alleppey-kerala-paradise"],
  },
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
  
  // Find matching related slugs or fallback to same category
  const matches = tourPackages.filter(
    (t) => t.slug !== currentSlug && (current.relatedTourSlugs.includes(t.slug) || t.category === current.category)
  );
  return matches.slice(0, 3);
}
