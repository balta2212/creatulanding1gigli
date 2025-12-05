import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemCard from "../components/ItemCard";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemsRef = collection(db, "Item");

    const q = categoryId
      ? query(itemsRef, where("category", "==", categoryId))
      : itemsRef;

    getDocs(q)
      .then((resp) => {
        const products = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(products);
      })
      .catch((error) => console.error("Error cargando productos:", error));
  }, [categoryId]);

  if (items.length === 0)
    return <h2 className="text-center mt-4">No hay productos cargados…</h2>;

  return (
    <div className="d-flex flex-wrap justify-content-center mt-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
