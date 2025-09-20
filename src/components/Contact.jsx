import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mona">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to take your digital presence to the next level? Let's discuss your project and see how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 font-mona">Address</h3>
            <p className="text-slate-300">123 Digital Street<br />Marketing City, MC 12345</p>
          </div>

          <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 font-mona">Phone</h3>
            <p className="text-slate-300">+1 (555) 123-4567</p>
          </div>

          <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 font-mona">Email</h3>
            <p className="text-slate-300">hello@plexis.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
