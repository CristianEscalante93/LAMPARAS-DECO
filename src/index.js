import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKSU5w8Q6xdDsJQr902DlB5lwXqym7mTE",
  authDomain: "proyecto-44970.firebaseapp.com",
  projectId: "proyecto-44970",
  storageBucket: "proyecto-44970.appspot.com",
  messagingSenderId: "758192475350",
  appId: "1:758192475350:web:ce6aaa2401c93839d54d77",
  measurementId: "G-LK86MTGBPD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
