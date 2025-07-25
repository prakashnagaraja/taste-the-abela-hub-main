import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place an order? Get in touch with us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-accent" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Abela Burger Hub<br />
                  2/304, OMR, Sakthi Nagar<br />
                  Thoraipakkam, Chennai - 97
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">8925503875</p>
                <Button 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                  onClick={() => window.open('https://wa.me/918925503875', '_blank')}
                >
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-accent" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span>12:00 PM - 02:00 AM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Instagram className="w-5 h-5 mr-2 text-accent" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://www.instagram.com/abela_burger/', '_blank')}
                >
                  @abela_burger
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Email Address" />
              <Input placeholder="Subject" />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
              />
              <Button className="w-full bg-[var(--hero-gradient)] hover:opacity-90">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        Map Placeholder
        {/* <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              {/* Embdded Google Map  
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                    <br />
                    2/304, OMR, Sakthi Nagar, Thoraipakkam
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        <div className="mt-12">
  <Card>
    <CardContent className="p-0">
      {/* Embedded Google Map */}
      <div className="h-64 rounded-lg overflow-hidden">
        <iframe
          title="Abela Burger Hub Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.441620141435!2d80.23791520000002!3d12.943568800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d748ca6372d%3A0x54190c44e5e0c1a8!2sAbela%20Burger%20Hub!5e0!3m2!1sen!2sin!4v1753423989771!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  );
};

export default Contact;