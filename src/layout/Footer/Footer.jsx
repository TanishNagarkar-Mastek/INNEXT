import mastekLogo from "../../assets/images/mastek-logo.png";
import "./Footer.css";

const footerData = [
  {
    title: "Services",
    links: [
      { label: "Mastek AI", url: "#" },
      { label: "Digital Engineering & Experience", url: "#" },
      { label: "Data and AI Services", url: "#" },
      { label: "Oracle Cloud", url: "#" },
      { label: "Salesforce", url: "#" },
      { label: "Managed Services", url: "#" },
      { label: "Cybersecurity", url: "#" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Public Sector & Government", url: "#" },
      { label: "Healthcare & Life Sciences", url: "#" },
      { label: "Retail & Consumer", url: "#" },
      { label: "Manufacturing & Technology", url: "#" },
      { label: "Financial Services", url: "#" },
      { label: "Other Industries", url: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Mastek", url: "#" },
      { label: "Leadership", url: "#" },
      { label: "Investors", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Our Story", url: "#" },
      { label: "ESG", url: "#" },
      { label: "ReShine", url: "#" }
    ]
  },
  {
    title: "Insights",
    links: [
      { label: "Blog", url: "#" },
      { label: "Glossary", url: "#" },
      { label: "Press Releases", url: "#" },
      { label: "News", url: "#" },
      { label: "Resources", url: "#" },
      { label: "Webinars & Events", url: "#" },
      { label: "Podcast", url: "#" }
    ]
  }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ display: "block", clear: "both", width: "100%" }}>
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img 
              src={mastekLogo} 
              alt="Mastek" 
              className="footer-logo" 
              style={{ 
                width: "110px", 
                maxWidth: "110px", 
                height: "auto", 
                maxHeight: "40px", 
                display: "block", 
                objectFit: "contain" 
              }} 
            />
            <div className="footer-divider-vertical"></div>
            <span className="footer-tagline">
              Lead with <span className="tagline-accent">AI</span>
            </span>
          </div>
        </div>

        <div className="footer-grid">
          {footerData.map((column) => (
            <div className="footer-column" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © Mastek, {currentYear}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Cookie Policy</a>
            <span className="separator">|</span>
            <a href="#">Privacy Notice</a>
            <span className="separator">|</span>
            <a href="#">Statutory Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;