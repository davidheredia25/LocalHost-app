
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const filterSubCategory = () =>{
    const dispatch = useDispatch();

    const {subcategories} = useSelector(state => state.brand)
    const [open, setOpen] = useState(false);
    const { brand, category } = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getSubCategories())
    }, [dispatch])


    const handleClick = (e) =>{
        dispatch(getSubCategories())
        dispatch(filterProducts({brand, category, subcategory : e.target.value}))

    }
    

    return (
           
        <div>
            <button onClick={() => setOpen(!open)}>SubCategory</button>
            {
                open ? 
                <div>

                    {subcategorias && subcategories.map(x => {
                        return (
                            <button value={x} onClick={handleClick}>{x.toUpperCase()}</button>
                        )
                    })}
                </div>:
                null
            }
        </div>
        
    )
    
}

export default filterSubCategory;