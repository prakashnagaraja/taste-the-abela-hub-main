// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, Clock, Link } from "lucide-react";
// import { Link } from="react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold">Abela Burger Hub</h3>
//             <p className="text-lg italic">Taste The Magic</p>
//             <p className="text-primary-foreground/80">
//               Serving the most delicious burgers in Chennai with passion and quality since day one.
//             </p>
//             {/* <Button 
//               variant="outline" 
//               className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//               onClick={() => window.open('https://www.instagram.com/abela_burger/', '_blank')}
//             >
//               <Instagram className="w-4 h-4 mr-2" />
//               Follow Us
//             </Button> */}
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">Contact</h4>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p>Abela Burger Hub</p>
//                   <p>2/304, OMR, Sakthi Nagar</p>
//                   <p>Thoraipakkam, Chennai - 97</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5" />
//                 <p>8925503875</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Clock className="w-5 h-5" />
//                 <p>12:00 PM - 02:00 AM (Daily)</p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-xl font-semibold">Quick Links</h4>
//             <div className="grid grid-cols-2 gap-2">
//               <a href="#home" className="hover:text-accent transition-colors">Home</a>
//               <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
//               <a href="#about" className="hover:text-accent transition-colors">About</a>
//               <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
//               <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
//               <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
//               <Link to ="/TermsCondition" className="hover:text-accent transition-colors">TermsCondition</Link>

//             </div>
            
//             <div className="pt-4">
//               <Button 
//                 className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
//                 onClick={() => window.open('https://wa.me/918925503875', '_blank')}
//               >
//                 Order via WhatsApp
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
//           <p className="text-primary-foreground/80">
//             © 2025 Prakash. All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Abela Burger Hub</h3>
            <p className="text-lg italic">Taste The Magic</p>
            <p className="text-primary-foreground/80">
              Serving the most delicious burgers in Chennai with passion and quality since day one.
            </p>
           
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Abela Burger Hub</p>
                  <p>2/304, OMR, Sakthi Nagar</p>
                  <p>Thoraipakkam, Chennai - 97</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <p>8925503875</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" /> 
                  
                <p>12:00 PM - 02:00 AM (Daily)</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            </div>
            
            <div className="pt-4">
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                onClick={() => window.open('https://wa.me/918925503875', '_blank')}
              >
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Abela Burger Hub. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;