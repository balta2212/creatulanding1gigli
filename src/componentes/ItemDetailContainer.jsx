import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => console.error("Error cargando producto:", err));
  }, [id]);

  if (!producto)
    return (
      <h2 style={{ textAlign: "center", color: "#00bcd4" }}>
        Cargando producto...
      </h2>
    );

  return (
    <div style={{ textAlign: "center", color: "#fff", padding: "2rem" }}>
      <h2>{producto.title}</h2>
      <img
        src={producto.thumbnail}
        alt={producto.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>{producto.description}</p>
      <h3 style={{ color: "#00bcd4" }}>${producto.price}</h3>
    </div>
  );
}

export default ItemDetailContainer;
