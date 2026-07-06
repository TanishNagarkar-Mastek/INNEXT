import { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import mastekLogo from "../../assets/images/mastek-logo.png";
import InnextMegaMenu from "./InnextMegaMenu"; 
import "./Header.css";

const navItems = [
  { title: "Mastek AI", hasDropdown: true },
  { title: "Services", hasDropdown: true },
  { title: "INNEXT", hasDropdown: true },
  { title: "Industries", hasDropdown: true },
  { title: "Insights", hasDropdown: true },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-wrap">
          <img src={mastekLogo} alt="Mastek" className="header-logo" />
        </a>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.title} 
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="nav-link" onClick={() => toggleDropdown(item.title)}>
                  <span>{item.title}</span>
                  {item.hasDropdown && <FiChevronDown className="nav-chevron" />}
                </div>
                
                {item.title === "INNEXT" && activeDropdown === "INNEXT" && (
                  <InnextMegaMenu />
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#" className="header-contact-btn">Contact Us</a>
          </div>
        </nav>

        <button className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;