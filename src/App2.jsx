import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { 
  Compass, 
  ArrowRight, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Shield, 
  Cpu, 
  Workflow, 
  Search, 
  User, 
  ShoppingCart,
  ChevronDown,
  Layers,
  Activity
} from 'lucide-react';

// 1. Dynamic Font Injector for Montserrat and Poppins Google Fonts (Section 3.2 Typography)
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return null;
};

// 2. Custom CSS Injection (Visual Design System & Global Classes)
const CustomVignetteStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    :root {
      --primary-bg: #000000;
      --ocean-blue: #0099FF;
      --deep-blue: #0058D8;
      --accent-blue: #00BFFF;
      
      /* Mastek Signature Innovation Tokens */
      --mastek-purple: #7C3AED;
      --mastek-cyan: #06B6D4;
      --mastek-green: #22C55E;
      
      --text-primary: #FFFFFF;
      --text-secondary: #D1D5DB;
    }
    
    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--primary-bg);
      font-family: 'Poppins', sans-serif;
      margin: 0;
      color: var(--text-primary);
    }

    .heading-font {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      letter-spacing: -0.04em;
    }

    /* Light rays volumetric bloom */
    @keyframes rayPulse {
      0%, 100% { opacity: 0.15; transform: scale(1) rotate(-45deg); }
      50% { opacity: 0.35; transform: scale(1.08) rotate(-43deg); }
    }

    .light-ray-1 {
      animation: rayPulse 8s ease-in-out infinite;
    }
    
    .light-ray-2 {
      animation: rayPulse 12s ease-in-out infinite;
      animation-delay: 2s;
    }

    /* Sweeping light glare modifier for main CTA */
    @keyframes glareSweep {
      0% { transform: translateX(-100%) rotate(45deg); }
      100% { transform: translateX(100%) rotate(45deg); }
    }

    .btn-glare-effect:hover .glare-bar {
      animation: glareSweep 1.2s ease-in-out;
    }

    /* Cinematic custom scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: var(--primary-bg);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--mastek-purple);
    }
  `}} />
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Parallax Spring Motion values (Section 4.2 Interactive Parallax Effect)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Web Audio click synthesizer
  const playClickSound = (freq = 720) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.18);
    } catch (e) {}
  };

  // Tracking mouse movement coordinates to update parallaxsprings
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Computing percentage offset from center of screen (-0.5 to 0.5)
      const xPercent = (clientX / window.innerWidth) - 0.5;
      const yPercent = (clientY / window.innerHeight) - 0.5;
      
      // Map to specified structural shift limits (-15px to 15px)
      mouseX.set(xPercent * 30);
      mouseY.set(yPercent * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating Water / Data Particles Configuration (Section 4.3 Specifications)
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const particleArray = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random left offset percentage
      size: Math.random() * 2 + 1, // 1px to 3px
      delay: Math.random() * 5, // random animation startup delay
      duration: Math.random() * 5 + 5 // random duration from 5s to 10s
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pb-12">
      <FontLoader />
      <CustomVignetteStyles />

      {/* --- BACKGROUND VIDEO CONTAINER (Section 4.2 Positioning & Scale) --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div 
          className="absolute right-0 top-0 w-full lg:w-[75%] h-full overflow-hidden"
          style={{
            x: springX,
            y: springY,
            scale: 1.06 // wrapped slightly larger to hide background margins during shift
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source 
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_video_deepdive.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* --- VIDEO LAYER OVERLAYS (Section 4.3 Specifications) --- */}
      {/* 1. Primary Dark Fade (contrasting sidebar gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 lg:via-black/75 to-transparent z-1 pointer-events-none" />

      {/* 2. Mastek Purplish-Cyan Glow Overlay */}
      <div 
        className="absolute inset-0 mix-blend-screen z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(124, 92, 237, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)'
        }}
      />

      {/* 3. Vignette box shadow boundary */}
      <div 
        className="absolute inset-0 pointer-events-none z-1" 
        style={{ boxShadow: 'inset 0 0 150px rgba(0,0,0,0.75)' }}
      />

      {/* 4. Light Rays (Angled volumetric glowing beams on top-right) */}
      <div className="absolute top-0 right-0 w-full h-[60%] overflow-hidden pointer-events-none z-1 hidden md:block">
        <div 
          className="absolute top-[-20%] right-[-10%] w-[350px] h-[800px] blur-[90px] light-ray-1"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, transparent 70%)',
            transformOrigin: 'top right'
          }}
        />
        <div 
          className="absolute top-[-10%] right-[10%] w-[280px] h-[750px] blur-[100px] light-ray-2"
          style={{
            background: 'linear-gradient(135deg, rgba(124, 92, 237, 0.14) 0%, transparent 70%)',
            transformOrigin: 'top right'
          }}
        />
      </div>

      {/* 5. Floating Water / Data Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1 select-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
              boxShadow: '0 0 8px rgba(6,182,212,0.4)'
            }}
            animate={{
              y: '-110vh',
              x: [0, Math.sin(particle.id) * 30, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* --- FIXED BRAND NAVIGATION (Section 4.4 Specifications) --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 flex items-center justify-between bg-black/60 backdrop-blur-md border-b border-white/[0.04]">
        
        {/* Left Side: Brand Logo Group */}
        <div 
          className="flex flex-col text-left cursor-pointer group"
          onClick={() => {
            playClickSound(500);
          }}
        >
          <span className="text-xl font-black tracking-wide text-white heading-font uppercase">
            DEEP DIVE
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] text-[#A7AEC7] font-bold font-mono">
            EXPLORE BEYOND
          </span>
        </div>

        {/* Center Navigation Links (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-white/80">
          <a href="#home" className="text-[#06B6D4] border-b-2 border-[#06B6D4] pb-1 font-bold">Home</a>
          <a href="#gear" className="hover:text-[#06B6D4] transition-colors pb-1">Gear</a>
          <a href="#destinations" className="hover:text-[#06B6D4] transition-colors pb-1">Destinations</a>
          <a href="#experiences" className="hover:text-[#06B6D4] transition-colors pb-1">Experiences</a>
          <a href="#about" className="hover:text-[#06B6D4] transition-colors pb-1">About Us</a>
        </div>

        {/* Right Search, Cart & Controls */}
        <div className="flex items-center space-x-5 text-white/70">
          
          {/* Sounds Feedback Trigger */}
          <button 
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) {
                setTimeout(() => playTactileBeep(880), 100);
              }
            }}
            className="p-2 border border-white/10 rounded-full bg-white/[0.02] hover:text-white transition-all hidden sm:block"
            title="Interface sound parameters"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#06B6D4]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button className="hover:text-white transition-colors" title="Search platform catalog">
            <Search className="w-4.5 h-4.5" />
          </button>
          
          <button className="hover:text-white transition-colors hidden sm:block" title="User account setup">
            <User className="w-4.5 h-4.5" />
          </button>

          {/* Cart Indicator with active absolute badge */}
          <button 
            onClick={() => {
              setCartCount(cartCount + 1);
              playClickSound(900);
            }}
            className="relative hover:text-white transition-colors" 
            title="Shopping platform items"
          >
            <ShoppingCart className="w-4.5 h-4.5" />
            <span className="absolute -top-2.5 -right-2.5 bg-[#0099FF] text-white text-[9px] font-mono font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-black shadow">
              {cartCount}
            </span>
          </button>

          {/* Hamburger Menu Toggle (Mobile view only) */}
          <button 
            className="lg:hidden p-1 text-white hover:text-white/80 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>

      </nav>

      {/* Full-screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-black heading-font text-white uppercase">DEEP DIVE</span>
              <button 
                className="p-2 text-white hover:text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-left my-auto">
              {['Home', 'Gear', 'Destinations', 'Experiences', 'About Us'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-white/90 hover:text-[#06B6D4] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  playClickSound(750);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0099FF] to-[#0058D8] text-white font-bold text-xs uppercase tracking-widest text-center"
              >
                Launch Validation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO CORE NARRATIVE CONTENT AREA (Section 4.5 Specifications) --- */}
      <main className="relative z-10 w-full px-6 lg:px-12 max-w-[1440px] mx-auto h-full min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-4xl pt-32 lg:pt-24 flex flex-col items-start space-y-6">
          
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 text-[#06B6D4] text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] uppercase"
          >
            <Compass className="w-4.5 h-4.5 text-[#06B6D4] animate-spin-slow" />
            <span>DIVE INTO ADVENTURE · MASTEK iNNEXT</span>
          </motion.div>

          {/* Main Heading Stack with precise staggered line reveals (Section 5 Specifications) */}
          <h1 className="text-left leading-[0.92]">
            
            <div className="overflow-hidden inline-block w-full">
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.0] text-white heading-font block"
              >
                EXPLORE.
              </motion.div>
            </div>

            <div className="overflow-hidden inline-block w-full">
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.0] text-white heading-font block"
              >
                DISCOVER.
              </motion.div>
            </div>

            <div className="overflow-hidden inline-block w-full">
              <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-[40px] md:text-[56px] lg:text-[72px] font-black tracking-tight leading-[1.0] heading-font flex items-center flex-wrap"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#22C55E] italic font-bold pr-2">
                  BEYOND
                </span>
                <span className="text-white">LIMITS.</span>
              </motion.div>
            </div>

          </h1>

          {/* Platform description block */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-[#D1D5DB] text-base md:text-lg max-w-[500px] leading-relaxed font-light text-left"
          >
            Premium gear for those who live to explore the deep. Innovating real-world biotech, IoT, and cognitive intelligence directly beneath the surface.
          </motion.p>

          {/* Interactive CTA Buttons Row (Section 4.6 Specifications) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4 w-full sm:w-auto"
          >
            
            <button 
              onClick={() => {
                playClickSound(800);
                setCartCount(cartCount + 1);
              }}
              className="group btn-glare-effect relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#0099FF] to-[#0058D8] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,153,255,0.4)] flex items-center justify-center space-x-2 text-center"
            >
              {/* Internal sweeping light glare overlay */}
              <div className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 translate-x-[-120%] glare-bar pointer-events-none" />
              <span>SHOP DIVING GEAR</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#ecosystem"
              onClick={() => playClickSound(600)}
              className="group relative py-4 px-2 text-xs font-bold uppercase tracking-widest text-[#D1D5DB] hover:text-white transition-colors duration-300 text-center flex items-center justify-center"
            >
              <span>EXPLORE COLLECTION</span>
              {/* Pseudo bottom border draw line */}
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#06B6D4] group-hover:w-full transition-all duration-300" />
            </a>

          </motion.div>

          {/* --- CORE PILLARS FEATURE ROW GRID (Section 4.7 Specifications) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-12 pt-8 border-t border-white/[0.04] w-full"
          >
            
            {/* Feature 1 */}
            <div className="group flex items-center space-x-4 text-left">
              <div className="p-3 rounded-lg border border-[#06B6D4]/30 group-hover:border-[#7C3AED] transition-colors shrink-0">
                <Workflow className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white uppercase font-mono">PREMIUM QUALITY</h4>
                <p className="text-[11px] text-[#A7AEC7] mt-0.5">Sovereign pipeline handshakes</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex items-center space-x-4 text-left">
              <div className="p-3 rounded-lg border border-[#06B6D4]/30 group-hover:border-[#7C3AED] transition-colors shrink-0">
                <Cpu className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white uppercase font-mono">BUILT FOR PERFORMANCE</h4>
                <p className="text-[11px] text-[#A7AEC7] mt-0.5">Automated workload checks</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group flex items-center space-x-4 text-left">
              <div className="p-3 rounded-lg border border-[#06B6D4]/30 group-hover:border-[#7C3AED] transition-colors shrink-0">
                <Shield className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-white uppercase font-mono">TRUSTED BY EXPLORERS</h4>
                <p className="text-[11px] text-[#A7AEC7] mt-0.5">Zero-trust security compliance</p>
              </div>
            </div>

          </motion.div>

        </div>
      </main>

    </div>
  );
}