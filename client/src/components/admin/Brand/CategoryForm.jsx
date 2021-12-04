import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewCategory } from "../../../redux/actions/brand.actions";
import ShowBrandInfo from "./ShowBrandInfo";
import style from "./CategoryForm.module.css";

const CategoryForm = () => {
    
    const dispatch = useDispatch();
    const { categories, subcategories, brandInfo } = useSelector(state => state.brand)

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
        let objectFound = brandInfo.categories.find(obj => obj.name === e.target.value)
        if (objectFound) {
            setCategoryObj({
                ...categoryObj,
                name: objectFound.name,
                subcategories: objectFound.subcategories
            })
        }
        else {
            setCategoryObj({
                ...categoryObj,
                name: e.target.value
            })
        }
    }
    const handleSelectSub = (e) => {
        setCategoryObj({
            ...categoryObj,
            subcategories: [...categoryObj.subcategories, e.target.value]
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(setNewCategory(categoryObj))
        setCategoryObj({
            name: "",
            subcategories: []
        })
        setInputSub("");
    }

    const handleDeleteCat = () => {
        setCategoryObj({
            ...categoryObj,
            name: "",
            subcategories: []
        })
    }

    const handleDeleteSub = (e) => {
        let filtered = categoryObj.subcategories.filter(sub => sub !== e.target.value)
        setCategoryObj({
            ...categoryObj,
            subcategories: filtered
        })
    }

    return (
        <div className={style.container}>
            <div className={style.form}>   
                <div>
                    <h3>Categoría:</h3>
                    {
                        categoryObj.name 
                            ?
                            <div className={style.categoryName}>
                                <h4>{categoryObj.name}</h4>
                                <button onClick={handleDeleteCat}>X</button>
                            </div>
                            :
                            <div>
                                <select onChange={handleSelectCat}>
                                    <option selected value="">-selecciona una categoría-</option>
                                    {
                                            categories?.map(x => {
                                                return <option value={x.name}>{x.name.toUpperCase()}</option>
                                            })                  
                                    }
                                </select>
                                <div>
                                    <input 
                                        value={inputCat} 
                                        type="text" 
                                        onChange={(e) => setInputCat(e.target.value)}
                                    />
                                    <button onClick={handleAddCat}>+</button>
                                </div>
                            </div>
                    }   
                </div>
                <div>
                    <div>
                        <h3>Subcategorías:</h3>
                        <select onChange={handleSelectSub}>
                            <option selected value="">-selecciona subcategorías-</option>
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
                            <button onClick={handleAddSub}>+</button>
                        </div>
                    </div>
                    <div>
                        {
                            categoryObj.subcategories.map(sub => {
                                return (
                                    <div>
                                        <p>{sub}</p>
                                        <button value={sub} onClick={handleDeleteSub}>X</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button onClick={handleSave}>GUARDAR</button>
            </div>
            <ShowBrandInfo />
        </div>
    )
}

export default CategoryForm;