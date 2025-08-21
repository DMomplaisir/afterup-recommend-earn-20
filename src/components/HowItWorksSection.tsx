import { Search, Send, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Products",
    description: "Browse Chewy's catalog and add your favorites.",
    tag: "No need to inventory items."
  },
  {
    icon: Send,
    title: "Send Recommendations",
    description: "We generate and send a personalized page in one click.",
    tag: null
  },
  {
    icon: DollarSign,
    title: "Earn Commission",
    description: "Get paid on every purchase your client makes.",
    tag: null
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How AfterUp Helps You Earn — In 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {step.tag && (
                  <p className="text-sm text-primary font-medium">
                    {step.tag}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-xl text-foreground font-medium">
            "No extra work. Just more reward."
          </p>
        </div>
      </div>
    </section>
  );
};