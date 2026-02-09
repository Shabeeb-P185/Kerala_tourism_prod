import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Stay {
  id: string;
  owner_id: string | null;
  name: string;
  slug: string;
  description: string;
  short_description: string | null;
  type: string;
  destination_id: string | null;
  location: string;
  district: string;
  address: string | null;
  image_url: string | null;
  gallery: string[];
  price_per_night: number;
  original_price: number | null;
  amenities: string[];
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  policies: Record<string, unknown>;
  latitude: number | null;
  longitude: number | null;
  featured: boolean;
  verified: boolean;
  rating: number;
  review_count: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useStays = (options?: {
  type?: string;
  district?: string;
  featured?: boolean;
  verified?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  destinationId?: string;
}) => {
  return useQuery({
    queryKey: ["stays", options],
    queryFn: async () => {
      let query = supabase.from("stays").select("*");

      if (options?.type) {
        query = query.eq("type", options.type);
      }

      if (options?.district) {
        query = query.eq("district", options.district);
      }

      if (options?.featured !== undefined) {
        query = query.eq("featured", options.featured);
      }

      if (options?.verified !== undefined) {
        query = query.eq("verified", options.verified);
      }

      if (options?.minPrice !== undefined) {
        query = query.gte("price_per_night", options.minPrice);
      }

      if (options?.maxPrice !== undefined) {
        query = query.lte("price_per_night", options.maxPrice);
      }

      if (options?.destinationId) {
        query = query.eq("destination_id", options.destinationId);
      }

      if (options?.search) {
        query = query.or(
          `name.ilike.%${options.search}%,description.ilike.%${options.search}%,location.ilike.%${options.search}%`
        );
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      return data as Stay[];
    },
  });
};

export const useStay = (slug: string) => {
  return useQuery({
    queryKey: ["stay", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stays")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      return data as Stay | null;
    },
    enabled: !!slug,
  });
};

export const useFeaturedStays = (limit = 4) => {
  return useQuery({
    queryKey: ["stays", "featured", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stays")
        .select("*")
        .eq("featured", true)
        .eq("status", "approved")
        .limit(limit);

      if (error) throw error;
      return data as Stay[];
    },
  });
};

export const useOwnerStays = (ownerId: string) => {
  return useQuery({
    queryKey: ["stays", "owner", ownerId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stays")
        .select("*")
        .eq("owner_id", ownerId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Stay[];
    },
    enabled: !!ownerId,
  });
};
