-- Create role enum
CREATE TYPE public.app_role AS ENUM ('tourist', 'owner', 'admin');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'tourist',
  UNIQUE (user_id, role)
);

-- Create destinations table
CREATE TABLE public.destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  category TEXT NOT NULL,
  district TEXT NOT NULL,
  image_url TEXT,
  gallery TEXT[] DEFAULT '{}',
  best_time_to_visit TEXT[],
  average_temperature JSONB,
  highlights TEXT[],
  activities TEXT[],
  nearby_attractions TEXT[],
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  featured BOOLEAN DEFAULT false,
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create stays table
CREATE TABLE public.stays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  type TEXT NOT NULL,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE SET NULL,
  location TEXT NOT NULL,
  district TEXT NOT NULL,
  address TEXT,
  image_url TEXT,
  gallery TEXT[] DEFAULT '{}',
  price_per_night DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  amenities TEXT[] DEFAULT '{}',
  max_guests INTEGER DEFAULT 2,
  bedrooms INTEGER DEFAULT 1,
  bathrooms INTEGER DEFAULT 1,
  policies JSONB DEFAULT '{}',
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  featured BOOLEAN DEFAULT false,
  verified BOOLEAN DEFAULT false,
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'suspended')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stay_id UUID REFERENCES public.stays(id) ON DELETE CASCADE NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INTEGER NOT NULL DEFAULT 1,
  total_price DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  special_requests TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stay_id UUID REFERENCES public.stays(id) ON DELETE CASCADE,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  content TEXT NOT NULL,
  visit_date DATE,
  images TEXT[] DEFAULT '{}',
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  CONSTRAINT review_target_check CHECK (
    (stay_id IS NOT NULL AND destination_id IS NULL) OR 
    (stay_id IS NULL AND destination_id IS NOT NULL)
  )
);

-- Create wishlist table
CREATE TABLE public.wishlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stay_id UUID REFERENCES public.stays(id) ON DELETE CASCADE,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  CONSTRAINT wishlist_target_check CHECK (
    (stay_id IS NOT NULL AND destination_id IS NULL) OR 
    (stay_id IS NULL AND destination_id IS NOT NULL)
  ),
  UNIQUE (user_id, stay_id),
  UNIQUE (user_id, destination_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stays ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Function to get user's primary role
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS app_role
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.user_roles
  WHERE user_id = _user_id
  ORDER BY CASE role 
    WHEN 'admin' THEN 1 
    WHEN 'owner' THEN 2 
    ELSE 3 
  END
  LIMIT 1
$$;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User roles policies
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Destinations policies (public read, admin write)
CREATE POLICY "Anyone can view destinations" ON public.destinations
  FOR SELECT USING (true);
CREATE POLICY "Admins can manage destinations" ON public.destinations
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Stays policies
CREATE POLICY "Anyone can view approved stays" ON public.stays
  FOR SELECT USING (status = 'approved' OR owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Owners can insert their stays" ON public.stays
  FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners can update their stays" ON public.stays
  FOR UPDATE USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete stays" ON public.stays
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Bookings policies
CREATE POLICY "Users can view their bookings" ON public.bookings
  FOR SELECT USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Owners can view bookings for their stays" ON public.bookings
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.stays WHERE stays.id = bookings.stay_id AND stays.owner_id = auth.uid())
  );
CREATE POLICY "Users can create bookings" ON public.bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their bookings" ON public.bookings
  FOR UPDATE USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- Reviews policies
CREATE POLICY "Anyone can view reviews" ON public.reviews
  FOR SELECT USING (true);
CREATE POLICY "Users can create reviews" ON public.reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their reviews" ON public.reviews
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their reviews" ON public.reviews
  FOR DELETE USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- Wishlists policies
CREATE POLICY "Users can view their wishlists" ON public.wishlists
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their wishlists" ON public.wishlists
  FOR ALL USING (auth.uid() = user_id);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _role app_role;
BEGIN
  -- Get role from metadata or default to tourist
  _role := COALESCE(
    (NEW.raw_user_meta_data->>'role')::app_role,
    'tourist'::app_role
  );
  
  -- Create profile
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  
  -- Assign role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, _role);
  
  RETURN NEW;
END;
$$;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON public.destinations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_stays_updated_at BEFORE UPDATE ON public.stays
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_stays_destination ON public.stays(destination_id);
CREATE INDEX idx_stays_owner ON public.stays(owner_id);
CREATE INDEX idx_stays_status ON public.stays(status);
CREATE INDEX idx_bookings_user ON public.bookings(user_id);
CREATE INDEX idx_bookings_stay ON public.bookings(stay_id);
CREATE INDEX idx_reviews_stay ON public.reviews(stay_id);
CREATE INDEX idx_reviews_destination ON public.reviews(destination_id);
CREATE INDEX idx_wishlists_user ON public.wishlists(user_id);