import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Tecbal</h1>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Celulares</li>
        <li>Notebooks</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
