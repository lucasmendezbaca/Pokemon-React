// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLgJgK0eq2iRsHgnTNRLK_V2C3b2lLWMM",
  authDomain: "pokemon-react-4e2d4.firebaseapp.com",
  projectId: "pokemon-react-4e2d4",
  storageBucket: "pokemon-react-4e2d4.appspot.com",
  messagingSenderId: "42474243510",
  appId: "1:42474243510:web:4d522e23e7f175e2a62d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);