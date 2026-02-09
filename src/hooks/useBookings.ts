import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Booking {
  id: string;
  user_id: string;
  stay_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: string;
  special_requests: string | null;
  payment_status: string;
  created_at: string;
  updated_at: string;
}

export interface BookingWithStay extends Booking {
  stays: {
    id: string;
    name: string;
    image_url: string | null;
    location: string;
  } | null;
}

export const useUserBookings = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["bookings", "user", user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          stays (
            id,
            name,
            image_url,
            location
          )
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as BookingWithStay[];
    },
    enabled: !!user,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (booking: {
      stay_id: string;
      check_in: string;
      check_out: string;
      guests: number;
      total_price: number;
      special_requests?: string;
    }) => {
      if (!user) throw new Error("User must be logged in");

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          ...booking,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data as Booking;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
};

export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      bookingId,
      status,
    }: {
      bookingId: string;
      status: string;
    }) => {
      const { data, error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", bookingId)
        .select()
        .single();

      if (error) throw error;
      return data as Booking;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
};

export const useOwnerBookings = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["bookings", "owner", user?.id],
    queryFn: async () => {
      if (!user) return [];

      // First get owner's stays
      const { data: stays, error: staysError } = await supabase
        .from("stays")
        .select("id")
        .eq("owner_id", user.id);

      if (staysError) throw staysError;
      if (!stays || stays.length === 0) return [];

      const stayIds = stays.map((s) => s.id);

      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          stays (
            id,
            name,
            image_url,
            location
          )
        `)
        .in("stay_id", stayIds)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as BookingWithStay[];
    },
    enabled: !!user,
  });
};
