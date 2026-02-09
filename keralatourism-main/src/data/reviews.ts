export interface Review {
  id: string;
  entityType: 'destination' | 'stay';
  entityId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  visitDate: string;
  createdAt: string;
  helpful: number;
  images?: string[];
}

export const reviews: Review[] = [
  // Destination Reviews
  {
    id: 'review-d-001',
    entityType: 'destination',
    entityId: 'kovalam-beach',
    userId: 'tourist-001',
    userName: 'Rahul Sharma',
    rating: 5,
    title: 'Perfect beach getaway!',
    comment: 'Kovalam exceeded all our expectations. The lighthouse beach is stunning and the sunset views are breathtaking. The local seafood restaurants along the beach are amazing. Highly recommend visiting during December.',
    visitDate: '2024-12-10',
    createdAt: '2024-12-12',
    helpful: 24
  },
  {
    id: 'review-d-002',
    entityType: 'destination',
    entityId: 'munnar',
    userId: 'tourist-002',
    userName: 'Priya Menon',
    rating: 5,
    title: 'Heaven on Earth',
    comment: 'The tea plantations are like a green carpet spread across the mountains. We did the Eravikulam trek and spotted Nilgiri Tahr. The weather was perfect in January. Must try the fresh tea from Kanan Devan!',
    visitDate: '2024-01-15',
    createdAt: '2024-01-18',
    helpful: 45
  },
  {
    id: 'review-d-003',
    entityType: 'destination',
    entityId: 'fort-kochi',
    userId: 'tourist-003',
    userName: 'Amit Patel',
    rating: 4,
    title: 'Rich in history and culture',
    comment: 'Fort Kochi is a walk through history. The Chinese fishing nets at sunset are iconic. Loved the art galleries and cafes. The Jew Town antique shops are fascinating. Would recommend spending at least 2 days here.',
    visitDate: '2024-03-20',
    createdAt: '2024-03-22',
    helpful: 18
  },
  {
    id: 'review-d-004',
    entityType: 'destination',
    entityId: 'wayanad',
    userId: 'tourist-004',
    userName: 'Sneha Nair',
    rating: 5,
    title: 'Adventure paradise',
    comment: 'Wayanad is perfect for adventure lovers. We trekked Chembra Peak and saw the heart-shaped lake! Edakkal Caves were mysterious and interesting. The bamboo rafting was exhilarating. Go during monsoon for the best waterfalls.',
    visitDate: '2024-07-10',
    createdAt: '2024-07-15',
    helpful: 32
  },
  {
    id: 'review-d-005',
    entityType: 'destination',
    entityId: 'periyar-tiger-reserve',
    userId: 'tourist-001',
    userName: 'Rahul Sharma',
    rating: 4,
    title: 'Wildlife encounter',
    comment: 'The boat safari was amazing! We saw elephants, wild boar, and many bird species. Did not spot a tiger but the experience was still wonderful. The nature walk with forest guards is highly recommended.',
    visitDate: '2024-02-25',
    createdAt: '2024-02-28',
    helpful: 27
  },
  {
    id: 'review-d-006',
    entityType: 'destination',
    entityId: 'varkala-beach',
    userId: 'tourist-005',
    userName: 'Vikram Iyer',
    rating: 5,
    title: 'Unique cliff beach experience',
    comment: 'Varkala is unlike any other beach in India. The cliff-top cafes with ocean views are perfect for sunset. The mineral springs near the beach are therapeutic. Great yoga retreats available nearby.',
    visitDate: '2024-04-05',
    createdAt: '2024-04-08',
    helpful: 21
  },

  // Stay Reviews
  {
    id: 'review-s-001',
    entityType: 'stay',
    entityId: 'taj-malabar-kochi',
    userId: 'tourist-001',
    userName: 'Rahul Sharma',
    rating: 5,
    title: 'Luxury at its finest',
    comment: 'Exceptional service and stunning harbour views. The heritage wing rooms are beautifully restored. Rice Boat restaurant serves the best Kerala cuisine. The infinity pool overlooking the harbour is magnificent.',
    visitDate: '2024-12-20',
    createdAt: '2024-12-24',
    helpful: 15
  },
  {
    id: 'review-s-002',
    entityType: 'stay',
    entityId: 'windermere-munnar',
    userId: 'tourist-002',
    userName: 'Priya Menon',
    rating: 5,
    title: 'Colonial charm with modern comfort',
    comment: 'Waking up to misty tea gardens was magical. The colonial bungalow is well-preserved with antique furniture. The home-cooked meals are delicious. Staff arranged a private tea plantation tour for us.',
    visitDate: '2024-12-25',
    createdAt: '2024-12-29',
    helpful: 19
  },
  {
    id: 'review-s-003',
    entityType: 'stay',
    entityId: 'philipkuttys-farm',
    userId: 'tourist-003',
    userName: 'Amit Patel',
    rating: 5,
    title: 'Authentic Kerala experience',
    comment: 'This is the real Kerala! The island location is serene. We helped with farming activities and learned to cook Kerala dishes. The family is incredibly warm and hospitable. Fresh fish from the lake every day!',
    visitDate: '2024-03-15',
    createdAt: '2024-03-18',
    helpful: 28
  },
  {
    id: 'review-s-004',
    entityType: 'stay',
    entityId: 'spice-routes-houseboat',
    userId: 'tourist-004',
    userName: 'Sneha Nair',
    rating: 4,
    title: 'Unforgettable backwater cruise',
    comment: 'The houseboat was luxurious and well-maintained. Our chef prepared amazing seafood. Cruising through the backwaters and watching village life was peaceful. Only wish we had booked for 2 nights instead of 1.',
    visitDate: '2024-09-20',
    createdAt: '2024-09-22',
    helpful: 22
  },
  {
    id: 'review-s-005',
    entityType: 'stay',
    entityId: 'green-magic-treehouse',
    userId: 'tourist-001',
    userName: 'Rahul Sharma',
    rating: 5,
    title: 'Once in a lifetime experience!',
    comment: 'Staying 86 feet up in a treehouse is surreal! The water-powered lift is unique. No WiFi or TV - perfect digital detox. Night sounds of the forest are amazing. The tribal village visit was eye-opening.',
    visitDate: '2025-01-10',
    createdAt: '2025-01-13',
    helpful: 31
  },
  {
    id: 'review-s-006',
    entityType: 'stay',
    entityId: 'marari-beach-resort',
    userId: 'tourist-002',
    userName: 'Priya Menon',
    rating: 5,
    title: 'Beach paradise with eco-consciousness',
    comment: 'The resort is committed to sustainability which we loved. Our pool villa was gorgeous. Beach is pristine and uncrowded. Ayurvedic spa treatment was rejuvenating. The organic restaurant uses vegetables from their own garden.',
    visitDate: '2024-11-10',
    createdAt: '2024-11-14',
    helpful: 17
  },
  {
    id: 'review-s-007',
    entityType: 'stay',
    entityId: 'spice-village-thekkady',
    userId: 'tourist-005',
    userName: 'Vikram Iyer',
    rating: 4,
    title: 'Eco-friendly and charming',
    comment: 'The individual cottages give great privacy. Loved walking through the spice garden every morning. The cooking class was fun and informative. Proximity to Periyar makes it perfect for wildlife enthusiasts.',
    visitDate: '2024-05-15',
    createdAt: '2024-05-18',
    helpful: 14
  },
  {
    id: 'review-s-008',
    entityType: 'stay',
    entityId: 'vythiri-resort-wayanad',
    userId: 'tourist-004',
    userName: 'Sneha Nair',
    rating: 5,
    title: 'Treehouse dreams come true',
    comment: 'We stayed in the treehouse and it was magical! Waking up to bird songs in the rainforest canopy is special. The pool villas are also gorgeous. Nature trails through the resort are well-maintained.',
    visitDate: '2024-10-10',
    createdAt: '2024-10-14',
    helpful: 25
  }
];

export const getReviewById = (id: string) => {
  return reviews.find(r => r.id === id);
};

export const getReviewsByEntity = (entityType: 'destination' | 'stay', entityId: string) => {
  return reviews.filter(r => r.entityType === entityType && r.entityId === entityId);
};

export const getReviewsByUser = (userId: string) => {
  return reviews.filter(r => r.userId === userId);
};

export const getAverageRating = (entityType: 'destination' | 'stay', entityId: string) => {
  const entityReviews = getReviewsByEntity(entityType, entityId);
  if (entityReviews.length === 0) return 0;
  const sum = entityReviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / entityReviews.length) * 10) / 10;
};

export const getRecentReviews = (limit: number = 10) => {
  return [...reviews]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getTopReviews = (limit: number = 10) => {
  return [...reviews]
    .sort((a, b) => b.helpful - a.helpful)
    .slice(0, limit);
};
