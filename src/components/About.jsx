import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Clock, Zap, Target, Rocket, Star } from 'lucide-react';

const StatBox = ({ stat, value, isPrimary }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div 
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 rounded-xl transition-all duration-300 overflow-hidden
        ${isPrimary ? 'bg-primary/5 hover:bg-primary/10' : 'bg-secondary/5 hover:bg-secondary/10'}
        border ${isPrimary ? 'border-primary/20 hover:border-primary/40' : 'border-secondary/20 hover:border-secondary/40'}`}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(
            300px circle at ${position.x}px ${position.y}px, 
            rgba(34, 211, 238, 0.15),
            transparent 60%
          )`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      <div className="flex items-center space-x-4 relative z-10">
        <div className={`p-3 rounded-lg transition-all duration-300 ${isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'}`}>
          <stat.icon className={`w-6 h-6 ${stat.color} transition-transform duration-300 group-hover:scale-110`} />
        </div>
        <div>
          <div className={`text-3xl font-bold ${stat.color} mb-1 transition-transform duration-300 group-hover:scale-105`}>
            {value}{stat.suffix}
          </div>
          <div className="text-sm font-medium text-slate-300">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, label: 'Happy Clients', value: 150, suffix: '+', color: 'text-primary' },
    { icon: Award, label: 'Projects Done', value: 500, suffix: '+', color: 'text-secondary' },
    { icon: Clock, label: 'Years Experience', value: 5, suffix: '+', color: 'text-primary' },
    { icon: Zap, label: 'Success Rate', value: 98, suffix: '%', color: 'text-secondary' }
  ];

  const features = [
    { icon: Target, title: 'Strategic Planning', desc: 'Data-driven strategies tailored to your goals' },
    { icon: Rocket, title: 'Fast Execution', desc: 'Quick turnaround without compromising quality' },
    { icon: Star, title: 'Premium Quality', desc: 'Excellence in every detail of our work' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setCounters({
            clients: Math.floor(150 * progress),
            projects: Math.floor(500 * progress),
            years: Math.floor(5 * progress)
          });

          if (currentStep >= steps) {
            clearInterval(timer);
            setCounters({ clients: 150, projects: 500, years: 5 });
          }
        }, stepDuration);
      };

      animateCounters();
    }
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="px-6 py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-custom"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 font-mona">
            About <span className="text-primary relative">
              Plexia
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets excellence in digital marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                We are a <span className="text-primary font-semibold">full-service digital marketing agency</span> dedicated to helping businesses 
                thrive in the digital landscape. With over 5 years of experience, we've helped 
                hundreds of companies achieve their online goals.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our team of experts combines <span className="text-secondary font-semibold">creativity with data-driven strategies</span> to deliver 
                exceptional results. From social media management to web development, we're 
                your one-stop solution for digital success.
              </p>
            </div>

            {/* Stats Grid with Spotlight Effect */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const value = index === 0 ? counters.clients : index === 1 ? counters.projects : index === 2 ? counters.years : 98;
                const isPrimary = stat.color.includes('primary');
                
                return (
                  <StatBox 
                    key={index}
                    stat={stat}
                    value={value}
                    isPrimary={isPrimary}
                  />
                );
              })}
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <div className="relative animate-slideInRight">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-slate-800/40 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-700 transform cursor-pointer ${
                    activeCard === index 
                      ? 'scale-105 border-primary/30 shadow-xl shadow-primary/10' 
                      : 'scale-100 border-slate-700/50 hover:border-slate-600/50'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      activeCard === index ? 'bg-primary/20 scale-110' : 'bg-slate-700/50 group-hover:bg-primary/10'
                    }`}>
                      <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                        activeCard === index ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 font-mona ${
                        activeCard === index ? 'text-primary' : 'text-slate-100 group-hover:text-primary'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeCard === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* Particle effect for active card */}
                  {activeCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '2s'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse-custom"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
