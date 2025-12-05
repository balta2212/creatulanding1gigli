import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const ref = doc(db, "Item", id);

    getDoc(ref).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return item ? <ItemDetail item={item} /> : <h2>Cargando...</h2>;
}
