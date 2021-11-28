import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, filterProducts } from "../../redux/actions/filters.actions";

const AppliedFilters = ({ filters }) => {
    
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(resetFilter(e.target.value))
        dispatch(filterProducts({ ...filters, [e.target.value]: "" }))
    }

    return (
        <div>
        {
            filters.brand && 
                <div>
                    <p>{filters.brand}</p>
                    <button value="brand" onClick={handleClick}>x</button>
                </div>
        }
        {   
            filters.category && 
                <div>
                    <p>{filters.category}</p>
                    <button value="category" onClick={handleClick}>x</button>
                </div>
        }
        {
            filters.subcategory && 
                <div>
                    <p>{filters.subcategory}</p>
                    <button value="subcategory" onClick={handleClick}>x</button>
                </div>
        }
        </div>    
    )
}

export default AppliedFilters;