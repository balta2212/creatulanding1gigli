import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/categoria/electronics">Electrónica</Link>
      <Link to="/categoria/jewelery">Joyería</Link>
      <Link to="/categoria/men's clothing">Hombres</Link>
      <Link to="/categoria/women's clothing">Mujeres</Link>
    </nav>
  );
};

export default NavBar;
