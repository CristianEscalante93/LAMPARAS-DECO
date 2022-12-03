import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { contextGeneral } from './ContextContainer';
import { addDoc, doc, collection, getFirestore, updateDoc, increment } from 'firebase/firestore';
import Button from '@mui/material/Button';
import './Checkout.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function Checkout() {
  
  const { carrito, total,clear } = useContext(contextGeneral);
  const [nombre,setNombre] = useState('');
  const [telefono,setTelefono] = useState('');
  const [email,setEmail] = useState('');
  
  function handleTextVerification(event) {
    const includedChars = /^[a-z A-Z]+$/;
    if (!includedChars.test(event.key)) {
      event.preventDefault();
    }
  }

  function handleNumberVerification(event) {
    if ((event.keyCode > 31 && event.keyCode < 48) || event.keyCode > 57) {
      event.preventDefault();
    }
  }

  function validateEmail(mail){
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(mail) ){
        return true;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Email no es valido',
        text: 'Ingreselo nuevamente...',
      })
        return false;
    }
}


  function comprar() {
    const pedido = {
      comprador:{nombre, telefono, email},
      carrito,
      total,
  };
  
    const db= getFirestore();

    const pedidos= collection(db,'pedidos');

    if(validateEmail(email) == false){
      return
    }

    addDoc(pedidos, pedido).then(pedidoInsertado=>{
      Swal.fire({
        title: 'Gracias por la compra!!!',
        html:'<h4>Pedido: </h4>'+ pedidoInsertado.id +
        '<h5>Nombre:</h5>'+nombre+
        '<h5>Productos:</h5>' + carrito.map((el)=>el.nombre)+
        '<h5>Total: $</h5>'+total,
      })
      carrito.forEach((item)=>{
        const documento= doc(db, 'productos',item.id);
        updateDoc(documento, {stock: increment(-item.quantity)})
      })
      
      
    });

    clear();

  };
  
  function validarForm(evt){
    evt.preventDefault();
    comprar();
    console.log('valido')
  }


  if (carrito.length === 0){
    return(
      <div style={{margin :"20px", minHeight:"30vh"}}>
        <h3>El carrito esta vacio...</h3>
        <button className='bot1' style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", margin:"20px"}} ><Link to="/" className="link12">Seguir comprando 🛒</Link></button>
        </div>
    )
  }

  return <div><h2>Checkout</h2>
  <div className="formularioPos">
    <form onSubmit={validarForm}  className="formulario">

      <input type="text" placeholder="Nombre..." onKeyDown={handleTextVerification} className="datosForm" value={nombre} onChange={(e)=>setNombre(e.target.value)} required/>

      <input type="tel" placeholder="Telefono..." className="datosForm" onKeyDown={handleNumberVerification} value={telefono} onChange={(e)=>setTelefono(e.target.value)} required/>

      <input type="email" id="correo" name="correo" className="datosForm"  placeholder="Email..." value={email} onChange={(e)=>setEmail(e.target.value)} required/>

      {(nombre=='' || telefono=='' || email=='') ? <p style={{color:"black", fontWeight:"bold"}}>Complete los datos para poder terminar la compra...</p> : <button disabled={nombre=='' || telefono=='' || email==''} style={{border:"1px solid ", margin:"10px"}} className="neon1" type="submit"  >Terminar compra!!!</button> }

    </form>
  </div>
      <div >{carrito.map((item)=>(<div className="productos">
        <h3>{item.nombre}</h3>
        <p><p style={{fontWeight:"bold"}}>Cant:</p> {item.quantity}</p>
        <p><p style={{fontWeight:"bold"}}>Total:</p>${item.quantity*item.precio}</p>
        </div>))}
    </div>
      <div><h2 style={{color:"#c237db"}}>Total: ${total}</h2></div>
      
  </div>;
}
