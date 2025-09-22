import React, { useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import createGlobe from "cobe";
import { 
  TrendingUp, 
  Search, 
  Palette, 
  Code, 
  BarChart3, 
  Users,
  Globe,
  Smartphone
} from "lucide-react";

export function ModernServices() {
  const features = [
    {
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all platforms with engaging content and strategic campaigns that drive real results.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-slate-600/60",
    },
    {
      title: "SEO & Analytics",
      description:
        "Boost your search rankings and track performance with our data-driven SEO strategies and comprehensive analytics.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-slate-600/60",
    },
    {
      title: "Brand Identity Design",
      description:
        "Create a memorable brand identity that resonates with your audience and sets you apart from the competition.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-slate-600/60",
    },
    {
      title: "Web Development",
      description:
        "Build fast, responsive, and conversion-optimized websites that deliver exceptional user experiences across all devices.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-slate-600/60",
    },
  ];

  return (
    <section id="services" className="relative z-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white font-saira">
            Our Digital Marketing <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl my-6 mx-auto text-slate-300 text-center font-normal">
            From social media management to web development, we provide comprehensive digital solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-2xl border-slate-600/70 bg-slate-900/30 backdrop-blur-sm">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-6 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug font-saira mb-2">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p className={cn(
      "text-sm md:text-base max-w-4xl text-left mx-auto",
      "text-slate-300 font-normal",
      "text-left max-w-sm mx-0 md:text-sm my-4"
    )}>
      {children}
    </p>
  );
};

// Social Media Marketing Skeleton
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-6 h-full">
      <div className="w-full p-5 mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          {/* Social Media Dashboard Mockup */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">Social Dashboard</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-slate-300 text-sm">Instagram Followers</span>
              <span className="text-primary font-bold">+2.4K</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-slate-300 text-sm">Facebook Engagement</span>
              <span className="text-secondary font-bold">+45%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-slate-300 text-sm">LinkedIn Reach</span>
              <span className="text-primary font-bold">+180%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-slate-900 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

// SEO & Analytics Skeleton
export const SkeletonTwo = () => {
  const metrics = [
    { icon: TrendingUp, label: "Traffic", value: "+250%" },
    { icon: Search, label: "Rankings", value: "#1-3" },
    { icon: BarChart3, label: "Conversions", value: "+180%" },
  ];

  return (
    <div className="relative flex flex-col items-start p-6 gap-6 h-full overflow-hidden">
      <div className="w-full space-y-4">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <metric.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-white font-semibold">{metric.label}</p>
              <p className="text-primary font-bold text-lg">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Brand Identity Skeleton
export const SkeletonThree = () => {
  const colors = ["#33A395", "#A1D3AC", "#22D3EE", "#F59E0B", "#EF4444"];
  
  return (
    <div className="relative flex gap-6 h-full group/brand p-6">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-6 relative">
          {/* Brand Elements */}
          <div className="flex items-center space-x-4">
            <Palette className="w-8 h-8 text-primary" />
            <span className="text-white font-semibold">Brand Palette</span>
          </div>
          
          <div className="flex space-x-3">
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                className="w-12 h-12 rounded-lg shadow-lg"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
          
          <div className="space-y-3">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-4 bg-slate-600 rounded w-1/2"></div>
            <div className="h-4 bg-slate-700 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Web Development Skeleton with Globe
export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <GlobeComponent className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

// Globe Component with Plexia Colors
export const GlobeComponent = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // Dark base
      markerColor: [0.2, 0.64, 0.58], // Your primary color #33A395 in RGB
      glowColor: [0.63, 0.83, 0.67], // Your secondary color #A1D3AC in RGB
      markers: [
        // Major cities for digital marketing presence
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 },   // New York
        { location: [51.5074, -0.1278], size: 0.08 },  // London
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
        { location: [48.8566, 2.3522], size: 0.05 },   // Paris
      ],
      onRender: (state) => {
        // Called on every animation frame.
        state.phi = phi;
        phi += 0.005; // Slower rotation for elegance
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export default ModernServices;
