import { useState } from "react";
import { FiCloud, FiCode, FiShare2, FiArrowUpRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

import "./AskBar.css";

const suggestions = [
  {
    icon: <FiCode />,
    text: "AI SDLC",
  },
  {
    icon: <FiCloud />,
    text: "Service as a Software",
  },
  {
    icon: <FiShare2 />,
    text: "Connected Enterprise",
  },
];

function AskBar() {
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState(null);

  const handleSubmit = () => {
    if (!query.trim()) return;
    console.log(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="ask-section">
      <div className="container">
        <div className="ask-bar">
          <div className="ask-row">
            
            <div className="ask-left">
              <div className="ask-icon">
                <HiSparkles />
              </div>

              <input
                type="text"
                className="ask-input"
                value={query}
                placeholder="Ask INNEXT"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <button className="ask-arrow" onClick={handleSubmit}>
              <FiArrowUpRight />
            </button>
            
          </div>

          <div className="ask-chips">
            {suggestions.map((item) => (
              <button
                key={item.text}
                className={`chip ${activeChip === item.text ? "active" : ""}`}
                onClick={() => setActiveChip(item.text)}
              >
                <span className="dot">{item.icon}</span>
                <span>{item.text}</span>
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AskBar;