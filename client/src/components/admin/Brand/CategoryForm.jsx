import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const CategoryForm = () => {

    const { categories } = useSelector(state => state.brand);
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleSelect = (e) => {
        dispatch(setBrandCategories(e.target.value))
        // y acá despacharía para que se seteen las subcategorías ya existentes en esa categoría
    }

    const handleClick = (e) => {
        dispatch(setBrandCategories(input))
    }

    return (
        <div>
            <div>
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
            </div>
        </div>
    )
}