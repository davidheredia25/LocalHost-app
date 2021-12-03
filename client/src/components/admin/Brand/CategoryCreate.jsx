import React, { useState } from "react";
import style from "./Brand.module.css";

const CategoryCreate = () => {

    const [input, setInput] = useState("")
    
    const [categoryObj, setCategoryObj] = useState({
        name: "",
        subcategories: []
    })

    const handleAdd = () => {
        setCategoryObj({
            ...categoryObj,
            name: input
        })
    }

    const handleSelect = () => {
        /* setCategoryObj */
    }

    return (
        <div className={style.cf_container}>  
            <div>
                <h3>Seleccionar categorías:</h3>
                <select onChange={handleSelect}>
                    <option selected value="">-categorías-</option>
                    {
                            categories?.map(x => {
                                return <option value={x.name}>{x.name.toUpperCase()}</option>
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
                <button onClick={handleAdd}>AGREGAR</button>
            </div> 
        </div>
    )
}