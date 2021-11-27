import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart} from '../../../redux/actions/cart.actions.js'

const AddToCart = ({ talle, product }) => {
    
    const { cart } = useSelector(state => state.cart)
    console.log(cart)
    const dispatch = useDispatch()
    
   
    const [itemInfo, setItemInfo] = useState({
        product: product,
        count: 1,
        talle: talle
    })

    const subtraction = () => {
        setItemInfo({
            ...itemInfo,
            count: itemInfo.count - 1 
        })
    }

    const addition = () => {
        setItemInfo({
            ...itemInfo,
            count: itemInfo.count + 1 
        })
    }

    const addCart = () => {
        dispatch(addItemToCart(itemInfo))
    }
    
    return (
        <div>
            <div>
                <button disabled={itemInfo.count === 1} onClick={subtraction}>
                    -
                </button>
                <span>{itemInfo.count}</span>
                <button onClick={addition}>
                    +
                </button>
            </div>
            <button disabled={talle === ""} onClick={addCart}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default AddToCart;