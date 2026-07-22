import "./HelpSection.css";
import { Link } from "react-router-dom";

import productsImg from "../../../assets/images/help/products.png";
import enterpriseImg from "../../../assets/images/help/enterprise.png";
import deepBlueImg from "../../../assets/images/help/deepblue.png";
import patentsImg from "../../../assets/images/help/patents.png";
import venturesImg from "../../../assets/images/help/ventures.png";

import productsIcon from "../../../assets/icons/help/products.svg";
import enterpriseIcon from "../../../assets/icons/help/enterprise.svg";
import deepBlueIcon from "../../../assets/icons/help/deepblue.svg";
import patentsIcon from "../../../assets/icons/help/patents.svg";
import venturesIcon from "../../../assets/icons/help/ventures.svg";


import { FiArrowRight } from "react-icons/fi";

const helpItems = [
  {
    title: "Products Born in INNEXT",
    desc: "Innovative products built for impact",
    image: productsImg,
    icon: productsIcon,
    link: "products-born-in-innext",
  },
  {
    title: "Connected Enterprise Services",
    desc: "Intelligent, connected and future-ready enterprises",
    image: enterpriseImg,
    icon: enterpriseIcon,
    link: "#",
  },
  {
    title: "Project Deep Blue",
    desc: "Mastek's flagship innovation buildathon for real-world problem solving",
    image: deepBlueImg,
    icon: deepBlueIcon,
    link: "#",
  },
  {
    title: "IP & Patents",
    desc: "Protect, manage and maximize your intellectual property",
    image: patentsImg,
    icon: patentsIcon,
    link: "#",
  },
  {
    title: "Ventures",
    desc: "Invest in ideas that shape tomorrow",
    image: venturesImg,
    icon: venturesIcon,
    link: "#",
  },
];

function HelpSection() {
  return (
    <section className="help-section">
      <div className="help-container">
        <h2 className="help-heading">
          WHAT WE HELP YOU DO
        </h2>

        <div className="help-cards">
          {helpItems.map((item, index) => (
            <a
              href={item.link}
              className="help-card"
              key={index}
            >
              <div
                className="help-bg"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="help-overlay"></div>

              <div className="help-content">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="help-card-icon"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="help-explore">
                  <span>EXPLORE</span>
                  <FiArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;