import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, MapPin, Filter, Star, Wifi, Car, Coffee, 
  Bath, Tv, Wind, Users, IndianRupee 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const stays = [
  {
    id: 1,
    name: "Backwater Heritage Resort",
    location: "Alleppey",
    type: "Resort",
    price: 8500,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    amenities: ["wifi", "parking", "breakfast", "ac", "tv"],
    verified: true,
    guests: 4,
  },
  {
    id: 2,
    name: "Munnar Tea Valley Homestay",
    location: "Munnar",
    type: "Homestay",
    price: 4200,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["wifi", "breakfast", "parking"],
    verified: true,
    guests: 3,
  },
  {
    id: 3,
    name: "Beachside Boutique Villa",
    location: "Kovalam",
    type: "Villa",
    price: 12000,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    amenities: ["wifi", "parking", "breakfast", "ac", "tv", "pool"],
    verified: true,
    guests: 6,
  },
  {
    id: 4,
    name: "Treehouse Retreat",
    location: "Wayanad",
    type: "Treehouse",
    price: 6500,
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    amenities: ["breakfast", "parking"],
    verified: true,
    guests: 2,
  },
  {
    id: 5,
    name: "Houseboat Deluxe",
    location: "Kumarakom",
    type: "Houseboat",
    price: 15000,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    amenities: ["wifi", "breakfast", "ac"],
    verified: true,
    guests: 4,
  },
  {
    id: 6,
    name: "Heritage Palace Stay",
    location: "Kochi",
    type: "Heritage",
    price: 9800,
    rating: 4.6,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: ["wifi", "parking", "breakfast", "ac", "tv"],
    verified: true,
    guests: 4,
  },
];

const propertyTypes = ["All", "Resort", "Homestay", "Villa", "Houseboat", "Treehouse", "Heritage"];

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  ac: Wind,
  tv: Tv,
  pool: Bath,
};

const Stays = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredStays = stays.filter((stay) => {
    const matchesType = selectedType === "All" || stay.type === selectedType;
    const matchesSearch = stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = stay.price >= priceRange[0] && stay.price <= priceRange[1];
    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient kerala-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Find Your Perfect Stay
            </h1>
            <p className="text-foreground/80 max-w-xl mx-auto">
              From luxury resorts to authentic homestays, discover verified 
              accommodations with genuine Kerala hospitality.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search stays by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-elevated"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="py-4 border-b border-border bg-card sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "kerala" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="flex-shrink-0"
                >
                  {type}
                </Button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-border"
            >
              <div className="max-w-md">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={20000}
                  step={500}
                  className="mt-2"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stays Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredStays.length}</span> properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStays.map((stay, index) => (
              <motion.div
                key={stay.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="backdrop-blur-sm">
                        {stay.type}
                      </Badge>
                      {stay.verified && (
                        <Badge className="bg-primary/90 backdrop-blur-sm">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                          {stay.name}
                        </h3>
                        <p className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                          <MapPin className="h-4 w-4" />
                          {stay.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="font-semibold">{stay.rating}</span>
                        <span className="text-muted-foreground">({stay.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-3 text-muted-foreground text-sm">
                      <Users className="h-4 w-4" />
                      Up to {stay.guests} guests
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      {stay.amenities.slice(0, 4).map((amenity) => {
                        const Icon = amenityIcons[amenity];
                        if (!Icon) return null;
                        return (
                          <div
                            key={amenity}
                            className="p-2 rounded-lg bg-muted"
                            title={amenity}
                          >
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                        );
                      })}
                      {stay.amenities.length > 4 && (
                        <span className="text-muted-foreground text-sm">
                          +{stay.amenities.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                      <div className="flex items-center">
                        <IndianRupee className="h-5 w-5 text-foreground" />
                        <span className="text-2xl font-bold text-foreground">
                          {stay.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm ml-1">/night</span>
                      </div>
                      <Button variant="kerala" size="sm" asChild>
                        <Link to={`/stays/${stay.id}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stays;
