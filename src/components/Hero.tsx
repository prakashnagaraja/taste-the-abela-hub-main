import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import burger from "../assets/WhatsApp Image 2025-07-25 at 2.01.20 PM.jpeg";
import cheeseburger from "../assets/Abela Burger.jpeg";
import fastfood from "../assets/Abela Burger.jpeg";

const images = [
  {
    src: burger,
    label: "🔥 Best Seller",
    badgeColor: "bg-red-600",
  },
  {
    src: cheeseburger,
    label: "👨‍🍳 Chef's Pick",
    badgeColor: "bg-yellow-500",
  },
  {
    src: fastfood,
    label: "🆕 New Arrival",
    badgeColor: "bg-green-600",
  },
];

export default function FullWidthSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="min-w-full relative" key={index}>
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>

            {/* Badge */}
            <div
              className={`absolute top-4 left-4 px-4 py-2 text-sm sm:text-base font-semibold text-white rounded-full shadow-md ${img.badgeColor}`}
            >
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>
    </div>
  );
}
