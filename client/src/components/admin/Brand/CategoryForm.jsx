import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryForm = () => {

    const dispatch = useDispatch();

    const { categories } = useSelector(state => state.brand);
    const [inputCat, setInputCat] = useState("");
    const [inputSubCat, setInputSubCat] = useState("")

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleSelect = (e) => {
        let selectedCategory = categories.filter(x => x.name === e.target.value)
        dispatch(setBrandCategories(e.target.value))
        dispatch(setBrandSubcategories(selectedCategory))
    }

    const handleClick = (e) => {
        dispatch(setBrandCategories({ name: input, subcategories: [] }))
        dispatch(setBrandSubcategory())
    }

    return (
        <div>
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
            <div>
                <div>
                    <h3>Seleccionar subcategorías:</h3>
                    <select onChange={handleSelect}>
                        <option selected value="">-categorías-</option>
                        {
                            subcategories?.length?.map(x => {
                                return <option value={x}>{x}</option>
                            })                        
                        }
                    </select>
                </div>
                <div>
                    <h3>Nueva subcategoría:</h3>
                    <input 
                        value={inputSC} 
                        type="text" 
                        onChange={() => setInput(e.target.value)}
                    />
                    <button onClick={handleClick}>AGREGAR</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryForm;