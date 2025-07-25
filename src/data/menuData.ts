export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: string;
  isSpecial?: boolean;
}

export const menuData: MenuItem[] = [
  // Beef Burgers
  {
    name: "Dainty Cheesy Juicy (The Queen)",
    price: 299,
    description: "Triple beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers",
    isSpecial: true
  },
  {
    name: "Manzo Dainty Burger",
    price: 249,
    description: "Two beef ground balls smashed, flipped, double cheesed, sauced with a signature blend and served in our buns",
    category: "Beef Burgers"
  },
  {
    name: "Texas (Steak House) Supreme",
    price: 249,
    description: "American Steakhouse Style - A premium selection of steaks, freshly ground in-house and slowly grilled to perfection. Topped with melted cheese, caramelized onions, and our signature sauce, all served in a house-made bun.",
    category: "Beef Burgers"
  },
  {
    name: "The King",
    price: 349,
    description: "Two plus two beef balls = four beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers",
    isSpecial: true
  },

  // Chicken Burgers
  {
    name: "Cheesy Crispy Perfect - Large",
    price: 299,
    description: "Chicken Thighs fried to perfection loaded with cheese sauce in our house-made buns and signature sauces.",
    category: "Chicken Burgers"
  },
  {
    name: "Cheesy Crispy Perfect - Regular",
    price: 199,
    description: "Chicken Thighs fried to perfection loaded with cheese sauce in our house-made buns and signature sauces.",
    category: "Chicken Burgers"
  },
  {
    name: "Crispy Korean Slaw - Large",
    price: 299,
    description: "Crispy fried chicken thighs tossed in House Made Korean Gochujang sauce served with our signature sauces on our buns",
    category: "Chicken Burgers",
    isSpecial: true
  },
  {
    name: "Crispy Korean Slaw - Regular",
    price: 199,
    description: "Crispy fried chicken thighs tossed in House Made Korean Gochujang sauce served with our signature sauces on our buns",
    category: "Chicken Burgers"
  },
  {
    name: "Crispy Nashville Mania - Large",
    price: 299,
    description: "Crispy fried chicken thighs dipped in our signature Hot oil seasoned with our Nashville Seasoning",
    category: "Chicken Burgers"
  },
  {
    name: "Crispy Nashville Mania - Regular",
    price: 199,
    description: "Crispy fried chicken thighs dipped in our signature Hot oil seasoned with our Nashville Seasoning",
    category: "Chicken Burgers"
  },

  // Chill Thrill (Drinks)
  {
    name: "Blue Magic",
    price: 49,
    description: "Refreshing blue-colored beverage",
    category: "Chill Thrill"
  },
  {
    name: "Melon Rush",
    price: 49,
    description: "Fresh melon flavored drink",
    category: "Chill Thrill"
  },
  {
    name: "Mint-O Lime-O",
    price: 49,
    description: "Minty lime refresher",
    category: "Chill Thrill"
  },
  {
    name: "Passionate Lagoon",
    price: 49,
    description: "Tropical passion fruit drink",
    category: "Chill Thrill"
  },
  {
    name: "Raspberry Breeze",
    price: 49,
    description: "Cool raspberry flavored beverage",
    category: "Chill Thrill"
  },

  // Fries
  {
    name: "ABELA's Fries of Flame",
    price: 99,
    description: "Thick cut skin on fried, seasoned to perfection with Abela's signature spice blend.",
    category: "Fries",
    isSpecial: true
  },
  {
    name: "Golden Crispy Fries",
    price: 89,
    description: "Thick cut skin on fries, salted to perfection.",
    category: "Fries"
  },
  {
    name: "Juicy Loaded Fries (Cheese)",
    price: 129,
    description: "Thick cut skin on fried, tossed with cheese and sauces.",
    category: "Fries"
  },

  // Shakes
  {
    name: "Abela Rocher Shake",
    price: 199,
    description: "Creamy vanilla ice cream blended with Ferrero Rocher, topped with whipped cream and a chocolate drizzle.",
    category: "Shakes",
    isSpecial: true
  },
  {
    name: "Choco Tella",
    price: 169,
    description: "The Creamiest and most luxury nutella Shake",
    category: "Shakes"
  },
  {
    name: "Cold Coffee",
    price: 99,
    description: "Classic Cold Coffee",
    category: "Shakes"
  },
  {
    name: "Thick Biscoff",
    price: 179,
    description: "The Creamiest and the thickest Biscoff shake",
    category: "Shakes"
  },

  // Shawarma
  {
    name: "Korean Shawarma Roll",
    price: 100,
    description: "Fusion Korean-style shawarma roll",
    category: "Shawarma"
  },
  {
    name: "Nashville Shawarma Roll",
    price: 80,
    description: "Nashville hot spiced shawarma roll",
    category: "Shawarma"
  },
  {
    name: "Sweet Shawarma Roll",
    price: 120,
    description: "Sweet and savory shawarma roll",
    category: "Shawarma"
  },
  {
    name: "Shawarma Plate",
    price: 120,
    description: "Complete shawarma serving with sides",
    category: "Shawarma"
  },

  // Waffles
  {
    name: "Naked Nutella Waffle",
    price: 169,
    description: "Pure nutella indulgence waffle",
    category: "Waffles",
    isSpecial: true
  },
  {
    name: "Death By Chocolate Waffle",
    price: 169,
    description: "Ultimate chocolate lover's waffle",
    category: "Waffles",
    isSpecial: true
  },
  {
    name: "Chocolate Brownie Waffle",
    price: 149,
    description: "Rich brownie pieces on fluffy waffle",
    category: "Waffles"
  },
  {
    name: "Oreo Crunch Waffle",
    price: 139,
    description: "Crunchy Oreo pieces with cream",
    category: "Waffles"
  }
];

export const categories = [
  "Beef Burgers",
  "Chicken Burgers", 
  "Chill Thrill",
  "Fries",
  "Shakes",
  "Shawarma",
  "Waffles"
];