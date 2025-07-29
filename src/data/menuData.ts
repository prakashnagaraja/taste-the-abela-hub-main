export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: string;
  isSpecial?: boolean;
}

export const menuData: MenuItem[] = [

 // Shawarma
  {
    name: "Chc'n Shawarma Roll",
    price: 60,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Peri Peri Shawarma Roll",
    price: 80,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Cheesy Juicy Shawarma Roll",
    price: 80,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Maxi Corn Shawarma Roll",
    price: 80,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Nashville Shawarma Roll",
    price: 80,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Korean Shawarma Roll",
    price: 100,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Smart Shawarma Roll",
    price: 100,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Sweet Shawarma Roll",
    price: 120,
    description: "",
    category: "Shawarma",
  },
  {
    name: "Shawarma Plate",
    price: 120,
    description: "",
    category: "Shawarma",
  },

  //Shawarma Special
  {
    name: "Peri Peri Shawarma Roll",
    price: 100,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Cheesy Juicy Shawarma Roll - Special",
    price: 100,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Maxi Corn Shawarma Roll - Special",
    price: 100,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Nashville Shawarma Roll - Special",
    price: 100,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Korean Shawarma Roll - Special",
    price: 120,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Smart Shawarma Roll - Special",
    price: 120,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Sweet Shawarma Roll - Special",
    price: 140,
    description: "",
    category: "Shawarma Special",
  },
  {
    name: "Shawarma Plate - Special",
    price: 150,
    description: "",
    category: "Shawarma Special",
  },
  //Fries
  {
    name: "ABELA’s Fries of Flame",
    price: 99,
    description: "Thick cut skinn on fried, seasoned to perfection with Abela's signature spice blend.",
    category: "Fries",
  },
  {
    name: "Golden Crispy Fries",
    price: 89,
    description: "Thick cut skin on fries, salted to perfection.",
    category: "Fries",
  },
  {
    name: "Juicy Loaded Fries (Cheese)",
    price: 129,
    description: "Thick cut skin on fried, tossed with cheese and sauces.",
    category: "Fries",
  },

  //Loaded Fries
  {
    name: "Crevetki Loaded Fries",
    price: 299,
    description: "Crispy fried Prawn and fried loaded with our signature sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Crunch Chicken Loaded Fries - Large",
    price: 219,
    description: "Classic Fried Chicken pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Crunch Chicken Loaded Fries - Regular",
    price: 169,
    description: "Classic Fried Chicken pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Korean Chicken Loaded Fries - Large",
    price: 229,
    description: "Korean Fried chicken Pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Korean Chicken Loaded Fries - Regular",
    price: 179,
    description: "Korean Fried chicken Pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Nashville Chicken Loaded Fries - Large",
    price: 229,
    description: "Nashville Fried chicken Pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },
  {
    name: "Nashville Chicken Loaded Fries - Regular",
    price: 179,
    description: "Nashville Fried chicken Pops and fries loaded with sauces and seasonings.",
    category: "Loaded Fries",
  },

//Lite Bites
 {
    name: "Crevetki the Best",
    price: 229,
    description: "Crispy Fried Prawn loaded with our signature sauces and seasonings.",
    category: "Lite Bites",
  },
  {
    name: "Crunchy Pops-Large",
    price: 179,
    description: "Southern Style No Sauce Fried Chicken Pops",
    category: "Lite Bites",
  },
  {
    name: "Crunchy Pops-Regular",
    price: 99,
    description: "Southern Style No Sauce Fried Chicken Pops",
    category: "Lite Bites",
  },
  {
    name: "Crunchy Saucy Pops-Large",
    price: 199,
    description: "Southern Fried Chicken loaded with our signature sauces.",
    category: "Lite Bites",
  },
  {
    name: "Crunchy Saucy Pops-Regular",
    price: 129,
    description: "Southern Fried Chicken loaded with our signature sauces.",
    category: "Lite Bites",
  },
  {
    name: "Spiced Angry Pops-Large",
    price: 199,
    description: "Nashville Fried Chicken pops seasoned withour Nashville Hot Seasoning - Hot and loaded with our signature sauces.",
    category: "Lite Bites",
  },
  {
    name: "Spiced Angry Pops-Regular",
    price: 139,
    description: "Nashville Fried Chicken pops seasoned withour Nashville Hot Seasoning - Hot and loaded with our signature sauces.",
    category: "Lite Bites",
  },
  {
    name: "Sweet n' Cute Pops-Large",
    price: 209,
    description: "Southern Fried Chicken pops tossed in our Korean sauces and seasoning, served with our signature sauces.",
    category: "Lite Bites",
  },
  {
    name: "Sweet n' Cute Pops-Regular",
    price: 149,
    description: "Southern Fried Chicken pops tossed in our Korean sauces and seasoning, served with our signature sauces.",
    category: "Lite Bites",
  },

  //Chicken Burger
  {
    name: "Cheesy Crispy Perfect- Large CB",
    price: 299,
    description: "Chicken Thighs fried to perfection loaded with cheese sauce in our house-made buns and signature sauces.",
    category: "Chicken Burger"
  },
  {
    name: "Cheesy Crispy Perfect- Regular CB",
    price: 199,
    description: "Chicken Thighs fried to perfection loaded with cheese sauce in our house-made buns and signature sauces.",
    category: "Chicken Burger"
  },
  {
    name: "Crispy Korean Slaw- Large CB",
    price: 299,
    description: "Crispy fried chicken thighs tossed in House Made Korean Gochujang sauce served with our signature sauces on our buns",
    category: "Chicken Burger"
  },
  {
    name: "Crispy Korean Slaw- Regular CB",
    price: 199,
    description: "Crispy fried chicken thighs tossed in House Made Korean Gochujang sauce served with our signature sauces on our buns",
    category: "Chicken Burger"
  },
  {
    name: "Crispy Nashville Mania- Large CB",
    price: 299,
    description: "Crispy fried chicken thighs dipped in our signature Hot oil seasoned with our Nashville Seasoning",
    category: "Chicken Burger"
  },
  {
    name: "Crispy Nashville Mania- Regular CB",
    price: 199,
    description: "Crispy fried chicken thighs dipped in our signature Hot oil seasoned with our Nashville Seasoning",
    category: "Chicken Burger"
  },
  {
    name: "Crunchy Classic Stack- Large CB",
    price: 279,
    description: "Chicken Thighs fried to perfection in our house-made buns and sauces",
    category: "Chicken Burger"
  },
  {
    name: "Crunchy Classic Stack- Regular CB",
    price: 179,
    description: "Chicken Thighs fried to perfection in our house-made buns and sauces",
    category: "Chicken Burger"
  },
  {
    name: "The Grill Master- Large CB",
    price: 289,
    description: "Minced Chicken, grilled slowly to perfection and drenched with our signature sauces and cheese served on our house made buns",
    category: "Chicken Burger"
  },
  {
    name: "The Grill Master- Regular CB",
    price: 189,
    description: "Minced Chicken, grilled slowly to perfection and drenched with our signature sauces and cheese served on our house made buns",
    category: "Chicken Burger"
  },

  //Beef Burger
  {
    name: "Dainty Cheesy Juicy (The Queen) - Large BB",
    price: 399,
    description: "Tripple beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers"
  },
  {
    name: "Manzo Dainty Burger - Large BB",
    price: 349,
    description: "Two beef ground balls smashed, flipped, double cheesed, sauced with a signature blend and served in our buns.",
    category: "Beef Burgers"
  },
  {
    name: "Texas (Steak House) Supreme - Large BB",
    price: 349,
    description: "American Steakhouse Style - A premium selection of steaks, freshly ground in-house and slowly grilled to perfection. Topped with melted cheese, caramelized onions, and our signature sauce, all served in a house-made bun.",
    category: "Beef Burgers"
  },
  {
    name: "The King - Large BB",
    price: 449,
    description: "Two plus two beef balls = four beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers"
  },
  {
    name: "Dainty Cheesy Juicy (The Queen) - Reg BB",
    price: 299,
    description: "Tripple beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers"
  },
  {
    name: "Manzo Dainty Burger - Reg BB",
    price: 249,
    description: "Two beef ground balls smashed, flipped, double cheesed, sauced with a signature blend and served in our buns.",
    category: "Beef Burgers"
  },
  {
    name: "Texas (Steak House) Supreme - Reg BB",
    price: 249,
    description: "American Steakhouse Style - A premium selection of steaks, freshly ground in-house and slowly grilled to perfection. Topped with melted cheese, caramelized onions, and our signature sauce, all served in a house-made bun.",
    category: "Beef Burgers"
  },
  {
    name: "The King - Reg BB",
    price: 349,
    description: "Two plus two beef balls = four beef balls smashed with cheese on each layer. Sauced and served on our buns.",
    category: "Beef Burgers"
  },

  //Sides-Wings
   {
    name: "Classic Fried Chicken - SW",
    price: 109,
    description: "Classic Southern fried chicken strips served with our signature sauces.",
    category: "SidesWings"
  },
  {
    name: "Hot 'n' Honey Chicken - SW",
    price: 129,
    description: "Fried Chicken tossed in our House-made Hot 'n' Honey sauce.",
    category: "SidesWings"
  },
  {
    name: "Nashville Hot Fried Chicken - SW",
    price: 129,
    description: "Fried Chicken dipped in Hot Chilli oil and seasoned with Nashville Hot Seasoning.",
    category: "SidesWings"
  },
  {
    name: "Oriental Chicken - SW",
    price: 129,
    description: "Fried Chicken tossed in our signature oriental sauces and seasonings.",
    category: "SidesWings"
  },

  //SideTenders
  {
    name: "Classic Fried Chicken - ST",
    price: 129,
    description: "Classic fried chicken strips.",
    category: "SidesTenders"
  },
  {
    name: "Hot 'n' Honey Chicken - ST",
    price: 149,
    description: "Fried Chicken strips tossed in our House-made Hot 'n' Honey sauce.",
    category: "SidesTenders"
  },
  {
    name: "Nashville Hot Fried Chicken - ST",
    price: 149,
    description: "Fried Chicken strips tossed in Hot Chilli oil and seasoned with Nashville sauce.",
    category: "SidesTenders"
  },
  {
    name: "Oriental Chicken - ST",
    price: 149,
    description: "Fried Chicken strips tossed in our signature oriental sauces and seasonings.",
    category: "SidesTenders"
  },
  
  //Waffle
    { name: "White Choco Waffle", price: 99, description: "", category: "Waffle" },
  { name: "Milk Choco Waffle", price: 99, description: "", category: "Waffle" },
  { name: "Dark Choco Waffle", price: 99, description: "", category: "Waffle" },
  { name: "Double Choco Waffle", price: 129, description: "", category: "Waffle" },
  { name: "Triple Choco Waffle", price: 139, description: "", category: "Waffle" },
  { name: "Oreo Crunch Waffle", price: 139, description: "", category: "Waffle" },
  { name: "Rainbow Button Waffle", price: 119, description: "", category: "Waffle" },
  { name: "Crunchy Butterscotch Waffle", price: 119, description: "", category: "Waffle" },
  { name: "Kitkat Crunch Waffle", price: 129, description: "", category: "Waffle" },
  { name: "Chocolate Overload", price: 129, description: "", category: "Waffle" },
  { name: "Naked Nutella Waffle", price: 169, description: "", category: "Waffle" },
  { name: "Chocolate Brownie Waffle", price: 149, description: "", category: "Waffle" },
  { name: "Death By Chocolate Waffle", price: 169, description: "", category: "Waffle" },
  { name: "Gems Magic Waffle", price: 119, description: "", category: "Waffle" },
  { name: "White Choco Waffle-Double", price: 189, description: "", category: "Waffle" },
  { name: "Milk Choco Waffle-Double", price: 189, description: "", category: "Waffle" },
  { name: "Dark Choco Waffle-Double", price: 189, description: "", category: "Waffle" },
  { name: "Double Choco Waffle-Double", price: 199, description: "", category: "Waffle" },
  { name: "Triple Choco Waffle-Double", price: 209, description: "", category: "Waffle" },
  { name: "Oreo Crunch Waffle-Double", price: 199, description: "", category: "Waffle" },
  { name: "Rainbow Button Waffle-Double", price: 199, description: "", category: "Waffle" },
  { name: "Crunchy Butterscotch Waffle-Double", price: 199, description: "", category: "Waffle" },
  { name: "Kitkat Crunch Waffle-Double", price: 199, description: "", category: "Waffle" },
  { name: "Chocolate Overload-Double", price: 199, description: "", category: "Waffle" },
  { name: "Naked Nutella Waffle-Double", price: 289, description: "", category: "Waffle" },
  { name: "Chocolate Brownie Waffle-Double", price: 249, description: "", category: "Waffle" },
  { name: "Death By Chocolate Waffle-Double", price: 249, description: "", category: "Waffle" },
  { name: "Gems Magic Waffle-Double", price: 199, description: "", category: "Waffle" },

  //Shakes
  {
    name: "Abela Rocher Shake",
    price: 199,
    description: "Creamy vanilla ice cream blended with Ferrero Rocher, topped with whipped cream and a chocolate drizzle.",
    category: "Shakes"
  },
  {
    name: "Choco Tella",
    price: 169,
    description: "The creamiest and most luxurious Nutella shake.",
    category: "Shakes"
  },
  {
    name: "Cold Coffee",
    price: 99,
    description: "Classic cold coffee.",
    category: "Shakes"
  },
  {
    name: "Thick Biscoff",
    price: 179,
    description: "The creamiest and thickest Biscoff shake.",
    category: "Shakes"
  },
  //chilThril
    {
    name: "Blue Magic",
    price: 49,
    description: "",
    category: "Chill Thrill"
  },
  {
    name: "Melon Rush",
    price: 49,
    description: "",
    category: "Chill Thrill"
  },
  {
    name: "Mint-O Lime-O",
    price: 49,
    description: "",
    category: "Chill Thrill"
  },
  {
    name: "Passionate Lagoon",
    price: 49,
    description: "",
    category: "Chill Thrill"
  },
  {
    name: "Raspberry Breeze",
    price: 49,
    description: "",
    category: "Chill Thrill"
  }
];
export const categories = [
  "Shawarma",
  "Shawarma Special", 
  "Fries",
  "Loaded Fries",
  "Lite Bites",
  "Chicken Burger",
  "Beef Burgers",
  "SidesWings",
  "SidesTenders",
  "Waffle",
  "Shakes",
  "Chill Thrill"
];