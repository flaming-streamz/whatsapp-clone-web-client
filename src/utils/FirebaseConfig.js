// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi6U5Ok3ffYJH3D47OXru5ob5BIVrJT8U",
  authDomain: "whatsapp-clone-2507b.firebaseapp.com",
  projectId: "whatsapp-clone-2507b",
  storageBucket: "whatsapp-clone-2507b.appspot.com",
  messagingSenderId: "829245734072",
  appId: "1:829245734072:web:39701d37be33adc39a484d",
  measurementId: "G-7XSP2YTBE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
