import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ShowCategories = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getCategories())
    })

    return (
        <div>
            <h3></h3>
            
        </div>
    )
}