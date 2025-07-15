import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, MessageCircle, BookOpen, Calendar, BarChart3, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', icon: Heart },
    { label: 'Chat Support', href: '/chat', icon: MessageCircle },
    { label: 'Knowledge Base', href: '/knowledge', icon: BookOpen },
    { label: 'Consultations', href: '/consultations', icon: Calendar },
    { label: 'Baby Tracker', href: '/tracker', icon: BarChart3 },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Naricare</span>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-primary"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">
                Log In
              </Button>
              <Button variant="default" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;