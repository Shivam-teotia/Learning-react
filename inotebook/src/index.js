import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import { initializeApp } from "firebase/app";
import * as firebase from 'firebase'
import 'firebase/firestore';
//import {getFirestore} from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyA0zjFaiCiYil4Y13LJQjPGhfB83QAJxWg",
  authDomain: "cart-24304.firebaseapp.com",
  projectId: "cart-24304",
  storageBucket: "cart-24304.appspot.com",
  messagingSenderId: "109556937431",
  appId: "1:109556937431:web:35826c62b8b0cb5ed4f692"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const db=getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

