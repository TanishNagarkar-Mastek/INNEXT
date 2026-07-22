import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsBorn from "./pages/ProductsBorn"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-born-in-innext" element={<ProductsBorn />} />
      </Routes>
    </Router>
  );
}

export default App;