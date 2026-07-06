import { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import mastekLogo from "../../assets/images/mastek-logoo-2.png";
import "./Header.css";

const navItems = [
  {
    title: "Mastek AI",
    hasDropdown: true,
  },
  {
    title: "Services",
    hasDropdown: true,
  },
  {
    title: "iNEXT",
    hasDropdown: true,
  },
  {
    title: "Industries",
    hasDropdown: true,
  },
  {
    title: "Insights",
    hasDropdown: true,
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-wrap">
          <img
            src={mastekLogo}
            alt="Mastek"
            className="header-logo"
          />
        </a>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.title}>
                <a href="#">
                  <span>{item.title}</span>
                  {item.hasDropdown && (
                    <FiChevronDown className="nav-chevron" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#" className="header-contact-btn">
              Contact Us
            </a>
          </div>
        </nav>

        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          <FiMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;