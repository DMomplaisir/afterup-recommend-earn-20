import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Simple Pricing
          </h2>
          
          {/* Pricing Card */}
          <div className="max-w-sm mx-auto mb-12">
            <Card className="border-2 border-primary shadow-elegant">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  AfterUp Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    Free
                  </div>
                  <div className="text-lg text-muted-foreground mb-1">
                    for 3 months
                  </div>
                  <div className="text-lg text-muted-foreground">
                    then <span className="font-semibold text-foreground">$9.99</span>/month
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-left">
                      Earn 7% commission on all purchases
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-left">
                      Track sales and commissions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-left">
                      Professional product recommendations
                    </span>
                  </div>
                </div>

                <div className="mb-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground font-medium">
                    💰 Money-Back Guarantee
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    If your earnings are under $50/month, get your subscription back guaranteed
                  </p>
                </div>

                <Button
                  variant="cta" 
                  size="lg" 
                  onClick={scrollToSignup}
                  className="w-full text-lg py-3"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Simple Signup Form */}
        <div id="signup" className="bg-card rounded-2xl p-8 shadow-elegant max-w-lg mx-auto animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Get Started Today
          </h3>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Practice/Company Name"
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button type="submit" variant="cta" className="w-full py-3">
              Create Free Account
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};