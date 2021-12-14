
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./cartCard";
import style from './cart.module.scss';
import { Button } from '@mui/material';
import {deleteCart, getCart, Join} from '../../../redux/actions/cart.actions';
import  CartUser from "./CartUser/CartUser";
import  EmptyCart  from "./EmptyCart/EmptyCart";




const Cart= () => {

    const dispatch=useDispatch();
    const {user} =useSelector(state => state.login)
    let emptyCart = JSON.parse(localStorage.getItem('cart'));
    
    let User;
    if(user?.email) User = user
    else User = user?.user;
    const id= User?._id ? User._id : '';
    //console.log('jesucristo id', id)
    useEffect(() => {
        if(emptyCart?.length){
             dispatch(Join(id))
        }
        
    },[ dispatch])
    
    return (
        <div className={style.container}>
            {user?
            <CartUser id={id} />  
            :
            <EmptyCart />
        }
        </div>
    )
}


export default Cart;