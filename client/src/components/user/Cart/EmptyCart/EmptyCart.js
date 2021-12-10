import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../cartCard";
import { Button } from '@mui/material';
import {deleteCart, getEmptyCart, deleteEmptyOne} from '../../../../redux/actions/cart.actions';
import style from '../carrito.module.scss';




const EmptyCart = () => {

    const  dispatch = useDispatch()
    const {emptyCart} = useSelector(state => state.cart)

    function total(){
        let calculo=0;
        for(var i=0; i< emptyCart?.length; i++) {
            calculo = calculo + (emptyCart[i]?.product.price * emptyCart[i].qty)
        } 
       return calculo 
    } 

    const onClose = (id) => {
        console.log(id)
        console.log('onclose')
       return  dispatch(deleteEmptyOne(id))
    }

    const Limpiar = () => {
        dispatch(deleteCart());
    }   
    let pago = total();

    useEffect(() => {
        return dispatch(getEmptyCart())
    }, [emptyCart, dispatch])

    return (
        <div className={style.cart}>
            <div style={{marginTop: '200px'}} className={style.cart} >
                {!emptyCart?.length ?
                <p>No hay PProductos</p>  
                 : emptyCart?.map(x => {
                    return(
                  <CartCard
                   key={x.product._id} 
                   name={x.product.name}
                   price={x.product.price * x.qty}
                   talle={x.talle}
                   count={x.qty}
                   image={x.product.image}
                   onClose={() => onClose(x.product._id)}
                  /> 
                )})
            } 
            </div>
            <div>
              {emptyCart?.length?
                
                <h3>TOTAL : $ {pago}</h3>  
                : null
            } 
        
            </div>
            <div className={style.buttons}>
            {!emptyCart?.length?
                
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


export default EmptyCart;