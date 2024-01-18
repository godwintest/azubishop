import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import "./Header.css";

const Header = () => {
  const { getTotalItems } = useCart();
  return (
    <div>
      {/* Header */}
      {/* <hr /> */}
      <header>
        <Link to="/">
          <div className="logo">
            <img src="./assets/azubilogo.png" alt="" />
            AzubiShop
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart{" "}
                <span className="cart-notification">{getTotalItems()}</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <div className="login-btn">Login</div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
