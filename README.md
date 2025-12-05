🛒 Tecbal – Ecommerce en React + Firebase

Este proyecto es un ecommerce desarrollado con React, utilizando Firebase Firestore para almacenar los productos.
Incluye sistema de carrito, filtrado por categorías, vistas dinámicas y navegación con React Router.

🚀 Tecnologías utilizadas

React + Vite

React Router DOM

Firebase Firestore

React Bootstrap / Bootstrap

Context API (manejo global del carrito)

CSS / SCSS

📦 Características principales
✔ Listado de productos

Los productos se obtienen en tiempo real desde Firestore y se muestran en tarjetas con nombre, imagen y precio.

✔ Categorías

Sistema de filtros dinámicos:

Celulares

Laptops

Accesorios

Inicio (todos los productos)

✔ Detalle del producto

Cada producto tiene su propia página:
/item/:id

Incluye:

Imagen grande

Descripción

Precio

Botón para agregar al carrito

✔ Carrito de compras

Ver los productos agregados

Calcular precio total

Eliminar un producto

Vaciar carrito completo

Guardar cantidades

Ruta:
/cart

✔ Firestore

Los productos se leen desde:

collection(db, "Item")

🗂 Estructura del proyecto
src/
│── components/
│   ├── ItemCard.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemDetail.jsx
│   ├── CartView.jsx
│── context/
│   ├── CartContext.jsx
│── firebase/
│   ├── firebaseConfig.js
│── App.jsx
│── main.jsx
