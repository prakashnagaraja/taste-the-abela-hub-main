// import { Card, CardContent } from "@/components/ui/card";
// import galleryImage from "@/assets/gallery-collage.jpg";
// import myvideo from "@/assets/video1 (1).mp4";

// const Gallery = () => {
//   // Sample gallery data - in a real app, these would be actual food photos
//   const galleryItems = [
//     { id: 1, title: "The Queen Burger", category: "Beef Burgers" },
//     { id: 2, title: "Korean Chicken", category: "Chicken Burgers" },
//     { id: 3, title: "Loaded Fries", category: "Fries" },
//     { id: 4, title: "Nutella Waffle", category: "Waffles" },
//     { id: 5, title: "Rocher Shake", category: "Shakes" },
//     { id: 6, title: "Nashville Wings", category: "Wings" },
//     { id: 7, title: "Korean Shawarma", category: "Shawarma" },
//     { id: 8, title: "Signature Platter", category: "Combos" }
//   ];
  

//   return (
//     <section id="gallery" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Food Gallery</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Take a visual journey through our delicious creations. Every dish is crafted with love and presented with pride.
//           </p>
//         </div>

//         {/* Featured Gallery Image */}
//         <div className="mb-12">
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <img
//                 src={galleryImage}
//                 alt="Abela Burger Hub Food Gallery"
//                 className="w-full h-96 object-cover"
//               />

//             </CardContent>
//           </Card>
//         </div>
        

//         {/* Gallery Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryItems.map((item) => (
//             <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
//               <CardContent className="p-0">
//                 <div className="aspect-square bg-gradient-to-br from-food-warm/20 to-food-accent/20 flex items-center justify-center relative overflow-hidden">
//                   <div className="text-center p-4">
//                     <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.category}</p>
//                   </div>
//                   <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-foreground mb-4">Follow Us for More</h3>
//             <p className="text-muted-foreground mb-6">
//               See our latest creations and behind-the-scenes content on Instagram
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={() => window.open('https://www.instagram.com/abela_burger/', '_blank')}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Follow on Instagram
//               </button>
//               <button 
//                 onClick={() => window.open('https://wa.me/918925503875', '_blank')}
//                 className="px-8 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { Card, CardContent } from "@/components/ui/card";
import galleryImage from "@/assets/gallery-collage.jpg";
import myvideo from "@/assets/video1 (1).mp4"; // Make sure video file name has no parentheses

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: "The Queen Burger", category: "Beef Burgers" },
    { id: 2, title: "Korean Chicken", category: "Chicken Burgers" },
    { id: 3, title: "Loaded Fries", category: "Fries" },
    { id: 4, title: "Nutella Waffle", category: "Waffles" },
    { id: 5, title: "Rocher Shake", category: "Shakes" },
    { id: 6, title: "Nashville Wings", category: "Wings" },
    { id: 7, title: "Korean Shawarma", category: "Shawarma" },
    { id: 8, title: "Signature Platter", category: "Combos" },
    
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Food Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our delicious creations. Every dish is crafted with love and presented with pride.
          </p>
        </div>

        {/* Featured Gallery Image */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={galleryImage}
                alt="Abela Burger Hub Food Gallery"
                className="w-full h-96 object-cover"
              />
            </CardContent>
          </Card>
        </div>

        {/* Full-width Video */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <video
                className="w-full h-96 object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src={myvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-food-warm/20 to-food-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-4">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Follow Us for More</h3>
            <p className="text-muted-foreground mb-6">
              See our latest creations and behind-the-scenes content on Instagram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open("https://www.instagram.com/abela_burger/", "_blank")
                }
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Follow on Instagram
              </button>
              <button
                onClick={() => window.open("https://wa.me/918925503875", "_blank")}
                className="px-8 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
