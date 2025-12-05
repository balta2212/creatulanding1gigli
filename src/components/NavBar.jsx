import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { totalQuantity } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Tecbal
      </Link>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/celular">
              Celulares
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/laptops">
              Laptops
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/accesorios">
              Accesorios
            </NavLink>
          </li>
        </ul>

        <Link to="/cart" className="btn btn-outline-light position-relative">
          <CartWidget />
          {totalQuantity() > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalQuantity()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
