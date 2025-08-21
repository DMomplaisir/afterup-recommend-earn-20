import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Professionals Are Saying
          </h2>
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            
            <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
              "AfterUp turned our post-visit recommendations into real profit. So easy to use."
            </blockquote>
            
            <cite className="text-muted-foreground font-medium">
              — Dr. Emily S., Veterinarian
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};