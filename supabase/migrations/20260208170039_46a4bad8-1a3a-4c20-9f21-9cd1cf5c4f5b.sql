
-- Fix 1: Prevent admin role self-assignment in handle_new_user trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _role app_role;
BEGIN
  -- Get role from metadata or default to tourist
  _role := COALESCE(
    (NEW.raw_user_meta_data->>'role')::app_role,
    'tourist'::app_role
  );
  
  -- SECURITY: Prevent self-assignment of admin role
  IF _role = 'admin' THEN
    _role := 'tourist';
  END IF;
  
  -- Create profile
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  
  -- Assign role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, _role);
  
  RETURN NEW;
END;
$function$;

-- Fix 2: Add trigger to validate booking price server-side
CREATE OR REPLACE FUNCTION public.validate_booking_price()
RETURNS TRIGGER AS $$
DECLARE
  stay_price DECIMAL;
  nights INTEGER;
  calculated_price DECIMAL;
BEGIN
  SELECT price_per_night INTO stay_price FROM public.stays WHERE id = NEW.stay_id;
  
  IF stay_price IS NULL THEN
    RAISE EXCEPTION 'Stay not found';
  END IF;
  
  nights := NEW.check_out - NEW.check_in;
  
  IF nights <= 0 THEN
    RAISE EXCEPTION 'Check-out must be after check-in';
  END IF;
  
  calculated_price := stay_price * nights;
  
  IF NEW.total_price != calculated_price THEN
    -- Override with correct price
    NEW.total_price := calculated_price;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER validate_booking_price_trigger
BEFORE INSERT ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.validate_booking_price();
