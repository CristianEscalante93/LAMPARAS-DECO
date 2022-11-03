import React ,{useState} from "react";

export default function ItemCount({inicial, stock, onAdd}) {
const [contador, setContador] = useState(inicial);


    return <div>
        <h2>Contador</h2>
        <h3>Cantidad: {contador}</h3>
        <button disabled={contador >= stock} onClick={()=>{setContador(contador + 1)}}>+</button>
        <button disabled={contador<=1} onClick={()=>{setContador(contador - 1)}}>-</button>
        <button onClick={()=>{onAdd(contador); setContador(inicial)}}>Agregar al carrito</button>
    </div>;

}
