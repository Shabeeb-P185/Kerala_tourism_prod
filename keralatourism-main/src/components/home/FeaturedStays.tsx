import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stays = [
  {
    id: 1,
    name: "Backwater Heritage Resort",
    location: "Alleppey",
    price: 8500,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    type: "Resort",
    amenities: ["wifi", "parking", "breakfast"],
    verified: true,
  },
  {
    id: 2,
    name: "Munnar Tea Valley Homestay",
    location: "Munnar",
    price: 4200,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    type: "Homestay",
    amenities: ["wifi", "breakfast"],
    verified: true,
  },
  {
    id: 3,
    name: "Beachside Boutique Villa",
    location: "Kovalam",
    price: 12000,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    type: "Villa",
    amenities: ["wifi", "parking", "breakfast"],
    verified: true,
  },
];

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
};

const FeaturedStays = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Handpicked For You
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Stays
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Verified properties with exceptional service and authentic Kerala hospitality.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/stays">View All Stays</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay, index) => (
            <motion.div
              key={stay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
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

                <div className="flex items-center gap-3 mt-4">
                  {stay.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
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
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      ₹{stay.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm"> /night</span>
                  </div>
                  <Button variant="kerala" size="sm" asChild>
                    <Link to={`/stays/${stay.id}`}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
