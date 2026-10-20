export interface BlogFact {
  label: string;
  value: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Weekend Getaways" | "Temple Pilgrimage" | "Kerala Circuits" | "Adventure & Safari" | "Travel Planning";
  publishDate: string;
  modifiedDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  heroImage: string;
  excerpt: string;
  quickAnswer: string; // Tailored for AEO (AI answer engines & Google AI Overviews)
  keyFacts: BlogFact[]; // Tailored for GEO (Entity facts & knowledge extraction)
  contentHtml: string;
  faqs: BlogFaq[]; // Structured FAQ schema for search snippets
  relatedTourSlugs: string[];
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-weekend-getaways-from-madurai-you-should-try-this-year",
    title: "Top 5 Weekend Getaways from Madurai You Should Try This Year",
    metaTitle: "Top 5 Weekend Getaways from Madurai (2026 Guide) — Gateway Holidays",
    metaDescription: "Discover the best 2-3 day weekend getaways from Madurai including Kodaikanal, Rameswaram, Munnar, Vagamon, and Courtallam with road distances, route tips, and cab booking.",
    category: "Weekend Getaways",
    publishDate: "October 18, 2026",
    modifiedDate: "October 20, 2026",
    readingTime: "5 min read",
    author: {
      name: "Murali",
      role: "Founder & Lead Travel Planner, Gateway Holidays",
    },
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Living in or arriving at Madurai puts you within easy reach of misty hill stations, sacred coastal bridges, and emerald tea valleys. Here are the top 5 weekend road trip circuits.",
    quickAnswer: "The top 5 weekend getaways from Madurai are: 1) Kodaikanal (120 km, 3.5 hrs) for misty pine hills; 2) Rameswaram & Dhanushkodi (172 km, 3 hrs) for the sacred Pamban Bridge; 3) Munnar (155 km, 4.5 hrs) for sprawling tea estates; 4) Vagamon (175 km, 4.5 hrs) for peaceful green meadows; and 5) Courtallam (160 km, 3.5 hrs) for rejuvenating medicinal waterfalls. All destinations are easily reachable by private AC cab.",
    keyFacts: [
      { label: "Best Overall Weekend Pick", value: "Kodaikanal (120 km / ~3.5 hours drive)" },
      { label: "Best Spiritual & Coastal Route", value: "Rameswaram & Dhanushkodi (172 km / ~3 hours drive)" },
      { label: "Best Hill Retreat", value: "Munnar (155 km / ~4.5 hours drive via Theni)" },
      { label: "Hidden Offbeat Meadow", value: "Vagamon (175 km / ~4.5 hours drive)" },
      { label: "Rejuvenating Waterfall Hub", value: "Courtallam (160 km / ~3.5 hours drive)" },
      { label: "Recommended Transport", value: "Private AC Cab with dedicated chauffeur for ghat hairpin roads" },
    ],
    faqs: [
      {
        question: "What is the closest hill station to Madurai?",
        answer: "Kodaikanal is the closest major hill station to Madurai, located approximately 120 km away (about 3.5 hours drive via the Palani Hills ghat road)."
      },
      {
        question: "Can I do a one-day trip to Rameswaram from Madurai?",
        answer: "Yes, Rameswaram is 172 km from Madurai (3 hours drive via NH49). You can depart early morning, visit the Ramanathaswamy Temple, Pamban Bridge, and Dhanushkodi, and return to Madurai by late evening, though a 2-day trip is much more relaxing."
      },
      {
        question: "Which road from Madurai to Munnar is best for cars?",
        answer: "The route via Madurai — Usilampatti — Theni — Bodi — Bodimettu Ghat — Munnar is the smoothest and most scenic route for private cabs, taking roughly 4.5 hours."
      }
    ],
    relatedTourSlugs: ["kodaikanal", "rameshwaram", "munnar", "vagamon"],
    keywords: ["weekend getaways from madurai", "places to visit near madurai", "madurai to kodaikanal cab", "madurai to rameswaram road trip", "tour operator in madurai"],
    contentHtml: `
      <h2>Escape the City: South India's Most Picturesque Escapes at Your Doorstep</h2>
      <p>Madurai's central geographic position in Tamil Nadu makes it one of the premier launching pads in South India for holiday road trips. Within a comfortable 3 to 5 hour drive in a private AC cab, you can trade the ancient temple towers for high-altitude pine forests, sacred ocean crossings, or rolling cardamom valleys.</p>

      <h3>1. Kodaikanal — The Princess of Hill Stations (120 km)</h3>
      <p>Perched at 2,133 meters in the Palani Hills, Kodaikanal remains Madurai's most beloved weekend escape. The drive winds through scenic ghats offering spectacular panoramic viewpoints overlooking the plains below.</p>
      <ul>
        <li><strong>Must-Visit Spots:</strong> Kodai Lake boating, Coaker's Walk misty promenade, Pine Forest, Pillar Rocks, and Mannavanur Sheep Farm.</li>
        <li><strong>Ideal Duration:</strong> 2 Days / 1 Night or 3 Days / 2 Nights.</li>
        <li><strong>Insider Tip:</strong> Visit Coaker's Walk before 9:00 AM to witness the sun burn through the morning valley clouds without crowd rush.</li>
      </ul>

      <h3>2. Rameswaram & Dhanushkodi — Spirituality Meets Sacred Seas (172 km)</h3>
      <p>Connected to mainland India by the historic Pamban Sea Bridge, Rameswaram offers an unforgettable blend of deep spirituality and surreal coastal landscapes.</p>
      <ul>
        <li><strong>Must-Visit Spots:</strong> Sri Ramanathaswamy Temple (22 holy theertham baths & longest temple corridor in the world), Agni Theertham, Dr. APJ Abdul Kalam Memorial, and the ghost town of Dhanushkodi (the tip where Indian Ocean meets Bay of Bengal).</li>
        <li><strong>Ideal Duration:</strong> 2 Days / 1 Night.</li>
        <li><strong>Insider Tip:</strong> Take the 4x4 Jeep ride to Arichal Munai at Dhanushkodi during late afternoon for breathtaking dual-colored water views.</li>
      </ul>

      <h3>3. Munnar — Emerald Tea Carpet in the Western Ghats (155 km)</h3>
      <p>Crossing the Tamil Nadu border into Kerala via the Bodimettu Ghat brings you into Munnar. Towering mountain ridges draped in manicured tea gardens and cool mountain breezes offer instant rejuvenation.</p>
      <ul>
        <li><strong>Must-Visit Spots:</strong> Mattupetty Dam, Eravikulam National Park (Nilgiri Tahr habitat), Kundala Lake, and Tea Museum.</li>
        <li><strong>Ideal Duration:</strong> 3 Days / 2 Nights.</li>
        <li><strong>Insider Tip:</strong> Pair your Munnar weekend with an early morning Kolukkumalai sunrise jeep safari for cloud-top views.</li>
      </ul>

      <h3>4. Vagamon — Untamed Pine Meadows & Cool Silence (175 km)</h3>
      <p>If you prefer fewer crowds and open green velvet meadows, Vagamon in Idukki is South India's best-kept hill secret. Famous for its pine valley, suicide point, and thrilling paragliding breeze, it is an idyllic restorative weekend retreat.</p>

      <h3>5. Courtallam — The Medicinal Spa of South India (160 km)</h3>
      <p>Located in Tenkasi district near the Western Ghats, Courtallam is renowned for its therapeutic waterfalls that flow through dense herbal forests. A weekend dip in Main Falls, Five Falls, or Old Courtallam refreshes body and mind.</p>
    `
  },
  {
    slug: "madurai-to-rameswaram-dhanushkodi-complete-travel-guide",
    title: "Madurai to Rameswaram & Dhanushkodi: The Ultimate Travel Guide (2026)",
    metaTitle: "Madurai to Rameswaram & Dhanushkodi Travel Guide (2026) | Gateway Holidays",
    metaDescription: "Plan your trip from Madurai to Rameswaram and Dhanushkodi. Complete guide to Pamban Bridge, temple timings, 22 theerthams, road conditions, and private cab booking.",
    category: "Temple Pilgrimage",
    publishDate: "October 19, 2026",
    modifiedDate: "October 20, 2026",
    readingTime: "7 min read",
    author: {
      name: "Murali",
      role: "Founder & Lead Travel Planner, Gateway Holidays",
    },
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Everything you need to know about the Madurai to Rameswaram sacred corridor — Ramanathaswamy Temple rituals, Pamban bridge viewpoints, and Dhanushkodi tips.",
    quickAnswer: "The distance from Madurai to Rameswaram is 172 km via NH49 (approx. 3 to 3.5 hours drive). The route is a smooth 4-lane national highway. The ideal pilgrimage itinerary is 2 Days / 1 Night, allowing ample time for the 22 holy Theertham baths, Ramanathaswamy Temple spathika lingam darshan (5:00 AM), Pamban Bridge photography, and Dhanushkodi / Arichal Munai border exploration.",
    keyFacts: [
      { label: "Distance", value: "172 km via NH49 (4-lane highway)" },
      { label: "Driving Time", value: "3 hours 15 minutes by AC cab" },
      { label: "Ramanathaswamy Temple Timings", value: "5:00 AM – 1:00 PM & 3:00 PM – 9:00 PM" },
      { label: "Spathika Lingam Darshan", value: "Daily 5:00 AM – 6:00 AM" },
      { label: "Dhanushkodi Entry Timings", value: "6:00 AM – 5:00 PM (Strict safety curfew)" },
      { label: "Best Time to Visit", value: "October to March (Pleasant coastal weather)" },
    ],
    faqs: [
      {
        question: "How long does it take to complete the 22 Theertham baths in Rameswaram?",
        answer: "The ritual bath at Agni Theertham sea followed by the 22 inside-temple wells typically takes 45 to 90 minutes depending on festival crowd levels. Wearing clean traditional attire is mandatory."
      },
      {
        question: "Can private vehicles go up to Dhanushkodi Arichal Munai?",
        answer: "Yes, since the completion of the paved national highway extension, private cabs can drive directly to the roundabout at Arichal Munai where the waters meet, between 6:00 AM and 5:00 PM."
      },
      {
        question: "Is it better to stay in Madurai or Rameswaram overnight?",
        answer: "An overnight stay in Rameswaram is highly recommended so you can witness the peaceful evening temple aarti, avoid travel fatigue, and attend the early morning Spathika Lingam Pooja at 5:00 AM."
      }
    ],
    relatedTourSlugs: ["rameshwaram", "tiruchendur-rameshwaram", "madurai"],
    keywords: ["madurai to rameswaram", "dhanushkodi travel guide", "pamban bridge visit", "rameswaram temple theertham guide", "madurai to rameswaram tour package"],
    contentHtml: `
      <h2>The Sacred Island Corridor: Where Devotion Meets the Sea</h2>
      <p>The journey from Madurai to Rameswaram is among the most revered pilgrimage routes in Hinduism and one of South India's most scenic coastal drives. Traveling via NH49 takes you from the bustling cultural heart of Madurai across the Gulf of Mannar via the iconic Pamban Bridge onto Pamban Island.</p>

      <h3>Step-by-Step Spiritual Itinerary</h3>
      <ol>
        <li><strong>Agni Theertham Purification:</strong> Begin with a symbolic dip in the calm, sacred waters of the Bay of Bengal right outside the East Gopuram.</li>
        <li><strong>The 22 Holy Wells (Theerthams):</strong> Walk through the temple courtyards where temple assistants pour water from each sacred well, starting with Mahalakshmi Theertham and ending with Kodi Theertham. Each well possesses a distinct mineral taste and spiritual significance.</li>
        <li><strong>1,212 Pillar Corridor:</strong> Marvel at the 1,000-pillar outer corridor, recognized worldwide for its architectural grandeur, ceiling fresco murals, and towering monolithic stone pillars.</li>
        <li><strong>Spathika Lingam Puja:</strong> Attend the early morning 5:00 AM darshan of the transparent crystal Shiva Lingam before the regular morning pujas begin.</li>
      </ol>

      <h3>Visiting Dhanushkodi & Arichal Munai</h3>
      <p>Just 18 km beyond Rameswaram lies Dhanushkodi, the submerged ghost town destroyed in the 1964 cyclone. Today, a pristine smooth coastal road flanked by the Indian Ocean on the right and Bay of Bengal on the left leads you to Arichal Munai — the mythical starting point of Ram Setu (Adam's Bridge).</p>

      <h3>Why Hire a Private Cab for Rameswaram?</h3>
      <p>Having a dedicated chauffeur allows you to stop at Pamban Bridge for photo opportunities, explore the Dr. APJ Abdul Kalam Memorial at your own pace, and seamlessly transfer between temple darshans and Dhanushkodi without negotiating with local transit in the coastal heat.</p>
    `
  },
  {
    slug: "kerala-tour-package-munnar-alleppey-houseboat-guide",
    title: "Kerala Tour Planning: Munnar Hills & Alleppey Houseboat Complete Circuit",
    metaTitle: "Munnar to Alleppey Houseboat Circuit Guide | Gateway Holidays",
    metaDescription: "Everything you need to plan a Kerala tour covering Munnar tea gardens and Alleppey backwater houseboats. Itineraries, cabin types, best season, and cab advice.",
    category: "Kerala Circuits",
    publishDate: "October 17, 2026",
    modifiedDate: "October 20, 2026",
    readingTime: "6 min read",
    author: {
      name: "Murali",
      role: "Founder & Lead Travel Planner, Gateway Holidays",
    },
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    excerpt: "How to balance misty Western Ghats heights with tranquil palm-fringed backwater cruises for the ultimate rejuvenating vacation.",
    quickAnswer: "The classic Munnar & Alleppey circuit requires a minimum of 4 Days / 3 Nights (2 nights in Munnar for tea plantations and waterfalls, and 1 night on an Alleppey private houseboat). The drive from Munnar down to Alleppey takes approximately 4.5 hours through rubber plantations and backwater canals. Complete private AC cab transport is essential for seamless hill-to-coast transition.",
    keyFacts: [
      { label: "Optimal Duration", value: "4 Days / 3 Nights or 5 Days / 4 Nights" },
      { label: "Munnar to Alleppey Distance", value: "170 km (~4.5 hours drive)" },
      { label: "Houseboat Check-in / Check-out", value: "12:00 PM Check-in | 9:00 AM Next Day Check-out" },
      { label: "Houseboat Inclusions", value: "All meals (Kerala traditional lunch, dinner, breakfast, tea/snacks)" },
      { label: "Best Travel Months", value: "September to March (Post-monsoon greenery & pleasant chill)" },
    ],
    faqs: [
      {
        question: "Can Gateway Holidays arrange pick up directly at Kochi Airport or Madurai?",
        answer: "Yes, our private chauffeur can receive you directly at Cochin International Airport (COK), Madurai Airport/Railway station, or any doorstep in Tamil Nadu and Kerala."
      },
      {
        question: "Are Alleppey houseboats private or shared?",
        answer: "At Gateway Holidays, we exclusively book private deluxe and premium houseboats with dedicated bedrooms, private captain, and chef on board for your family or honeymoon couple."
      }
    ],
    relatedTourSlugs: ["munnar", "alappuzha-houseboat-backwater-tour", "alappuzha-boathouse-varkala", "thekkady"],
    keywords: ["munnar alleppey tour package", "kerala houseboat booking", "munnar to alleppey cab", "kerala holiday packages from madurai"],
    contentHtml: `
      <h2>The Classic Kerala Contrast: Mountain Mist to Emerald Waters</h2>
      <p>Few travel pairings in the world rival the sensory transition of Kerala: waking up amidst crisp 14°C mountain mist in Munnar surrounded by endless emerald tea terraces, and relaxing 24 hours later on a wooden Kettuvallam houseboat gliding silently across palm-fringed backwaters in Alleppey.</p>

      <h3>Munnar Highlights</h3>
      <ul>
        <li><strong>Eravikulam National Park:</strong> Spot the endangered Nilgiri Tahr against mountain backdrops.</li>
        <li><strong>Tea Estate Walks & Factory Tour:</strong> Learn the artisanal process of tea picking and orthodox processing.</li>
        <li><strong>Mattupetty & Kundala Lake:</strong> Speedboating and serene photography spots.</li>
      </ul>

      <h3>Alleppey Houseboat Secrets</h3>
      <p>A backwater cruise is not merely a ride; it is a moving luxury sanctuary. As your boat meanders past rustic paddy fields, village churches, and coir makers, your personal chef prepares hot Karimeen Pollichathu (pearl spot fish wrapped in banana leaf) and warm Kerala parottas.</p>
    `
  },
  {
    slug: "kolukkumalai-sunrise-jeep-safari-vagamon-adventure-guide",
    title: "Kolukkumalai Sunrise Jeep Safari & Vagamon: The Thrill-Seeker's Guide",
    metaTitle: "Kolukkumalai Sunrise Safari & Vagamon Adventure Guide | Gateway Holidays",
    metaDescription: "Complete guide to Kolukkumalai sunrise 4x4 jeep safari (highest organic tea estate in the world at 7,900 ft) and Vagamon paragliding. Timings, route, and gear.",
    category: "Adventure & Safari",
    publishDate: "October 16, 2026",
    modifiedDate: "October 20, 2026",
    readingTime: "5 min read",
    author: {
      name: "Murali",
      role: "Founder & Lead Travel Planner, Gateway Holidays",
    },
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Conquer rugged boulder trails in a 4x4 jeep at 4:30 AM to witness the sun rise over an infinite sea of clouds at 7,900 feet.",
    quickAnswer: "Kolukkumalai is the highest organic tea estate in the world at 7,900 ft above sea level, located on the Tamil Nadu-Kerala border near Suryanelli. The only way to reach the sunrise peak is via an authorized 4x4 rugged off-road Jeep ride (1.5 hours uphill over boulder terrain starting at 4:30 AM). Combining Kolukkumalai with Vagamon pine valleys and paragliding makes the ultimate 3-day adventure trip.",
    keyFacts: [
      { label: "Altitude", value: "7,900 Feet (2,400 meters) above sea level" },
      { label: "Jeep Starting Point", value: "Suryanelli Base Camp (~25 km from Munnar town)" },
      { label: "Departure Timing", value: "4:30 AM to catch the 6:00 AM sunrise" },
      { label: "Terrain Type", value: "Extreme rocky off-road boulder trail (4x4 required)" },
      { label: "Temperature at Summit", value: "8°C to 14°C at dawn (Warm jackets essential)" },
    ],
    faqs: [
      {
        question: "Can regular cars drive up to Kolukkumalai Peak?",
        answer: "No. Ordinary sedans, hatchbacks, and standard tourist cabs cannot navigate the terrain. Only heavy-duty 4x4 off-road jeeps with experienced local mountain drivers are permitted."
      },
      {
        question: "Is the Kolukkumalai Jeep ride suitable for elderly travelers?",
        answer: "The 1.5-hour off-road section has significant bumps and rocky jolts. While thrilling for adventure lovers and youth, travelers with severe back pain or pregnant women should consult before booking."
      }
    ],
    relatedTourSlugs: ["vagamon-adventure-tour", "munnar-trekking-tour", "kanthalur-adventure-tour"],
    keywords: ["kolukkumalai sunrise safari", "kolukkumalai jeep safari booking", "vagamon adventure tour", "munnar adventure package"],
    contentHtml: `
      <h2>Touching the Sky: Sunrise at 7,900 Feet</h2>
      <p>Long before dawn, while the valleys of Munnar sleep in darkness, high-ground 4x4 jeeps ignite their engines at Suryanelli base camp. What follows is a heart-pounding 14-kilometer climb through pitch-black rocky switchbacks, splashing through mountain streams until you reach the summit of Kolukkumalai.</p>

      <h3>The Sunrise Experience</h3>
      <p>As the first light emerges, you stand literally above the clouds. An infinite ocean of white mist blankets the valley below, pierced only by neighboring jagged peaks of the Western Ghats. In minutes, the horizon bursts into radiant golden-pink hues.</p>

      <h3>Vagamon: Paragliding & Pine Valley</h3>
      <p>After conquering Kolukkumalai, head southwest toward Vagamon. Renowned for its steady thermal winds, Vagamon is South India's premier tandem paragliding location. Glide over undulating green ridges with certified instructors for an unforgettable perspective of God's Own Country.</p>
    `
  },
  {
    slug: "south-india-temple-tour-circuit-madurai-thanjavur-rameswaram",
    title: "South India Temple Circuit: Madurai, Thanjavur & Rameswaram Complete Heritage Guide",
    metaTitle: "South India Temple Tour: Madurai, Thanjavur, Rameswaram (2026) | Gateway Holidays",
    metaDescription: "A comprehensive guide to South India's greatest living Chola and Pandya temple architectural circuits. Darshan rules, dress codes, routes, and custom private cab planning.",
    category: "Temple Pilgrimage",
    publishDate: "October 15, 2026",
    modifiedDate: "October 20, 2026",
    readingTime: "8 min read",
    author: {
      name: "Murali",
      role: "Founder & Lead Travel Planner, Gateway Holidays",
    },
    heroImage: "https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Explore the towering colorful gopurams of Meenakshi Amman, the UNESCO 1,000-year granite miracle of Thanjavur Brihadeeswarar, and the sacred corridor of Rameswaram.",
    quickAnswer: "The premier South India Temple Circuit covers Madurai (Meenakshi Amman Temple), Thanjavur (Brihadeeswarar Big Temple - UNESCO), Tiruchirappalli (Srirangam Ranganathaswamy Temple), and Rameswaram (Ramanathaswamy Temple). A complete circuit requires 4 to 5 Days by private AC vehicle, ensuring comfortable transfers and timely temple darshan without midday temple closures.",
    keyFacts: [
      { label: "Circuit Circuit Route", value: "Madurai → Thanjavur → Tiruchirappalli → Rameswaram" },
      { label: "Total Distance", value: "~650 km over 4-5 days" },
      { label: "UNESCO World Heritage Sites Included", value: "Great Living Chola Temples (Brihadeeswarar)" },
      { label: "Traditional Dress Code", value: "Dhoti/Kurta for Men; Saree/Salwar with Dupatta for Women" },
      { label: "Temple Afternoon Break", value: "Most temples close between 12:30 PM and 4:00 PM" },
    ],
    faqs: [
      {
        question: "Are mobile phones allowed inside Meenakshi Amman Temple Madurai?",
        answer: "No. Mobile phones, smart watches, and electronic devices are strictly prohibited inside Madurai Meenakshi Temple by court order. Secure token lockers are available at all entrance towers."
      },
      {
        question: "What is the best sequence to visit the temples to avoid midday closures?",
        answer: "Our private drivers schedule your route so you do morning darshans between 6:00 AM - 11:30 AM, travel between cities during the 1:00 PM - 3:30 PM closure hours, and arrive for evening aartis between 4:30 PM - 8:30 PM."
      }
    ],
    relatedTourSlugs: ["madurai-meenakshi-amman-temple-tour", "thanjavur-big-temple-tour", "rameshwaram", "tiruchendur-rameshwaram"],
    keywords: ["south india temple tour package", "madurai thanjavur rameswaram tour", "brihadeeswarar temple guide", "meenakshi temple darshan tips", "temple tour operator in madurai"],
    contentHtml: `
      <h2>The Living Stone Wonders of Tamil Nadu</h2>
      <p>Tamil Nadu is affectionately known as the Land of Temples. Across centuries, the Pandya, Chola, Chera, and Nayak dynasties constructed monolithic stone testaments to art, astronomy, and devotion that remain vibrant, living centers of daily worship today.</p>

      <h3>1. Madurai Meenakshi Sundareswarar Temple</h3>
      <p>The beating heart of Madurai for over 2,500 years. Featuring 14 towering gopurams encrusted with thousands of intricately painted mythological statues, the sacred Golden Lotus tank, and the Hall of a Thousand Pillars with musical stone columns.</p>

      <h3>2. Thanjavur Brihadeeswarar Temple (UNESCO)</h3>
      <p>Built by Raja Raja Chola I in 1010 CE, this monolithic granite marvel features a 66-meter high sanctum tower (Vimana) capped by a single 80-tonne granite dome carved without using any binding mortar.</p>

      <h3>3. Srirangam Sri Ranganathaswamy Temple</h3>
      <p>Located on an island in the Kaveri River near Trichy, Srirangam is the largest functioning Hindu temple complex in the world, spanning 156 acres with 21 grand gopurams.</p>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
}
