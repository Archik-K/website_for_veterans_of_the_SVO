/* // Импорт функций из Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Для работы с базой данных Firestore
import { getAuth } from "firebase/auth"; // Для аутентификации

// Конфигурация, которую ты получил в Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAGLs_bze52rjD33-fQw8TI1CdITHbzwyo",
  authDomain: "laboradaptationofsvoveterans.firebaseapp.com",
  projectId: "laboradaptationofsvoveterans",
  storageBucket: "laboradaptationofsvoveterans.firebasestorage.app",
  messagingSenderId: "695151433166",
  appId: "1:695151433166:web:54d205ee82a45e86c2079f",
  measurementId: "G-400TF12H5P"
   };

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт экземпляров Firestore и Auth для дальнейшего использования в проекте
export const db = getFirestore(app);
export const auth = getAuth(app);
 */
// firebaseConfig.js
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Для работы с Firestore
import { getAuth } from "firebase/auth"; // Для аутентификации
import { getStorage } from "firebase/storage"; // Для работы с Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyAGLs_bze52rjD33-fQw8TI1CdITHbzwyo",
  authDomain: "laboradaptationofsvoveterans.firebaseapp.com",
  projectId: "laboradaptationofsvoveterans",
  storageBucket: "laboradaptationofsvoveterans.appspot.com",
  messagingSenderId: "695151433166",
  appId: "1:695151433166:web:54d205ee82a45e86c2079f",
  measurementId: "G-400TF12H5P"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт экземпляров Firestore, Auth и Storage
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Экспортируем storage
