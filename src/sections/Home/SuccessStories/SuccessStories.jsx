import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./SuccessStories.css";

import productsImg from "../../../assets/images/innext_stories/warehouse.png";
import workforceImg from "../../../assets/images/innext_stories/workforce.png";
import sqlnextImg from "../../../assets/images/innext_stories/sqlnext.png";
import lightbeamImg from "../../../assets/images/innext_stories/lightbeam.png";
import ileasefinproImg from "../../../assets/images/innext_stories/ileasefinpro.png";

const stories = [
  {
    title: "Warehouse 360",
    desc: "Transform warehouse operations with WH360. Digitize and automate every stage of warehouse, inventory, and shop-floor management with a mobile-first solution built for Oracle SCM Cloud. Gain real-time inventory visibility, accelerate barcode-driven execution, and drive higher accuracy, productivity, and operational efficiency.",
    image: productsImg, 
    link: "/warehouse360",
  },
  {
    title: "Enterprise Workforce Scheduler",
    desc: "Build a smarter, more agile workforce with Enterprise Workforce Scheduler. Optimize employee scheduling, automate workforce planning, and simplify time, attendance, payroll, and compliance. Improve productivity, reduce operational risk, and deliver a seamless employee experience while ensuring the right people are in the right place at the right time.",
    image: workforceImg,
    link: "/enterprise-workforce-scheduler",
  },
  {
    title: "SQLnext.AI",
    desc: "Turn business questions into SQL in seconds with SQLnext.AI. Generate, validate, optimize, and debug Oracle Fusion SQL using natural language—empowering business users, analysts, and developers to accelerate reporting, eliminate manual effort, and unlock faster insights.",
    image: sqlnextImg,
    link: "/sqlnext-ai",
  },
  {
    title: "Lightbeam",
    desc: "Take control of your cloud data costs with Lightbeam. Gain real-time visibility into Snowflake and Databricks workloads, optimize performance with AI-driven recommendations, and proactively reduce cloud spend—maximizing efficiency, resource utilization, and business value.",
    image: lightbeamImg,
    link: "/lightbeam",
  },
  {
    title: "iLeaseFinPro",
    desc: "Create exceptional leasing experiences with iLeaseFinPro. Digitize and automate the entire vehicle and asset financing lifecycle with an AI-enabled leasing platform that streamlines loan origination, accelerates approvals, personalizes customer journeys, and empowers lenders, OEMs, and dealerships to drive higher conversions and operational efficiency.",
    image: ileasefinproImg,
    link: "/ileasefinpro",
  }
];

export default function SuccessStories() {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const pausedRef = useRef(false);

  const carouselStories = [...stories, ...stories];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.55;

    const animate = () => {
      if (!pausedRef.current) {
        const singleWidth = track.scrollWidth / 2;
        position += speed;

        if (position >= singleWidth) {
          position -= singleWidth; 
        }

        track.style.transform = `translateX(-${position}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <section className="success-section">
      <div className="container">
        <div className="ss-header">
          <h2>INNEXT STORIES</h2>
        </div>

        <div
          className="ss-track-wrap"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="ss-track" ref={trackRef}>
            {carouselStories.map((story, index) => (
              <a key={index} href={story.link} className="ss-card">
                <div className="ss-image">
                  <img src={story.image} alt={story.title} />
                </div>

                <div className="ss-content">
                  <h3>{story.title}</h3>

                  <div className="ss-desc-wrap">
                    <p>{story.desc}</p>
                  </div>

                  <div className="ss-footer">
                    <span>
                      EXPLORE <FiArrowRight className="explore-arrow" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}