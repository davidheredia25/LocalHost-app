import React from "react";
import { useDispatch } from "react-redux";
import { orderRating, orderPrice } from "../../../redux/actions/products.actions";

const Orders = () => {

    const dispatch = useDispatch();

    const handleRating = (e) => {
        dispatch(orderRating(e.target.value))
    }
    const handlePrice = (e) => {
        dispatch(orderPrice(e.target.value))
    }

    return (
        <div>
            <select onChange={handleRating}>
                <option selected value="" >Ordenar Ratings</option>
                <option value="maxR">Mayor Rating</option>
                <option value="minR">Menor Rating</option>
            </select>

            <div>
                <select onChange={handlePrice}>
                    
                    <option value="">Ordenar Precios</option>
                    <option value="maxP">Mayor Precio</option>
                    <option value="minP">Menor Precio</option>
                </select>
            </div>
        </div>
    )
}

export default Orders;