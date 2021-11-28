import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter, filterProducts } from "../../redux/actions/filters.actions";

const AppliedFilters = () => {

    const { brand, category, subcategory } = useSelector(state => state.filters)
    
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(resetFilter(e.target.value))
        dispatch(filterProducts({brand, category, subcategory}))
    }

    return (
        <div>
        {
            brand && 
                <div>
                    <p>{brand}</p>
                    <button value="brand" onClick={handleClick}>x</button>
                </div>
        }
        {   
            category && 
                <div>
                    <p>{category}</p>
                    <button value="category" onClick={handleClick}>x</button>
                </div>
        }
        {
            subcategory && 
                <div>
                    <p>{subcategory}</p>
                    <button value="subcategory" onClick={handleClick}>x</button>
                </div>
        }
        </div>    
    )
}

export default AppliedFilters;