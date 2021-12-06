import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewCategory } from "../../../redux/actions/brand.actions";
import ShowBrandInfo from "./ShowBrandInfo";
import style from "./Styles/CategoryForm.module.scss";

const CategoryForm = () => {

    const dispatch = useDispatch();
    const { categories, subcategories, brandInfo } = useSelector(state => state.brand)

    const [categoryObj, setCategoryObj] = useState({
        name: "",
        types: []
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
        let typesUpdated = [...categoryObj.types, inputSub]
        typesUpdated = [...new Set(typesUpdated)]
        setCategoryObj({
            ...categoryObj,
            types: typesUpdated
        })
        setInputSub("")
    }
    const handleSelectCat = (e) => {
        let objectFound = brandInfo.categories.find(obj => obj.name === e.target.value)
        if (objectFound) {
            setCategoryObj({
                ...categoryObj,
                name: objectFound.name,
                types: objectFound.types
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
        let typesUpdated = [...categoryObj.types, e.target.value]
        typesUpdated = [...new Set(typesUpdated)]
        setCategoryObj({
            ...categoryObj,
            types: typesUpdated
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(setNewCategory(categoryObj))
        setCategoryObj({
            name: "",
            types: []
        })
        setInputSub("");
    }

    const handleDeleteCat = () => {
        setCategoryObj({
            ...categoryObj,
            name: "",
            types: []
        })
    }

    const handleDeleteSub = (e) => {
        let filtered = categoryObj.types.filter(sub => sub !== e.target.value)
        setCategoryObj({
            ...categoryObj,
            types: filtered
        })
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div>
                    <p className={style.title}>Categoría</p>
                    {
                        categoryObj.name
                            ?
                            <div className={style.categoryName}>
                                <p>{categoryObj.name.charAt(0).toUpperCase() + categoryObj.name.slice(1)} <button className={style.btnX} onClick={handleDeleteCat}>X</button></p>

                            </div>
                            :
                            <div>
                                <select className={style.selectInput} onChange={handleSelectCat}>
                                    <option selected value="">-Selecciona una categoría-</option>
                                    {
                                        categories?.map(x => {
                                            return <option value={x.name}>{x.name.charAt(0).toUpperCase() + x.name.slice(1)}</option>
                                        })
                                    }
                                </select>
                                <div >
                                    <input
                                        className={style.ctnInput}
                                        value={inputCat}
                                        type="text"
                                        onChange={(e) => setInputCat(e.target.value)}
                                    />
                                    <button className={style.btnMas} onClick={handleAddCat}>+</button>
                                </div>
                            </div>
                    }
                </div>
                <div>
                    <div>
                        <p className={style.title}> Subcategorías</p>
                        <select className={style.selectInput} onChange={handleSelectSub}>
                            <option selected value="">-Selecciona subcategorías-</option>
                            {
                                subcategories?.map(e => {
                                    return (
                                        <option value={e}>{e.charAt(0).toUpperCase() + e.slice(1)}</option>
                                    )
                                })
                            }
                        </select>
                        <div>
                            <input
                                className={style.ctnInput}
                                value={inputSub}
                                type="text"
                                onChange={(e) => setInputSub(e.target.value)}
                            />
                            <button className={style.btnMas} onClick={handleAddSub}>+</button>
                        </div>
                    </div>
                    <div>
                        {
                            categoryObj.types.map(sub => {
                                return (
                                    <div>
                                        <p>{sub.charAt(0).toUpperCase() + sub.slice(1)} <button className={style.btnX} value={sub} onClick={handleDeleteSub}>X</button></p>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className={style.btn} onClick={handleSave}>GUARDAR</button>
            </div>
            <ShowBrandInfo />
        </div>
    )
}

export default CategoryForm;