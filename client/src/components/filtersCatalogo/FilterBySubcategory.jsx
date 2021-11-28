import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubcategories } from "../../redux/actions/brand.actions";
import { filterProducts, setFilterSubcategory } from "../../redux/actions/filters.actions";

const FilterBySubcategory = () => {
    
    const dispatch = useDispatch();
    const { subcategories } = useSelector(state => state.brand)
    const { brand, category } = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getSubcategories())
    }, [])

    const [open, setOpen] = useState(false);

    const handleClick = (e) =>{
        dispatch(setFilterSubcategory(e.target.value))
        dispatch(filterProducts({brand, category, subcategory: e.target.value}))
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