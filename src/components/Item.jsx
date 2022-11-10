import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../App.css";

export default function Item({item}) {
  console.log(item.nombre);

  return (

      <Card sx={{ maxWidth: 345 }} style={{ border: "2px solid black" , margin:"10px"}} className="card">
      <img
        src={item.img}
        alt={item.nombre}
        className="imgCard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={"/item/" + item.id} className="link1" >Detalles</Link></Button>
      </CardActions>
    </Card>
  )
}
