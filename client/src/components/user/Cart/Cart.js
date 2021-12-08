
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./cartCard";
import style from './carrito.module.scss';
import { Button } from '@mui/material';
import {deleteCart, getCart} from '../../../redux/actions/cart.actions';




const Cart= () => {

    const dispatch=useDispatch();
    const {user} =useSelector(state => state.login)
    if(user) {
    let User;
    if(user?.email) User = user
    else User = user.user;
    }
    const id= User?._id;
    console.log('jesucristo id', id)
    const {cart} = useSelector(state => state.cart)
    const emptyCart = JSON.parse(localStorage.getItem('cart'))
    
    
    console.log('user', user)
    console.log('cart', cart);
    function total(){
        let calculo=0;
        for(var i=0; i< cart?.length; i++) {
            calculo = calculo + (cart[i].cart.price * cart[i].qtyCart)
        } 
       return calculo 
    } 

    const Limpiar = () => {
        dispatch(deleteCart());
    }
    let pago = total();
    useEffect(() => {
        if(id) {
       dispatch(getCart(id))
        } else {
            return
        }
    }, [dispatch])
    return (
        <div className={style.cart}>
            <div className={style.cards}>
                {cart?.length ?
                 cart.map(x => {
                     return(
                   <CartCard
                    key={x.cart._id} 
                    name={x.cart.name}
                    price={x.cart.price * x.qtyCart}
                    talle={x.talle}
                    count={x.qtyCart}
                    image={x.cart.image}
                   /> 
                 )})   
                 : emptyCart?.map(x => {
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