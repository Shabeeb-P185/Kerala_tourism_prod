import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 hero-gradient kerala-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* For Tourists */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <User className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Plan Your Perfect Kerala Trip
            </h3>
            <p className="mt-4 text-muted-foreground">
              Get personalized recommendations, book verified stays, and explore 
              hidden gems with our smart tourism platform.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Smart destination recommendations",
                "Verified accommodations",
                "Easy booking & management",
                "Local insights & tips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs text-secondary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <Link to="/register">
                Start Exploring
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* For Property Owners */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              List Your Property
            </h3>
            <p className="mt-4 text-muted-foreground">
              Join our platform and reach thousands of tourists looking for 
              authentic Kerala stays. Manage bookings with ease.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Reach verified tourists",
                "Easy property management",
                "Real-time booking updates",
                "Secure payment processing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="kerala" size="lg" className="mt-8" asChild>
              <Link to="/register?type=owner">
                Register Property
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
