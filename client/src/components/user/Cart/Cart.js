
import React, {useState} from "react";
import { useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import CartCard from "./cartCard";
import style from './carrito.module.scss';




const Cart= () => {
    const {cart} = useSelector(state=> state.cart)
    console.log('cart', cart);
    function total(){
        let calculo=0;
        for(var i=0; i< cart?.length; i++) {
            calculo = calculo + (cart[i].product.price * cart[i].count)
        } 
       return calculo 
    }

    let pago= total();

    return (
        <div className={style.cart}>
           <NavBar />
            <div className={style.cards}>
                {cart.length?
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
              <h3>TOTAL : $ {pago}</h3>
        
            </div>
        </div>
    )
}


export default Cart;