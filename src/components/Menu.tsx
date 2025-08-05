import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { menuData, categories } from "@/data/menuData";
import { Beef, Crown, Import, Star } from "lucide-react";

// Import menu images
import beefBurgerImg from "@/assets/beef.jpeg";
import ChickenBurgerImg from "@/assets/Chicken Burger.jpg";
import friesImg from "@/assets/fries.jpg";
import shakeImg from "@/assets/shake.jpg";
import waffleImg from "@/assets/waffle.jpg";
import shawarmaImg from "@/assets/Shawarma.png";
import drinkImg from "@/assets/drink.jpg";
import LitebitesImg from "@/assets/Litebites.jpg";
import SideswingsImg  from "@/assets/SidesWings.jpg";
import sidesTendersImg from "@/assets/sidestenders.jpg";


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Beef Burgers");

  const filteredItems = menuData.filter(item => item.category === selectedCategory);

  // Function to get appropriate image for category
  const getCategoryImage = (category: string) => {
    switch (category) {
      case "Shawarma":
        return shawarmaImg;
      case "Shawarma Special":
        return shawarmaImg;
      case "Fries":
      case "Loaded Fries":
        return friesImg;
        case "Shakes":
        return shakeImg;
      case "Waffle":
        return waffleImg;
      case "beef":
        return beefBurgerImg;
      case "Shawarma":
        return shawarmaImg;
      case "Chill Thrill":
        return drinkImg;
        case "Chicken Burger":
          return ChickenBurgerImg;
        case "Lite Bites":
          return LitebitesImg;
        case "SidesWings":
          return SideswingsImg;
     case "SidesTenders":
          return SideswingsImg;
       
      default:
        return ChickenBurgerImg;
    }
  };

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      {/* <div className="container mx-auto px-4"> */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our mouth-watering selection of handcrafted burgers, crispy fries, waffles, shakes, shawarmas, and delicious treats — all made with the finest ingredients. 🍔🍟🧇🥤🌯
          </p>
        </div>
   

        {/* Category Icons */}
        {/* <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <div 
                key={category}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  selectedCategory === category ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  selectedCategory === category ? 'bg-primary text-white' : 'bg-secondary hover:bg-primary/20'
                }`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <span className="text-xs font-medium text-center max-w-20">{category.replace(' - ', '\n')}</span>
              </div>
            );
          })}
        </div> }

        {/* Category Filters */}
      
<div className="flex flex-wrap justify-center gap-4 mb-12">
  {categories.map((category) => (
    <Button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`px-8 py-3 rounded-xl text-base font-Times New Roman -wider uppercase transition-all duration-300 shadow-md border-2
        ${
          selectedCategory === category
            ? "bg-black text-[#FFD700] border-black scale-110"
            : "bg-[#FFD700] text-black border-[#FFD700] hover:bg-black hover:text-[#FFD700] hover:scale-105"
        }`}
    >
      {category}
    </Button>
  ))}
</div>





        

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {item.isSpecial && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-accent text-accent-foreground">
                    <Crown className="w-5 h-3 mr-1" />
                    Special
                  </Badge>
                </div>
              )}
              
              {/* Food Image */}
              <div className="relative h-78 overflow-hidden">
                <img
                  src={getCategoryImage(item.category)}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="text-xl font-bold">₹{item.price}</div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-food-accent text-food-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
                  </div>
                  
                  <Button size="sm" className=""><a href="https://www.zomato.com/chennai/abela-1-thuraipakkam/order">
                    Add to Cart for Zomato</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Buttons */}
<div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
  {/* WhatsApp Order Button */}
  {/* <Button 
    size="lg" 
    className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8"
    onClick={() => window.open('https://wa.me/918925503875', '_blank')}
  >
    Order via WhatsApp
  </Button> */}

  {/* Zomato Order Button */}
  <Button 
    size="lg" 
    className="bg-[#E23744] hover:bg-[#b21f2d] text-white text-lg px-8"
    onClick={() => window.open('https://www.zomato.com/chennai/abela-1-thuraipakkam/order', '_blank')}
  >
    Order via Zomato
  </Button>
</div>

      
    </section>
    
  );
};

export default Menu;

