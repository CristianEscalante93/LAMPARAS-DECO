import Item from './Item'
import "./ItemList.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function ItemList({productos}) {
  return (
    <>
      {!productos.length && <Stack style={{border:"10px" , padding:"10px" }} sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary"className="neon" />
      <LinearProgress color="secondary" className="neon"/>
      <LinearProgress color="secondary" className="neon"/>
    </Stack>}
    <div  className="containerPrincipal">
      {productos.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
    </>
  )
}
