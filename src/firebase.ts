// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-FtmJhI1VwuRt_Tsfs9nhNg0nzMcabjw",
  authDomain: "mantin-mail.firebaseapp.com",
  projectId: "mantin-mail",
  storageBucket: "mantin-mail.firebasestorage.app",
  messagingSenderId: "160226943126",
  appId: "1:160226943126:web:0097bc637650871417a2b7",
  measurementId: "G-F872XP2G7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
