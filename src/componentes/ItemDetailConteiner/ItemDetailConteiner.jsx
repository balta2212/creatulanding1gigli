import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productoId}`
      );
      setProducto(response.data);
    };
    fetchData();
  }, [productoId]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} width="150" />
      <p>{producto.description}</p>
      <p>
        <strong>${producto.price}</strong>
      </p>
    </div>
  );
};

export default ItemDetailContainer;
