import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, setCount, addEmptyCart } from '../../../redux/actions/cart.actions.js';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AddShoppingCart } from "@material-ui/icons";
import './cart.scss';


const AddToCart = ({product}) => {

    const dispatch = useDispatch();
    const [num, setNum] = useState(1);
    const [talle, setTalle] = useState('');
    //const { talle } = useSelector(state => state.cart.cartProduct)
    const { user } = useSelector(state => state.login)
    let User;
    if(user?.email) User = user
    else User = user?.user;
    const userId = User?._id;

    const subtraction = () => {
        setNum(num -1)
       
    }
    const addition = () => {
        setNum(num + 1)
        
    }

    const addCart = () => {
        if(user) { 
            let obj = {
                userId: userId,
                productId: product._id,
                qty: num
                  }
            dispatch(addItemToCart(obj));
            
           
            setNum(1)
                }else{
                    let obj= {
                        product: product,
                        qty: num,
                        talle: talle
                    }
                  dispatch(addEmptyCart(obj));
                  
                  
                  setNum(1) 
                  setTalle('')  
                }
    }
    
    return (
        <div>
            <div >
                <Button variant='outlined' style={{ 'color': '#000000', 'width' : 10, 'margin': 10}} disabled={num === 1} onClick={subtraction}>
                    -
                </Button>
                <span>{num}</span>
                <Button variant='outlined' style={{ 'color': '#000000', 'width' : 5   , 'margin': 10}}  onClick={addition}>
                    +
                </Button>
            </div>
            <div>
            <Button style={{'backgroundColor': '#000000', 'color': '#EEEEEE',  'margin': 10, 'padding' : 10}}  size='large'  onClick={addCart}>   AGREGAR AL CARRITO </Button>
            </div>
        </div>
    )
}

export default AddToCart;