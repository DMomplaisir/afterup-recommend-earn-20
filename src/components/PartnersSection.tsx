import chewyLogo from "@/assets/chewy-logo.png";
import humaneSocietyLogo from "@/assets/humane-society-logo.png";

export const PartnersSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium text-muted-foreground mb-8">
          Proud partners
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <img 
              src={chewyLogo} 
              alt="Chewy" 
              className="h-8 sm:h-10 lg:h-12 object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <img 
              src={humaneSocietyLogo} 
              alt="Humane Society" 
              className="h-8 sm:h-10 lg:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};