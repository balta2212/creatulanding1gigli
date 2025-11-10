import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">TECBAL</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/smartphones">Celulares</Link>
        </li>
        <li>
          <Link to="/category/laptops">Notebooks</Link>
        </li>
        <li>
          <Link to="/category/fragrances">Accesorios</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
