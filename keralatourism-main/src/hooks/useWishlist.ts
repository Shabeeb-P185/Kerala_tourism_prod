import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface WishlistItem {
  id: string;
  user_id: string;
  stay_id: string | null;
  destination_id: string | null;
  created_at: string;
}

export const useWishlist = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from("wishlists")
        .select(`
          *,
          stays (
            id,
            name,
            slug,
            image_url,
            location,
            price_per_night,
            rating
          ),
          destinations (
            id,
            name,
            slug,
            image_url,
            district,
            rating
          )
        `)
        .eq("user_id", user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

export const useToggleWishlist = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({
      stayId,
      destinationId,
    }: {
      stayId?: string;
      destinationId?: string;
    }) => {
      if (!user) throw new Error("User must be logged in");

      // Check if already in wishlist
      let query = supabase
        .from("wishlists")
        .select("id")
        .eq("user_id", user.id);

      if (stayId) {
        query = query.eq("stay_id", stayId);
      }
      if (destinationId) {
        query = query.eq("destination_id", destinationId);
      }

      const { data: existing } = await query.maybeSingle();

      if (existing) {
        // Remove from wishlist
        const { error } = await supabase
          .from("wishlists")
          .delete()
          .eq("id", existing.id);

        if (error) throw error;
        return { action: "removed" };
      } else {
        // Add to wishlist
        const { error } = await supabase
          .from("wishlists")
          .insert({
            user_id: user.id,
            stay_id: stayId || null,
            destination_id: destinationId || null,
          });

        if (error) throw error;
        return { action: "added" };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
};

export const useIsInWishlist = (stayId?: string, destinationId?: string) => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["wishlist", "check", stayId, destinationId, user?.id],
    queryFn: async () => {
      if (!user) return false;

      let query = supabase
        .from("wishlists")
        .select("id")
        .eq("user_id", user.id);

      if (stayId) {
        query = query.eq("stay_id", stayId);
      }
      if (destinationId) {
        query = query.eq("destination_id", destinationId);
      }

      const { data } = await query.maybeSingle();
      return !!data;
    },
    enabled: !!user && (!!stayId || !!destinationId),
  });
};
