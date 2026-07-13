import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Printer, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Mark */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group cursor-pointer text-left"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#111111] text-[#FFFFFF] overflow-hidden transition-transform duration-500 group-hover:rotate-12">
            <Printer className="w-5 h-5" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#D72638]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#CFA15D]" />
          </div>
          <div>
            <span className="block font-sans font-black tracking-widest text-[#111111] text-base leading-none">
              POONGUZHALI
            </span>
            <span className="block font-sans font-medium tracking-[0.2em] text-[#CFA15D] text-[10px] uppercase mt-1">
              Art Printers
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className="relative py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer text-left"
            >
              <span
                className={`${
                  activeTab === item.id ? 'text-[#D72638]' : 'text-[#111111]/70 hover:text-[#111111]'
                }`}
              >
                {item.label}
              </span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D72638]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            id="nav-quote-btn"
            onClick={() => handleNavClick('quote')}
            className="hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#111111] hover:bg-[#D72638] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md shadow-black/5 hover:scale-105"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg text-[#111111] hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FFFFFF] border-b border-gray-200 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full py-3 text-left text-base font-bold uppercase tracking-widest border-b border-gray-100 last:border-0 cursor-pointer"
                >
                  <span
                    className={
                      activeTab === item.id ? 'text-[#D72638]' : 'text-[#111111]'
                    }
                  >
                    {item.label}
                  </span>
                </button>
              ))}
              <div className="pt-4">
                <button
                  id="mobile-nav-quote-btn"
                  onClick={() => handleNavClick('quote')}
                  className="flex items-center justify-center space-x-2 w-full py-4 rounded-full bg-[#D72638] text-white font-bold uppercase tracking-widest text-sm shadow-md cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
