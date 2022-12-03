import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.css';

export default function Item({item}) {

  return (

      <Card sx={{ maxWidth: 300 }} style={{ border: "2px solid black" , margin:"10px",borderRadius: "20px"}} className="card sombra">
      <img
        src={item.img}
        alt={item.nombre}
        className="imgCard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <div className="letra">{item.nombre}</div>
        </Typography>
        <Typography variant="" color="text.secondary" className="precio">
          ${item.precio}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex", justifyContent:"center"}}>
        <Button size="small" style={{backgroundColor: "goldenrod"}}><Link to={"/item/" + item.id} className="link1 letra" style={{}} >Detalles</Link></Button>
      </CardActions>
    </Card>

  )
}
