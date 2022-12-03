import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { contextGeneral } from './ContextContainer';
import { Link } from "react-router-dom";

export default function ItemDetail({producto}) {
  const [irCarrito, setIrCarrito] = React.useState(false)

  const { carrito, addItem } = React.useContext(contextGeneral);


  function onAdd(cantidad) {
    addItem(producto, cantidad);
    setIrCarrito(true);
  }

  return (
    <Card sx={{ maxWidth: 600, minWidth:280 }} style={{ border: "2px solid black",borderRadius:"15px", margin:"20px",boxShadow: "0 25px 50px -12px #c237db"}} className="card1 sombraW" >
      <img
        src={producto.img}
        alt={producto.nombre}
        className="imgCard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="letra1" >
          <div className="letra1">{producto.nombre}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"bold"}}>
          {producto.detalles}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {producto.stock}
        </Typography>
      </CardContent>
      <CardActions>
        {irCarrito ?
        <Button size="small" style={{ border: "1px solid black"}} className="boton"><Link to="/Cart" className='linkGold'>Terminar mi compra</Link></Button> :
          <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}/>}
      </CardActions>
    </Card>
  );
}