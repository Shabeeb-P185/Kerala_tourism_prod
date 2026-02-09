import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedStays from "@/components/home/FeaturedStays";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedStays />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
