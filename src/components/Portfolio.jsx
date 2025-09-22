import React from 'react';
import PlaceholderImage from './PlaceholderImage';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with advanced features and seamless user experience.',
      image: '/E-Commerce Platform.webp',
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand makeover for a tech startup including logo and guidelines.',
      image: '/Brand Identity Design.webp',
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Viral marketing campaign that increased engagement by 300%.',
      image: '/Social Media Campaign.webp',
    },
    {
      title: 'SEO Analytics Dashboard',
      category: 'SEO',
      description: 'Complete SEO overhaul resulting in 250% increase in organic traffic.',
      image: '/SEO Analytics Dashboard.webp',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Intuitive mobile app design with focus on user experience and conversion.',
      image: '/Mobile App Design.webp',
    },
    {
      title: 'Digital Marketing Strategy',
      category: 'Strategy',
      description: 'Comprehensive digital marketing strategy for B2B SaaS company.',
      image: '/Digital Marketing Strategy.webp',
    },
  ];

  return (
    <section id="portfolio" className="px-6 py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-saira">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Slightly stronger overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-[#0f172a]/25 to-transparent group-hover:from-[#0f172a]/85 transition-all duration-300" />
              
              {/* Consistent brand color category badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-[#33A395]/90 backdrop-blur-xl border border-[#33A395]/50 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:bg-[#33A395] group-hover:shadow-[0_0_20px_rgba(51,163,149,0.4)]">
                  {/* Inner glass shine */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-full"></div>
                  <span className="relative z-10">{project.category}</span>
                </div>
              </div>
              
              {/* Premium glassmorphism content card */}
              <div className="absolute bottom-4 left-4 right-4 z-20 transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="bg-white/12 backdrop-blur-3xl border border-white/30 rounded-2xl p-6 shadow-2xl group-hover:bg-white/18 group-hover:backdrop-blur-[40px] group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)] group-hover:border-white/40 transition-all duration-500">
                  {/* Animated border accent */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#33A395]/0 group-hover:border-[#33A395]/60 transition-all duration-500"></div>
                  
                  {/* Enhanced glass reflection effects */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-t-2xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl"></div>
                  
                  {/* Glass surface texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl"></div>
                  
                  <h3 className="text-2xl font-bold mb-3 font-saira text-white relative z-10 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/95 text-sm leading-relaxed relative z-10 drop-shadow-sm">
                    {project.description}
                  </p>
                  
                  {/* Enhanced corner accent with multiple effects */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#33A395] rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#33A395] group-hover:animate-pulse transition-all duration-300"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                </div>
              </div>
              
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
