import React, { useEffect, useState } from 'react';
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Wait a tick so CSS is applied before showing the navbar
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-opacity duration-300 ${mounted ? 'opacity-100 animate-slideInLeft' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex justify-center">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-full px-10 py-4 shadow-xl" style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center hover:scale-105 transition-transform duration-300">
                <img
                  src="../public/plexia-logo.png"
                  alt="Plexia - Marketing Agency"
                  className="h-8 md:h-9 w-auto"
                  height={36}
                  loading="eager"
                  decoding="async"
                  onError={(e) => { e.currentTarget.style.display = 'none'; const fallback = e.currentTarget.nextElementSibling; if (fallback) fallback.style.display = 'inline-block'; }}
                />
                <span style={{ display: 'none' }} className="text-2xl font-bold text-slate-100">
                  <span className="text-primary">Plexia</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-8 flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg drop-shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative inline-block overflow-hidden">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full w-0 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"></span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-xl text-white/90 hover:text-white hover:bg-white/15 hover:backdrop-blur-sm focus:outline-none transition-all duration-300 hover:shadow-lg drop-shadow-sm"
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
            <div className="lg:hidden animate-fadeInUp mt-6 pt-6 border-t border-white/20">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white block px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/15 hover:backdrop-blur-sm rounded-xl hover:shadow-lg drop-shadow-sm"
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
