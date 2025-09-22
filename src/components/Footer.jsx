import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-slate-900 py-16">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            Get Digital Marketing Insights
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Stay ahead with the latest digital marketing strategies, tips, and industry insights. 
            Join our newsletter for exclusive content and <span className="text-primary font-semibold">special offers</span>.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-4 text-slate-400 w-4 h-4" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:bg-white/15 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 font-orbitron"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Newsletter Info */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-300 text-sm mb-4">
              Don't worry, we respect your inbox. We only send valuable digital marketing insights a few times a year.
            </p>
            <button className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors duration-300">
              Subscribe
            </button>
          </div>

          {/* Help and Services */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-4">Help & Services</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">How it works</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Our Services</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* To Explore */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-4">To Explore</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Digital Marketing</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Web Development</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Portfolio</a></li>
            </ul>
          </div>

          {/* Other Possibilities */}
          <div>
            <h3 className="text-white font-orbitron font-semibold mb-4">Other Possibilities</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm">Testimonials</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 <span className="text-primary font-orbitron font-semibold">PLEXIA</span>
          </p>
          
          {/* Social Icons with Glassy Background */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white/15 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white/15 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white/15 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
