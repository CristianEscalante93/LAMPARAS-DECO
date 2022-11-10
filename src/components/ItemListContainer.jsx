import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import { productosDECO } from "./data.js";
import ItemList from "./ItemList";
import "../App.css";


export default function ItemListContainer({ greeting }) {
  const { idcategoria} = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosDECO);
      }, 2000);
    });
    productosPromise.then((res) => {
      if (idcategoria) {
        setProductos(res.filter((item) => item.categoria == idcategoria));
      } else {
        setProductos(res);
      }
    });
  }, [idcategoria]);

  return (
    <div>
      <ItemList productos={productos} />;
    </div>
  );
}
