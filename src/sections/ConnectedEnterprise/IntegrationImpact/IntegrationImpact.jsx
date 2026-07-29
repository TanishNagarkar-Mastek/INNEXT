import React from 'react';
import './IntegrationImpact.css';
import videoThumbImg from '../../../assets/images/Connected-Enterprise/video-thumbnail.png';

const listItems = [
  {
    title: "Integration Hub",
    desc: "Connect anything, anywhere with robust connectors and APIs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    )
  },
  {
    title: "Process Orchestration",
    desc: "Design, automate and scale complex processes with ease",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    title: "Data Unification",
    desc: "Harmonise data across sources for a single source of truth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="12" y1="16" x2="12" y2="21"></line>
        <line x1="8" y1="12" x2="3" y2="12"></line>
        <line x1="16" y1="12" x2="21" y2="12"></line>
      </svg>
    )
  },
  {
    title: "API Management",
    desc: "Secure, govern and scale APIs across your enterprise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16.2A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        <polyline points="16 16 12 20 8 16"></polyline>
        <line x1="12" y1="12" x2="12" y2="20"></line>
      </svg>
    )
  },
  {
    title: "Low-Code / No-Code",
    desc: "Empower teams to build and deploy integrations faster.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6111A2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    )
  }
];

const IntegrationImpact = () => {
  return (
    <section className="ii-section">
      <div className="ii-container">
        
        <div className="ii-left-content">
          
          <h2 className="ii-heading">
            BUILT FOR INTEGRATION,<br />
            DESIGNED FOR IMPACT.
          </h2>
          <div className="ii-purple-line"></div>
          
          <div className="ii-list-box">
            {listItems.map((item, index) => (
              <div className="ii-list-item" key={index}>
                <div className="ii-icon-container">
                  {item.icon}
                </div>
                <div className="ii-text-content">
                  <h4 className="ii-item-title">{item.title}</h4>
                  <p className="ii-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ii-right-content">
          <div className="ii-video-wrapper">
            <img src={videoThumbImg} alt="Connected Enterprise Video" className="ii-video-thumb" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationImpact;