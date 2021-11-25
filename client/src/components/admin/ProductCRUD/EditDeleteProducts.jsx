import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/Crud.actions";


const EditDeleteProducts = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const {products} = useSelector(state => state.crud)

    return (
        <div>

        </div>
    )
}

export default EditDeleteProducts;