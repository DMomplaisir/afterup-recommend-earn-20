import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">AfterUp</div>
            <p className="text-background/80 mb-4">
              Turn your professional recommendations into revenue with our seamless commission platform.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Chewy Partner
              </Badge>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Gives Back
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 AfterUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};