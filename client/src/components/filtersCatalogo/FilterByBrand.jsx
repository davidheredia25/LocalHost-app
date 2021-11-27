import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/actions/brand.actions";
import { setFilterBrand, filterProducts } from "../../redux/actions/filters.actions";


const filterBrand = () => {
    const dispatch = useDispatch();
    const {brand} = useSelector(state => state.brand)
    const {category, subcategory} = useSelector(state => state.filter)

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getBrands())
    },[dispatch])


    const handleClick = (e) => {
        dispatch(setFilterBrand(e.target.value))
        dispatch(filterBrand({category, subcategory, brand : e.target.value}))

    }

    return(
      
        <div>
        <button onClick={() => setOpen(!open)}>Brand</button>
        {
            open ? 
            <div>

                {brand && brand.map(x => {
                    return (
                        <button value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</button>
                    )
                })}
            </div>:
            null
        }
    </div>
    
    )
}

export default filterBrand;