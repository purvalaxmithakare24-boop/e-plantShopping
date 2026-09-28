import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleGetStarted = () => {
    setShowProductList(true);
    setCurrentPage("plants");
  };

  if (currentPage === "about") {
    return (
      <div>
        <button
          className="continue-button"
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <AboutUs />
      </div>
    );
  }

  if (currentPage === "plants" && showProductList) {
    return (
      <ProductList
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === "cart") {
    return (
      <CartItem
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <div className="background-image">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Bring nature into your home with our beautiful collection
            of houseplants.
          </p>

          <button
            className="get-started-button"
            onClick={handleGetStarted}
          >
            Get Started
          </button>

          <br />
          <br />

          <button
            className="continue-button"
            onClick={() => setCurrentPage("about")}
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;