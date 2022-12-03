import React from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';


export default function CartWidget({cant}) {
    return (
    <>
    <AddShoppingCartRoundedIcon style={{marginTop:"10px"}}/>
    {cant}
    </>
)
}
