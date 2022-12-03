import React ,{useState} from "react";
import './ItemCount.css'

export default function ItemCount({inicial, stock, onAdd}) {
const [contador, setContador] = useState(inicial);

  if(stock===0) return <div style={{backgroundColor:"lightgray", border: "1px solid black", color:"black", borderRadius:"10px", padding:"5px"}}>Sin stock!!!</div>

return <div className="">
    <h3>Cantidad: {contador}</h3>
    <div className="contador">
    <button disabled={contador >= stock} onClick={()=>{setContador(contador + 1)}} className="botones">+</button>
    <button disabled={contador<=1} onClick={()=>{setContador(contador - 1)}} className="botones">-</button>
    </div>
    <button disabled={stock===0} onClick={()=>{onAdd(contador); setContador(inicial)}} className="botones">Agregar al carrito</button>
  </div>;

}
