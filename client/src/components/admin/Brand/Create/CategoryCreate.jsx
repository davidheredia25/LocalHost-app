import React, { useState } from "react";
import style from "../Brand.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNewCategory } from "../../../../redux/actions/brand.actions";

const CategoryCreate = () => {
    
    const dispatch = useDispatch();
    const { categories, subcategories } = useSelector(state => state.brand)

    const [categoryObj, setCategoryObj] = useState({
        name: "",
        subcategories: []
    })
        
    const [inputCat, setInputCat] = useState("")
    const [inputSub, setInputSub] = useState("")

    // ESTOS SETEAN UNA CATEGORIA EN EL ESTADO
    const handleAddCat = () => {
        setCategoryObj({
            ...categoryObj,
            name: inputCat
        })
    }
    const handleAddSub = () => {
        setCategoryObj({
            ...categoryObj,
            subcategories: [...categoryObj.subcategories, inputSub]
        })
    }
    const handleSelectCat = (e) => {
        setCategoryObj({
            ...categoryObj,
            name: e.target.value
        })
    }
    const handleSelectSub = (e) => {
        setCategoryObj({
            ...categoryObj,
            subcategories: [...categoryObj.subcategories, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setNewCategory(categoryObj))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.cf_container}>  
                <div>
                    <h3>Seleccionar categorías:</h3> {/* le agregamos categorías existentes a la nueva marca */}
                    <select onChange={handleSelectCat}>
                        <option selected value="">-categorías-</option>
                        {
                                categories?.map(x => {
                                    return <option value={x.name}>{x.name.toUpperCase()}</option>
                                })                  
                        }
                    </select>
                </div>
                <div>
                    <h3>Nueva categoría:</h3> {/* agregamos una categoria nueva si el admin lo desea */}
                    <input 
                        value={inputCat} 
                        type="text" 
                        onChange={(e) => setInputCat(e.target.value)}
                    />
                    <button onClick={handleAddCat}>AGREGAR</button>
                </div> 
                <div>
                    <h3>Seleccionar subcategorías:</h3>
                    <select onChange={handleSelectSub}>
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
                            value={inputSub} 
                            type="text" 
                            onChange={(e) => setInputSub(e.target.value)} 
                        />
                        <button onClick={handleAddSub}>AGREGAR</button>
                    </div>
                </div>
                <button type="submit">GUARDAR CATEGORÍA</button>
            </form>
        </div>
    )
}

export default CategoryCreate;