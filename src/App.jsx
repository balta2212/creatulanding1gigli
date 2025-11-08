import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar.jsx";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
