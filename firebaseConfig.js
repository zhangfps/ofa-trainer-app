// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCypHD0qFQhWcdPb-FLr8KwBU_6J4exBY8",
  authDomain: "ofa-trainer.firebaseapp.com",
  projectId: "ofa-trainer",
  storageBucket: "ofa-trainer.firebasestorage.app",
  messagingSenderId: "843480536480",
  appId: "1:843480536480:web:635d0ee5f9960aae6780c5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
