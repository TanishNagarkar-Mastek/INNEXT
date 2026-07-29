import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './CEHero.css';

const frameModules = import.meta.glob('../../../assets/frames/compressed/*.png', { eager: true });

// Native scroll + Lenis (agar globally mounted hai) dono ko ek saath
// forcefully 0 pe reset karta hai. Lenis apna khud ka virtual scroll
// state maintain karta hai jo sirf window.scrollTo se sync nahi hota,
// isliye dono ko explicitly reset karna zaroori hai.
const forceScrollTop = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  // Agar Lenis instance kahin globally expose kiya hua hai
  // (e.g. window.lenis = lenisInstance in your root layout),
  // usko bhi immediately reset karo — warna Lenis apni purani
  // position ki taraf snap-back kar dega apne agle raf tick mein.
  if (window.lenis && typeof window.lenis.scrollTo === 'function') {
    window.lenis.scrollTo(0, { immediate: true, force: true });
  }
};

const CEHero = () => {
  // Jab tak hum 100% confirm nahi kar lete ki scroll 0 pe hai aur
  // frame 0 render ho chuka hai, hero ko hidden rakhते hai — isse
  // koi bhi "wrong frame flash" user ko kabhi dikhega hi nahi,
  // chahe timing thodi bhi off ho.
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    forceScrollTop();
  }, []);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const frameCount = 221;

  useEffect(() => {
    // Route change ke baad bhi agar koi late scroll-restore try ho,
    // usko override karne ke liye do extra safety resets.
    forceScrollTop();

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    const images = [];
    let loadedCount = 0;
    const canvas = canvasRef.current;
    const context = canvas ? canvas.getContext('2d') : null;

    const renderImage = (index) => {
      if (!canvas || !context) return;

      const width = canvas.offsetWidth || window.innerWidth;
      const height = canvas.offsetHeight || window.innerHeight;

      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const img = images[index];
      if (img && img.complete && img.naturalWidth !== 0) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        context.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
      }
    };

    for (let i = 1; i <= frameCount; i++) {
      const paddedNum = String(i).padStart(3, '0');
      const matchedKey = Object.keys(frameModules).find(key => key.includes(`ezgif-frame-${paddedNum}`));

      if (matchedKey) {
        const img = new Image();
        img.src = frameModules[matchedKey].default;

        img.onload = () => {
          loadedCount++;
          if (loadedCount === 1) {
            renderImage(0);
          }
        };
        images.push(img);
      }
    }

    let animationFrameId = null;
    let targetProgress = 0;
    let currentProgress = 0;
    let isInitialized = false;

    const handleScroll = () => {
      if (!containerRef.current || !isInitialized) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      targetProgress = currentScroll <= 0 ? 0 : currentScroll / scrollableHeight;
      targetProgress = Math.max(0, Math.min(1, targetProgress));
    };

    // setTimeout(150ms) guess ki jagah double-rAF use kar rahe hai —
    // ye guarantee karta hai ki browser ek paint cycle complete kar
    // chuka hai (layout + scroll dono settle ho chuke hai) isse pehle
    // hum scroll-tracking shuru karein. Zyada reliable, koi race nahi.
    let rafId1 = null;
    let rafId2 = null;

    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        forceScrollTop();
        isInitialized = true;
        currentProgress = 0;
        targetProgress = 0;
        renderImage(0);

        window.addEventListener('scroll', handleScroll, { passive: true });

        const updateFrame = () => {
          currentProgress += (targetProgress - currentProgress) * 0.1;
          const frameIndex = Math.max(0, Math.min(
            images.length - 1,
            Math.floor(currentProgress * images.length)
          ));

          if (images.length > 0) {
            renderImage(frameIndex);
          }
          animationFrameId = requestAnimationFrame(updateFrame);
        };

        animationFrameId = requestAnimationFrame(updateFrame);

        // Ab hum confirm ho chuke hai ki scroll 0 hai aur frame 0
        // render ho chuka hai — ab hero ko safely reveal kar sakte hai.
        setIsReady(true);
      });
    });

    const handleResize = () => {
      if (images.length > 0) {
        renderImage(Math.max(0, Math.min(images.length - 1, Math.floor(currentProgress * images.length))));
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ce-hero-scroll-container" ref={containerRef}>
      <div className={`ce-hero-sticky ${isReady ? 'ce-hero-ready' : ''}`}>
        <canvas ref={canvasRef} className="ce-hero-canvas-bg"></canvas>
        <div className="ce-hero-fade-bottom"></div>
        <div className="ce-content-wrapper">
          <div className="ce-capsule">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>Connected Enterprise</span>
          </div>

          <h1 className="ce-hero-title">
            <div className="ce-title-row1">CONNECT EVERYTHING.</div>
            <div className="ce-title-row2">
              <span className="ce-title-empower">EMPOWER </span>
              <span className="ce-title-outcome">EVERY OUTCOME.</span>
            </div>
          </h1>

          <p className="ce-hero-subtitle">
            Connected Enterprise by Mastek unifies systems, data, and people to help you operate smarter, faster, and future-ready.
          </p>

          <div className="ce-button-group">
            <button className="ce-btn-explore">
              EXPLORE CONNECTED ENTERPRISE &rarr;
            </button>
            <button className="ce-btn-partner">
              PARTNER WITH INNEXT &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEHero;