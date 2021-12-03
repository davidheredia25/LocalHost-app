import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setBrandCategories } from "../../../redux/actions/brand.actions";

const CategoryForm = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const { categories, existent, brandInfo } = useSelector(state => state.brand);

    const handleSelect = (e) => {
        dispatch(setBrandCategories(e.target.value))
    }

    const [input, setInput] = useState("");
    const handleClick = (e) => {
        dispatch(setBrandCategories(input));
        setInput("");
    }

    return (
        <div>
            <div>
                <h3>Seleccionar categorías:</h3>
                <select onChange={handleSelect}>
                    <option selected value="">-categorías-</option>
                    {   
                        existent ?
                            brandInfo.categories.map(x => {
                                return <option value={x.name}>{x.name}</option>
                            })
                            :
                            categories?.map(x => {
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
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleClick}>AGREGAR</button>
                </div> 
        </div>
    )
}

export default CategoryForm;