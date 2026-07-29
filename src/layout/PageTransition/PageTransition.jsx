import React, { useEffect, useState } from 'react';
import './PageTransition.css';

const PageTransition = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Timer 3.2 seconds rakha hai taaki flash fade completely ho jaye
    const timer = setTimeout(() => {
      setIsActive(false);
      document.body.style.overflow = 'unset';
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isActive) return null;

  return (
    <div className="pt-epic-overlay">
      
      <div className="pt-laser-line"></div>

      <div className="pt-portal">
        <div className="pt-portal-content">
          <span className="pt-epic-small">POWERED BY</span>
          
          <h1 className="pt-epic-large">
            <span className="pt-letter">I</span>
            <span className="pt-letter">N</span>
            <span className="pt-letter">N</span>
            <span className="pt-letter">E</span>
            <span className="pt-letter">X</span>
            <span className="pt-letter">T</span>
          </h1>
        </div>
      </div>
      
      {/* Naya Flash Bang element jo overexposure effect dega */}
      <div className="pt-flash-bang"></div>
    </div>
  );
};

export default PageTransition;