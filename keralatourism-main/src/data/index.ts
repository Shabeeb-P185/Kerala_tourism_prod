// Central export file for all data
export * from './destinations';
export * from './stays';
export * from './users';
export * from './bookings';
export * from './reviews';

// Categories data
export const categories = [
  {
    id: 'beach',
    name: 'Beaches',
    description: 'Sun, sand, and serene Arabian Sea coastline',
    icon: 'Palmtree',
    count: 4
  },
  {
    id: 'hillstation',
    name: 'Hill Stations',
    description: 'Misty mountains and cool climate retreats',
    icon: 'Mountain',
    count: 4
  },
  {
    id: 'heritage',
    name: 'Heritage Sites',
    description: 'Historical monuments and cultural landmarks',
    icon: 'Landmark',
    count: 4
  },
  {
    id: 'wildlife',
    name: 'Wildlife Sanctuaries',
    description: 'Tiger reserves and elephant habitats',
    icon: 'Trees',
    count: 4
  }
];

// Districts of Kerala
export const districts = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod'
];

// Seasons
export const seasons = [
  { id: 'winter', name: 'Winter', months: ['October', 'November', 'December', 'January', 'February'] },
  { id: 'summer', name: 'Summer', months: ['March', 'April', 'May'] },
  { id: 'monsoon', name: 'Monsoon', months: ['June', 'July', 'August', 'September'] }
];

// Price ranges for filtering
export const priceRanges = [
  { id: 'budget', label: 'Budget', min: 0, max: 5000 },
  { id: 'mid-range', label: 'Mid-Range', min: 5000, max: 15000 },
  { id: 'luxury', label: 'Luxury', min: 15000, max: 50000 },
  { id: 'ultra-luxury', label: 'Ultra Luxury', min: 50000, max: Infinity }
];

// Stay types
export const stayTypes = [
  { id: 'hotel', name: 'Hotels', description: 'Full-service accommodations' },
  { id: 'resort', name: 'Resorts', description: 'Luxury getaways with amenities' },
  { id: 'homestay', name: 'Homestays', description: 'Authentic local experiences' },
  { id: 'houseboat', name: 'Houseboats', description: 'Floating homes on backwaters' }
];

// Amenities list
export const amenities = [
  { id: 'wifi', name: 'WiFi', icon: 'Wifi' },
  { id: 'pool', name: 'Swimming Pool', icon: 'Waves' },
  { id: 'spa', name: 'Spa', icon: 'Sparkles' },
  { id: 'restaurant', name: 'Restaurant', icon: 'Utensils' },
  { id: 'bar', name: 'Bar', icon: 'Wine' },
  { id: 'gym', name: 'Gym', icon: 'Dumbbell' },
  { id: 'parking', name: 'Parking', icon: 'Car' },
  { id: 'ac', name: 'Air Conditioning', icon: 'Snowflake' },
  { id: 'beach-access', name: 'Beach Access', icon: 'Umbrella' },
  { id: 'room-service', name: 'Room Service', icon: 'Bell' }
];
