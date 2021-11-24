import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ShowBrands = ({...props}) => {
    
    const dispatch = useDispatch();
    const { brands } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    return (
        <div>
            {
                brands?.map(x => {
                    return <button name={x.name}>{x.name}</button>
                })
            }
        </div>
    )
}