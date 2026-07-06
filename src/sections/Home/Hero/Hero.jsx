// import "./Hero.css";
// import heroTitleImg from "../../../assets/images/INNEXT-Title.png";

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="container hero-container">
//         <div className="hero-content">
//           <div className="hero-logo-img">
//              <img src={heroTitleImg} alt="INNEXT" />
//           </div>

//           <h2 className="hero-subtitle">Enterprise Innovation Ecosystem</h2>

//           <p className="hero-description">
//             Where we <span className="hero-highlight">INNOVATE</span> the{" "}
//             <span className="hero-highlight">NEXT</span> generation of
//             transformative solutions for enterprises.
//           </p>

//           <div className="hero-buttons">
//             <button className="hero-btn hero-btn-primary">
//               EXPLORE ECOSYSTEM <span>→</span>
//             </button>

//             <button className="hero-btn hero-btn-secondary">
//               PARTNER WITH INNEXT <span>→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import "./Hero.css";
import heroTitleImg from "../../../assets/images/INNEXT-Title.png";
import heroBgVideo from "../../../assets/videos/bg.mp4";

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
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-overlay"></div>
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
            <button className="hero-btn hero-btn-primary">
              EXPLORE ECOSYSTEM <span>→</span>
            </button>

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