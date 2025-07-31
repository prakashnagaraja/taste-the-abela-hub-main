import { Card, CardContent } from "@/components/ui/card";
import galleryImage from "@/assets/gallery-collage.jpg";
import myvideo from "@/assets/video1 (1).mp4"; // Make sure file name has no spaces or parentheses in actual usage

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "The Chicken Burger",
      category: "B",
      imageUrl: "https://i.pinimg.com/736x/4a/58/4e/4a584e2e9a41da94a9375a02cacfb8ef.jpg",
    },
    {
      id: 2,
      title: "Korean Chicken",
      category: "Chicken Burgers",
      imageUrl: "https://source.unsplash.com/400x400/?korean,chicken",
    },
    {
      id: 3,
      title: "Loaded Fries",
      category: "Fries",
      imageUrl: "https://source.unsplash.com/400x400/?fries",
    },
    {
      id: 4,
      title: "Nutella Waffle",
      category: "Waffles",
      imageUrl: "https://source.unsplash.com/400x400/?nutella,waffle",
    },
    {
      id: 5,
      title: "Rocher Shake",
      category: "Shakes",
      imageUrl: "https://source.unsplash.com/400x400/?milkshake,chocolate",
    },
    {
      id: 6,
      title: "Nashville Wings",
      category: "Wings",
      imageUrl: "https://source.unsplash.com/400x400/?chicken,wings",
    },
    {
      id: 7,
      title: "Korean Shawarma",
      category: "Shawarma",
      imageUrl: "https://source.unsplash.com/400x400/?shawarma",
    },
    {
      id: 8,
      title: "Signature Platter",
      category: "Combos",
      imageUrl: "https://source.unsplash.com/400x400/?food,platter",
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
              {/* <button
                onClick={() =>
                  window.open("https://www.instagram.com/abela_burger/", "_blank")
                }
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Follow on Instagram
              </button> */}
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

