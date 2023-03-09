import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./components/loading/loading.component";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

const Home = React.lazy(() => import("./routes/home/home.route"));
const About = React.lazy(() => import("./routes/about/aboute.route"));
const Product = React.lazy(() => import("./routes/product/product.component"));
const Pricing = React.lazy(() => import("./routes/pricing/pricing.route"));
const Contact = React.lazy(() => import("./routes/contact/contact.route"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", () => {
      const navbarHeight =
        document.getElementsByClassName("navbar-container")[0].clientHeight;
      const heightValue = window.innerHeight - navbarHeight;
      const bodyElement = document.getElementsByTagName("body")[0];
      bodyElement.style.height = heightValue + "px";
    });
  }, []);
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<Loading />}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense fallback={<Loading />}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
