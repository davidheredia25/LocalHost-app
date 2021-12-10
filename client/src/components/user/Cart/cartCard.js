import React, {useState} from "react";
import style from './cart.module.scss';
import { Button } from '@mui/material';


const CartCard = ({key, name, price, talle, image, count, onClose}) => {
    return(
        <div className={style.container}>
            <div className={style.card}>
            <p className={style.count}>{count} x </p>
            <img className={style.image} src={image} alt='' />
            <p className={style.name}>{name}</p>
            <p className={style.talle}>{talle}</p>
            <p>$ {price}</p>
            <Button variant='filled' size='large' style={{'backgroundColor': '#000000', 'color': '#FFFFFF', 'width': '10px'}} onClick={onClose}>X</Button>
            </div>

            
        </div>
    )
}


export default CartCard;