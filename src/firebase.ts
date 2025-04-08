import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJKLAY8yGO7YKdrvnw3QzkbnoQLX25QpE",
    authDomain: "testbase-for-valerylaserstudio.firebaseapp.com",
    projectId: "testbase-for-valerylaserstudio",
    storageBucket: "testbase-for-valerylaserstudio.firebasestorage.app",
    messagingSenderId: "401064780770",
    appId: "1:401064780770:web:a3b629dd870aa00d41cfbb",
    measurementId: "G-3GT6P81PNJ"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
