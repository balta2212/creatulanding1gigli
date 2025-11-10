import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (categoryId) {
          setProductos(data.products.filter((p) => p.category === categoryId));
        } else {
          setProductos(data.products);
        }
      })
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", color: "#00bcd4" }}>
        Cargando productos...
      </h2>
    );
  }

  return (
    <div className="item-list-container">
      <h2 className="titulo">{greeting}</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <Link to={`/item/${producto.id}`}>
              <img src={producto.thumbnail} alt={producto.title} />
            </Link>
            <h4>{producto.title}</h4>
            <p className="precio">${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
