import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, setCount } from '../../../redux/actions/cart.actions.js'

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
        dispatch(addItemToCart(cartProduct))
    }
    
    return (
        <div>
            <div>
                <button disabled={num === 1} onClick={subtraction}>
                    -
                </button>
                <span>{num}</span>
                <button onClick={addition}>
                    +
                </button>
            </div>
            <button disabled={cartProduct.talle === ""} onClick={addCart}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default AddToCart;