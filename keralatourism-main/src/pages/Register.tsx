import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { 
  Mail, Lock, User, Building2, ArrowRight, Eye, EyeOff, 
  MapPin, Phone, CheckCircle, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { z } from "zod";

const touristSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const ownerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("type") === "owner" ? "owner" : "tourist";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Tourist form state
  const [touristForm, setTouristForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  
  // Owner form state
  const [ownerForm, setOwnerForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleTouristSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = touristSchema.safeParse(touristForm);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const fullName = `${touristForm.firstName} ${touristForm.lastName}`;
    const { error } = await signUp(
      touristForm.email, 
      touristForm.password, 
      fullName, 
      "tourist",
      touristForm.phone || undefined
    );
    setLoading(false);

    if (error) {
      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please sign in instead.");
      } else {
        toast.error(error.message);
      }
      return;
    }

    toast.success("Account created successfully! Welcome to Kerala Tourism.");
    navigate("/");
  };

  const handleOwnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = ownerSchema.safeParse(ownerForm);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await signUp(
      ownerForm.email, 
      ownerForm.password, 
      ownerForm.fullName, 
      "owner",
      ownerForm.phone
    );
    setLoading(false);

    if (error) {
      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please sign in instead.");
      } else {
        toast.error(error.message);
      }
      return;
    }

    toast.success("Property owner account created! You can now list your properties.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="font-display text-2xl font-bold">
                  Kerala<span className="text-secondary">Tourism</span>
                </span>
              </Link>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Create Your Account
              </h1>
              <p className="text-muted-foreground mt-2">
                Join us and start exploring God's Own Country
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl shadow-elevated p-6 md:p-8"
            >
              <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="tourist" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Tourist
                  </TabsTrigger>
                  <TabsTrigger value="owner" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Property Owner
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="tourist">
                  <form onSubmit={handleTouristSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={touristForm.firstName}
                          onChange={(e) => setTouristForm(prev => ({ ...prev, firstName: e.target.value }))}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={touristForm.lastName}
                          onChange={(e) => setTouristForm(prev => ({ ...prev, lastName: e.target.value }))}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          className="pl-10" 
                          value={touristForm.email}
                          onChange={(e) => setTouristForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          className="pl-10" 
                          value={touristForm.phone}
                          onChange={(e) => setTouristForm(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a password" 
                          className="pl-10 pr-10" 
                          value={touristForm.password}
                          onChange={(e) => setTouristForm(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-destructive">{errors.password}</p>
                      )}
                    </div>
                    <Button 
                      type="submit" 
                      variant="kerala" 
                      size="lg" 
                      className="w-full mt-6"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          Create Tourist Account
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="owner">
                  <form onSubmit={handleOwnerSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="ownerName" 
                          placeholder="Your full name" 
                          className="pl-10" 
                          value={ownerForm.fullName}
                          onChange={(e) => setOwnerForm(prev => ({ ...prev, fullName: e.target.value }))}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-sm text-destructive">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ownerEmail">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="ownerEmail" 
                          type="email" 
                          placeholder="business@example.com" 
                          className="pl-10" 
                          value={ownerForm.email}
                          onChange={(e) => setOwnerForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ownerPhone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="ownerPhone" 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          className="pl-10" 
                          value={ownerForm.phone}
                          onChange={(e) => setOwnerForm(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ownerPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="ownerPassword" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a password" 
                          className="pl-10 pr-10" 
                          value={ownerForm.password}
                          onChange={(e) => setOwnerForm(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-destructive">{errors.password}</p>
                      )}
                    </div>

                    <div className="bg-muted/50 rounded-xl p-4 mt-4">
                      <h4 className="font-medium text-sm mb-2">What happens next?</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Submit your application
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Our team verifies your property
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Start receiving bookings!
                        </li>
                      </ul>
                    </div>

                    <Button 
                      type="submit" 
                      variant="gold" 
                      size="lg" 
                      className="w-full mt-6"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          Register as Property Owner
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
