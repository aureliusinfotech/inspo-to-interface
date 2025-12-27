import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Admission', path: '/admission' },
  { name: 'Academic', path: '/academic' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="mailto:info@dpssursand.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@dpssursand.com</span>
            </a>
            <a href="tel:+919801708060" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span>9801708060</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4 ml-4 border-l border-primary-foreground/30 pl-4">
              <Link to="/login" className="hover:text-secondary transition-colors">Teacher Login</Link>
              <span>/</span>
              <Link to="/login" className="hover:text-secondary transition-colors">Student Login</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-school' : 'bg-background'}`}>
        <div className="container-custom py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                DPS
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-display font-bold text-primary leading-tight">
                  DELHI PUBLIC SCHOOL SURSAND
                </h1>
                <p className="text-xs text-muted-foreground">
                  (Under The AEGIS of DPS Educational Society, New Delhi)
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 font-medium text-sm transition-colors rounded-md ${
                    location.pathname === item.path
                      ? 'text-secondary bg-secondary/10'
                      : 'text-foreground hover:text-secondary hover:bg-secondary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container-custom py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 font-medium rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'text-secondary bg-secondary/10'
                          : 'text-foreground hover:text-secondary hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                  <Link to="/login" className="text-sm text-muted-foreground hover:text-secondary">Teacher Login</Link>
                  <Link to="/login" className="text-sm text-muted-foreground hover:text-secondary">Student Login</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
