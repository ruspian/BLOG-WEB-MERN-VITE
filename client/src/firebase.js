// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-vite.firebaseapp.com",
  projectId: "mern-blog-vite",
  storageBucket: "mern-blog-vite.firebasestorage.app",
  messagingSenderId: "749775378771",
  appId: "1:749775378771:web:9184301394bc63a84de9a6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
