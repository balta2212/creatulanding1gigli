import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

export default function ItemDetail({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={item.image} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h3>${item.price}</h3>

          <Button onClick={() => addToCart(item, 1)} variant="success">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}
