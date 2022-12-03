import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import ItemList from "./ItemList";
import "../App.css";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"


export default function ItemListContainer({ greeting }) {
  const { idcategoria} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcategoria) {
      productos= query(collection(db,'productos'), where('categoria', '==', idcategoria))
    } else {
      productos = collection(db, 'productos')
    }

    getDocs(productos).then(res=>{
      const documentos = res.docs.map((elemento) => ({ id: elemento.id, ...elemento.data() }));
      setProductos(documentos);
    });
  }, [idcategoria]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}
