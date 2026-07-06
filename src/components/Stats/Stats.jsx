import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const statsData = [
  {
    value: 200,
    suffix: "+",
    label: "Ecosystem Partners",
    color: "purple",
  },
  {
    value: 120,
    suffix: "+",
    label: "AI Assets",
    color: "blue",
  },
  {
    value: 100,
    suffix: "+",
    label: "Business Apps Use Cases",
    color: "purple",
  },
  {
    value: 8000,
    suffix: "+",
    label: "Active AI Certifications",
    color: "blue",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const duration = 1200;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(eased * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats">
          {statsData.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className={`num ${stat.color}`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;