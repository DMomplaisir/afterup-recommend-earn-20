import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              AfterUp<span className="text-xs align-super">™</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#partnership" className="text-muted-foreground hover:text-primary transition-colors">
              Partnership
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <Button variant="cta" onClick={scrollToSignup}>
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="cta" size="sm" onClick={scrollToSignup}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};