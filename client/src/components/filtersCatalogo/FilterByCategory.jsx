import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/brand.actions";
import { setFilterCategory, filterProducts } from "../../redux/actions/filters.actions";


const FilterByCategory = () => {
    
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.brand)
    const { brand, subcategory } = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.value))
        dispatch(filterProducts({ brand, category: e.target.value, subcategory }))
    }

    return (
        <div>
            <button onClick={() => setOpen(!open)}>CATEGORIAS</button>
            {
                open ?
                <div>
                {
                    categories?.map(x => {
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

export default FilterByCategory;