import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string | null;
  category: string;
  district: string;
  image_url: string | null;
  gallery: string[];
  best_time_to_visit: string[];
  average_temperature: Record<string, unknown> | null;
  highlights: string[];
  activities: string[];
  nearby_attractions: string[];
  latitude: number | null;
  longitude: number | null;
  featured: boolean;
  rating: number;
  review_count: number;
  created_at: string;
  updated_at: string;
}

export const useDestinations = (options?: {
  category?: string;
  district?: string;
  featured?: boolean;
  search?: string;
}) => {
  return useQuery({
    queryKey: ["destinations", options],
    queryFn: async () => {
      let query = supabase.from("destinations").select("*");

      if (options?.category) {
        query = query.eq("category", options.category);
      }

      if (options?.district) {
        query = query.eq("district", options.district);
      }

      if (options?.featured !== undefined) {
        query = query.eq("featured", options.featured);
      }

      if (options?.search) {
        query = query.or(
          `name.ilike.%${options.search}%,description.ilike.%${options.search}%,district.ilike.%${options.search}%`
        );
      }

      const { data, error } = await query.order("name");

      if (error) throw error;
      return data as Destination[];
    },
  });
};

export const useDestination = (slug: string) => {
  return useQuery({
    queryKey: ["destination", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      return data as Destination | null;
    },
    enabled: !!slug,
  });
};

export const useFeaturedDestinations = (limit = 4) => {
  return useQuery({
    queryKey: ["destinations", "featured", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .eq("featured", true)
        .limit(limit);

      if (error) throw error;
      return data as Destination[];
    },
  });
};
