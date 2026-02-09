import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Search, MapPin, Filter, Waves, Mountain, Landmark, PawPrint, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import beachImage from "@/assets/destination-beach.jpg";
import hillImage from "@/assets/destination-hillstation.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import wildlifeImage from "@/assets/destination-wildlife.jpg";

const categories = [
  { id: "all", name: "All", icon: MapPin },
  { id: "beach", name: "Beaches", icon: Waves },
  { id: "hillstation", name: "Hill Stations", icon: Mountain },
  { id: "heritage", name: "Heritage", icon: Landmark },
  { id: "wildlife", name: "Wildlife", icon: PawPrint },
];

const destinations = [
  {
    id: 1,
    name: "Kovalam Beach",
    location: "Thiruvananthapuram",
    category: "beach",
    rating: 4.8,
    reviews: 245,
    image: beachImage,
    description: "Famous crescent-shaped beach with lighthouse views",
    bestTime: "Oct - Mar",
  },
  {
    id: 2,
    name: "Munnar",
    location: "Idukki",
    category: "hillstation",
    rating: 4.9,
    reviews: 512,
    image: hillImage,
    description: "Sprawling tea estates and misty mountain peaks",
    bestTime: "Sep - May",
  },
  {
    id: 3,
    name: "Padmanabhaswamy Temple",
    location: "Thiruvananthapuram",
    category: "heritage",
    rating: 4.7,
    reviews: 189,
    image: heritageImage,
    description: "Ancient Dravidian-style temple with golden architecture",
    bestTime: "All Year",
  },
  {
    id: 4,
    name: "Periyar Wildlife Sanctuary",
    location: "Thekkady",
    category: "wildlife",
    rating: 4.6,
    reviews: 324,
    image: wildlifeImage,
    description: "Home to elephants, tigers, and diverse biodiversity",
    bestTime: "Oct - Jun",
  },
  {
    id: 5,
    name: "Varkala Beach",
    location: "Varkala",
    category: "beach",
    rating: 4.7,
    reviews: 198,
    image: beachImage,
    description: "Unique cliff beach with natural springs",
    bestTime: "Nov - Mar",
  },
  {
    id: 6,
    name: "Wayanad",
    location: "Wayanad",
    category: "hillstation",
    rating: 4.8,
    reviews: 445,
    image: hillImage,
    description: "Lush green valleys with ancient caves and waterfalls",
    bestTime: "Oct - May",
  },
];

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = activeCategory === "all" || dest.category === activeCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              Explore Destinations
            </h1>
            <p className="text-foreground/80 max-w-xl mx-auto">
              Discover the most beautiful places in Kerala, from serene beaches 
              to misty hill stations and ancient heritage sites.
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
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-elevated"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border bg-card sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "kerala" : "outline"}
                size="sm"
                onClick={() => setSearchParams(cat.id === "all" ? {} : { category: cat.id })}
                className="flex-shrink-0"
              >
                <cat.icon className="h-4 w-4" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredDestinations.length}</span> destinations
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/destinations/${dest.id}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm">
                        {dest.bestTime}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                            {dest.name}
                          </h3>
                          <p className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                            <MapPin className="h-4 w-4" />
                            {dest.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span className="font-semibold">{dest.rating}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-muted-foreground text-sm line-clamp-2">
                        {dest.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
