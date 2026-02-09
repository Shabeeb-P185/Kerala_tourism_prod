export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  stayId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  totalAmount: number;
  status: BookingStatus;
  paymentMethod: 'card' | 'upi' | 'netbanking' | 'cash';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

export const bookings: Booking[] = [
  {
    id: 'booking-001',
    stayId: 'taj-malabar-kochi',
    userId: 'tourist-001',
    checkIn: '2024-12-20',
    checkOut: '2024-12-23',
    guests: 2,
    rooms: 1,
    totalAmount: 45000,
    status: 'confirmed',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    specialRequests: 'Sea-facing room preferred',
    createdAt: '2024-11-15',
    updatedAt: '2024-11-15'
  },
  {
    id: 'booking-002',
    stayId: 'windermere-munnar',
    userId: 'tourist-002',
    checkIn: '2024-12-25',
    checkOut: '2024-12-28',
    guests: 4,
    rooms: 2,
    totalAmount: 66000,
    status: 'confirmed',
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    specialRequests: 'Anniversary celebration - please arrange cake',
    createdAt: '2024-11-20',
    updatedAt: '2024-11-20'
  },
  {
    id: 'booking-003',
    stayId: 'spice-routes-houseboat',
    userId: 'tourist-003',
    checkIn: '2024-12-15',
    checkOut: '2024-12-16',
    guests: 4,
    rooms: 2,
    totalAmount: 22000,
    status: 'completed',
    paymentMethod: 'netbanking',
    paymentStatus: 'paid',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-16'
  },
  {
    id: 'booking-004',
    stayId: 'philipkuttys-farm',
    userId: 'tourist-004',
    checkIn: '2025-01-05',
    checkOut: '2025-01-08',
    guests: 2,
    rooms: 1,
    totalAmount: 25500,
    status: 'pending',
    paymentMethod: 'card',
    paymentStatus: 'pending',
    specialRequests: 'Interested in cooking class',
    createdAt: '2024-12-10',
    updatedAt: '2024-12-10'
  },
  {
    id: 'booking-005',
    stayId: 'green-magic-treehouse',
    userId: 'tourist-001',
    checkIn: '2025-01-10',
    checkOut: '2025-01-12',
    guests: 2,
    rooms: 1,
    totalAmount: 15000,
    status: 'confirmed',
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    createdAt: '2024-12-12',
    updatedAt: '2024-12-12'
  },
  {
    id: 'booking-006',
    stayId: 'raviz-kovalam',
    userId: 'tourist-005',
    checkIn: '2024-11-20',
    checkOut: '2024-11-22',
    guests: 2,
    rooms: 1,
    totalAmount: 24000,
    status: 'cancelled',
    paymentMethod: 'card',
    paymentStatus: 'refunded',
    specialRequests: 'Early check-in requested',
    createdAt: '2024-11-01',
    updatedAt: '2024-11-18'
  },
  {
    id: 'booking-007',
    stayId: 'spice-village-thekkady',
    userId: 'tourist-002',
    checkIn: '2025-02-14',
    checkOut: '2025-02-17',
    guests: 2,
    rooms: 1,
    totalAmount: 28500,
    status: 'confirmed',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    specialRequests: 'Vegetarian meals only',
    createdAt: '2024-12-20',
    updatedAt: '2024-12-20'
  },
  {
    id: 'booking-008',
    stayId: 'marari-beach-resort',
    userId: 'tourist-003',
    checkIn: '2025-03-01',
    checkOut: '2025-03-05',
    guests: 3,
    rooms: 1,
    totalAmount: 72000,
    status: 'pending',
    paymentMethod: 'netbanking',
    paymentStatus: 'pending',
    createdAt: '2024-12-25',
    updatedAt: '2024-12-25'
  },
  {
    id: 'booking-009',
    stayId: 'vythiri-resort-wayanad',
    userId: 'tourist-004',
    checkIn: '2024-10-10',
    checkOut: '2024-10-13',
    guests: 4,
    rooms: 2,
    totalAmount: 84000,
    status: 'completed',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    specialRequests: 'Treehouse accommodation preferred',
    createdAt: '2024-09-15',
    updatedAt: '2024-10-13'
  },
  {
    id: 'booking-010',
    stayId: 'kerala-backwater-cruise',
    userId: 'tourist-001',
    checkIn: '2024-09-20',
    checkOut: '2024-09-21',
    guests: 2,
    rooms: 1,
    totalAmount: 16000,
    status: 'completed',
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    createdAt: '2024-09-05',
    updatedAt: '2024-09-21'
  }
];

export const getBookingById = (id: string) => {
  return bookings.find(b => b.id === id);
};

export const getBookingsByUserId = (userId: string) => {
  return bookings.filter(b => b.userId === userId);
};

export const getBookingsByStayId = (stayId: string) => {
  return bookings.filter(b => b.stayId === stayId);
};

export const getBookingsByStatus = (status: BookingStatus) => {
  return bookings.filter(b => b.status === status);
};

export const getPendingBookings = () => {
  return bookings.filter(b => b.status === 'pending');
};

export const getUpcomingBookings = (userId: string) => {
  const today = new Date().toISOString().split('T')[0];
  return bookings.filter(b => 
    b.userId === userId && 
    b.checkIn >= today && 
    (b.status === 'confirmed' || b.status === 'pending')
  );
};

export const getBookingStats = () => {
  const total = bookings.length;
  const confirmed = bookings.filter(b => b.status === 'confirmed').length;
  const pending = bookings.filter(b => b.status === 'pending').length;
  const completed = bookings.filter(b => b.status === 'completed').length;
  const cancelled = bookings.filter(b => b.status === 'cancelled').length;
  const totalRevenue = bookings
    .filter(b => b.paymentStatus === 'paid')
    .reduce((sum, b) => sum + b.totalAmount, 0);
  
  return { total, confirmed, pending, completed, cancelled, totalRevenue };
};
