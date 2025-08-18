


// import { Card, CardContent } from "@/components/ui/card";

// // Import local assets
// import galleryImage from "@/assets/gallery-collage.jpg";
// import myvideo from "@/assets/video1 (1).mp4"; // Renamed to remove spaces/parentheses
// import myvideo1 from "@/assets/video 2.mp4"; // Same cleanup
// import b1Img from "@/assets/b1.jpeg";
// import nashvilleImg from "@/assets/nashville mariena.jpeg"; // Use hyphens instead of spaces
// import w2Img from "@/assets/w2.png";
// import burgerImg from "@/assets/burger.jpg";
// import chickenwingsImg from "@/assets/chicken wings.jpg";
// import shake1Img from "@/assets/shake1.png";
// import shawarmaImg from "@/assets/shawarma.jpg";
// import milkeshakeImg from "@/assets/ms.jpeg";
// import friesImg from "@/assets/loaded-fries.jpg";

// const Gallery = () => {
//   const galleryItems = [
//     {
//       id: 1,
//       title: "The Chicken Burger",
//       category: "B",
//       imageUrl: b1Img,
//     },
//     {
//       id: 2,
//       title: "Crispy Nashville Mania",
//       category: "Chicken Burgers",
//       imageUrl: nashvilleImg, // ✅ Direct variable, not a string
//     },
//     {
//       id: 3,
//       title: "Wings",
//       category: "wings",
//       imageUrl: w2Img,
//     },
//     {
//       id: 4,
//       title: "Chicken Wings",
//       category: "Wings",
//       imageUrl: chickenwingsImg,
//     },
//     {
//       id: 5,
//       title: "Cold Coffee",
//       category: "Shakes",
//       imageUrl: shake1Img,
//     },
//     {
//       id: 6,
//       title: "Loaded fries",
//       category: "Fries",
//       imageUrl: friesImg,
//     },
//     {
//       id: 7,
//       title: "Korean Shawarma",
//       category: "Shawarma",
//       imageUrl: shawarmaImg,
//     },
//     {
//       id: 8,
//       title: "Milk Shake",
//       category: "Combos",
//       imageUrl: milkeshakeImg,
//     },
//   ];

//   return (
//     <section id="gallery" className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Food Gallery</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Take a visual journey through our delicious creations. Every dish is crafted with love and presented with pride.
//           </p>
//         </div>

//         {/* Two Videos Side by Side */}
//         <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Left Video */}
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <video
//                 className="w-full h-96 object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 controls
//               >
//                 <source src={myvideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </CardContent>
//           </Card>

//           {/* Right Video */}
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <video
//                 className="w-full h-96 object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 controls
//               >
//                 <source src={myvideo1} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </CardContent>
//           </Card>
//         </div>
        

//         {/* Gallery Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryItems.map((item) => (
//             <Card
//               key={item.id}
//               className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <CardContent className="p-0">
//                 <div className="relative aspect-square">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
//                     <h3 className="font-semibold text-lg">{item.title}</h3>
//                     <p className="text-sm">{item.category}</p>
//                   </div>
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
//                 onClick={() =>
//                   window.open("https://www.instagram.com/abela_burger/", "_blank")
//                 }
//                 className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Follow on Instagram
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;


// import { Card, CardContent } from "@/components/ui/card";
// import galleryImage from "@/assets/gallery-collage.jpg";
// import myvideo from "@/assets/video1 (1).mp4"; // Make sure file name has no spaces or parentheses in actual usage
// import myvideo1 from "@/assets/video 2.mp4";
// import shakeImg from "@/assets/shake.jpg";


// const Gallery = () => {
//   const galleryItems = [
//     {
//       id: 1,
//       title: "The Chicken Burger",
//       category: "B",
//       imageUrl: "https://i.pinimg.com/736x/4a/58/4e/4a584e2e9a41da94a9375a02cacfb8ef.jpg",
//     },
//     {
//       id: 2,
//       title: "Crispy Nashville Mania",
//       category: "Chicken Burgers",
//       imageUrl: "shakeImg",
//     },
//     {
//       id: 3,
//       title: "Loaded Fries",
//       category: "Fries",
//       imageUrl: "l",
//     },
//     {
//       id: 4,
//       title: "Chicken Shawarma",
//       category: "Waffles",
//       imageUrl: "https://source.unsplash.com/400x400/?nutella,waffle",
//     },
//     {
//       id: 5,
//       title: "Cold Coffee",
//       category: "Shakes",
//       imageUrl: "https://source.unsplash.com/400x400/?milkshake,chocolate",
//     },
//     {
//       id: 6,
//       title: "Nashville Wings",
//       category: "Wings",
//       imageUrl: "https://source.unsplash.com/400x400/?chicken,wings",
//     },
//     {
//       id: 7,
//       title: "Korean Shawarma",
//       category: "Shawarma",
//       imageUrl: "https://source.unsplash.com/400x400/?shawarma",
//     },
//     {
//       id: 8,
//       title: "Melon Rush",
//       category: "Combos",
//       imageUrl: "https://source.unsplash.com/400x400/?food,platter",
//     },
//   ];

//   return (
//     <section id="gallery" className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Food Gallery</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Take a visual journey through our delicious creations. Every dish is crafted with love and presented with pride.
//           </p>
//         </div>

//         {/* Featured Gallery Image */}
//         {/* <div className="mb-12">
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <img
//                 src={galleryImage}
//                 alt="Abela Burger Hub Food Gallery"
//                 className="w-full h-96 object-cover"
//               />
//             </CardContent>
//           </Card>
//         </div> */}

//         {/* Full-width Video */}
//         {/* <div className="mb-12">
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <video
//                 className="w-full h-96 object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 controls
//               >
//                 <source src={myvideo} type="video/mp4" />
//                 <source src={myvideo1} type="video2/mp4"/>
//                 Your browser does not support the video tag.
//               </video>
//             </CardContent>
//           </Card>
//         </div> */}
//           {/* Two Videos Side by Side */}
//         <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Left Video */}
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <video
//                 className="w-full h-96 object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 controls
//               >
//                 <source src={myvideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </CardContent>
//           </Card>

//           {/* Right Video */}
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <video
//                 className="w-full h-96 object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 controls
//               >
//                 <source src={myvideo1} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </CardContent>
//           </Card>
//         </div>
        

//         {/* Gallery Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryItems.map((item) => (
//             <Card
//               key={item.id}
//               className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <CardContent className="p-0">
//                 <div className="relative aspect-square">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
//                     <h3 className="font-semibold text-lg">{item.title}</h3>
//                     <p className="text-sm">{item.category}</p>
//                   </div>
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
//                 onClick={() =>
//                   window.open("https://www.instagram.com/abela_burger/", "_blank")
//                 }
//                 className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Follow on Instagram
//               </button> 
//               {/* <button
//                 onClick={() => window.open("https://wa.me/918925503875", "_blank")}
//                 className="px-8 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
//               >
//                 Order Now
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;


import { Card, CardContent } from "@/components/ui/card";

// Import local assets
import galleryImage from "@/assets/gallery-collage.jpg";
import myvideo from "@/assets/video1 (1).mp4"; // Renamed to remove spaces/parentheses
import myvideo1 from "@/assets/video 2.mp4"; // Same cleanup
import myvideo2 from "@/assets/juice making video.mp4";
import myvideo3 from "@/assets/burger video.mp4";
import myvideo4 from "@/assets/burger video.mp4";
import b1Img from "@/assets/b1.jpeg";
import nashvilleImg from "@/assets/nashville mariena.jpeg"; // Use hyphens instead of spaces
import w2Img from "@/assets/w2.png";
import burgerImg from "@/assets/burger.jpg";
import chickenwingsImg from "@/assets/chicken wings.jpg";
import shake1Img from "@/assets/shake1.png";
import shawarmaImg from "@/assets/shawarma.jpg";
import milkeshakeImg from "@/assets/ms.jpeg";
import friesImg from "@/assets/loaded-fries.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "The Chicken Burger",
      category: "B",
      imageUrl: b1Img,
    },
    {
      id: 2,
      title: "Crispy Nashville Mania",
      category: "Chicken Burgers",
      imageUrl: nashvilleImg, // ✅ Direct variable, not a string
    },
    {
      id: 3,
      title: "Wings",
      category: "wings",
      imageUrl: w2Img,
    },
    {
      id: 4,
      title: "Chicken Wings",
      category: "Wings",
      imageUrl: chickenwingsImg,
    },
    {
      id: 5,
      title: "Cold Coffee",
      category: "Shakes",
      imageUrl: shake1Img,
    },
    {
      id: 6,
      title: "Loaded fries",
      category: "Fries",
      imageUrl: friesImg,
    },
    {
      id: 7,
      title: "Korean Shawarma",
      category: "Shawarma",
      imageUrl: shawarmaImg,
    },
    {
      id: 8,
      title: "Milk Shake",
      category: "Combos",
      imageUrl: milkeshakeImg,
    },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Food Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our delicious creations. Every dish is crafted with love and presented with pride.
          </p>
        </div>

        {/* Two Videos Side by Side */}
        {/* Video Gallery */}
<div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* Big Left Video */}
  <div className="max:col-span-2">
    <Card className="overflow-hidden rounded-2xl shadow-lg relative">
      <CardContent className="p-0 relative">
        <video
          className="w-full h-50 object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={myvideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Menu Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 rounded-2xl">
          <h3 className="text-2xl font-bold drop-shadow-lg">MELON RUSH</h3>
          <p className="text-sm mt-2 drop-shadow-lg">Juice and Fresh </p>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Right Side - Two Small Videos */}
  <div className="max:col-span-2">
    <Card className="overflow-hidden rounded-2xl shadow-lg relative">
      <CardContent className="p-0 relative">
        <video
          className="w-full h-50 object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={myvideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Menu Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 rounded-2xl">
          <h3 className="text-xl font-bold drop-shadow-lg">Loaded Fries</h3>
          <p className="text-sm mt-2 drop-shadow-lg"></p>
        </div>
      </CardContent>
    </Card>
  </div>

  <div className="max:col-span-2">
    <Card className="overflow-hidden rounded-2xl shadow-lg relative">
      <CardContent className="p-0 relative">
        <video
          className="w-full h-50 object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={myvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Menu Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 rounded-2xl">
          <h3 className="text-xl font-bold drop-shadow-lg">Chicken Wings</h3>
          <p className="text-sm mt-2 drop-shadow-lg"></p>
        </div>
      </CardContent>
    </Card>
  </div>
  
  <div className="max:col-span-3">
    <Card className="overflow-hidden rounded-2xl shadow-lg relative">
      <CardContent className="p-0 relative">
        <video
          className="w-full h-50 object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={myvideo4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Menu Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 rounded-2xl">
          <h3 className="text-xl font-bold drop-shadow-lg">Beef Burger</h3>
          <p className="text-sm mt-2 drop-shadow-lg">Smoky beef patty with cheese</p>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
</div>
  {/* Gallery Grid */}
           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
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
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Gallery;

