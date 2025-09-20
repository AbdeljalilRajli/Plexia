import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const email = "hello@plexis.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setIsAnimating(true);
      
      // Reset animations
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-custom"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Moving text background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="whitespace-nowrap text-6xl md:text-8xl font-bold" style={{ color: '#A1D3AC', opacity: 0.2 }}>
          <div className="inline-block animate-slideInLeft" style={{ animationDuration: '25s', animationIterationCount: 'infinite' }}>
            CONTACT • COLLABORATE • CREATE • CONTACT • COLLABORATE • CREATE • 
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <a href="#home" className="text-4xl font-bold">
              <span className="text-primary">Plexis</span>
            </a>
          </div>

          {/* Enhanced Email Button */}
          <div className="mb-16">
            <div className="relative">
              <button
                onClick={copyToClipboard}
                className={`group relative bg-slate-800/30 backdrop-blur-md border-2 border-primary/40 hover:border-primary px-16 py-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 ${isAnimating ? 'animate-copy-success ripple-effect' : ''}`}
              >
                <div className="flex items-center justify-center space-x-6">
                  <span className="text-2xl md:text-4xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-300 font-sora">
                    {email}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {copied ? (
                      <Check className="w-8 h-8 text-primary animate-bounce" />
                    ) : (
                      <Copy className="w-7 h-7 text-slate-400 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                    )}
                  </div>
                </div>
                <div className="text-base text-slate-400 mt-3 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                  {copied ? (
                    <span className="text-primary font-semibold flex items-center justify-center">
                      <Check className="w-4 h-4 mr-2" />
                      Successfully copied to clipboard!
                    </span>
                  ) : (
                    'Click to copy email address'
                  )}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </button>
              
              {/* Success particles effect */}
              {copied && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
                        style={{
                          left: `${Math.cos(i * 45 * Math.PI / 180) * 60}px`,
                          top: `${Math.sin(i * 45 * Math.PI / 180) * 60}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-slate-300 mb-8 font-mona">Connect With Us</h3>
            <div className="flex justify-center space-x-8">
              {[
                { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="group relative w-16 h-16 backdrop-blur-2xl rounded-2xl flex items-center justify-center hover:bg-primary/20 border border-slate-500/60 hover:border-primary/60 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg shadow-black/20"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)',
                    backdropFilter: 'blur(24px) saturate(200%)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-switzer">
                    {social.name}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Copyright */}
          <div className="border-t border-slate-700/50 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 font-switzer text-sm">
                © 2025 <span className="text-primary font-semibold">Plexis</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>Crafted with</span>
                <span className="text-red-400 animate-pulse">♥</span>
                <span>for Digital Excellence</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-xs font-switzer">
                Transforming businesses through innovative digital solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
