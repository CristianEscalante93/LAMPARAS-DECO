import React, {useContext, useEffect, useState} from 'react'
import { contextGeneral } from './ContextContainer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { carrito, removeItem, clear, total } = useContext(contextGeneral);


  return (
    <div style={{minHeight:"30vh"}}>{carrito.length ?
    <div>{carrito.map((el)=> <div className="contenedorCart">
      <div key={el.id} style={{ border: "1px solid black",borderRadius:"15px", color:"black"}} className="cardCarrito">
      <img src={el.img} alt={el.nombre} className="imgCard"/>
      <h3>{el.nombre}</h3>
      <p>Cantidad: {el.quantity}</p>
      <p>Precio Unitario: ${el.precio}</p>
      <p>Precio Total: ${el.precio*el.quantity}</p>
      <Button size="small" style={{ border: "1px solid black", color:"black", margin:"10px", backgroundColor:"darkslategray", color:"white"}} onClick={()=>removeItem(el.id)} className="">
          Eliminar
        </Button>
      </div></div>
    )}

    <h2 style={{color:"#c237db"}}>Precio total de la compra: ${total}</h2>
    <div className="vaciarPagar">
    <Button style={{ border: "1px solid black", color:"black", margin:"5px", backgroundColor:"gray"}} onClick={()=>clear()} className="vaciar">Vaciar carrito</Button>
    <Button style={{ border: "1px solid #c237db", color:"black", margin:"5px", backgroundColor:"black"}}><Link to="/Checkout" className='linkPago'>IR A PAGAR!!!🎁</Link></Button></div>
    </div> : <div style={{margin :"20px"}}><h3>El carrito esta vacio...</h3><button style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", margin:"20px"}} className="bot"><Link to="/" className='link11'  >Seguir comprando 🛒</Link></button></div>
    }
    </div>
  )
} 
