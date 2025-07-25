import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Premium Quality",
      description: "We use only the finest ingredients, freshly ground beef, and house-made buns for every burger."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Fresh Daily",
      description: "All our ingredients are sourced fresh daily and prepared to order for maximum taste and quality."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Expert Chefs",
      description: "Our experienced chefs craft each burger with passion and attention to detail."
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Prime Location",
      description: "Conveniently located on OMR, Thoraipakkam, serving the best burgers in Chennai."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Abela Burger Hub</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Welcome to Abela Burger Hub, where every bite is pure magic! We're passionate about 
                  creating the most delicious, high-quality burgers in Chennai, using only the finest 
                  ingredients and time-tested recipes.
                </p>
                <p>
                  From our signature beef burgers to crispy chicken delights, Korean fusion rolls to 
                  indulgent waffles, we offer an extensive menu that caters to every taste and craving. 
                  Our commitment to quality and flavor has made us the go-to destination for burger 
                  lovers in Thoraipakkam and beyond.
                </p>
                <p>
                  At Abela Burger Hub, we believe that great food brings people together. That's why 
                  we've created a welcoming space where families and friends can enjoy exceptional 
                  food, friendly service, and an unforgettable dining experience.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To serve the most delicious, freshly made burgers and create memorable experiences 
                for every customer who walks through our doors. We're not just serving food – 
                we're serving happiness, one burger at a time.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Menu Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Serving</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;