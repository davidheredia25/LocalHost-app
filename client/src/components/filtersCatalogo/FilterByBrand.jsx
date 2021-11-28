import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/actions/brand.actions";
import { setFilterBrand, filterProducts } from "../../redux/actions/filters.actions";

const FilterByBrand = () => {
    
    const dispatch = useDispatch();
    const { brands } = useSelector(state => state.brand)
    const { category, subcategory } = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getBrands())
    },[])
    
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterBrand(e.target.value))
        dispatch(filterProducts({ brand : e.target.value, category, subcategory }))
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