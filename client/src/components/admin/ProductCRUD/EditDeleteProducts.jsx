import React from "react";
import { useDispatch } from "react-redux";
import { productDelete } from "../../../redux/actions/Crud.actions";
import { getProductsDetails } from "../../../redux/actions/products.actions";

const EditDeleteProducts = ({ products }) => {
    
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        // confirmación de borrar
        dispatch(productDelete(e.target.value))
    }

    const handleEdit = (e) => {
        dispatch(getProductsDetails(e.target.value))
        // y se abre el modal
    }

    return (
        <div>
            { 
                products?.map(x => {
                   return (
                        <div>
                            <p>{x.name}</p>
                            <button value={x._id} onClick={handleEdit}>Editar</button>
                            <button value={x._id} onClick={handleDelete}>Elminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditDeleteProducts;