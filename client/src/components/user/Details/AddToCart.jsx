import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, setCount, addEmptyCart } from '../../../redux/actions/cart.actions.js';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AddShoppingCart } from "@material-ui/icons";
import './cart.scss';


const AddToCart = () => {

    const dispatch = useDispatch();
    const { cartProduct } = useSelector(state => state.cart)

    const [num, setNum] = useState(1);

    const subtraction = () => {
        setNum(num -1)
        dispatch(setCount(num - 1))
    }
    const addition = () => {
        setNum(num + 1)
        dispatch(setCount(num + 1))
    }

    const addCart = () => {
        dispatch(addEmptyCart(cartProduct))
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
            <Button style={{'backgroundColor': '#000000', 'color': '#EEEEEE',  'margin': 10, 'padding' : 10}}  size='large' disabled={cartProduct.talle === ""} onClick={addCart}>   AGREGAR AL CARRITO </Button>
            </div>
        </div>
    )
}

export default AddToCart;