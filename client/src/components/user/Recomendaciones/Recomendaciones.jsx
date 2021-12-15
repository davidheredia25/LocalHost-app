import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../redux/actions/cart.actions";

const Recomendaciones = () => {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.products);
    

    return (
        <div>
            <div >
                <h1>{product.name}</h1>
                <h2>$ {product.price}</h2>
                <h2>{product.description}</h2>
            </div>
        </div>
    )
}

export default Recomendaciones;