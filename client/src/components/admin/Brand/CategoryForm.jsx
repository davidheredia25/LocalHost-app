import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryForm = () => {
    
    /*const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const { categories } = useSelector(state => state.brand);

    const handleSelect = (e) => {
        dispatch(setBrandCategories(e.target.value))
    }

    const [input, setInput] = useState("");
    const handleClick = (e) => {
        dispatch(setBrandCategories(input));
        setInput("");
    }*/

    return (
        <div>
            {/*<div>
                <h3>Seleccionar categorías:</h3>
                <select onChange={handleSelect}>
                    <option selected value="">-categorías-</option>
                    {
                        categories?.length?.map(x => {
                            return <option value={x.name}>{x.name}</option>
                        })                        
                    }
                </select>
            </div>
            <div>
                <h3>Nueva categoría:</h3>
                <input 
                    value={input} 
                    type="text" 
                    onChange={() => setInput(e.target.value)}
                />
                <button onClick={handleClick}>AGREGAR</button>
                </div> */}
        </div>
    )
}

export default CategoryForm;