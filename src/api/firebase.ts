import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8e1arZp-0eQOO9-HFo6rNiNCfLhNxXMI",
  authDomain: "rockensistemas-3dc16.firebaseapp.com",
  projectId: "rockensistemas-3dc16",
  storageBucket: "rockensistemas-3dc16.appspot.com",
  messagingSenderId: "266728588931",
  appId: "1:266728588931:web:344ef653c240bfc7cf3db6"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth
export const auth = getAuth(app);

// Inicializa Firestore
export const db = getFirestore(app);