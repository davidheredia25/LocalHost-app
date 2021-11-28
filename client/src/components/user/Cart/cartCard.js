import React, {useState} from "react";
import style from './cart.module.scss';



const CartCard = ({key, name, price, talle, image, count}) => {
    return(
        <div className={style.container}>
            <div className={style.card}>
            <p className={style.count}>{count} x </p>
            <img className={style.image} src={image} alt='' />
            <p className={style.name}>{name}</p>
            <p className={style.talle}>{talle}</p>
            <p>$ {price}</p>
            </div>

            
        </div>
    )
}


export default CartCard;