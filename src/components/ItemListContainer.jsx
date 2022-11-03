import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({greeting}) {
    const onAdd = (cont)=>{console.log('el usuario agrego: ' + cont)};
    return (
    <div>
        <div>{greeting}</div>
        <div><ItemCount inicial={1} stock={10} onAdd={onAdd}/></div>
    </div>
)
}
