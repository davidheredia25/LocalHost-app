import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productDelete, productEdit } from "../../../redux/actions/Crud.actions";


const EditDeleteProducts = () => {

    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        color: [],
        size: [],
      
    })
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts({}))
    }, [dispatch])


    const {products} = useSelector(state => state.crud)


    const handleDelete = (id) => {
        dispatch(productDelete(id))
    }

    const handleEdit = (id) => {
        dispatch(productEdit({ id, }))
    }

    return (
        <div>
            { 
                products?.map(e => {
                   return (
                        <div>
                            <p>{e.name}</p>
                            <button onChange={() => handleEdit(x._id)}>Editar</button>
                            <button onChange={() => handleDelete(x._id)}>Elminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditDeleteProducts;