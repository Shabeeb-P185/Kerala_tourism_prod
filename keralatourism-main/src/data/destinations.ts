export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'beach' | 'hillstation' | 'heritage' | 'wildlife';
  location: string;
  district: string;
  coordinates: { lat: number; lng: number };
  images: string[];
  bestSeason: string[];
  entryFee: number;
  timings: string;
  activities: string[];
  nearbyAttractions: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const destinations: Destination[] = [
  // Beaches
  {
    id: 'kovalam-beach',
    name: 'Kovalam Beach',
    description: 'Famous crescent-shaped beach with lighthouse views',
    longDescription: 'Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing.',
    category: 'beach',
    location: 'Kovalam',
    district: 'Thiruvananthapuram',
    coordinates: { lat: 8.4004, lng: 76.9787 },
    images: ['/destination-beach.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Swimming', 'Sunbathing', 'Surfing', 'Ayurvedic Massage', 'Lighthouse Visit'],
    nearbyAttractions: ['Vizhinjam Mosque', 'Halcyon Castle', 'Vellayani Lake'],
    rating: 4.5,
    reviewCount: 2340,
    featured: true
  },
  {
    id: 'varkala-beach',
    name: 'Varkala Beach',
    description: 'Unique cliff beach with mineral springs',
    longDescription: 'Varkala beach is unique in the sense that it is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea. These cliffs have been declared as geological monuments by the Geological Survey of India.',
    category: 'beach',
    location: 'Varkala',
    district: 'Thiruvananthapuram',
    coordinates: { lat: 8.7379, lng: 76.7163 },
    images: ['/destination-beach.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Cliff Walking', 'Swimming', 'Yoga', 'Paragliding', 'Temple Visit'],
    nearbyAttractions: ['Janardhana Swamy Temple', 'Sivagiri Mutt', 'Kappil Lake'],
    rating: 4.6,
    reviewCount: 1890,
    featured: true
  },
  {
    id: 'marari-beach',
    name: 'Marari Beach',
    description: 'Secluded beach with traditional fishing villages',
    longDescription: 'Marari Beach is a hidden gem known for its serene environment and traditional fishing community. The beach offers a glimpse into the authentic coastal life of Kerala with its coconut groves and peaceful atmosphere.',
    category: 'beach',
    location: 'Mararikulam',
    district: 'Alappuzha',
    coordinates: { lat: 9.5912, lng: 76.2867 },
    images: ['/destination-beach.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Beach Walking', 'Fishing Village Tour', 'Coir Making', 'Bird Watching'],
    nearbyAttractions: ['Alleppey Backwaters', 'St. Andrews Basilica', 'Pathiramanal Island'],
    rating: 4.4,
    reviewCount: 876,
    featured: false
  },
  {
    id: 'cherai-beach',
    name: 'Cherai Beach',
    description: 'Beach with Chinese fishing nets and dolphin sightings',
    longDescription: 'Cherai Beach stretches over 15 km and is known for its golden sand, shallow waters, and the unique sight of Chinese fishing nets. Dolphins are often spotted in the waters, making it a delightful experience for visitors.',
    category: 'beach',
    location: 'Cherai',
    district: 'Ernakulam',
    coordinates: { lat: 10.1390, lng: 76.1780 },
    images: ['/destination-beach.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Swimming', 'Dolphin Watching', 'Beach Sports', 'Backwater Cruise'],
    nearbyAttractions: ['Pallipuram Fort', 'Vypeen Island', 'Cochin'],
    rating: 4.3,
    reviewCount: 1245,
    featured: false
  },

  // Hill Stations
  {
    id: 'munnar',
    name: 'Munnar',
    description: 'Sprawling tea estates and misty mountains',
    longDescription: 'Munnar is a town in the Western Ghats mountain range, known for its tea plantations, scenic beauty, and cool climate. The region is dotted with colonial bungalows and exotic flora including the Neelakurinji, which blooms once in 12 years.',
    category: 'hillstation',
    location: 'Munnar',
    district: 'Idukki',
    coordinates: { lat: 10.0889, lng: 77.0595 },
    images: ['/destination-hillstation.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Tea Plantation Tour', 'Trekking', 'Wildlife Safari', 'Camping', 'Boating'],
    nearbyAttractions: ['Eravikulam National Park', 'Mattupetty Dam', 'Echo Point', 'Top Station'],
    rating: 4.7,
    reviewCount: 5670,
    featured: true
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    description: 'Ancient caves and pristine forests',
    longDescription: 'Wayanad is a rural district in Kerala known for its spice plantations, wildlife sanctuaries, and ancient caves. The Edakkal Caves feature neolithic-era petroglyphs, while the Chembra Peak offers challenging treks with a heart-shaped lake.',
    category: 'hillstation',
    location: 'Wayanad',
    district: 'Wayanad',
    coordinates: { lat: 11.6854, lng: 76.1320 },
    images: ['/destination-hillstation.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Cave Exploration', 'Trekking', 'Wildlife Safari', 'Bamboo Rafting', 'Zip-lining'],
    nearbyAttractions: ['Edakkal Caves', 'Chembra Peak', 'Banasura Sagar Dam', 'Soochipara Falls'],
    rating: 4.6,
    reviewCount: 3420,
    featured: true
  },
  {
    id: 'thekkady',
    name: 'Thekkady',
    description: 'Periyar Wildlife Sanctuary and spice gardens',
    longDescription: 'Thekkady is famous for the Periyar National Park, a tiger and elephant reserve. The region is also known for its spice plantations producing cardamom, pepper, cinnamon, and cloves.',
    category: 'hillstation',
    location: 'Thekkady',
    district: 'Idukki',
    coordinates: { lat: 9.6000, lng: 77.1667 },
    images: ['/destination-hillstation.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    entryFee: 50,
    timings: '6:00 AM - 6:00 PM',
    activities: ['Boat Safari', 'Jungle Patrol', 'Spice Garden Tour', 'Elephant Ride', 'Tribal Village Visit'],
    nearbyAttractions: ['Periyar Lake', 'Mangala Devi Temple', 'Pandikuzhi', 'Chellarkovil'],
    rating: 4.5,
    reviewCount: 2890,
    featured: false
  },
  {
    id: 'vagamon',
    name: 'Vagamon',
    description: 'Rolling meadows and pine forests',
    longDescription: 'Vagamon is a hill station known for its meadows, pine forests, and tea gardens. It offers various adventure activities and is famous for paragliding with stunning views of the Western Ghats.',
    category: 'hillstation',
    location: 'Vagamon',
    district: 'Kottayam',
    coordinates: { lat: 9.6869, lng: 76.9053 },
    images: ['/destination-hillstation.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Paragliding', 'Trekking', 'Rock Climbing', 'Chain Tree Visit', 'Pine Forest Walk'],
    nearbyAttractions: ['Kurisumala', 'Thangal Para', 'Vagamon Meadows', 'Marmala Waterfall'],
    rating: 4.4,
    reviewCount: 1567,
    featured: false
  },

  // Heritage Sites
  {
    id: 'fort-kochi',
    name: 'Fort Kochi',
    description: 'Colonial heritage with Portuguese, Dutch and British influences',
    longDescription: 'Fort Kochi is a historic neighborhood with a unique blend of Portuguese, Dutch, and British colonial architecture. The iconic Chinese fishing nets, St. Francis Church, and Mattancherry Palace showcase centuries of cultural exchange.',
    category: 'heritage',
    location: 'Kochi',
    district: 'Ernakulam',
    coordinates: { lat: 9.9639, lng: 76.2426 },
    images: ['/destination-heritage.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 0,
    timings: 'Open 24 hours',
    activities: ['Heritage Walk', 'Chinese Nets Photography', 'Church Visit', 'Kathakali Show', 'Spice Market Tour'],
    nearbyAttractions: ['Jewish Synagogue', 'Dutch Palace', 'St. Francis Church', 'Jew Town'],
    rating: 4.6,
    reviewCount: 4230,
    featured: true
  },
  {
    id: 'padmanabhapuram-palace',
    name: 'Padmanabhapuram Palace',
    description: 'Largest wooden palace complex in Asia',
    longDescription: 'Padmanabhapuram Palace is a magnificent example of traditional Kerala architecture. Built in the 16th century, it features intricate wooden carvings, murals, and antique furniture that tell the story of the Travancore kingdom.',
    category: 'heritage',
    location: 'Padmanabhapuram',
    district: 'Kanyakumari',
    coordinates: { lat: 8.2468, lng: 77.3263 },
    images: ['/destination-heritage.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 55,
    timings: '9:00 AM - 4:30 PM (Closed Monday)',
    activities: ['Palace Tour', 'Photography', 'Museum Visit', 'Architecture Study'],
    nearbyAttractions: ['Thuckalay', 'Thirparappu Falls', 'Mathur Hanging Bridge'],
    rating: 4.5,
    reviewCount: 1876,
    featured: true
  },
  {
    id: 'bekal-fort',
    name: 'Bekal Fort',
    description: 'Largest fort in Kerala with panoramic sea views',
    longDescription: 'Bekal Fort is the largest fort in Kerala, covering 40 acres. Built in the 17th century, it offers stunning views of the Arabian Sea and features unique architecture with an observation tower and tunneled pathways.',
    category: 'heritage',
    location: 'Bekal',
    district: 'Kasaragod',
    coordinates: { lat: 12.3925, lng: 75.0333 },
    images: ['/destination-heritage.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 25,
    timings: '8:00 AM - 5:30 PM',
    activities: ['Fort Exploration', 'Beach Visit', 'Photography', 'Sunset Viewing'],
    nearbyAttractions: ['Bekal Beach', 'Ananthapura Temple', 'Chandragiri Fort', 'Valiyaparamba Backwaters'],
    rating: 4.4,
    reviewCount: 2134,
    featured: false
  },
  {
    id: 'krishnapuram-palace',
    name: 'Krishnapuram Palace',
    description: 'Kerala-style architecture with famous Gajendra Moksham mural',
    longDescription: 'Krishnapuram Palace is an 18th-century palace known for its gabled roof style typical of Kerala architecture. The palace houses the famous Gajendra Moksham mural, one of the largest single murals in Kerala.',
    category: 'heritage',
    location: 'Kayamkulam',
    district: 'Alappuzha',
    coordinates: { lat: 9.1714, lng: 76.5006 },
    images: ['/destination-heritage.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 20,
    timings: '9:00 AM - 5:00 PM',
    activities: ['Palace Tour', 'Mural Viewing', 'Museum Visit', 'Garden Walk'],
    nearbyAttractions: ['Kayamkulam Lake', 'Krishnapuram Backwaters', 'Ambalappuzha Temple'],
    rating: 4.2,
    reviewCount: 876,
    featured: false
  },

  // Wildlife
  {
    id: 'periyar-tiger-reserve',
    name: 'Periyar Tiger Reserve',
    description: 'Tiger reserve with boat safaris on Periyar Lake',
    longDescription: 'Periyar Tiger Reserve is one of the finest wildlife reserves in India. Spread over 925 sq km, it is home to tigers, elephants, and diverse flora. The boat safari on Periyar Lake offers unique wildlife viewing opportunities.',
    category: 'wildlife',
    location: 'Thekkady',
    district: 'Idukki',
    coordinates: { lat: 9.4667, lng: 77.2333 },
    images: ['/destination-wildlife.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    entryFee: 450,
    timings: '6:00 AM - 6:00 PM',
    activities: ['Boat Safari', 'Nature Walk', 'Bamboo Rafting', 'Tribal Heritage Tour', 'Night Patrol'],
    nearbyAttractions: ['Kumily', 'Spice Plantations', 'Elephant Junction', 'Murikkady'],
    rating: 4.7,
    reviewCount: 3456,
    featured: true
  },
  {
    id: 'silent-valley',
    name: 'Silent Valley National Park',
    description: 'Last remaining tropical rainforest in India',
    longDescription: 'Silent Valley is one of the last undisturbed tracts of South Western Ghats mountain rain forests. It is home to the lion-tailed macaque and over 1000 species of flowering plants. The park is named for the absence of cicadas.',
    category: 'wildlife',
    location: 'Mannarghat',
    district: 'Palakkad',
    coordinates: { lat: 11.0833, lng: 76.4167 },
    images: ['/destination-wildlife.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 200,
    timings: '8:00 AM - 4:00 PM',
    activities: ['Trekking', 'Bird Watching', 'Wildlife Safari', 'Nature Photography', 'River Rafting'],
    nearbyAttractions: ['Sairandhri', 'Kunthipuzha River', 'Attappadi', 'Malampuzha Dam'],
    rating: 4.6,
    reviewCount: 1234,
    featured: true
  },
  {
    id: 'eravikulam-national-park',
    name: 'Eravikulam National Park',
    description: 'Home to the endangered Nilgiri Tahr',
    longDescription: 'Eravikulam National Park is a UNESCO World Heritage Site and home to the largest population of Nilgiri Tahr. The rolling grasslands, shola forests, and the Neelakurinji bloom make it a unique ecosystem.',
    category: 'wildlife',
    location: 'Munnar',
    district: 'Idukki',
    coordinates: { lat: 10.1833, lng: 77.0333 },
    images: ['/destination-wildlife.jpg'],
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    entryFee: 125,
    timings: '7:00 AM - 4:00 PM',
    activities: ['Trekking', 'Wildlife Viewing', 'Photography', 'Anamudi Peak Visit'],
    nearbyAttractions: ['Anamudi Peak', 'Lakkam Waterfalls', 'Rajamala', 'Tea Museum'],
    rating: 4.5,
    reviewCount: 2678,
    featured: false
  },
  {
    id: 'chinnar-wildlife-sanctuary',
    name: 'Chinnar Wildlife Sanctuary',
    description: 'Thorny scrub forests with unique wildlife',
    longDescription: 'Chinnar Wildlife Sanctuary is known for its unique thorny scrub forests, distinct from typical Kerala forests. It harbors the endangered grizzled giant squirrel and offers excellent trekking opportunities.',
    category: 'wildlife',
    location: 'Marayoor',
    district: 'Idukki',
    coordinates: { lat: 10.3000, lng: 77.2000 },
    images: ['/destination-wildlife.jpg'],
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    entryFee: 100,
    timings: '6:00 AM - 6:00 PM',
    activities: ['Trekking', 'Camping', 'Wildlife Safari', 'Tribal Village Visit', 'Waterfall Trek'],
    nearbyAttractions: ['Thoovanam Falls', 'Sandalwood Forests', 'Dolmenoid Monuments', 'Muniyara'],
    rating: 4.3,
    reviewCount: 987,
    featured: false
  }
];

export const getDestinationsByCategory = (category: string) => {
  return destinations.filter(d => d.category === category);
};

export const getFeaturedDestinations = () => {
  return destinations.filter(d => d.featured);
};

export const getDestinationById = (id: string) => {
  return destinations.find(d => d.id === id);
};

export const searchDestinations = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return destinations.filter(d => 
    d.name.toLowerCase().includes(lowerQuery) ||
    d.location.toLowerCase().includes(lowerQuery) ||
    d.district.toLowerCase().includes(lowerQuery) ||
    d.description.toLowerCase().includes(lowerQuery)
  );
};
