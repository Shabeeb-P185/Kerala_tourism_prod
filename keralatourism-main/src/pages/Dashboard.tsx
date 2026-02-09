import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Building2, Calendar, Heart, Star, Settings, 
  LogOut, MapPin, Plus, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useUserBookings } from "@/hooks/useBookings";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

const Dashboard = () => {
  const { user, profile, role, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { data: bookings, isLoading: bookingsLoading } = useUserBookings();
  const { data: wishlist, isLoading: wishlistLoading } = useWishlist();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("You have been signed out");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={profile?.avatar_url || undefined} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {getInitials(profile?.full_name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">
                    Welcome, {profile?.full_name || "User"}
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-2">
                    {role === "owner" ? (
                      <>
                        <Building2 className="h-4 w-4" />
                        Property Owner
                      </>
                    ) : role === "admin" ? (
                      <>
                        <Settings className="h-4 w-4" />
                        Administrator
                      </>
                    ) : (
                      <>
                        <User className="h-4 w-4" />
                        Tourist
                      </>
                    )}
                  </p>
                </div>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </motion.div>

          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Bookings</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Your Bookings</CardTitle>
                  <CardDescription>
                    View and manage your upcoming and past bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bookingsLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  ) : bookings && bookings.length > 0 ? (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border bg-card"
                        >
                          <div className="flex items-center gap-4">
                            {booking.stays?.image_url && (
                              <img
                                src={booking.stays.image_url}
                                alt={booking.stays.name}
                                className="w-20 h-16 rounded-lg object-cover"
                              />
                            )}
                            <div>
                              <h4 className="font-medium">{booking.stays?.name}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {booking.stays?.location}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(booking.check_in).toLocaleDateString()} - {new Date(booking.check_out).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === "confirmed" 
                                ? "bg-green-100 text-green-700" 
                                : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : booking.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                            }`}>
                              {booking.status}
                            </span>
                            <span className="font-semibold">₹{booking.total_price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-medium text-lg mb-2">No bookings yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start exploring Kerala and book your first stay!
                      </p>
                      <Button onClick={() => navigate("/stays")}>
                        Browse Stays
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>Your Wishlist</CardTitle>
                  <CardDescription>
                    Places and stays you've saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {wishlistLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  ) : wishlist && wishlist.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"
                        >
                          {(item.stays?.image_url || item.destinations?.image_url) && (
                            <img
                              src={item.stays?.image_url || item.destinations?.image_url || ""}
                              alt={item.stays?.name || item.destinations?.name}
                              className="w-full h-32 object-cover"
                            />
                          )}
                          <div className="p-4">
                            <h4 className="font-medium">
                              {item.stays?.name || item.destinations?.name}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.stays?.location || item.destinations?.district}
                            </p>
                            {item.stays && (
                              <p className="text-primary font-semibold mt-2">
                                ₹{item.stays.price_per_night}/night
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-medium text-lg mb-2">Your wishlist is empty</h3>
                      <p className="text-muted-foreground mb-4">
                        Save your favorite destinations and stays for later!
                      </p>
                      <Button onClick={() => navigate("/destinations")}>
                        Explore Destinations
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your account information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <p className="text-foreground">{profile?.full_name || "Not set"}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-foreground">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Phone</label>
                        <p className="text-foreground">{profile?.phone || "Not set"}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Type</label>
                        <p className="text-foreground capitalize">{role || "Tourist"}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {role === "owner" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Property Owner Dashboard
                  </CardTitle>
                  <CardDescription>
                    Manage your properties and view bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-3xl font-bold text-primary">0</p>
                      <p className="text-sm text-muted-foreground">Properties Listed</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-3xl font-bold text-primary">0</p>
                      <p className="text-sm text-muted-foreground">Total Bookings</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <p className="text-3xl font-bold text-primary">₹0</p>
                      <p className="text-sm text-muted-foreground">Total Earnings</p>
                    </div>
                  </div>
                  <Button className="mt-6" variant="kerala">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Property
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
