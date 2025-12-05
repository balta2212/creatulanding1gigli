import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./views/Home";
import CategoryView from "./views/CategoryView";
import ItemDetailView from "./views/ItemDetailView";
import CartView from "./views/CartView";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryView />} />
        <Route path="/item/:id" element={<ItemDetailView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="*" element={<h2>404 - No encontrado</h2>} />
      </Routes>
    </>
  );
}
