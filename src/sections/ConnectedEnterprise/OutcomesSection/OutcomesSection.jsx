import React from 'react';
import './OutcomesSection.css';

const outcomesData = [
  {
    title: "Faster Time to Market",
    desc: "Connect anything, anywhere with ro-ourt connectors and APIs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="12" r="8"></circle>
        <polyline points="13 8 13 12 16 15"></polyline>
        <line x1="2" y1="12" x2="5" y2="12"></line>
        <line x1="4" y1="8" x2="6" y2="8"></line>
        <line x1="4" y1="16" x2="6" y2="16"></line>
      </svg>
    )
  },
  {
    title: "Operational Excellence",
    desc: "Automate, optimize and reduce operational overheads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    title: "Better Decisions",
    desc: "Real-time insights for smarter, data-driven decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
        <polyline points="2 16 12 4 17 9 22 4"></polyline>
      </svg>
    )
  },
  {
    title: "Sustainable Growth",
    desc: "Build a resilient foundation for long-term growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20L3 12l4-4 4 4"></path>
        <path d="M16 20l-5-8 3-4"></path>
        <line x1="18" y1="12" x2="18" y2="4"></line>
        <polyline points="15 7 18 4 21 7"></polyline>
      </svg>
    )
  }
];

const OutcomesSection = () => {
  return (
    <section className="outcomes-section">
      <div className="outcomes-container">
        <h2 className="outcomes-heading">OUTCOMES THAT MATTER</h2>
        
        <div className="outcomes-grid">
          {outcomesData.map((item, index) => (
            <div className="outcome-card" key={index}>
              <div className="outcome-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="outcome-title">{item.title}</h3>
              <p className="outcome-desc">{item.desc}</p>
              
              <div className="outcome-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;