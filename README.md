# Plexis - Digital Marketing Excellence

> A cutting-edge digital marketing landing page featuring interactive LiquidEther animations, glass morphism design, and advanced cursor interactions.

![Plexis Banner](https://img.shields.io/badge/Plexis-Digital%20Marketing-33A395?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss)

## Features

### LiquidEther Hero Section
- Interactive Fluid Simulation - WebGL-powered liquid animations using Three.js
- Mouse-Responsive - Fluid reacts to cursor movement with realistic physics
- Auto-Demo Mode - Beautiful autonomous animations when idle
- Custom Color Palette - Brand-consistent teal and green gradients
- High Performance - Optimized for 60fps smooth animations

### Glass Morphism Design
- Floating Navbar - Centered glass navigation with backdrop blur
- Enhanced Blur Effects - 24px blur with 200% saturation
- Interactive Elements - Hover states with glass morphism
- Social Media Icons - Glass-styled social links with tooltips
- Consistent Theming - Unified glass aesthetic throughout

### Animated Custom Cursor
- Context-Aware - Different cursor styles for different elements
- Particle Effects - Animated particles in LiquidEther section
- Smooth Transitions - 200ms transitions between cursor states
- Trail Effect - Subtle cursor trail with delayed animation
- Brand Colors - Teal and green color scheme integration

### Interactive About Section
- Animated Counters - Numbers count up when section comes into view
- Auto-Rotating Cards - Feature cards cycle every 3 seconds
- Click Interactions - Manual card selection with visual feedback
- Particle Systems - Mathematical particle positioning
- Glass Morphism Cards - Beautiful translucent stat cards

### Enhanced Footer
- Copy-to-Clipboard - Animated email copying with particle burst
- Moving Background Text - Scrolling brand messages
- Ripple Effects - Click animations with expanding circles
- Social Media Integration - Glass-styled social platform links
- Success Animations - Visual feedback for user interactions

## Tech Stack

### Frontend
- React 18 - Modern React with hooks and functional components
- Vite - Lightning-fast build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- Three.js - 3D graphics and WebGL for LiquidEther
- Lucide React - Beautiful SVG icon library

### Animations & Effects
- Custom CSS Animations - Keyframe animations for smooth interactions
- Intersection Observer API - Scroll-triggered animations
- WebGL Shaders - Custom fluid simulation shaders
- CSS Backdrop Filter - Glass morphism effects
- Transform Animations - Hardware-accelerated transforms

### Typography & Design
- Sora Font - Modern, clean Google Font
- Custom Color Palette - Teal (#33A395) and sage green (#A1D3AC)
- Dark Theme - Consistent slate background (#0f172a)
- Responsive Design - Mobile-first approach

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/AbdeljalilRajli/Plexis.git

# Navigate to project directory
cd Plexis

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Customization

### Color Scheme
Update colors in `src/index.css`:
```css
:root {
  --primary: #33A395;    /* Teal */
  --secondary: #A1D3AC;  /* Light Green */
  --accent: #66C7B8;     /* Medium Teal */
}
```

### LiquidEther Configuration
Modify fluid properties in `src/App.jsx`:
```javascript
<LiquidEther
  colors={['#33A395', '#A1D3AC', '#66C7B8']}
  mouseForce={25}
  autoSpeed={0.8}
  autoIntensity={3.0}
/>
```

### Animation Timing
Adjust animation speeds in component files:
- Counter animation: `2000ms` (About.jsx)
- Card rotation: `3000ms` (About.jsx)
- Cursor transitions: `200ms` (CustomCursor.jsx)

## Responsive Design

- Desktop - Full feature experience with all animations
- Tablet - Optimized layout with maintained interactivity
- Mobile - Touch-friendly interface with adapted animations
- Glass Effects - Consistent across all screen sizes

## Performance Optimizations

- Lazy Loading - Components load as needed
- Intersection Observer - Animations trigger on scroll
- WebGL Optimization - Efficient shader compilation
- CSS Hardware Acceleration - Transform3d for smooth animations
- Debounced Events - Optimized mouse tracking

## Key Interactions

1. Hero Section - Move mouse to see fluid react
2. Navigation - Hover for glass morphism effects
3. About Cards - Click to manually select features
4. Email Button - Click for particle explosion animation
5. Social Icons - Hover for tooltips and glow effects

## Project Structure

```
src/
├── components/
│   ├── About.jsx           # Interactive about section
│   ├── Contact.jsx         # Contact information
│   ├── CustomCursor.jsx    # Animated cursor system
│   ├── Footer.jsx          # Enhanced footer with animations
│   ├── LiquidEther.jsx     # WebGL fluid simulation
│   ├── LiquidEther.css     # Fluid animation styles
│   ├── Navbar.jsx          # Glass morphism navigation
│   ├── Portfolio.jsx       # Project showcase
│   ├── Services.jsx        # Service offerings
│   └── Testimonials.jsx    # Client testimonials
├── App.jsx                 # Main application component
├── index.css              # Global styles and animations
└── main.jsx               # Application entry point
```

## Browser Support

- Chrome 90+ 
- Firefox 88+ 
- Safari 14+ 
- Edge 90+ 

*WebGL and backdrop-filter support required for full experience*

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Three.js Community - For WebGL fluid simulation techniques
- Tailwind CSS - For the utility-first CSS framework
- Lucide React - For beautiful icon components
- Sora Font - For modern typography

---

<div align="center">

**Built with for Digital Marketing Excellence**

[Live Demo](https://your-demo-link.com) • [Report Bug](https://github.com/AbdeljalilRajli/Plexis/issues) • [Request Feature](https://github.com/AbdeljalilRajli/Plexis/issues)

</div>
