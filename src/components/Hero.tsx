import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-burger.jpg";
import heroImage2 from "@/assets/a-high-resolution-well-lit-food-photogra_f-QDFoWfQPeKySswNZFviA_VK8MwDqhTf2CFcWwjfkBkw.jpeg";
import heroImage3 from "@/assets/a-high-resolution-well-lit-food-photogra_0wrH0vQOTmyC_2H6UF4Akw_VK8MwDqhTf2CFcWwjfkBkw.jpeg";

const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImageIndex]}
          alt="Abela Restaurant Items"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
          Abela Burger 
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover our mouth-watering selection of handcrafted burgers, crispy fries, waffles, shakes, shawarmas, and delicious treats — all made with the finest ingredients. 🍔🍟🧇🥤🌯
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="text-lg px-8 py-4"
          >
            View Our Menu
          </Button>
          <Button size="lg" className="text-lg px-8 py-4">
            <a
              href="https://www.zomato.com/chennai/abela-1-thuraipakkam/order"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now Zomato
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 border-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
