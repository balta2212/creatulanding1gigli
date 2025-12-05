import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TU CONFIG REAL DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBbmhWL53mQ2o23dJuu4nTkb5aAsQl3pb8",
  authDomain: "tecbal-db.firebaseapp.com",
  projectId: "tecbal-db",
  storageBucket: "tecbal-db.firebasestorage.app",
  messagingSenderId: "718858296816",
  appId: "1:718858296816:web:54fa83b4749083ed571135",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 👉 **ESTE EXPORT ES EL QUE FALTABA**
export const db = getFirestore(app);
