import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./FutureReady.css";


import dataSilosImg from "../../../assets/images/Connected-Enterprise/dataSilosImg.png";
import ecosystemsImg from "../../../assets/images/Connected-Enterprise/ecosystemsImg.png";
import automateImg from "../../../assets/images/Connected-Enterprise/automateImg.png";
import experiencesImg from "../../../assets/images/Connected-Enterprise/experiencesImg.png";
import agilityImg from "../../../assets/images/Connected-Enterprise/agilityImg.png";

// Sirf Card 2 aur 5 ke icons import kiye hain (jo tere paas hain)
import ecosystemsIcon from "../../../assets/icons/help/enterprise.svg";
import agilityIcon from "../../../assets/icons/help/ventures.svg";


const futureReadyItems = [
  {
    title: "Break Data Silos",
    desc: "Unify disparate data across systems and unlock real-time insights.",
    image: dataSilosImg,
    // Custom SVG for Data Nodes (Card 1)
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="fr-card-icon">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Connect Ecosystems",
    desc: "Seamlessly integrate partners, suppliers, customers and beyond.",
    image: ecosystemsImg,
    // Regular Image for Card 2
    icon: <img src={ecosystemsIcon} alt="Connect Ecosystems" className="fr-card-icon" />,
    link: "#",
  },
  {
    title: "Automate & Orchestrate",
    desc: "Streamline workflows and accelerate decisions with intelligent automation.",
    image: automateImg,
    // Custom SVG for Gear/Settings (Card 3)
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="fr-card-icon">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Enhance Experiences",
    desc: "Deliver personalised and consistent experiences across every touchpoint.",
    image: experiencesImg,
    // Custom SVG for User/Person (Card 4)
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="fr-card-icon">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    link: "#",
  },
  {
    title: "Drive Business Agility",
    desc: "Adapt faster, innovate continuously and stay ahead of change.",
    image: agilityImg,
    // Regular Image for Card 5
    icon: <img src={agilityIcon} alt="Drive Business Agility" className="fr-card-icon" />,
    link: "#",
  },
];

const FutureReady = () => {
  return (
    <section className="fr-section">
      <div className="fr-container">
        <h2 className="fr-heading">
          A CONNECTED ENTERPRISE IS A FUTURE-READY ENTERPRISE
        </h2>

        <div className="fr-cards">
          {futureReadyItems.map((item, index) => (
            <Link to={item.link} className="fr-card" key={index}>
              <div
                className="fr-bg"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="fr-overlay"></div>

              <div className="fr-content">
                {/* Yahan maine direct React Element render kar diya hai, 
                    toh wo automatic <img> ya <svg> handle kar lega */}
                {item.icon}
                
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="fr-explore">
                  <span>EXPLORE</span>
                  <FiArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureReady;