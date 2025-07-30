import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";

const App = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
  <span className="navbar-brand">My E-Commerce</span>
  <div className="navbar-nav ms-auto d-flex flex-row gap-3">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/products" className="nav-link">Products</Link>
    <Link to="/cart" className="nav-link">Cart</Link>
  </div>
</nav>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </>
);

export default App;
