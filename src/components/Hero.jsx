import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import LiquidEther from './LiquidEther';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ['Excellence', 'Innovation', 'Success', 'Growth'];
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentWord.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex, words]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={['#00ff88', '#5227FF', '#FF9FFC']}
          mouseForce={25}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.6}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={3.0}
          takeoverDuration={0.3}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/60"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6 animate-fadeInUp">
            <Sparkles className="w-8 h-8 text-neon-green mr-3 animate-pulse-custom" />
            <span className="text-neon-green font-semibold text-lg">Digital Excellence Awaits</span>
            <Sparkles className="w-8 h-8 text-neon-green ml-3 animate-pulse-custom" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight animate-slideInLeft">
            Digital Marketing
            <span className="block text-neon-green">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
            We help businesses grow through innovative digital marketing strategies, 
            cutting-edge web development, and powerful brand experiences that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <a
              href="#contact"
              className="group bg-neon-green text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-neon-green/25 flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="border-2 border-neon-green text-neon-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-neon-green hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
