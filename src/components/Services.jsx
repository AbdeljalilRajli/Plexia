import React, { useRef, useState } from 'react';
import { Share2, Search, Code, Palette } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 
        transition-all duration-500 group hover:border-primary/30"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(34, 211, 238, 0.1), 
            transparent 40%
          )`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 
          transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
          <div className="text-primary group-hover:animate-pulse-custom">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-primary 
          transition-colors duration-300 font-orbitron">
          {service.title}
        </h3>
        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 
          transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social platforms with engaging content and strategic campaigns.',
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on Google with our proven SEO strategies.',
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: 'Web Development',
      description: 'Create stunning, responsive websites that convert visitors into customers and drive business growth.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'Brand Identity',
      description: 'Develop a compelling brand identity that resonates with your audience and sets you apart from competitors.',
      icon: <Palette className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="px-6 py-16 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 font-orbitron">
            Our <span className="text-primary relative">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
