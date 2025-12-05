import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartView() {
  const { cart, removeItem, totalPrice, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="container mt-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Seguir comprando
        </Link>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3 className="mt-3">Total: ${totalPrice()}</h3>
      <button className="btn btn-warning me-2" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link className="btn btn-success" to="/">
        Seguir comprando
      </Link>
    </div>
  );
}
