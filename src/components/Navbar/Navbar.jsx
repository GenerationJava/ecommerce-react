import React from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import "./Navbar.css";

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
  
        <ul className="nav-menu">
          <li>Tienda</li>
          <li>Hombre</li>
          <li>Mujer</li>
          <li>Niños</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart} alt="carrito" />
        </div>
      </div>
    );
  }