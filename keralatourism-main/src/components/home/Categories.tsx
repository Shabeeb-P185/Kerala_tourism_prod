import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Mountain, Landmark, PawPrint } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import hillImage from "@/assets/destination-hillstation.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import wildlifeImage from "@/assets/destination-wildlife.jpg";

const categories = [
  {
    id: "beach",
    name: "Beaches",
    description: "Sun-kissed shores and tranquil waves",
    icon: Waves,
    image: beachImage,
    count: 45,
  },
  {
    id: "hillstation",
    name: "Hill Stations",
    description: "Misty mountains and tea gardens",
    icon: Mountain,
    image: hillImage,
    count: 32,
  },
  {
    id: "heritage",
    name: "Heritage",
    description: "Ancient temples and cultural treasures",
    icon: Landmark,
    image: heritageImage,
    count: 58,
  },
  {
    id: "wildlife",
    name: "Wildlife",
    description: "Exotic fauna in natural habitats",
    icon: PawPrint,
    image: wildlifeImage,
    count: 24,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Explore Categories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Choose Your Adventure
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From serene backwaters to adventurous wildlife safaris, 
            discover the diverse experiences Kerala has to offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/destinations?category=${category.id}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[4/5] shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="h-5 w-5 text-secondary" />
                    <span className="text-white/70 text-sm">{category.count} places</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {category.description}
                  </p>
                  
                  <motion.div
                    className="mt-4 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium group-hover:translate-y-0 translate-y-full transition-transform duration-300">
                      Explore Now →
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
