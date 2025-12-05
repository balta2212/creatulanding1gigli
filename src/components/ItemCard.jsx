import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>$ {item.price}</Card.Text>
        <Link className="btn btn-primary" to={`/item/${item.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}
