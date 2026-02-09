export interface Stay {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  type: 'hotel' | 'homestay' | 'resort' | 'houseboat';
  location: string;
  district: string;
  coordinates: { lat: number; lng: number };
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  rooms: number;
  maxGuests: number;
  checkInTime: string;
  checkOutTime: string;
  policies: string[];
  ownerId: string;
  verified: boolean;
  featured: boolean;
  nearbyDestinations: string[];
  availability: boolean;
}

export const stays: Stay[] = [
  // Hotels
  {
    id: 'taj-malabar-kochi',
    name: 'Taj Malabar Resort & Spa',
    description: 'Luxury heritage hotel overlooking Cochin harbour',
    longDescription: 'Taj Malabar Resort & Spa is a luxury heritage hotel located on Willingdon Island, overlooking the scenic Cochin harbour. The hotel combines Victorian elegance with modern amenities, offering world-class dining, spa services, and stunning waterfront views.',
    type: 'hotel',
    location: 'Willingdon Island, Kochi',
    district: 'Ernakulam',
    coordinates: { lat: 9.9569, lng: 76.2673 },
    images: ['/placeholder.svg'],
    pricePerNight: 15000,
    rating: 4.8,
    reviewCount: 1234,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Gym', 'Parking', 'Room Service', 'Laundry', 'Concierge'],
    rooms: 96,
    maxGuests: 4,
    checkInTime: '14:00',
    checkOutTime: '12:00',
    policies: ['No smoking', 'Pet friendly', 'Credit cards accepted'],
    ownerId: 'owner-001',
    verified: true,
    featured: true,
    nearbyDestinations: ['fort-kochi', 'cherai-beach'],
    availability: true
  },
  {
    id: 'raviz-kovalam',
    name: 'The Raviz Kovalam',
    description: 'Cliffside luxury resort with private beach access',
    longDescription: 'The Raviz Kovalam is a stunning cliffside resort offering panoramic views of the Arabian Sea. With direct beach access, world-class Ayurvedic spa, and multiple dining options, it provides an unforgettable Kerala experience.',
    type: 'hotel',
    location: 'Kovalam',
    district: 'Thiruvananthapuram',
    coordinates: { lat: 8.4015, lng: 76.9820 },
    images: ['/placeholder.svg'],
    pricePerNight: 12000,
    rating: 4.6,
    reviewCount: 876,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Gym', 'Beach Access', 'Ayurveda Center', 'Parking'],
    rooms: 56,
    maxGuests: 3,
    checkInTime: '14:00',
    checkOutTime: '11:00',
    policies: ['No smoking', 'No pets', 'Credit cards accepted'],
    ownerId: 'owner-002',
    verified: true,
    featured: true,
    nearbyDestinations: ['kovalam-beach', 'varkala-beach'],
    availability: true
  },
  {
    id: 'spice-village-thekkady',
    name: 'Spice Village Thekkady',
    description: 'Eco-friendly resort with cottage-style rooms',
    longDescription: 'Spice Village is an award-winning eco-resort featuring individual cottages with thatched roofs, surrounded by spice gardens. Experience authentic Kerala cuisine, nature walks, and proximity to Periyar Tiger Reserve.',
    type: 'hotel',
    location: 'Thekkady',
    district: 'Idukki',
    coordinates: { lat: 9.5894, lng: 77.1656 },
    images: ['/placeholder.svg'],
    pricePerNight: 9500,
    rating: 4.7,
    reviewCount: 654,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Garden', 'Nature Walks', 'Cooking Classes', 'Parking'],
    rooms: 52,
    maxGuests: 3,
    checkInTime: '14:00',
    checkOutTime: '11:00',
    policies: ['Eco-friendly', 'No smoking', 'No plastic'],
    ownerId: 'owner-003',
    verified: true,
    featured: true,
    nearbyDestinations: ['periyar-tiger-reserve', 'thekkady'],
    availability: true
  },

  // Resorts
  {
    id: 'windermere-munnar',
    name: 'Windermere Estate',
    description: 'Colonial-era plantation resort in tea gardens',
    longDescription: 'Windermere Estate is a heritage plantation resort set amidst sprawling tea gardens. The colonial bungalows offer breathtaking views of the Western Ghats, with fresh mountain air and authentic plantation experiences.',
    type: 'resort',
    location: 'Munnar',
    district: 'Idukki',
    coordinates: { lat: 10.0721, lng: 77.0503 },
    images: ['/placeholder.svg'],
    pricePerNight: 11000,
    rating: 4.8,
    reviewCount: 543,
    amenities: ['WiFi', 'Restaurant', 'Tea Plantation Tours', 'Trekking', 'Bonfire', 'Library', 'Parking'],
    rooms: 18,
    maxGuests: 4,
    checkInTime: '13:00',
    checkOutTime: '11:00',
    policies: ['No smoking indoors', 'No loud music', 'Eco-friendly'],
    ownerId: 'owner-004',
    verified: true,
    featured: true,
    nearbyDestinations: ['munnar', 'eravikulam-national-park'],
    availability: true
  },
  {
    id: 'marari-beach-resort',
    name: 'Marari Beach Resort',
    description: 'Beachfront resort with traditional Kerala cottages',
    longDescription: 'Marari Beach Resort offers a perfect blend of traditional Kerala architecture and modern comfort. Set amidst coconut groves with direct beach access, it features thatched-roof villas, organic garden restaurant, and Ayurvedic spa.',
    type: 'resort',
    location: 'Mararikulam',
    district: 'Alappuzha',
    coordinates: { lat: 9.5895, lng: 76.2834 },
    images: ['/placeholder.svg'],
    pricePerNight: 18000,
    rating: 4.9,
    reviewCount: 432,
    amenities: ['WiFi', 'Pool', 'Beach Access', 'Spa', 'Restaurant', 'Yoga', 'Fishing', 'Cycling', 'Parking'],
    rooms: 62,
    maxGuests: 4,
    checkInTime: '14:00',
    checkOutTime: '12:00',
    policies: ['No smoking', 'Eco-friendly', 'Organic food'],
    ownerId: 'owner-005',
    verified: true,
    featured: true,
    nearbyDestinations: ['marari-beach', 'fort-kochi'],
    availability: true
  },
  {
    id: 'vythiri-resort-wayanad',
    name: 'Vythiri Resort',
    description: 'Rainforest resort with treehouse accommodations',
    longDescription: 'Vythiri Resort is nestled in the rainforests of Wayanad, offering unique treehouse stays and pool villas. Wake up to bird songs, explore nature trails, and experience the magic of staying amidst the forest canopy.',
    type: 'resort',
    location: 'Vythiri, Wayanad',
    district: 'Wayanad',
    coordinates: { lat: 11.5548, lng: 76.0462 },
    images: ['/placeholder.svg'],
    pricePerNight: 14000,
    rating: 4.7,
    reviewCount: 765,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Treehouse', 'Nature Trails', 'Bird Watching', 'Parking'],
    rooms: 45,
    maxGuests: 4,
    checkInTime: '13:00',
    checkOutTime: '11:00',
    policies: ['No smoking', 'Eco-friendly', 'No pets'],
    ownerId: 'owner-006',
    verified: true,
    featured: false,
    nearbyDestinations: ['wayanad', 'silent-valley'],
    availability: true
  },

  // Homestays
  {
    id: 'philipkuttys-farm',
    name: "Philipkutty's Farm",
    description: 'Authentic farm stay on a private island',
    longDescription: "Philipkutty's Farm is located on a 50-acre island surrounded by Vembanad Lake. Experience authentic Kerala village life, organic farming, traditional cuisine, and warm hospitality in this award-winning homestay.",
    type: 'homestay',
    location: 'Kumarakom',
    district: 'Kottayam',
    coordinates: { lat: 9.6175, lng: 76.4301 },
    images: ['/placeholder.svg'],
    pricePerNight: 8500,
    rating: 4.9,
    reviewCount: 321,
    amenities: ['WiFi', 'Home-cooked Meals', 'Farming Activities', 'Boat Rides', 'Fishing', 'Bird Watching'],
    rooms: 5,
    maxGuests: 2,
    checkInTime: '12:00',
    checkOutTime: '10:00',
    policies: ['No smoking', 'Vegetarian options', 'Advance booking required'],
    ownerId: 'owner-007',
    verified: true,
    featured: true,
    nearbyDestinations: ['fort-kochi', 'marari-beach'],
    availability: true
  },
  {
    id: 'tranquil-wayanad',
    name: 'Tranquil Plantation Hideaway',
    description: 'Coffee plantation homestay with nature trails',
    longDescription: 'Tranquil is a 400-acre coffee and spice plantation homestay offering a peaceful retreat. The colonial-era bungalows, organic coffee, guided plantation walks, and warm hosts make it a memorable experience.',
    type: 'homestay',
    location: 'Kolagappara, Wayanad',
    district: 'Wayanad',
    coordinates: { lat: 11.6234, lng: 76.1456 },
    images: ['/placeholder.svg'],
    pricePerNight: 6500,
    rating: 4.8,
    reviewCount: 234,
    amenities: ['WiFi', 'Home-cooked Meals', 'Coffee Plantation Tour', 'Bird Watching', 'Trekking', 'Bonfire'],
    rooms: 8,
    maxGuests: 3,
    checkInTime: '13:00',
    checkOutTime: '11:00',
    policies: ['No smoking', 'No loud music', 'Eco-friendly'],
    ownerId: 'owner-008',
    verified: true,
    featured: false,
    nearbyDestinations: ['wayanad', 'silent-valley'],
    availability: true
  },
  {
    id: 'green-magic-treehouse',
    name: 'Green Magic Tree House',
    description: 'Unique treehouse experience in the rainforest',
    longDescription: 'Green Magic offers an extraordinary treehouse experience 86 feet above the forest floor. Access is via a unique water-powered lift, and the stay includes guided forest walks, tribal village visits, and authentic Kerala cuisine.',
    type: 'homestay',
    location: 'Vythiri, Wayanad',
    district: 'Wayanad',
    coordinates: { lat: 11.5432, lng: 76.0321 },
    images: ['/placeholder.svg'],
    pricePerNight: 7500,
    rating: 4.6,
    reviewCount: 456,
    amenities: ['Home-cooked Meals', 'Treehouse', 'Forest Walks', 'Tribal Village Visit', 'Bird Watching'],
    rooms: 4,
    maxGuests: 2,
    checkInTime: '14:00',
    checkOutTime: '10:00',
    policies: ['No smoking', 'No electronics after 10 PM', 'Adventure spirit required'],
    ownerId: 'owner-009',
    verified: true,
    featured: true,
    nearbyDestinations: ['wayanad', 'silent-valley'],
    availability: true
  },
  {
    id: 'vismaya-munnar',
    name: 'Vismaya Homestay',
    description: 'Family-run homestay with stunning valley views',
    longDescription: 'Vismaya is a warm family homestay located on a hilltop offering panoramic views of Munnar valleys. Enjoy homemade Kerala cuisine, tea garden walks, and genuine local hospitality.',
    type: 'homestay',
    location: 'Munnar',
    district: 'Idukki',
    coordinates: { lat: 10.0956, lng: 77.0612 },
    images: ['/placeholder.svg'],
    pricePerNight: 3500,
    rating: 4.7,
    reviewCount: 189,
    amenities: ['WiFi', 'Home-cooked Meals', 'Valley View', 'Tea Garden Walk', 'Local Guide'],
    rooms: 4,
    maxGuests: 3,
    checkInTime: '12:00',
    checkOutTime: '10:00',
    policies: ['No smoking', 'No alcohol', 'Family-friendly'],
    ownerId: 'owner-010',
    verified: true,
    featured: false,
    nearbyDestinations: ['munnar', 'eravikulam-national-park'],
    availability: true
  },

  // Houseboats
  {
    id: 'spice-routes-houseboat',
    name: 'Spice Routes Luxury Houseboat',
    description: 'Premium houseboat with chef and crew',
    longDescription: 'Experience the famous Kerala backwaters in style aboard the Spice Routes Luxury Houseboat. This 3-bedroom houseboat comes with a personal chef, crew, and all modern amenities while cruising through scenic waterways.',
    type: 'houseboat',
    location: 'Alleppey Backwaters',
    district: 'Alappuzha',
    coordinates: { lat: 9.4981, lng: 76.3388 },
    images: ['/placeholder.svg'],
    pricePerNight: 22000,
    rating: 4.8,
    reviewCount: 567,
    amenities: ['AC Rooms', 'Personal Chef', 'Crew', 'Sundeck', 'Fishing Equipment', 'Traditional Meals'],
    rooms: 3,
    maxGuests: 6,
    checkInTime: '12:00',
    checkOutTime: '09:00',
    policies: ['No smoking on deck', 'No diving', 'Safety instructions mandatory'],
    ownerId: 'owner-011',
    verified: true,
    featured: true,
    nearbyDestinations: ['marari-beach', 'fort-kochi'],
    availability: true
  },
  {
    id: 'kerala-backwater-cruise',
    name: 'Kerala Backwater Premium Cruise',
    description: 'Traditional kettuvallam with modern comforts',
    longDescription: 'Cruise through the serene backwaters of Kerala in a traditional kettuvallam (rice boat) converted into a luxury houseboat. Enjoy fresh seafood, village life views, and magical sunset experiences.',
    type: 'houseboat',
    location: 'Kumarakom Backwaters',
    district: 'Kottayam',
    coordinates: { lat: 9.6167, lng: 76.4333 },
    images: ['/placeholder.svg'],
    pricePerNight: 16000,
    rating: 4.6,
    reviewCount: 432,
    amenities: ['AC Rooms', 'Chef', 'Crew', 'Sundeck', 'Canoe', 'Village Visits'],
    rooms: 2,
    maxGuests: 4,
    checkInTime: '12:00',
    checkOutTime: '09:00',
    policies: ['No smoking', 'No swimming without crew', 'Life jackets provided'],
    ownerId: 'owner-012',
    verified: true,
    featured: false,
    nearbyDestinations: ['marari-beach', 'fort-kochi'],
    availability: true
  },
  {
    id: 'rainbow-cruises',
    name: 'Rainbow Cruises Deluxe',
    description: 'Budget-friendly houseboat experience',
    longDescription: 'Rainbow Cruises offers an affordable yet comfortable houseboat experience. Perfect for couples and small families wanting to experience the backwaters without breaking the bank.',
    type: 'houseboat',
    location: 'Alleppey',
    district: 'Alappuzha',
    coordinates: { lat: 9.4891, lng: 76.3267 },
    images: ['/placeholder.svg'],
    pricePerNight: 8000,
    rating: 4.3,
    reviewCount: 287,
    amenities: ['AC Rooms', 'Chef', 'Crew', 'Sundeck', 'Traditional Meals'],
    rooms: 1,
    maxGuests: 2,
    checkInTime: '12:00',
    checkOutTime: '09:00',
    policies: ['No smoking', 'Couples and families only', 'Advance booking required'],
    ownerId: 'owner-013',
    verified: true,
    featured: false,
    nearbyDestinations: ['marari-beach', 'krishnapuram-palace'],
    availability: true
  }
];

export const getStaysByType = (type: string) => {
  return stays.filter(s => s.type === type);
};

export const getFeaturedStays = () => {
  return stays.filter(s => s.featured);
};

export const getVerifiedStays = () => {
  return stays.filter(s => s.verified);
};

export const getStayById = (id: string) => {
  return stays.find(s => s.id === id);
};

export const getStaysByLocation = (district: string) => {
  return stays.filter(s => s.district.toLowerCase() === district.toLowerCase());
};

export const getStaysByPriceRange = (min: number, max: number) => {
  return stays.filter(s => s.pricePerNight >= min && s.pricePerNight <= max);
};

export const searchStays = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return stays.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) ||
    s.location.toLowerCase().includes(lowerQuery) ||
    s.district.toLowerCase().includes(lowerQuery) ||
    s.type.toLowerCase().includes(lowerQuery) ||
    s.description.toLowerCase().includes(lowerQuery)
  );
};

export const getStaysByNearbyDestination = (destinationId: string) => {
  return stays.filter(s => s.nearbyDestinations.includes(destinationId));
};
