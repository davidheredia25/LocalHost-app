import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../../redux/actions/filters.actions";
import { getProducts } from "../../../redux/actions/products.actions";


const Orders = () => {

    const dispatch = useDispatch();
    const { brand, category, subcategory, name } = useSelector(state => state.filters)

    const handleOrder = (e) => {
        dispatch(setOrder(e.target.value))
        dispatch(getProducts({ brand, category, subcategory, name, order: e.target.value }))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option selected value="" >Ordenar Ratings</option>
                <option value="maxR">Mayor Rating</option>
                <option value="minR">Menor Rating</option>
            </select>

            <div>
                <select onChange={handleOrder}>
                    <option value="">Ordenar Precios</option>
                    <option value="maxP">Mayor Precio</option>
                    <option value="minP">Menor Precio</option>
                </select>
            </div>
        </div>
    )
}

export default Orders;