import { DollarSign, RefreshCw, Heart, Brain } from "lucide-react";

const highlights = [
  {
    icon: DollarSign,
    title: "Extra revenue",
    description: "Earn on every pet owner with no added effort."
  },
  {
    icon: RefreshCw,
    title: "Seamless follow-up",
    description: "Send curated product pages in seconds."
  },
  {
    icon: Heart,
    title: "Trusted products",
    description: "Chewy's catalog of top tier products."
  },
  {
    icon: Brain,
    title: "Zero tech skills needed",
    description: "Simple, intuitive design made for busy pros."
  }
];

export const WhyProfessionalsSection = () => {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Busy Professionals
          </h2>
          <p className="text-xl text-muted-foreground">
            You're already giving great advice. AfterUp just helps you monetize it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Commissions tracked in your personal dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};