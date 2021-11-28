import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products.actions";
import { setFilterSubcategory } from "../../redux/actions/filters.actions";

const FilterBySubcategory = ({ subcategories }) => {
    
    const dispatch = useDispatch();
    const { brand, category } = useSelector(state => state.filters)

    const [open, setOpen] = useState(false);

    const handleClick = (e) =>{
        dispatch(setFilterSubcategory(e.target.value))
        dispatch(getProducts({brand, category, subcategory: e.target.value}))
    }
    
    return ( 
        <div>
            <button onClick={() => setOpen(!open)}>TIPOS</button>
            {
                open ? 
                <div>
                {
                    subcategories && subcategories.map(x => {
                        return (
                            <button value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</button>
                        )
                    })
                }
                </div> : null
            }
        </div> 
    )
    
}

export default FilterBySubcategory;