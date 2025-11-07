import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Baby } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const navLinks = isAuthenticated
    ? [
        { to: '/', label: 'Home' },
        ...(user?.role === 'parent'
          ? [{ to: '/parent-dashboard', label: 'Dashboard' }]
          : user?.role === 'therapist'
          ? [{ to: '/therapist-dashboard', label: 'Dashboard' }]
          : user?.role === 'cdc-centre'
          ? [{ to: '/cdc-dashboard', label: 'Dashboard' }]
          : []),
        { to: '/training', label: 'Training Hub' },
        { to: '/community', label: 'Community' },
      ]
    : [
        { to: '/', label: 'Home' },
        { to: '/training', label: 'Training' },
        { to: '/community', label: 'Community' },
      ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Baby className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">CDC Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">Hi, {user?.name}</span>
                <Button variant="outline" asChild>
                  <Link to="/auth">Logout</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {!isAuthenticated && (
                  <>
                    <Button variant="outline" asChild>
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
