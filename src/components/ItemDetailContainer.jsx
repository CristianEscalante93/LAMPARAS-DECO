import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useState, useEffect, useContext } from "react";
import { contextGeneral } from './ContextContainer';
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function ItemDetailContainer() {
  const{iditem}= useParams();
  const { carrito} = useContext(contextGeneral);
  const [producto, setProducto] = useState({});
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    let documento = doc(db, 'productos', iditem)
    setSpiner(true)

    getDoc(documento).then((document)=>{
      const found= carrito.find((item)=>item.id == iditem);
      const quantity = found ? found.quantity : 0;
      setProducto({id: document.id, ...document.data(), stock: document.data().stock - quantity})
      setSpiner(false)
    })
  }, [iditem]);

  return (<>{spiner ? <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2} style={{margin:"15px"}}>
  <LinearProgress color="secondary"className="neon" />
  <LinearProgress color="secondary" className="neon"/>
  <LinearProgress color="secondary" className="neon"/>
</Stack> :
    <div className="card2">
      <ItemDetail producto={producto} />
    </div>}
    </>
  );
}

