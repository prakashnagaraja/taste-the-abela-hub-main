// // import { useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // import burger from "../assets/WhatsApp Image 2025-07-25 at 2.01.20 PM.jpeg";
// // import cheeseburger from "../assets/hero-burger.jpg";
// // import fastfood from "../assets/Abela Burger.jpeg";

// // const images = [
// //   {
// //     src: burger,
// //     label: "🔥 Best Seller",
// //     badgeColor: "bg-red-600",
// //   },
// //   {
// //     src: cheeseburger,
// //     label: "👨‍🍳 Chef's Pick",
// //     badgeColor: "bg-yellow-500",
// //   },
// //   {
// //     src: fastfood,
// //     label: "🆕 New Arrival",
// //     badgeColor: "bg-green-600",
// //   },
// // ];

// // export default function FullWidthSlider() {
// //   const [current, setCurrent] = useState(0);

// //   const prevSlide = () => {
// //     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   const nextSlide = () => {
// //     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //   };

// //   return (
// //     <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
// //       <div
// //         className="flex transition-transform duration-700 ease-in-out"
// //         style={{ transform: `translateX(-${current * 100}%)` }}
// //       >
// //         {images.map((img, index) => (
// //           <div className="min-w-full relative" key={index}>
// //             <img
// //               src={img.src}
// //               alt={img.label}
// //               className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
// //             />

// //             {/* Dark gradient overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>

// //             {/* Badge */}
// //             <div
// //               className={`absolute top-4 left-4 px-4 py-2 text-sm sm:text-base font-semibold text-white rounded-full shadow-md ${img.badgeColor}`}
// //             >
// //               {img.label}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Navigation Arrows */}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
// //       >
// //         <ChevronLeft className="w-5 h-5 text-black" />
// //       </button>
// //       <button
// //         onClick={nextSlide}
// //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
// //       >
// //         <ChevronRight className="w-5 h-5 text-black" />
// //       </button>
// //     </div>
// //   );
// //}

// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-burger.jpg";

// const Hero = () => {
//   const scrollToMenu = () => {
//     const element = document.getElementById("menu");
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Delicious burgers and fries"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
//           Abela Burger Hub
//           <span className="block text-2xl md:text-3xl font-normal text-orange-200 mt-2">
          
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
//            Discover our mouth-watering selection of handcrafted burgers, crispy fries, waffles, shakes, shawarmas, and delicious treats — all made with the finest ingredients. 🍔🍟🧇🥤🌯</p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button
//             // variant="hero"
//             size="lg"
//             onClick={scrollToMenu}
//             className="text-lg px-8 py-4"
//           >
//             View Our Menu
//           </Button>
//           <Button
            
//             size="lg"
//             className="text-lg px-8 py-4"
//           >
//            <a href="https://www.zomato.com/chennai/abela-1-thuraipakkam/order" target="_blank" rel="noopener norerrer">Order Now Zamoto</a>
//           </Button>
//         </div>

//         {/* <div className="mt-12 text-white/80">
//           <p className="text-lg">📍 Oggiyamduraipakkam, Chennai - 600097</p>
//           <p className="text-lg mt-2">📞 8925 503 875</p>
//         </div> */}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <div className="animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 border-white/50 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
          Abela Burger Hub
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
