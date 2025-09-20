import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
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
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6 max-w-4xl mx-auto">
            {/* Sparkles */}
            <div className="flex items-center justify-center mb-6 animate-fadeInUp">
              <svg className="w-8 h-8 text-primary mr-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <span className="text-primary font-semibold text-lg">Digital Excellence Awaits</span>
              <svg className="w-8 h-8 text-primary ml-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slideInLeft drop-shadow-2xl font-mona">
              Digital Marketing
              <span className="block text-primary">Excellence</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInRight drop-shadow-lg">
              We help businesses grow through innovative digital marketing strategies, 
              cutting-edge web development, and powerful brand experiences that drive results.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <a
                href="#contact"
                className="group bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center backdrop-blur-sm"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;
