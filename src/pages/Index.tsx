import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <GoogleReviews/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
