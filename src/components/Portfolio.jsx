import React from 'react';
import PlaceholderImage from './PlaceholderImage';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand makeover for a tech startup including logo and guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Viral marketing campaign that increased engagement by 300%.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'SEO Optimization',
      category: 'SEO',
      description: 'Complete SEO overhaul resulting in 250% increase in organic traffic.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Intuitive mobile app design with focus on user experience and conversion.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Digital Marketing Strategy',
      category: 'Strategy',
      description: 'Comprehensive digital marketing strategy for B2B SaaS company.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="portfolio" className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-orbitron">
            Our <span className="text-neon-green">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-full h-64 bg-gradient-to-br from-neon-green/20 to-green-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>
                    <div className="text-gray-700 font-medium">{project.category}</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm text-neon-green font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 font-orbitron">{project.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
