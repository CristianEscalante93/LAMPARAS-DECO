import React from "react"; //* Siempre importar react
import logo2 from "./imagenes/logolampara.png";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import TestApi from "./components/TestApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";
import { InterpreterModeOutlined } from "@mui/icons-material";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <NavBar />
        
        {/* ACA DECLARO RUTAS PUNTUALES */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"BIENVENIDOS A LAMPARAS-DECO"}/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer/>} />
          <Route />
          <Route />
          <Route />
        </Routes>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
        <img src={logo2} className="App-logo" alt="logo" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
