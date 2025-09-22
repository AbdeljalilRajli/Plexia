import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import ModernServices from './components/ModernServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <LiquidEther
          colors={['#33A395', '#A1D3AC', '#66C7B8']}
          mouseForce={25}
          cursorSize={150}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.6}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.8}
          takeoverDuration={0.25}
          autoResumeDelay={502}
          autoRampDuration={0.3}
          style={{ width: '100%', height: '100%' }}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6 max-w-4xl mx-auto">
            
            {/* Top Badge */}
            <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-12">
              <div className="w-2 h-2 bg-primary rounded-sm mr-3"></div>
              <span className="text-white/90 text-sm font-medium">Digital Marketing Agency</span>
            </div>
            
            {/* Main Headline */}

            <h1 className="text-5xl md:text-2xl text-white font-semibold mb-6 font-saira font-light">
              Plexia
            </h1>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight max-w-4xl mx-auto">
              Digital growth, made fluid at your{" "}
              <span className="text-primary">fingertips.</span>
            </h1>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-8">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-primary/25 min-w-[180px]"
              >
                Get Started
              </a>
              
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[180px]"
              >
                Learn More
              </a>
            </div>
            
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <ModernServices />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
