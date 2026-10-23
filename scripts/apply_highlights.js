const fs = require('fs');
const path = require('path');

const HIGHLIGHTS_MAP = {
  "kanyakumari-thiruvananthapuram": [
    "Vivekananda Rock Memorial & Dhyana Mandapam",
    "133-Foot Thiruvalluvar Statue & Confluence of 3 Oceans",
    "Sree Padmanabhaswamy Temple Dravidian Architecture",
    "Kovalam Crescent Beach & Sunset Lighthouse",
    "Napier Museum & Traditional Kerala Heritage"
  ],
  "goa-island-beach-tour": [
    "Grand Island Speedboat Cruise & Dolphin Spotting",
    "Snorkelling over Vibrant Coral Reefs with Guides",
    "Secret Coves & Soft Sands of Butterfly Beach",
    "Palolem Beach Crescent Shoreline & Sunset Cafes",
    "UNESCO World Heritage Churches of Old Goa"
  ],
  "lakshadweep-tour": [
    "Agatti Island Turquoise Lagoon & White Coral Sand",
    "Scuba Diving & Snorkelling with Marine Turtles",
    "Day Excursion to Uninhabited Bangaram & Thinnakara Islands",
    "Glass-Bottom Boat Safari & Lagoon Kayaking",
    "Beach Bonfire Dinner under Starlit Island Skies"
  ],
  "sri-lanka-tour": [
    "Sigiriya Ancient Lion Rock Citadel & Water Gardens (UNESCO)",
    "Sacred Temple of the Tooth Relic in Royal Kandy",
    "Peradeniya Royal Botanical Orchid Gardens",
    "Misty Tea Plantations & Waterfalls of Nuwara Eliya",
    "Whale & Dolphin Watching Ocean Cruise in Mirissa"
  ],
  "singapore-tour": [
    "Gardens by the Bay & Supertree Grove Light Show",
    "Universal Studios Singapore at Sentosa Island",
    "Marina Bay Sands SkyPark Observation Deck",
    "Night Safari — World's First Nocturnal Wildlife Experience",
    "Iconic Merlion Park & Historic Singapore River Cruise"
  ],
  "malaysia-tour": [
    "Petronas Twin Towers & Skybridge Panoramic View",
    "Batu Caves 272-Step Giant Limestone Shrine",
    "Cameron Highlands Verdant BOH Tea Plantations",
    "Georgetown Penang UNESCO Heritage Street Art & Food",
    "Putrajaya Futuristic Islamic Architecture & Waterfront"
  ],
  "vietnam-tour": [
    "Ha Long Bay Overnight Luxury Cruise among Karst Islands",
    "Hoi An Ancient Lantern Town by Night (UNESCO)",
    "Hanoi Old Quarter Street Life & French Architecture",
    "Mekong Delta Wooden Boat Safari & Floating Markets",
    "Cu Chi Historic Underground Tunnel Complex"
  ],
  "bali-tour": [
    "Tanah Lot & Uluwatu Dramatic Ocean Cliff Temples",
    "Tegallalang Layered Rice Terraces in Ubud",
    "Mount Batur Active Volcano Sunrise Panorama",
    "Ubud Sacred Monkey Forest Sanctuary & Artisan Markets",
    "Kecak Sunset Fire Dance Performance at Cliff Top"
  ],
  "munnar-trekking-tour": [
    "Anamudi Peak Trekking in Shola Forests — Highest in South India",
    "Meesapulimala High-Altitude Trekking Above the Clouds",
    "Kolukkumalai Sunrise at World's Highest Organic Tea Estate",
    "Lush Tea Estate Nature Trails & Bird Watching",
    "Chokramudi Mountain Ridge Adventure Trek"
  ],
  "varkala-munroe-island-tour": [
    "Munroe Island Narrow Backwater Canoe Expedition",
    "Traditional Coir Spinning & Authentic Village Life",
    "Varkala Red Laterite Cliff Promenade & Ocean Sunset",
    "Holy Papanasam Beach Cleansing Waters",
    "Janardhana Swamy 2,000-Year-Old Coastal Temple"
  ],
  "kanakapura-adventure-park-tour": [
    "Natural Granite Boulder Rock Climbing & Rappelling",
    "Cauvery River White-Water Rafting & Kayaking",
    "Zip-lining Across Scenic Lake & Aerial Rope Courses",
    "Riverside Jungle Tent Camping with Evening Campfire",
    "Coracle Boat Rides & Outdoor Team Challenges"
  ],
  "thailand-tour": [
    "Wat Pho Reclining Buddha & Wat Arun Temple of Dawn",
    "Bangkok Grand Palace & Sacred Emerald Buddha",
    "Phi Phi Islands Speedboat Excursion & Maya Bay",
    "Ethical Elephant Sanctuary Interaction & Bathing",
    "Krabi Railay Beach Dramatic Limestone Sea Cliffs"
  ],
  "mysore-adventure-tour": [
    "Nagarhole National Park Open Jeep Wildlife Safari",
    "Shivanasamudra Twin Waterfalls Thunderous Cascades",
    "Kabini River Boat Safari for Asian Elephants & Tigers",
    "Chamundi Hill Trail Nature Trek & Panoramic City View",
    "Ranganathittu Bird Sanctuary Boating among Migratory Birds"
  ],
  "kashmir": [
    "Romantic Shikara Boat Ride on Serene Dal Lake",
    "Gulmarg Gondola — World's Highest Cable Car Ride",
    "Pahalgam Valley of Shepherds & Scenic Betaab Valley",
    "Sonamarg Meadow of Gold & Thajiwas Glacier Sledging",
    "Royal Mughal Gardens of Nishat Bagh & Shalimar Bagh"
  ],
  "madurai-meenakshi-amman-temple-tour": [
    "Historic Meenakshi Amman Temple & 14 Sculptured Gopurams",
    "Aayiram Kaal Mandapam (1,000-Pillar Hall) & Musical Pillars",
    "Thirumalai Nayakkar Palace Grand Stucco Architecture",
    "Alagar Kovil Hillside Temple & Pazhamudircholai Shrine",
    "Madurai Heritage Food Walk & Famous Jigarthanda"
  ],
  "thanjavur-big-temple-tour": [
    "Brihadeeswarar Temple 66-Metre Tall Granitic Vimana (UNESCO)",
    "Massive 25-Tonne Monolithic Nandi Bull Carved from Single Stone",
    "1,000-Year-Old Chola Fresco Paintings & Inscription Galleries",
    "Thanjavur Royal Palace, Durbar Hall & Art Gallery",
    "Saraswathi Mahal Ancient Palm-Leaf Manuscript Library"
  ],
  "velankanni-shrine-tour": [
    "Basilica of Our Lady of Good Health Gothic Cathedral",
    "Miraculous Our Lady's Tank & Sacred Holy Path Walking",
    "Velankanni Golden Sand Coastline & Sunrise Views",
    "Daily Rosary Procession & Multi-Lingual Holy Masses",
    "Historic Coastal Pilgrimage Circuit of Central Tamil Nadu"
  ],
  "varkala-jatayu-earths-center-tour": [
    "World's Largest Bird Sculpture at Jatayu Nature Park",
    "Swiss Cable Car (Ropeway) Scenic Ride to Hill Summit",
    "Digital Audio-Visual Ramayana Museum & 6D Theatre",
    "Varkala Cliff Beach Ocean Sunset & Bohemian Cafes",
    "Papanasam Beach Holy Springs & Janardhana Swamy Temple"
  ],
  "vagamon-adventure-tour": [
    "Tandem Paragliding Over Vagamon's Rolling Green Meadows",
    "Zip-lining Across Misty Valleys & Burma Bridge Walk",
    "Pine Valley Forest Canopy Stroll & Nature Photography",
    "Vagamon Lake Pedal Boating Surrounded by Tea Gardens",
    "Off-Road Jeep Safari to Kurisumala Viewpoint"
  ],
  "tiruchendur-rameshwaram": [
    "Tiruchendur Murugan Sea-Shore Temple Coastal Darshan",
    "Rameshwaram Ramanathaswamy 1,200-Metre Sculpted Corridors",
    "Sacred Bath in 22 Temple Theerthams & Agni Theertham",
    "Dhanushkodi Land's End & Ghost Town Ram Setu Point",
    "Historic Pamban Sea Bridge Iconic Train Ride View"
  ],
  "palani-murugan-temple-tour": [
    "Dhandayuthapani Swamy Hilltop Sanctum Navapashanam Idol",
    "Scenic Winch Train & Modern Ropeway Ascent",
    "World-Famous Palani Panchamirtham Sacred Prasadam",
    "Thiru Avinankudi Ancient Foothills Temple",
    "Idumban Hill Shrine & Panoramic Western Ghats Vistas"
  ],
  "wonderla-adventure-park-tour": [
    "50+ World-Class Land & Water Theme Park Rides",
    "Massive Heated Wave Pool & High-Energy Rain Disco",
    "Recoil — India's First Reverse Looping Roller Coaster",
    "Dedicated Kids Adventure Zone & Water Play Kingdom",
    "Musical Laser Fountain Show & Multi-Cuisine Food Courts"
  ],
  "ayodhya-tour": [
    "Grand Shri Ram Janmabhoomi Mandir Splendid Darshan",
    "Hanuman Garhi Ancient Fort Temple Protective Blessings",
    "Evening Grand Maha Aarti on the Sacred Saryu River Ghats",
    "Kanak Bhawan Royal Palace Temple Golden Murties",
    "Ram Ki Paidi Waterfront Promenade & Heritage Light Show"
  ],
  "black-thunder-water-theme-park-tour": [
    "Wave Pool with Nilgiri Hills Backdrop & Real Surf Waves",
    "Thrilling Multi-Lane Speed Slides & Black Hole Coaster",
    "Relaxing Lazy River Float Through Lush Tropics",
    "Wild River Rafting & High-Velocity Water Chutes",
    "Kids Water Play Land & Rain Dance Pavilion"
  ],
  "kanthalur-adventure-tour": [
    "Orchard Strolls Through Apple, Orange & Strawberry Farms",
    "Kanthalur Sandalwood Forest Off-Road Jeep Safari",
    "Muniyara Megalithic Prehistoric Dolmen Stone Chambers",
    "Thoovanam Waterfalls Guided Deep Jungle Trek",
    "Chinnar Wildlife Sanctuary Watchtower Panoramic Safari"
  ],
  "padmanabhaswamy-temple-tour": [
    "Anantha Padmanabhaswamy 18-Foot Reclining Vishnu Darshan",
    "Magnificent 100-Foot 7-Tier Dravidian Gopuram",
    "Kuthira Malika (Mansion of Horses) Teakwood Palace",
    "Kovalam Beach Lighthouse & Ocean Panorama",
    "Napier Museum & Sri Chitra Art Gallery Treasures"
  ],
  "tirupathi-balaji-temple-tour": [
    "Lord Sri Venkateswara Swamy Tirumala Sanctum Darshan",
    "Seven Sacred Seshachalam Hills Scenic Mountain Drive",
    "Authentic Tirupati Laddu Prasadam Experience",
    "Kapila Theertham Sacred Waterfall Shiva Temple",
    "Sri Padmavathi Ammavari Temple at Tiruchanur"
  ],
  "kullu-manali": [
    "Rohtang Pass (13,050 Ft) Snow Adventures & Himalayan Views",
    "Solang Valley Paragliding, Zorbing & Cable Car",
    "Hadimba Devi Ancient Pagoda Temple in Cedar Woods",
    "Vashisht Natural Sulphur Hot Springs & River Walks",
    "Thrilling White-Water River Rafting in Kullu Valley"
  ],
  "golden-triangle-tour-delhi-agra-jaipur": [
    "Monument of Eternal Love: Taj Mahal at Golden Sunrise",
    "Amber Fort Hilltop Palace & Sheesh Mahal in Jaipur",
    "Massive Red Fort, Qutub Minar & Humayun's Tomb in Delhi",
    "Hawa Mahal (Palace of Winds) & Pink City Royal Heritage",
    "Agra Fort UNESCO World Heritage Emperor Chambers"
  ],
  "bangalore": [
    "Tudor-Style Bangalore Palace Royal Heritage Walk",
    "Lalbagh Botanical Garden Glass House & Century-Old Trees",
    "Granite Neo-Dravidian Vidhana Soudha & Cubbon Park",
    "Grand ISKCON Temple Darshan atop Hare Krishna Hill",
    "Vibrant MG Road, Brigade Road & Commercial Street Shopping"
  ],
  "varkala": [
    "Majestic Red Laterite Cliff Promenade Overlooking the Sea",
    "Papanasam Beach Holy Cleansing Waters & Sunset Point",
    "2,000-Year-Old Janardhana Swamy Coastal Temple",
    "Anjengo Fort & 130-Foot British Colonial Lighthouse",
    "Cliffside Candlelight Seafood Cafes & Ayurvedic Wellness"
  ],
  "athirapally": [
    "Athirapally Waterfalls — 'The Niagara of India' (80-Foot Plunge)",
    "Vazhachal Dense Forest Cascades & River Walks",
    "Charpa Waterfalls Picturesque Roadside Forest Cascade",
    "Scenic Sholayar Rainforest Ghat Road Drive",
    "Thumboormuzhy Dam, Butterfly Garden & Hanging Bridge"
  ],
  "coorg": [
    "Abbey Falls Cascading Amidst Dense Spice Plantations",
    "Raja's Seat Panoramic Western Ghats Sunset Viewpoint",
    "Dubare Elephant Camp River Crossing & Mahout Encounters",
    "Namdroling Golden Temple Tibetan Buddhist Monastery",
    "Aromatic Arabica Coffee & Black Pepper Estate Walks"
  ],
  "gokarna": [
    "Sacred Mahabaleshwar Temple Atmalinga Pilgrimage",
    "Famous Om-Shaped Coastline & Golden Sands of Om Beach",
    "Scenic Cliff Trail Hike Connecting Half Moon & Paradise Beaches",
    "Kudle Beach Laid-Back Atmosphere & Oceanfront Cafes",
    "Breathtaking Coastal Sunset Over the Arabian Sea"
  ],
  "ramoji-film-city": [
    "Guinness World Record Largest Film Studio Tour",
    "Grand Themed Sets: European Streets, Railway Stations & Forts",
    "Action-Packed Live Stunt Shows & Movie Magic Demonstrations",
    "Filmi Duniya Dark Ride Through Global Wonders",
    "Eureka Grand Evening Carnival Parade & Light Spectacular"
  ],
  "mysore": [
    "Illuminated Grand Mysore Palace with 100,000 Golden Lights",
    "Chamundeshwari Hilltop Temple & Mahishasura Statue",
    "Brindavan Gardens Musical Dancing Fountain Evening Show",
    "St. Philomena's Soaring Neo-Gothic Roman Cathedral",
    "Heritage Devaraja Market & Famous Mysore Pak Tasting"
  ],
  "hyderabad": [
    "Historic 16th-Century Charminar & Laad Bazaar Pearl Shopping",
    "Magnificent Golconda Fort Acoustic Whispers & Sound Show",
    "Qutb Shahi Royal Tombs Grand Persian-Deccan Domes",
    "Hussain Sagar Lake Monolithic Buddha Statue Boat Cruise",
    "Authentic World-Renowned Hyderabadi Dum Biryani Feast"
  ],
  "thekkady": [
    "Periyar Tiger Reserve Lake Boat Safari for Wild Elephants",
    "Guided Organic Spice Plantation Walk (Cardamom, Clove, Cinnamon)",
    "Thrilling Kalaripayattu Ancient Martial Arts Live Performance",
    "Traditional Kathakali Classical Masked Dance Show",
    "Bamboo Rafting & Guided Wildlife Trekking in Periyar"
  ],
  "chikmagalur": [
    "Mullayanagiri — Highest Mountain Summit in Karnataka",
    "Baba Budangiri Mystic Shrine & Manikyadhara Waterfalls",
    "Aromatic Coffee Plantation Walking Tours & Fresh Brew Tasting",
    "Hebbe Falls Twin Stream Jungle 4x4 Jeep Safari",
    "Z Point Kemmangundi Breathtaking Sunset Ridge Trail"
  ],
  "vagamon": [
    "Endless Rolling Velvet Green Vagamon Pine Forest Trails",
    "Misty Vagamon Pine Valley Tree Canopy Stroll",
    "Kurisumala Hill Spiritual Hermitage & Dairy Farm",
    "Vagamon Lake Pedal Boating Surrounded by Green Slopes",
    "Thangal Para Giant Spherical Sacred Rock Formation"
  ],
  "pondicherry": [
    "French Quarter (White Town) Colonial Heritage Walking Tour",
    "Auroville Universal City of Peace & Golden Matrimandir",
    "Sri Aurobindo Ashram Peaceful Spiritual Meditation",
    "Promenade Beach Seaside Boulevard & French War Memorial",
    "Paradise Beach Isolated Island Catamaran Boat Ride"
  ],
  "thiruvananthapuram": [
    "Sree Padmanabhaswamy World's Richest Royal Temple",
    "Kovalam Crescent Beaches & Sunset Lighthouse Panorama",
    "Napier Museum Indo-Saracenic Art & Bronze Galleries",
    "Poovar Island Golden Sand Island & Mangrove Boat Cruise",
    "Chalai Heritage Spice Bazaars & Traditional Travancore Food"
  ],
  "kochi": [
    "Iconic Chinese Fishing Nets Along Fort Kochi Shoreline",
    "Mattancherry Palace (Dutch Palace) Ramayana Murals",
    "Historic Paradesi Jewish Synagogue & Antique Jew Town",
    "St. Francis Church — Oldest European Church Built in India",
    "Live Kathakali Masked Dance & Classical Kerala Art Night"
  ],
  "rameshwaram": [
    "Ramanathaswamy Temple 1,200-Metre Grand Sculpted Corridor",
    "Holy Dip in 22 Sacred Theerthams & Agni Theertham Sea Shore",
    "Dhanushkodi Land's End, Ghost Town & Ram Setu Point",
    "Engineering Feat: Pamban Sea Bridge Iconic Rail Crossing",
    "Dr. A.P.J. Abdul Kalam National Memorial & Museum"
  ],
  "courtallam": [
    "Healing Herbal Waters of Main Falls & Peraruvi Cascade",
    "Five Falls (Aintharuvi) Splitting into 5 Natural Forest Streams",
    "Shenbaga Devi Forest Waterfall Hike & Temple",
    "Ancient Thirukutralanathar Temple at the Waterfall Base",
    "Old Courtallam (Pazhaya Courtallam) Natural Rock Pool Bath"
  ],
  "kodaikanal": [
    "Star-Shaped Kodaikanal Lake Pedal Boating & Lakeside Cycling",
    "Coaker's Walk Panoramic Misty Mountain Valley Trail",
    "Pillar Rocks 400-Foot Vertical Granite Natural Towers",
    "Bryant Park Colourful English Gardens & Greenhouses",
    "Silver Cascade & Bear Shola Pine Forest Waterfalls"
  ],
  "thanjavur": [
    "Brihadeeswarar 'Big Temple' 1,000-Year-Old Chola Wonder (UNESCO)",
    "Massive 25-Tonne Monolithic Nandi Bull Carved from Single Rock",
    "Thanjavur Royal Maratha Palace, Durbar Hall & Art Gallery",
    "Saraswathi Mahal Ancient Palm-Leaf Manuscript Library",
    "Traditional Tanjore 22K Gold Foil Painting & Bronze Art Workshop"
  ],
  "wayanad": [
    "Banasura Sagar Dam — Largest Earthen Dam in India",
    "Prehistoric Neolithic Rock Carvings at Edakkal Caves",
    "Soochipara Waterfalls Scenic Forest Trail & Natural Plunge Pool",
    "Chembra Peak Trekking Trail to Natural Heart-Shaped Lake",
    "Wayanad Wildlife Sanctuary Jeep Safari for Elephants & Deer"
  ],
  "kanyakumari": [
    "Breathtaking Sunrise & Sunset over the Confluence of 3 Oceans",
    "Vivekananda Rock Memorial Mid-Sea Meditation Hall",
    "Majestic 133-Foot Thiruvalluvar Statue Sea Ferry Cruise",
    "Bhagavathy Amman 3,000-Year-Old Coastal Seashore Temple",
    "Gandhi Memorial & Triveni Sangam Sacred Meeting Shore"
  ],
  "madurai": [
    "Meenakshi Sundareswarar Temple Grand 14 Sculptured Gopurams",
    "Thirumalai Nayakkar Palace Grand Stucco Pillar Hall & Light Show",
    "Vandiyur Mariamman Teppakulam Giant Temple Tank",
    "Gandhi Memorial Freedom Struggle Museum & Historic Library",
    "World-Famous Madurai Jigarthanda & Street Food Experience"
  ],
  "yercaud": [
    "Scenic Emerald Yercaud Lake Boating in the Shevaroy Hills",
    "Lady's Seat & Gent's Seat Panoramic Ghat Sunset Overlooks",
    "Killiyur Falls 300-Foot Forest Cascade Trek",
    "Shevaroyan Hilltop Cave Temple & Tribal Deity Shrine",
    "Anna Park, Orchidarium & Rose Garden Horticultural Walk"
  ],
  "ooty": [
    "Historic Nilgiri Mountain Toy Train Steam Engine Ride (UNESCO)",
    "Government Botanical Gardens 20-Million-Year Fossil Tree",
    "Scenic Ooty Lake Boating, Cycling & Lakeside Walk",
    "Doddabetta Peak — Highest Mountain Summit in the Nilgiris",
    "Pykara Waterfalls & Speedboat Lake Cruise through Pine Woods"
  ],
  "munnar": [
    "Eravikulam National Park & Endangered Nilgiri Tahr Sanctuary",
    "Mattupetty Dam Speedboating & Echo Point Resonance",
    "Tata Tea Museum & Fresh Orthodox Tea Tasting Factory Walk",
    "Kundala Lake Pedal Boating & Neela Kurinji Flower Valleys",
    "Top Station Breathtaking Western Ghats Cloud Sea Panorama"
  ],
  "andaman-nicobar-islands-tour": [
    "Radhanagar Beach at Havelock — Voted Asia's Best Beach",
    "Cellular Jail National Memorial & Moving Light & Sound Show",
    "Elephant Beach Coral Reef Snorkelling, Sea Walk & Jet Skiing",
    "Inter-Island Catamaran Cruise Across the Andaman Sea",
    "Natural Coral Bridge & Laxmanpur Sunset Beach on Neil Island"
  ],
  "alappuzha-houseboat-backwater-tour": [
    "Traditional Kerala Luxury Houseboat Private Overnight Cruise",
    "Vembanad Lake Serene Backwater Lagoon Excursion",
    "Freshly Prepared Kerala Karimeen Pollichathu Onboard Lunch",
    "Alappuzha Beach Sunset, 150-Year-Old Pier & Sea Lighthouse",
    "Narrow Village Canals, Paddy Fields & Coir Making Demonstration"
  ],
  "alappuzha-boathouse-varkala": [
    "Exclusive Alleppey Houseboat Backwater Cruise with Traditional Meals",
    "Varkala Red Sandstone Cliff Promenade & Papanasam Beach Stay",
    "Scenic Backwater Village Canoe Safari through Shallow Canals",
    "Janardhana Swamy 2,000-Year-Old Ancient Coastal Shrine",
    "Cliffside Ocean Sunset Dining & Rejuvenating Ayurvedic Massage"
  ]
};

const toursFilePath = path.join(__dirname, '..', 'data', 'tours.ts');
const rawCode = fs.readFileSync(toursFilePath, 'utf-8');

const regex = /(export const tourPackages: TourPackage\[\] = )(\[[\s\S]*\]);([\s\S]*)/;
const match = rawCode.match(regex);

if (!match) {
  console.error('Failed to match tourPackages array in data/tours.ts');
  process.exit(1);
}

const prefix = match[1];
const jsonStr = match[2];
const suffix = match[3];

let packages;
try {
  packages = JSON.parse(jsonStr);
} catch (e) {
  console.error('Failed to parse tourPackages JSON:', e);
  process.exit(1);
}

console.log(`Parsed ${packages.length} tour packages.`);

let updatedCount = 0;
packages.forEach(pkg => {
  if (HIGHLIGHTS_MAP[pkg.slug]) {
    pkg.highlights = HIGHLIGHTS_MAP[pkg.slug];
    updatedCount++;
  } else {
    console.warn(`No mapping found for slug: ${pkg.slug}`);
  }
});

console.log(`Updated highlights for ${updatedCount} / ${packages.length} tour packages.`);

const newContent = rawCode.slice(0, match.index) + prefix + JSON.stringify(packages, null, 2) + ';' + suffix;

fs.writeFileSync(toursFilePath, newContent, 'utf-8');
console.log('Successfully wrote updated data/tours.ts');
