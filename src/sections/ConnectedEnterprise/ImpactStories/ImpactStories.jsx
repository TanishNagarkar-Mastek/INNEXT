import React, { useState, useEffect } from 'react';
import './ImpactStories.css';

import { FiArrowRight } from "react-icons/fi";

import storyImg1 from '../../../assets/images/Connected-Enterprise/storyImg1.png';
import storyImg2 from '../../../assets/images/Connected-Enterprise/storyImg2.png';
import storyImg3 from '../../../assets/images/Connected-Enterprise/storyImg3.png';

const testimonials = [
  {
    quote: "Mastek’s Connected Enterprise platform helped us integrate 200+ systems, automate critical workflows and improve time-to-resolution by 40%.",
    author: "Global Manufacturing Leader"
  },
  {
    quote: "By unifying our disparate data silos, we achieved real-time visibility across our supply chain, driving a 25% increase in operational efficiency.",
    author: "VP of Operations, Retail Giant"
  },
  {
    quote: "The seamless API integrations and robust orchestration completely transformed our customer experience and accelerated our time-to-market.",
    author: "Chief Technology Officer"
  }
];

const successStories = [
  {
    image: storyImg1,
    title: "Driving Industry 4.0 with Mastek's Connected Enterprise Solutions",
    link: "#"
  },
  {
    image: storyImg2,
    // FIX 1: Tera naya bada wala text yahan add kar diya hai
    title: "Convergence of IT and OT: Revolutionizing Factory Automation, Predictive Maintenance, and Analytics in Manufacturing",
    link: "#"
  },
  {
    image: storyImg3,
    title: "Understanding the Need for Unified Namespace (UNS) in Industrial IoT",
    link: "#"
  }
];

const ImpactStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="impact-section">
      <div className="impact-container">
        
        <div className="impact-left">
          <h2 className="impact-heading">REAL IMPACT. REAL RESULTS.</h2>
          <div className="quote-icon">
            <svg viewBox="0 0 24 24" fill="#9944DE" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8H6C6 6.89543 6.89543 6 8 6H10V4H8C5.79086 4 4 5.79086 4 8V14H10V8Z" />
              <path d="M20 8H16C16 6.89543 16.89543 6 18 6H20V4H18C15.7908 4 14 5.79086 14 8V14H20V8Z" />
              <path d="M10 14H4V20H10V14Z" />
              <path d="M20 14H14V20H20V14Z" />
            </svg>
          </div>
          
          <div className="testimonial-slider">
            {testimonials.map((item, index) => (
              <div 
                className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                key={index}
              >
                <p className="testimonial-quote">{item.quote}</p>
                <p className="testimonial-author">{item.author}</p>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="impact-right">
          <h2 className="stories-heading">SUCCESS STORIES</h2>
          
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <a href={story.link} className="story-card" key={index}>
                <div className="story-img-wrapper">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-content">
                  <h4 className="story-title">{story.title}</h4>
                  <div className="story-explore">
                    <span>EXPLORE</span>
                    <FiArrowRight />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactStories;