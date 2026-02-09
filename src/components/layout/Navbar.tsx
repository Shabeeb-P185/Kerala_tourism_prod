import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, User, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Stays", href: "/stays" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackground = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        showBackground ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <MapPin className={`h-6 w-6 ${showBackground ? "text-primary" : "text-white"}`} />
            <span
              className={`font-display text-xl font-bold ${
                showBackground ? "text-foreground" : "text-white"
              }`}
            >
              Kerala <span className="text-secondary">Companion</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  showBackground
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                } ${location.pathname === link.href ? (showBackground ? "text-foreground" : "text-white") : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant={showBackground ? "ghost" : "heroOutline"} size="sm" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button variant={showBackground ? "default" : "hero"} size="sm" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${showBackground ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${showBackground ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <User className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
