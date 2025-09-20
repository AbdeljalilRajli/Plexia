import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 animate-slideInLeft">
      <div className="flex justify-center">
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-500/60 rounded-3xl px-10 py-4 shadow-2xl shadow-black/40" style={{ backdropFilter: 'blur(24px) saturate(200%)', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)' }}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-slate-100 hover:scale-105 transition-transform duration-300">
                <span className="text-primary">Plexis</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-8 flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-200 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-xl text-slate-200 hover:text-primary hover:bg-white/10 hover:backdrop-blur-sm focus:outline-none transition-all duration-300 hover:shadow-lg"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden animate-fadeInUp mt-6 pt-6 border-t border-slate-600/40">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-200 hover:text-primary block px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm rounded-xl hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
