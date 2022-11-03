
import React from "react"; //* Siempre importar react
import logo2 from "./imagenes/logolampara.png";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="BIENVENIDOS A LAMPARAS-DECO" />
      <img src={logo2} className="App-logo" alt="logo" />
      <Footer />
    </div>
  );


import logo2 from './imagenes/logolampara.png'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import TestApi from './components/TestApi';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
                <NavBar />
                <img src={logo2} className="App-logo" alt="logo" />
                {/* ACA DECLARO RUTAS PUNTUALES */}

                <Routes>
                    <Route path="/" element={<><ItemListContainer greeting={"BIENVENIDOS A LAMPARAS-DECO"}/><TestApi/> </>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route />
                    <Route />
                    <Route />
                </Routes>
                {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
                <Footer />
            </div>
        </BrowserRouter>


    );
}

export default App;
