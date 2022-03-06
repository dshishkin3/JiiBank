import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2qWrEEv6jez7mLxN20Ap8v_LHMc4ovbA", // :)
  authDomain: "jiibank-a36af.firebaseapp.com",
  projectId: "jiibank-a36af",
  storageBucket: "jiibank-a36af.appspot.com",
  messagingSenderId: "1065162533208",
  appId: "1:1065162533208:web:7f467cb7d737ca419cdd2d",
  measurementId: "G-R22B7MKXZE",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

// register
export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

// login
export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

// logout
export const logout = () => signOut(auth);
