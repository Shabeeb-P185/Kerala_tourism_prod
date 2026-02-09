import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Review {
  id: string;
  user_id: string;
  stay_id: string | null;
  destination_id: string | null;
  rating: number;
  title: string | null;
  content: string;
  visit_date: string | null;
  images: string[];
  helpful_count: number;
  created_at: string;
  updated_at: string;
}

export interface ReviewWithProfile extends Review {
  profiles: {
    full_name: string | null;
    avatar_url: string | null;
  } | null;
}

export const useStayReviews = (stayId: string) => {
  return useQuery({
    queryKey: ["reviews", "stay", stayId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("stay_id", stayId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Review[];
    },
    enabled: !!stayId,
  });
};

export const useDestinationReviews = (destinationId: string) => {
  return useQuery({
    queryKey: ["reviews", "destination", destinationId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("destination_id", destinationId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Review[];
    },
    enabled: !!destinationId,
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (review: {
      stay_id?: string;
      destination_id?: string;
      rating: number;
      title?: string;
      content: string;
      visit_date?: string;
    }) => {
      if (!user) throw new Error("User must be logged in");

      const { data, error } = await supabase
        .from("reviews")
        .insert({
          ...review,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data as Review;
    },
    onSuccess: (data) => {
      if (data.stay_id) {
        queryClient.invalidateQueries({ queryKey: ["reviews", "stay", data.stay_id] });
      }
      if (data.destination_id) {
        queryClient.invalidateQueries({ queryKey: ["reviews", "destination", data.destination_id] });
      }
    },
  });
};
