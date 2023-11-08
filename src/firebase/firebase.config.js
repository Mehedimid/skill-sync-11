// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.vite_apiKey
  authDomain:import.meta.env.vite_authDomain,
  projectId:import.meta.env.vite_projectId,
  storageBucket:import.meta.env.vite_storageBucket,
  messagingSenderId:import.meta.env.vite_messagingSenderId,
  appId:import.meta.env.vite_appId,
  apiKey: "AIzaSyCDJFtkSXOIYU0_exbScoRzj5t_RpP6w6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;