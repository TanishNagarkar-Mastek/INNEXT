import React, { useState, useEffect } from "react";
import Header from "../layout/Header/Header.jsx";
import AskBar from "../sections/Home/AskBar/AskBar.jsx";
import PartnerCTA from "../sections/Home/PartnerCTA/PartnerCTA.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import { FiCode, FiCloud, FiShare2, FiBriefcase, FiUsers, FiDatabase } from "react-icons/fi";
import "./ProductsBorn.css";

// UPDATED MASTER DATA ACCORDING TO YOUR EXACT LIST & HEADINGS
const masterData = [
  {
    icon: <FiBriefcase />,
    title: "Sales/Presales",
    capsules: ["SERVICE", "AI"],
    desc: "Intelligent platforms to enhance customer relationships, streamline sales workflows and accelerate deal closures.",
    solutions: [
      { name: "CRM", category: "Service as a Software", impactTitle: "Increase Sales Productivity by 35%", impactDesc: "QualityOne.AI watches real user interactions and compiles robust end-to-end testing suites. When the UI changes, the AI detects element shifts and self-heals locator IDs dynamically without breaking CI/CD pipelines.", impactValue: 35 },
      { name: "IPF", category: "AI SDLC", impactTitle: "Optimize Proposal Generation by 50%", impactDesc: "AI-driven automated proposal and pitch generation for presales teams.", impactValue: 50 }
    ]
  },
  {
    icon: <FiDatabase />,
    title: "Finance",
    capsules: ["SERVICE"],
    desc: "Automated platforms to streamline financial operations, tracking and compliance reporting.",
    solutions: [
      { name: "IAP", category: "Service as a Software", impactTitle: "Streamline Financial Operations by 45%", impactDesc: "Automate financial workflows, tracking, and compliance reporting efficiently.", impactValue: 45 }
    ]
  },
  {
    icon: <FiUsers />,
    title: "HR",
    capsules: ["SERVICE"],
    desc: "AI-driven platforms to optimize workforce planning, performance and talent outcomes.",
    solutions: [
      { name: "PMS", category: "Service as a Software", impactTitle: "Improve Employee Engagement by 50%", impactDesc: "Track performance metrics in real-time and provide actionable feedback loops.", impactValue: 50 },
      { name: "TalentGenius", category: "Service as a Software", impactTitle: "Accelerate Talent Matching by 60%", impactDesc: "Intelligent talent discovery and workforce outcome planning tools.", impactValue: 60 }
    ]
  },
  {
    icon: <FiCloud />,
    title: "Managed Services",
    capsules: ["AI"],
    desc: "Predictive analytics and automated incident resolution for robust infrastructure.",
    solutions: [
      { name: "IMS", category: "AI SDLC", impactTitle: "Reduce Downtime by 60%", impactDesc: "Predictive analytics and automated incident resolution for robust infrastructure.", impactValue: 60 }
    ]
  },
  {
    icon: <FiCode />,
    title: "Delivery",
    capsules: ["AI"],
    desc: "Autonomous testing suites and centralized tracking to accelerate project delivery velocity.",
    solutions: [
      { name: "QualityOne", category: "AI SDLC", impactTitle: "Increase Test Automation by 80%", impactDesc: "Autonomous testing suites that learn and adapt to UI changes dynamically.", impactValue: 80 },
      { name: "Delivery HUB", category: "AI SDLC", impactTitle: "Enhance Project Delivery Velocity by 40%", impactDesc: "Centralized tracking and predictive milestone management for delivery teams.", impactValue: 40 },
      { name: "Agent Framework", category: "AI SDLC", impactTitle: "Scale Autonomous Operations by 75%", impactDesc: "Build and deploy custom enterprise agents for seamless execution.", impactValue: 75 }
    ]
  },
  {
    icon: <FiShare2 />,
    title: "Innovation",
    capsules: ["CONNECTED", "SERVICE"],
    desc: "Next-gen enterprise applications and AI-enabled service transformation offerings.",
    solutions: [
      { name: "AmbiListen.AI", category: "Connected Enterprise", impactTitle: "Improve Customer Insights by 85%", impactDesc: "Real-time speech analytics and sentiment intelligence platform.", impactValue: 85 },
      { name: "PartsIQ", category: "Service as a Software", impactTitle: "Optimize Inventory Tracking by 55%", impactDesc: "Smart inventory management and predictive parts forecasting.", impactValue: 55 },
      { name: "Contact Center", category: "Service as a Software", impactTitle: "Reduce Resolution Time by 50%", impactDesc: "AI-enabled conversational tools empowering support agents instantly.", impactValue: 50 }
    ]
  }
];

export default function ProductsBorn() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  // Yahan Maine state ko empty kar diya hai, ab page load pe sab blank rahega
  const [selectedSolutions, setSelectedSolutions] = useState({});
  const [hoveredSolutions, setHoveredSolutions] = useState({});

  const filteredData = masterData.map(area => {
    if (activeFilter === "ALL") return area;
    const matchingSolutions = area.solutions.filter(sol => sol.category === activeFilter);
    return { ...area, solutions: matchingSolutions };
  }).filter(area => area.solutions.length > 0);

  return (
    <div className="products-born-page">
      <Header />
      
      {/* HERO WRAPPER */}
      <div className="hero-gradient-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-bg"
        >
          <source src="https://res.cloudinary.com/dxe761dpa/video/upload/v1784731822/hexa_olxwpx.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-overlay"></div>

        <section className="products-hero-section">
          <div className="products-hero-content">
            <span className="products-subtitle">Products Born in</span>
            <h1 className="products-title">INN<span>EXT</span></h1>
            <p className="products-description">
              A portfolio of enterprise-ready platforms, AI solutions and accelerators designed to solve real-world business challenges.
            </p>
          </div>
          <div className="products-askbar-wrapper">
            <AskBar />
          </div>
        </section>

        <section className="explore-text-section">
          <h2 className="explore-title">EXPLORE PRODUCTS BORN IN INNEXT</h2>
          <p className="explore-description">
            Discover a range of enterprise-ready products born in INNEXT – from enterprise applications and productivity tools across Finance, HR, Marketing and Operations, to industry-specific offerings such as warehouse management, retail operations, customer experience, leasing, compliance and AI-enabled service transformation.
          </p>
        </section>
      </div>

      {/* SOLUTION AREAS & FILTERS SECTION */}
      <section className="solution-areas-section">
        <div className="solution-container">
          
          <div className="filters-row">
            <button className={`filter-btn ${activeFilter === "ALL" ? "active" : ""}`} onClick={() => setActiveFilter("ALL")}>ALL</button>
            <button className={`filter-btn ${activeFilter === "AI SDLC" ? "active" : ""}`} onClick={() => setActiveFilter("AI SDLC")}><FiCode className="filter-icon"/> AI SDLC</button>
            <button className={`filter-btn ${activeFilter === "Service as a Software" ? "active" : ""}`} onClick={() => setActiveFilter("Service as a Software")}><FiCloud className="filter-icon"/> Service as a Software</button>
            <button className={`filter-btn ${activeFilter === "Connected Enterprise" ? "active" : ""}`} onClick={() => setActiveFilter("Connected Enterprise")}><FiShare2 className="filter-icon"/> Connected Enterprise</button>
          </div>
          
          <p className="filter-status-text">
            Showing {activeFilter === "ALL" ? "all categories" : activeFilter} products. Hover to preview or click to lock/hide diagnostics.
          </p>

          <h2 className="solution-section-title">Explore by Solution Area</h2>

          <div className="pb-solution-cards-list">
            {filteredData.map((area, index) => {
              const activeSolName = hoveredSolutions[area.title] !== undefined 
                ? hoveredSolutions[area.title] 
                : selectedSolutions[area.title];

              return (
                <div className="pb-solution-card" key={index}>
                  
                  {/* LEFT SIDE CONTENT */}
                  <div className="pb-card-left-content">
                    <div className="pb-card-header">
                      <div className="pb-card-icon">{area.icon}</div>
                      <h3 className="pb-card-title">{area.title}</h3>
                      <div className="pb-card-capsules">
                        {area.capsules.map((cap, i) => (
                          <span className="pb-capsule" key={i}>{cap}</span>
                        ))}
                      </div>
                    </div>

                    <p className="pb-card-desc">{area.desc}</p>

                    <div 
                      className="pb-card-solutions-wrapper"
                      onMouseLeave={() => setHoveredSolutions(prev => {
                        const copy = { ...prev };
                        delete copy[area.title];
                        return copy;
                      })}
                    >
                      <p className="pb-solutions-label">Available Solutions & Expected Impact</p>
                      <div className="pb-solutions-pills-row">
                        {area.solutions.map((sol, i) => {
                          const isSelected = selectedSolutions[area.title] === sol.name;
                          const isHovered = hoveredSolutions[area.title] === sol.name;
                          
                          return (
                            <div 
                              className={`pb-solution-pill ${isSelected || isHovered ? "hovered" : ""}`} 
                              key={i}
                              onMouseEnter={() => setHoveredSolutions(prev => ({ ...prev, [area.title]: sol.name }))}
                              onClick={() => {
                                setSelectedSolutions(prev => ({
                                  ...prev,
                                  [area.title]: prev[area.title] === sol.name ? null : sol.name
                                }));
                              }}
                            >
                              <div className="pb-pill-indicator"></div>
                              {sol.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE CONTENT */}
                  <div className="pb-card-right-content">
                    {activeSolName && area.solutions.map((sol) => {
                      if (activeSolName === sol.name) {
                        return (
                          <div className="pb-impact-box fade-in" key={sol.name}>
                            <div className="pb-impact-text">
                              <h4>{sol.impactTitle}</h4>
                              <p>{sol.impactDesc}</p>
                              <a href="#" className="pb-explore-link">EXPLORE &rarr;</a>
                            </div>
                            
                            <div className="pb-impact-gauge">
                              <div 
                                className="pb-gauge-circle" 
                                style={{ background: `conic-gradient(#9944DE 0% ${sol.impactValue}%, #E2E8F0 ${sol.impactValue}% 100%)` }}
                              >
                                <div className="pb-gauge-inner">
                                  {sol.impactValue}%
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <PartnerCTA />
      <Footer />
    </div>
  );
}