import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lenis from 'lenis';
import ProductsBorn from "./pages/ProductsBorn"; 
import ConnectedEnterprise from './pages/ConnectedEnterprise';

function App() {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });
    window.lenis = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-born-in-innext" element={<ProductsBorn />} />
        <Route path="/connected-enterprise" element={<ConnectedEnterprise />} />
      </Routes>
    </Router>
  );
}

export default App;