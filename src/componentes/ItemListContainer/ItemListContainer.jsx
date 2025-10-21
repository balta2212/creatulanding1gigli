import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>
      <p>Explorá la mejor tecnología al mejor precio.</p>
    </section>
  );
};

export default ItemListContainer;
