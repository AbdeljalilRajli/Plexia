import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait a tick so CSS is applied before showing the navbar
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-opacity duration-300 ${mounted ? 'opacity-100 animate-slideInLeft' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex justify-center">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-full px-10 py-4 shadow-xl hidden lg:block" style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}>
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
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-white hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-300 relative group rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg drop-shadow-sm cursor-pointer"
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
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden mx-4 w-full max-w-sm bg-white/15 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-4 shadow-xl" style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}>
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

            {/* Mobile menu button */}
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
      </div>

      {/* Modern Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 animate-fadeInUp">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center h-full px-6">
            <div className="w-full max-w-sm space-y-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                    setIsOpen(false);
                  }}
                  className="group block text-center transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slideInRight 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative inline-block">
                    <span className="text-4xl md:text-5xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 font-saira">
                      {link.name}
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
