import { FiArrowRight } from "react-icons/fi";
import "./InnextMegaMenu.css";

import prodIcon from "../../assets/icons/header/products-icon.svg"; 
import connectedIcon from "../../assets/icons/header/connected-icon.svg";
import deepBlueIcon from "../../assets/icons/header/deep-blue-icon.svg"; 
import ipIcon from "../../assets/icons/header/ip-icon.svg";
import venturesIcon from "../../assets/icons/header/ventures-icon.svg"; 

import boostIcon from "../../assets/icons/header/boost-icon.svg";
import empIcon from "../../assets/icons/header/employee-icon.svg";
import costIcon from "../../assets/icons/header/gear.svg";
import testIcon from "../../assets/icons/header/test-icon.svg";

import leftBg from "../../assets/icons/header/mega-menu-bg.png"; 
import innextLogo from "../../assets/images/INNEXT-Title.png";

const topLinks = [
  { icon: prodIcon, title: "Products Born in Innext", desc: "Innovative products built for impact across industries.", link: "#" },
  { icon: connectedIcon, title: "Connected Enterprise Services", desc: "Innovative products built for impact across industries.", link: "#" },
  { icon: deepBlueIcon, title: "Project Deep Blue", desc: "Solve real world business problems with AI-powered solutions.", link: "#" },
  { icon: ipIcon, title: "IP & Patents", desc: "Protect, manage and maximise your intellectual property.", link: "#" },
  { icon: venturesIcon, title: "Ventures", desc: "Invest in ideas that shape tomorrow.", link: "#" },
];

const midFeatures = [
  { icon: boostIcon, title: "Boost Sales Productivity", desc: "Increase sales productivity by 35%", link: "#", gradient: "purple" },
  { icon: empIcon, title: "Improve Employee Engagement", desc: "Improve employee engagement by 25%", link: "#", gradient: "purple" },
  { icon: costIcon, title: "Reduce Processing Costs", desc: "Reduce processing costs by 40%", link: "#", gradient: "blue" },
  { icon: testIcon, title: "Increase Test Automation Efficiency", desc: "Increase test automation efficiency by 70%", link: "#", gradient: "blue" },
];

export default function InnextMegaMenu() {
  return (
    <div className="mega-menu-wrapper">
      <div className="mega-menu-container">
        <div className="mega-left" style={{ backgroundImage: `url(${leftBg})` }}>
          <div className="mega-left-content">
            <img src={innextLogo} alt="INNEXT" className="mega-brand-logo" />
            <h3 className="mega-brand-sub">Enterprise Innovation Ecosystem</h3>
            <p className="mega-desc">
              Where We <span>INNOVATE</span> The <span>NEXT</span> Generation Of Transformative Solutions For Enterprises.
            </p>
            <a href="/explore" className="mega-explore-btn">
              EXPLORE INNEXT <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="mega-right">
          <div className="mega-top-grid">
            {topLinks.map((link, idx) => (
              <a href={link.link} className="mega-top-card" key={idx}>
                <div className="mega-top-icon">
                  <img src={link.icon} alt={link.title} />
                </div>
                <h4 className="card-title">{link.title}</h4>
                <p className="card-desc">{link.desc}</p>
                <FiArrowRight className="card-arrow" />
              </a>
            ))}
          </div>

          <div className="mega-divider"></div>

          <div className="mega-mid-grid">
            {midFeatures.map((feat, idx) => (
              <a href={feat.link} className="mega-mid-card" key={idx}>
                <div className={`mega-mid-icon-wrap ${feat.gradient === "blue" ? "icon-blue" : "icon-purple"}`}>
                  <img src={feat.icon} alt={feat.title} className="mega-mid-icon" />
                </div>
                <div className="mega-mid-text">
                  <h4 className="feat-title">{feat.title}</h4>
                  <p className="feat-desc">{feat.desc}</p>
                </div>
                <FiArrowRight className="mid-arrow" />
              </a>
            ))}
          </div>

          <div className="mega-cta-banner">
            <div className="mega-cta-text">
              <h4>Explore partnership with INNEXT?</h4>
              <p>Let’s co-create the future of your enterprise.</p>
            </div>
            <a href="/partner" className="mega-cta-btn">
              <span>PARTNER WITH INNEXT</span> <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}