import { motion } from "framer-motion";
import { Compass, Shield, Sparkles, Clock, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Smart Recommendations",
    description: "AI-powered suggestions based on your preferences, budget, and travel style.",
  },
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every stay is verified by our team for quality and authenticity.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description: "Curated itineraries tailored to your interests and schedule.",
  },
  {
    icon: Clock,
    title: "Real-time Availability",
    description: "Instant booking with live availability updates.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Connect with local guides for authentic experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support",
    description: "Supporting local businesses and sustainable tourism.",
  },
];

const Features = () => {
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Smart Tourism, Simplified
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We combine technology with local expertise to deliver 
            the best Kerala experience possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card hover:bg-primary transition-all duration-500 shadow-soft hover:shadow-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/10 transition-colors">
                <feature.icon className="h-6 w-6 text-secondary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
