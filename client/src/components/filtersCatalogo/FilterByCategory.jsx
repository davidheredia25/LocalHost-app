import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterByCategory = () => {
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    
    const { categories } = useSelector(state => state.brand)
    const { brand, subcategory } = useSelector(state => state.filters)

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.value))
        dispatch(filterProducts({ brand, category: e.target.value, subcategory }))
    }

    return (
        <div>
            <button onClick={() => setOpen(!open)}>Category</button>
            {
                open
                    ?
                    <div>
                        {
                            categories.map(x => {
                                return (
                                    <button value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</button>
                                )
                            })
                        }
                    </div> 
                    : null
            }
        </div>
    )
}

export default FilterByCategory;