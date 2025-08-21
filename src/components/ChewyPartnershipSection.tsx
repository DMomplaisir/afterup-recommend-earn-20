import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

export const ChewyPartnershipSection = () => {
  return (
    <section id="partnership" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In Official Partnership with{" "}
            <span className="text-primary">Chewy</span> & Chewy Gives Back
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            AfterUp is proud to be an affiliate partner of Chewy — giving you access 
            to thousands of trusted pet products.
          </p>
          <p className="text-lg text-success font-medium">
            We give back 2% of each order placed to Chewy Gives Back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Chewy Badge */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-card rounded-2xl p-8 shadow-elegant h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-foreground">C</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Chewy
              </h3>
              <Badge variant="secondary" className="mb-4">
                #1 Online Pet Retailer
              </Badge>
              <p className="text-muted-foreground">
                Trusted by millions of pet parents
              </p>
            </div>
          </div>

          {/* Trusted Products */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl p-8 shadow-elegant h-full">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Premium Products
              </h3>
              <Badge variant="outline" className="mb-4">
                Recommended by Vets
              </Badge>
              <p className="text-muted-foreground">
                Curated selection of top-quality pet products
              </p>
            </div>
          </div>

          {/* Giving Back */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card rounded-2xl p-8 shadow-elegant h-full">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Giving Back
              </h3>
              <Badge variant="secondary" className="mb-4 bg-success/10 text-success">
                Giving Back With Every Order
              </Badge>
              <p className="text-muted-foreground">
                Supporting pet welfare through charitable giving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};