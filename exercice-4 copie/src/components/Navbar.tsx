import React from "react";
import "./Navbar.css";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Pet Store</h1>
      </div>
      <div className="navbar-cart" onClick={onCartClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/126/126083.png" 
          alt="Shopping Cart"
          className="cart-icon"
        />
        <span className="cart-count">{cartItemCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
