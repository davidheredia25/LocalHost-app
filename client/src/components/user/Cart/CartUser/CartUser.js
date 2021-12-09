import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../cartCard";
import { Button } from '@mui/material';
import {deleteCart, getCart} from '../../../../redux/actions/cart.actions';




const CartUser = ({id}) => {
    const  dispatch = useDispatch();
    const {user} =useSelector(state => state.login)

    
    
    const {cart} = useSelector(state => state.cart)
    function total(){
        let calculo=0;
        for(var i=0; i< cart?.length; i++) {
            calculo = calculo + (cart[i].cart.price * cart[i].qtyCart)
        } 
       return calculo 
    } ;

    const Limpiar = () => {
        dispatch(deleteCart());
    }
    let pago = total();

    useEffect(() => {
        
       dispatch(getCart(id))
        
    }, [dispatch])


    return (
        <div >
            <div >
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
                 : <p>No hay Productos</p>
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


export default CartUser;