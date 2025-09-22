import React from 'react';
import PlaceholderImage from './PlaceholderImage';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand makeover for a tech startup including logo and guidelines.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Viral marketing campaign that increased engagement by 300%.',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'SEO Analytics Dashboard',
      category: 'SEO',
      description: 'Complete SEO overhaul resulting in 250% increase in organic traffic.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Intuitive mobile app design with focus on user experience and conversion.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Digital Marketing Strategy',
      category: 'Strategy',
      description: 'Comprehensive digital marketing strategy for B2B SaaS company.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
              
              {/* Green gradient overlay from bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#33A395]/90 via-[#33A395]/40 to-transparent transition-all duration-300 group-hover:from-[#33A395]/95 group-hover:via-[#33A395]/50" />
              
              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#33A395] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  {project.category}
                </span>
              </div>
              
              {/* Content with white text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2 font-saira text-white">
                  {project.title}
                </h3>
                <p className="text-white text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
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
