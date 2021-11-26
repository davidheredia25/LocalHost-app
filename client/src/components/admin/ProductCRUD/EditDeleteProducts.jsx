import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts,  } from "../../../redux/actions/Crud.actions";


const EditDeleteProducts = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const {products} = useSelector(state => state.crud)


    const handleDelete = () => {

    }

    const handleEdit = () => {

    }

    return (
        <div>
            { 
                products?.map(e => {
                   return (
                        <div>
                            <p>{e.name}</p>
                            <button>Editar</button>
                            <button>Elminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditDeleteProducts;