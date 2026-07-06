import { FiArrowRight } from "react-icons/fi";
import partnerBg from "../../../assets/images/partner-bg.png"; 
import "./PartnerCTA.css";

function PartnerCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div 
          className="cta-card" 
          style={{ backgroundImage: `url(${partnerBg})` }}
        >
          <div className="cta-content">
            <h2>Explore partnership with INNEXT?</h2>
            <p>Let's co-create the future of your enterprise.</p>
          </div>

          <a href="/partner" className="cta-btn">
            <span>PARTNER WITH INNEXT</span>
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PartnerCTA;