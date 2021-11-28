import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterBrand } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";

const FilterByBrand = ({ brands }) => {
    
    const dispatch = useDispatch();
    const { category, subcategory } = useSelector(state => state.filters)
    
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterBrand(e.target.value))
        dispatch(getProducts({ brand: e.target.value, category, subcategory }))
    }

    return (
        <div>
            <button onClick={() => setOpen(!open)}>MARCAS</button>
            {
                open ? 
                    <div>
                    {
                        brands && brands.map(x => {
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

export default FilterByBrand;