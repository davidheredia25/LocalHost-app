import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBrand, setBrandSubcategories } from "../../../redux/actions/brand.actions"
import style from "./Brand.module.css";

const SubcategoryForm = () => {

   const dispatch = useDispatch();

    const [object, setObject] = useState({
        category: "",
        types: []
    });
    const [input, setInput] = useState("");

    const { brandInfo, subcategories } = useSelector(state => state.brand);

    const handleEdit = (e) => {
        setObject({
            category: "",
            types: []
        })
        let arrayCategories = brandInfo.categories.map(x => {
            return {
                ...x,
                editing: false
            }
        })
        arrayCategories = arrayCategories.map(x => {
            if (x.name === e.target.value) {
                x = { ...x, editing: true }
            }
        })
        setObject({
            ...object,
            category: e.target.value,
            types: brandInfo.categories.types
        })
    }

    const handleX = (e) => {
        let array = brandInfo.categories.map(x => {
            let filtered = x.types.filter(el => el !== e.target.value)
            return filtered;
        })
        setObject({
            ...object,
            types: array,
        })
    }

    const handleSelect = (e) => {
        if (!object.types.includes(e.target.value)) {
            setObject({
                ...object,
                types: [...object.types, e.target.value]
            })
        }
    }

    const handleAdd = () => {
        setObject({
            ...object,
            types: [...object.types, input]
        })
    }

    const handleSave = () => {
        dispatch(setBrandSubcategories(object))
        dispatch(saveBrand(brandInfo))
    }
    
    return (
        <div className={style.subcategoryContainer}>
            {/* <div>
                {object.subcategories}
            </div> */}
            {
                brandInfo.categories.map(x => {
                    return (
                        <div>
                            <div>
                                <h3>{x.name.toUpperCase()}</h3>
                                <button 
                                    value={x.name} 
                                    onClick={handleEdit}
                                >
                                    EDIT
                                </button>
                            </div>
                            <select onChange={handleSelect}>
                                <option selected value="">-subcategorías-</option>
                                
                                {
                                    subcategories?.map(e => {
                                        return (
                                            <option value={e}>{e}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>
                                <input 
                                    value={input} 
                                    type="text" 
                                    onChange={(e) => setInput(e.target.value)} 
                                />
                                <button onClick={handleAdd}>AGREGAR</button>
                            </div>
                            <div>
                                {
                                   x.types?.map(e => {
                                        return (
                                            <div>
                                                <span>{e}</span>
                                                <button 
                                                    value={e} 
                                                    onClick={handleX}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button onClick={handleSave}>GUARDAR</button>
                        </div>
                    )
                })
            } 
        </div>

    )
}

export default SubcategoryForm;


