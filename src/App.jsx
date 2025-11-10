import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
