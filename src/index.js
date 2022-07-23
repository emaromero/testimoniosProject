import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGz0tXfcIT8_EMcpHKEcRI4VAGwJVZkAY",
  authDomain: "testimonios-bba6d.firebaseapp.com",
  projectId: "testimonios-bba6d",
  storageBucket: "testimonios-bba6d.appspot.com",
  messagingSenderId: "704478134655",
  appId: "1:704478134655:web:5c5f9a81bc11b7cd911a4a",
  measurementId: "G-M5V7EDVNKS"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
