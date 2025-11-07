import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://fakestoreapi.com/products";
      if (categoriaId)
        url = `https://fakestoreapi.com/products/category/${categoriaId}`;
      const response = await axios.get(url);
      setProductos(response.data);
    };
    fetchData();
  }, [categoriaId]);

  return (
    <div>
      <h2>
        {categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}
      </h2>
      <div className="productos">
        {productos.map((p) => (
          <div key={p.id} className="producto">
            <h3>{p.title}</h3>
            <img src={p.image} alt={p.title} width="100" />
            <p>${p.price}</p>
            <Link to={`/producto/${p.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
