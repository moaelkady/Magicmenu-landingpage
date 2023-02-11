import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./routes/home/home.route";
import About from "./routes/about/aboute.route";
import Product from "./routes/product/product.component";
import Pricing from "./routes/pricing/pricing.route";
import Contact from "./routes/contact/contact.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
