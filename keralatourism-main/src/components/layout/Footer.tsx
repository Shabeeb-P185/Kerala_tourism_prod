import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-secondary" />
            <span className="font-display text-xl font-bold">
              Kerala <span className="text-secondary">Companion</span>
            </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Discover God's Own Country with our smart tourism platform. 
              Experience the beauty of Kerala like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Destinations", "Stays", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Beaches", "Hill Stations", "Heritage Sites", "Wildlife"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/destinations"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                Thiruvananthapuram, Kerala
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                info@keralatourism.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                +91 471 234 5678
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© 2025 Kerala Companion. All rights reserved. | Smart Tourism Management System</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
