import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditDeleteProducts from "./EditDeleteProducts";
import CreateProduct from "./CreateProduct";

const CrudContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts({}))
    }, [])

    const { products } = useSelector(state => state.products)

    return (
        <div>
            <CreateProduct/>
            {
                products?.length 
                    ?
                    <EditDeleteProducts products={products} />
                    : 
                    "Loading..."
            }
        </div>
    )
}

export default CrudContainer;