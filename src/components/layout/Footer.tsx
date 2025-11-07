import { Link } from 'react-router-dom';
import { Baby, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Baby className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">CDC Connect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting families, therapists, and child development centres for better outcomes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">
                  Training Hub
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  Therapist Portal
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  CDC Centre Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@cdcconnect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-CDC-HELP</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CDC Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
