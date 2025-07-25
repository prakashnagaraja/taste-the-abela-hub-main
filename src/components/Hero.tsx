// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // ✅ Import local images
// import burger from "../assets/WhatsApp Image 2025-07-25 at 2.01.20 PM.jpeg";
// import cheeseburger from "../assets/Abela Burger.jpeg";
// import fastfood from "../assets/shake.jpg";

// const images = [
//   {
//     src: burger,
//     label: "Best Seller",
//     badgeColor: "bg-red-500",
//   },
//   {
//     src: cheeseburger,
//     label: "Chef's Pick",
//     badgeColor: "bg-orange-500",
//   },
//   {
//     src: fastfood,
//     label: "New Arrival",
//     badgeColor: "bg-green-600",
//   },
// ];

// export default function FullWidthSlider() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <div className="min-w-full relative" key={index}>
//             <img
//               src={img.src}
//               alt={img.label}
//               className="w-full h-[500px] object-cover"
//             />
//             <div
//               className={`absolute top-5 right-5 px-4 py-2 text-white text-sm rounded-full shadow ${img.badgeColor}`}
//             >
//               {img.label}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
//       >
//         <ChevronRight />
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import local images
import burger from "../assets/WhatsApp Image 2025-07-25 at 2.01.20 PM.jpeg";
import cheeseburger from "../assets/Abela Burger.jpeg";
import fastfood from "../assets/shake.jpg";

const images = [
  {
    src: burger,
    label: "Best Seller",
    badgeColor: "bg-red-500",
  },
  {
    src: cheeseburger,
    label: "Chef's Pick",
    badgeColor: "bg-orange-500",
  },
  {
    src: fastfood,
    label: "New Arrival",
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
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="min-w-full relative" key={index}>
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div
              className={`absolute top-3 right-3 sm:top-5 sm:right-5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white rounded-full shadow ${img.badgeColor}`}
            >
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
