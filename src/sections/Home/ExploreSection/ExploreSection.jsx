import { useEffect, useRef, useState } from "react";
import {
  FiTool,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiCheck,
  FiArrowRight
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ExploreSection.css";

const exploreItems = [
  {
    icon: <FiTool />,
    title: "Explore AI-Powered CRM",
    subtitle: "Increase Sales Productivity by 35%",
  },
  {
    icon: <FiUser />,
    title: "Enable Smarter Performance Management",
    subtitle: "Improve Employee Engagement by 25%",
  },
  {
    icon: <FiFileText />,
    title: "Automate Accounts Payable with AI",
    subtitle: "Reduce Processing Costs by 40%",
  },
  {
    icon: <FiBriefcase />,
    title: "Hire Smarter with AI",
    subtitle: "Reduce Time-to-Hire by 60%",
  },
  {
    icon: <FiCheck />,
    title: "Transform Testing with AI",
    subtitle: "Increase Test Automation Efficiency by 70%",
  },
];

function ExploreSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const pausedRef = useRef(false);
  const items = [...exploreItems, ...exploreItems];

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const totalItems = exploreItems.length;
    const rowHeight = 82;
    let currentIndex = 0;

    list.style.transform = "translateY(0px)";

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      currentIndex++;
      list.style.transition = "transform .6s ease-in-out";
      list.style.transform = `translateY(-${currentIndex * rowHeight}px)`;

      setActiveIndex(currentIndex % totalItems);

      if (currentIndex === totalItems) {
        setTimeout(() => {
          list.style.transition = "none";
          currentIndex = 0;
          list.style.transform = "translateY(0px)";
        }, 600);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="explore">
      <div className="container explore">
        <div className="explore-left">
          <h2>EXPLORE INNEXT</h2>
          <div className="explore-rule"></div>
          <p>
            Industry-focused solutions powered by AI and innovation.
          </p>
        
          
          <Link to="/products-born-in-innext"  className="view-all">
            EXPLORE ALL SOLUTIONS <FiArrowRight className="view-all-arrow" />
          </Link>
        </div>

        <div
          className="explore-list-wrap"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="explore-list" ref={listRef}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`explore-row ${
                  index % exploreItems.length === activeIndex ? "active" : ""
                }`}
              >
                <div className="explore-icon">{item.icon}</div>
                <div className="explore-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
                <div className="explore-arrow">
                  <FiArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;