import { useParams } from "react-router-dom";
import ItemListContainer from "../containers/ItemListContainer";

export default function CategoryView() {
  const { categoryId } = useParams();
  return <ItemListContainer categoryId={categoryId} />;
}
