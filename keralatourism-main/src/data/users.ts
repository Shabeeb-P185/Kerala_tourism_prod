export type UserRole = 'tourist' | 'owner' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  verified: boolean;
  // Tourist specific
  preferences?: {
    categories: string[];
    budget: 'budget' | 'mid-range' | 'luxury';
    preferredSeasons: string[];
  };
  // Owner specific
  propertyIds?: string[];
  businessName?: string;
  businessLicense?: string;
}

export const users: User[] = [
  // Tourists
  {
    id: 'tourist-001',
    email: 'rahul.sharma@email.com',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    role: 'tourist',
    createdAt: '2024-01-15',
    verified: true,
    preferences: {
      categories: ['beach', 'heritage'],
      budget: 'mid-range',
      preferredSeasons: ['October', 'November', 'December']
    }
  },
  {
    id: 'tourist-002',
    email: 'priya.menon@email.com',
    name: 'Priya Menon',
    phone: '+91 87654 32109',
    role: 'tourist',
    createdAt: '2024-02-20',
    verified: true,
    preferences: {
      categories: ['hillstation', 'wildlife'],
      budget: 'luxury',
      preferredSeasons: ['December', 'January', 'February']
    }
  },
  {
    id: 'tourist-003',
    email: 'amit.patel@email.com',
    name: 'Amit Patel',
    phone: '+91 76543 21098',
    role: 'tourist',
    createdAt: '2024-03-10',
    verified: true,
    preferences: {
      categories: ['beach', 'hillstation'],
      budget: 'budget',
      preferredSeasons: ['March', 'April', 'May']
    }
  },
  {
    id: 'tourist-004',
    email: 'sneha.nair@email.com',
    name: 'Sneha Nair',
    phone: '+91 65432 10987',
    role: 'tourist',
    createdAt: '2024-04-05',
    verified: true,
    preferences: {
      categories: ['heritage', 'wildlife'],
      budget: 'mid-range',
      preferredSeasons: ['September', 'October', 'November']
    }
  },
  {
    id: 'tourist-005',
    email: 'vikram.iyer@email.com',
    name: 'Vikram Iyer',
    phone: '+91 54321 09876',
    role: 'tourist',
    createdAt: '2024-05-12',
    verified: false,
    preferences: {
      categories: ['hillstation'],
      budget: 'luxury',
      preferredSeasons: ['May', 'June']
    }
  },

  // Property Owners
  {
    id: 'owner-001',
    email: 'thomas.george@tajhotels.com',
    name: 'Thomas George',
    phone: '+91 98765 00001',
    role: 'owner',
    createdAt: '2023-06-01',
    verified: true,
    propertyIds: ['taj-malabar-kochi'],
    businessName: 'Taj Hotels Kerala',
    businessLicense: 'TH-KL-2023-001'
  },
  {
    id: 'owner-002',
    email: 'mary.kurien@raviz.com',
    name: 'Mary Kurien',
    phone: '+91 98765 00002',
    role: 'owner',
    createdAt: '2023-07-15',
    verified: true,
    propertyIds: ['raviz-kovalam'],
    businessName: 'The Raviz Hotels',
    businessLicense: 'RV-KL-2023-002'
  },
  {
    id: 'owner-003',
    email: 'john.mathew@cghearth.com',
    name: 'John Mathew',
    phone: '+91 98765 00003',
    role: 'owner',
    createdAt: '2023-08-20',
    verified: true,
    propertyIds: ['spice-village-thekkady', 'marari-beach-resort'],
    businessName: 'CGH Earth Hotels',
    businessLicense: 'CGH-KL-2023-003'
  },
  {
    id: 'owner-004',
    email: 'anna.joseph@windermere.com',
    name: 'Anna Joseph',
    phone: '+91 98765 00004',
    role: 'owner',
    createdAt: '2023-09-10',
    verified: true,
    propertyIds: ['windermere-munnar'],
    businessName: 'Windermere Estates',
    businessLicense: 'WE-KL-2023-004'
  },
  {
    id: 'owner-007',
    email: 'philip.kutty@farm.com',
    name: 'Philip Kutty',
    phone: '+91 98765 00007',
    role: 'owner',
    createdAt: '2023-05-01',
    verified: true,
    propertyIds: ['philipkuttys-farm'],
    businessName: "Philipkutty's Farm Stay",
    businessLicense: 'PF-KL-2023-007'
  },
  {
    id: 'owner-011',
    email: 'joseph.varghese@spiceroutes.com',
    name: 'Joseph Varghese',
    phone: '+91 98765 00011',
    role: 'owner',
    createdAt: '2023-04-15',
    verified: true,
    propertyIds: ['spice-routes-houseboat', 'kerala-backwater-cruise'],
    businessName: 'Spice Routes Houseboats',
    businessLicense: 'SR-KL-2023-011'
  },

  // Admins
  {
    id: 'admin-001',
    email: 'admin@keralatourism.gov.in',
    name: 'Dr. Suresh Kumar',
    phone: '+91 471 2321132',
    role: 'admin',
    createdAt: '2022-01-01',
    verified: true
  },
  {
    id: 'admin-002',
    email: 'moderator@keralatourism.gov.in',
    name: 'Lakshmi Devi',
    phone: '+91 471 2321133',
    role: 'admin',
    createdAt: '2022-06-15',
    verified: true
  }
];

export const getUserById = (id: string) => {
  return users.find(u => u.id === id);
};

export const getUsersByRole = (role: UserRole) => {
  return users.filter(u => u.role === role);
};

export const getOwnerByPropertyId = (propertyId: string) => {
  return users.find(u => u.propertyIds?.includes(propertyId));
};

export const getVerifiedOwners = () => {
  return users.filter(u => u.role === 'owner' && u.verified);
};
