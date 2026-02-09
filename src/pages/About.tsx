import { motion } from "framer-motion";
import { MapPin, Users, Target, Award, Heart, Leaf } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-kerala.jpg";

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "1200+", label: "Verified Stays" },
  { value: "50K+", label: "Happy Tourists" },
  { value: "100+", label: "Local Partners" },
];

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We connect travelers with genuine Kerala hospitality and local culture.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Promoting eco-friendly practices and supporting local communities.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every property and experience is verified for quality and safety.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kerala Backwaters"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Smart Tourism for <span className="text-gradient">God's Own Country</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to transform how people experience Kerala. 
              Through technology and local expertise, we make exploring this 
              beautiful state seamless, authentic, and unforgettable.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-soft"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-secondary" />
                <span className="text-secondary font-medium">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connecting Travelers with Authentic Kerala
              </h2>
              <p className="text-muted-foreground mb-4">
                Kerala Companion is designed to revolutionize 
                how tourists discover and experience the beauty of Kerala. We 
                combine smart technology with deep local knowledge to provide 
                personalized recommendations.
              </p>
              <p className="text-muted-foreground">
                Our platform supports local businesses, promotes sustainable 
                tourism, and ensures every traveler gets the most authentic 
                Kerala experience possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl bg-card shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Built by Tourism Enthusiasts
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Our team combines technology expertise with deep knowledge of 
              Kerala's tourism landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-8 md:p-12 shadow-soft"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Passionate About Kerala
            </h3>
            <p className="text-muted-foreground">
              We're a team of developers, designers, and tourism professionals 
              who share a common love for Kerala. Together, we're building the 
              future of smart tourism - one that benefits travelers, local 
              businesses, and the beautiful landscapes we all cherish.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
