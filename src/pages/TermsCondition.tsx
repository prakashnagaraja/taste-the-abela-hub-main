import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            {/* <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <div className="text-muted-foreground">
                <p>By accessing and using Abela Burger Hub's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Ordering and Payment</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All orders are subject to availability and confirmation of the order price</li>
                  <li>Payment must be made at the time of ordering or upon delivery</li>
                  <li>We accept cash, UPI, and card payments</li>
                  <li>Prices are subject to change without prior notice</li>
                  <li>We reserve the right to refuse any order</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Delivery Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery times are estimates and may vary due to traffic, weather, or high demand</li>
                  <li>Delivery is available within our specified service areas</li>
                  <li>Minimum order value may apply for delivery</li>
                  <li>Delivery charges may apply based on location and order value</li>
                  <li>You must be available to receive your order at the specified address</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cancellation and Refund Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Orders can be cancelled within 5 minutes of placing the order</li>
                  <li>Once food preparation has started, orders cannot be cancelled</li>
                  <li>Refunds will be processed within 5-7 business days</li>
                  <li>In case of quality issues, please contact us immediately for resolution</li>
                  <li>We reserve the right to investigate any refund claims</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Food Safety and Quality</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We maintain high standards of food safety and hygiene</li>
                  <li>All ingredients are fresh and sourced from reliable suppliers</li>
                  <li>Please inform us of any food allergies or dietary restrictions</li>
                  <li>Consume food within 2 hours of delivery for optimal freshness</li>
                  <li>We are not liable for any allergic reactions if allergens are not disclosed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <div className="text-muted-foreground">
                <p>All content, trademarks, and intellectual property on our website and materials belong to Abela Burger Hub. You may not use, copy, or distribute any content without our written permission.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our liability is limited to the value of the food order</li>
                  <li>We are not liable for any indirect, special, or consequential damages</li>
                  <li>Force majeure events (natural disasters, strikes, etc.) may affect service</li>
                  <li>You use our services at your own risk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Customer Conduct</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Customers agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate contact and delivery information</li>
                  <li>Treat our staff with respect and courtesy</li>
                  <li>Not misuse our services or engage in fraudulent activities</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <div className="text-muted-foreground">
                <p>For any questions regarding these terms and conditions, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Phone:</strong> 8925503875</p>
                  <p><strong>Address:</strong> Abela Burger Hub, 2/304, OMR, Sakthi Nagar, Thoraipakkam, Chennai - 97</p>
                  <p><strong>Instagram:</strong> @abela_burger</p>
                  <p><strong>WhatsApp:</strong> wa.me/918925503875</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Amendments</h2>
              <div className="text-muted-foreground">
                <p>We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <div className="text-muted-foreground">
                <p>These terms and conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of Chennai courts.</p>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;