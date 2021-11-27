import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart} from '../../../redux/actions/cart.actions.js'

const AddToCart = ({talle}) => {
    
    const { product } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1);
    const [itemInfo, setItemInfo] = useState({
        product: product,
        count: count,
        talle: talle
    })

    const subtraction = () => {
        setCount(count - 1)
    }

    const addition = () => {
        setCount(count + 1)
    }

    const addCart = () => {
        dispatch(addItemToCart(itemInfo))
    }
    
    return (
        <div>
            <div>
                <button onClick={subtraction}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={addition}>
                    +
                </button>
            </div>
            <button onClick={addCart}>AGREGAR AL CARRITO</button>
        </div>
    )
}