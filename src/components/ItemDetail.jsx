import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import "../App.css";

export default function ItemDetail({producto}) {
  const onAdd = (cont) => {
    alert("el usuario agrego: " + cont +" " + producto.nombre);
  };

  return (
    <Card sx={{ maxWidth: 600 }} style={{ border: "2px solid black"}}>
      <img
        src={producto.img}
        alt={producto.nombre}
        className="imgCard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.detalles}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {producto.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ border: "1px solid black"}}><ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}/></Button>
      </CardActions>
    </Card>
  );
}
