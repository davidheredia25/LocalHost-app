import React, {useState} from "react";
import { useSelector , useDispatch} from "react-redux";
import style from './cart.module.scss';
import { Button } from '@mui/material';
import {deleteCartOne} from '../../../redux/actions/cart.actions';


const CartCard = ({key,id, name, price, talle, image, count, onClose}) => {
     const dispatch = useDispatch()
    const {user} = useSelector(state => state.login);
    console.log('key', id)
    let User;
    if(user?.email) User = user
    else User = user?.user;

    const onclose =()=>{
        let obj= {
            id: User?._id,
            productId: id
        }
        dispatch(deleteCartOne(obj))
    }

    return(
        <div className={style.container}>
            <div className={style.card}>
            <p className={style.count}>{count} x </p>
            <img className={style.image} src={image} alt='' />
            <p className={style.name}>{name}</p>
            <p className={style.talle}>{talle}</p>
            <p>$ {price}</p>
            <Button variant='filled' size='large' style={{'backgroundColor': '#000000', 'color': '#FFFFFF', 'width': '10px'}} onClick={onclose}>X</Button>
            </div>

            
        </div>
    )
}


export default CartCard;