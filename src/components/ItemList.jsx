import React from 'react'
import Item from './Item'
import "../App.css";

export default function ItemList({productos}) {
  return (
      <div  className="containerPrincipal">
      {!productos.length && "Cargando..."}
      {productos.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  )
}
