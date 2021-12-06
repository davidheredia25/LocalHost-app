
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./cartCard";
import style from './carrito.module.scss';
import { Button } from '@mui/material';
import {deleteCart} from '../../../redux/actions/cart.actions';




const Cart= () => {
    const dispatch=useDispatch();
    const {cart} = useSelector(state => state.cart)
    console.log('cart', cart);
    function total(){
        let calculo=0;
        for(var i=0; i< cart?.length; i++) {
            calculo = calculo + (cart[i].product.price * cart[i].count)
        } 
       return calculo 
    }

    const Limpiar = () => {
        dispatch(deleteCart());
    }
    let pago= total();

    return (
        <div className={style.cart}>
            <div className={style.cards}>
                {cart?.length?
                 cart.map(x => {
                     return(
                   <CartCard
                    key={x.product._id} 
                    name={x.product.name}
                    price={x.product.price * x.count}
                    talle={x.talle}
                    count={x.count}
                    image={x.product.image}
                   /> 
                 )})   
                 : <p>No hay productos</p> 
            } 
            </div>
            <div>
              {cart?.length?
                
                <h3>TOTAL : $ {pago}</h3>  
                : null
            } 
        
            </div>
            <div>
            {!cart?.length?
                
           <Link to='/'> <Button variant='contained' size="large" style={{'backgroundColor': '#000000'}} >Agregar</Button></Link>
                :<div>
                <Button variant='contained' size="large" style={{'backgroundColor': '#000000'}} >Pagar</Button>
                <Button variant='contained' onClick={Limpiar} size="large" style={{'backgroundColor': 'red'}} >Limpiar</Button>
                </div> 
            } 
            </div>
        </div>
    )
}


export default Cart;