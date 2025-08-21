
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-4" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      {/* Background decoration */}
      <div className="absolute top-8 right-8 hidden lg:flex items-center space-x-2">
        <Badge variant="secondary" className="text-xs font-medium">
          Official Affiliate Partner
        </Badge>
        <span className="text-lg font-bold text-primary">Chewy</span>
      </div>

      {/* Commission Tag */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <Badge variant="default" className="bg-success text-success-foreground">
          7% Commission on Purchases
        </Badge>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* AfterUp Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/b69c7b3c-3601-49d2-bdab-c18d8231746a.png" 
            alt="AfterUp powered by Chewy" 
            className="mx-auto h-20 sm:h-24 lg:h-28 w-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Turn Your Product{" "}
          <span className="text-primary">Recommendations</span>{" "}
          Into Revenue
        </h1>
        
        <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
          AfterUp lets professionals earn commission every time they recommend 
          products to pet owners — effortlessly.
        </p>
        
        <p className="text-sm italic text-muted-foreground mb-8">
          No credit card required. No payment necessary to get started.
        </p>

        <div className="space-y-4">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToSignup}
            className="text-lg px-8 py-6 h-auto"
          >
            Launch For Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-xs text-muted-foreground">
            You earn commission on all purchases made within 15 days of your client's visit.
          </p>
        </div>
      </div>
    </section>
  );
};
