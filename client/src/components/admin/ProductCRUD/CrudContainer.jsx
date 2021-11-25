import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditeDeleteProducts from "./EditDeleteProducts";
import CreateProduct from "./CreateProduct";


const CrudContainer = () => {

    return (
        <div>
            <CreateProduct/>
            <EditDeleteProducts />
        </div>
    )
}






export default CrudContainer;