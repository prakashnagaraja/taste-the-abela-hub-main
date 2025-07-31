import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Meenakshi R",
      rating: 5,
      text: "The taste was good. Kindly place the shawarma machine inside the cafe, the road where the cafe was located is dusty",
      date: "2 days ago"
    },
    {
      name: "Sharan Menon",
      rating: 5,
      text: "Pretty Sure the best burgers in Town💯",
      date: "1 week ago"
    },
    {
      name: "Ajith Kumar",
      rating: 5,
      text: "Forget KFC, McD etc, come here if you want to have a real burger!!! 10/10 for the burgers and sides. Best food joint in Thoraipakkam",
      date: "1 weeks ago"
    },
    {
      name: "Durairaja S",
      rating: 4,
      text: "Good spot to celebrate your birthday with oferdable food prices at good quantity and qualityFood: 5/5  |  Service: 5/5  |  Atmosphere: 4/5",
      date: "2weeks ago"
    },
    {
      name: "Zuhi Nasara",
      rating: 5,
      text: "Chennai best burger.Food: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
      date: "2 Weeks Ago"
    },
    {
      name: "Shahul Hameeed",
      rating: 5,
      text: "Had Nashville chicken loaded fries… it was awesome😋 … Must try",
      date: "2 Weeks Ago"
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 10;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-food-accent text-food-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{averageRating}</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
          <p className="text-lg text-muted-foreground">Based on Google Review</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-food-accent text-food-accent" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?sca_esv=27b91714de888794&rlz=1C1FKPE_enIN1069IN1069&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3rAPkm0iC2qKDD44GjssND7auZ92vK-ngEmxtfLCmhgS6uisLF2zxI3Dt8tEh_HxhAtXVib5-511MfkF1DZkP-l6STrnXAT3iSj6nZhXvfppmNzVA%3D%3D&q=Abela+Burger+Hub+Reviews&sa=X&ved=2ahUKEwic8JPby-SOAxW-xjgGHQSJOksQ0bkNegQIKxAD&biw=1517&bih=703&dpr=0.9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;