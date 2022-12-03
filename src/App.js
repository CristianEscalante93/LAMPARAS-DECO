import React from "react"; //* Siempre importar react
import logo2 from "./imagenes/logolampara.png";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ContextContainer from "./components/ContextContainer";
import Cart from "./components/Cart";
import Container from "@mui/material/Container";

function App() {
  return (
    <ContextContainer>
    <BrowserRouter>
    
      <div className="App" style={{backgroundColor:"darkslategray"}}>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <NavBar />
        {/* ACA DECLARO RUTAS PUNTUALES */}
        <Container maxWidth="xl" style={{minHeight:"40vh"}}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"BIENVENIDOS A LAMPARAS-DECO"}/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </Container>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
        <img src={logo2} className="App-logo" alt="logo" />
        <Footer />
        
      </div>
      
    </BrowserRouter>
    </ContextContainer>
  );
}

export default App;
