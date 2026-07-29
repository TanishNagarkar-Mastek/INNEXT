import "./Hero.css";
import { Link } from "react-router-dom";
import heroTitleImg from "../../../assets/images/INNEXT-Title (3).png";
import maze from "../../../assets/videos/maze.mp4"

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={maze} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-overlay"></div>
      <div className="hero-overlay-fill"></div>
    <div className="hero-overlay-image"></div>
    <div className="hero-text-scrim"></div>
      <div className="hero-blend-bridge"></div>
      <div className="hero-fade-bottom"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo-img">
            <img src={heroTitleImg} alt="INNEXT" />
          </div>

          <h2 className="hero-subtitle">Enterprise Innovation Ecosystem</h2>

          <p className="hero-description">
            Where we <span className="hero-highlight">INNOVATE</span> the{" "}
            <span className="hero-highlight">NEXT</span> generation of
            transformative solutions for enterprises.
          </p>

          <div className="hero-buttons">
            <Link to="/products-born-in-innext">
            <button className="hero-btn hero-btn-primary">
              EXPLORE ECOSYSTEM <span>→</span>
            </button>
            </Link>
            <button className="hero-btn hero-btn-secondary">
              PARTNER WITH INNEXT <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;