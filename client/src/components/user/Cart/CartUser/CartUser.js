import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../cartCard";
import { Button } from '@mui/material';
import {deleteCart, getCart, Pagar, deleteAllCart, Join} from '../../../../redux/actions/cart.actions';
import style from '../carrito.module.scss';
import axios from "axios";
import Dates from "../../Profile/Dates";
import Modal from 'react-bootstrap/Modal';




const CartUser = ({id}) => {
    const  dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user} =useSelector(state => state.login)
    let User;
    if(user?.email) User = user
    else User = user?.user;
   // let emptyCart = JSON.parse(localStorage.getItem('cart'));
    console.log('id', id)
    let userId = id;
    const pagar = async (userId) =>{
        try {
            let datos =  await axios.post(`user/checkoutMp/${userId}`)
            console.log('init',datos) 
            console.log('point',datos.data.response.init_point) 
            window.location.href = datos.data.response.init_point;
               /*  dispatch({ type: PAGAR, payload: res.data.init_point }); */
             
        } catch (error) {
            console.log(error)
        }
      
          
    }    
    const {cart} = useSelector(state => state.cart);
    console.log('cart',cart)

    function total(){
        let calculo=0;
        for(var i=0; i< cart?.length; i++) {
            calculo = calculo + (cart[i].cart?.price * cart[i].qtyCart)
        } 
       return calculo 
    };

    const Limpiar = () => {
        dispatch(deleteAllCart(id));
        
    }



    let pago = total();

    useEffect(() => {
        /* if(emptyCart?.length){
           return  dispatch(Join(id))
        } */
        dispatch(getCart(id))
    },[dispatch])


    return (
        <div className={style.container}>
        <div style={{marginTop: '150px', marginBottom: '10%'}} className={style.cart} >
            <div  className={style.cart}>
                {cart?.length ?
                 cart.map(x => {
                     return(
                   <CartCard
                    key={x.cart?._id ? x.cart._id : ''} 
                    id={x.cart?._id? x.cart._id : ''}
                    name={x.cart?.name ? x.cart.name : ''}
                    price={x.cart?.price ? x.cart.price * x.qtyCart : ''}
                    talle={x.talle? x.talle : ''}
                    count={x.qtyCart? x.qtyCart : ''}
                    image={x.cart?.image? x.cart.image : ''}
                   /> 
                 )})   
                 : <p>No hay Productos</p>
            } 
            </div>
            </div>
            
            <div>
                <Dates />
            </div>
            <div style={{marginTop: '10%'}}>
              {cart?.length && pago!==NaN? 
                <div>
                <h3>TOTAL : $ {pago}</h3> 
                </div> 
                :<p></p>
                } 
        
            
            <div>
            {!cart?.length?
                
           <Link to='/catalogo'> <Button variant='contained' size="large" style={{'backgroundColor': '#000000'}} >Agregar</Button></Link>
                :<div>
                <Button variant='contained' onClick={User.direction !== ''? ()=>pagar(id) : handleShow} size="large" style={{'backgroundColor': '#000000'}} >Pagar</Button>
                <Button variant='contained' onClick={Limpiar} size="large" style={{'backgroundColor': 'red'}} >Limpiar</Button>
                </div> 
            } 
            </div>
            <Modal show={show} centered>
                <p style={{color: 'red'}}>Necesita direccion</p>
                <button onClick={handleClose}> OK</button>
                </Modal> 
            </div>
        
        </div>
    )
} 


export default CartUser;