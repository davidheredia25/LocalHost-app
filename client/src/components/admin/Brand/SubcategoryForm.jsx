import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBrand, setBrandSubcategories } from "../../../redux/actions/brand.actions"

const SubcategoryForm = () => {

    const dispatch = useDispatch();

    const [object, setObject] = useState({
        category: "",
        subcategories: []
    });
    const [input, setInput] = useState("");

    const { brandInfo, subcategories } = useSelector(state => state.brand);

    const handleEdit = (e) => {
        setObject({
            category: "",
            subcategories: []
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
            subcategories: brandInfo.categories.subcategories
        })
    }

    const handleX = (e) => {
        let filterSub = brandInfo.categories.subcategories.filter(el => el !== e.target.value)
        setObject({
            ...object,
            subcategories: filterSub,
        })
    }

    const handleSelect = (e) => {
        if (!object.subcategories.includes(e.target.value)) {
            setObject({
                ...object,
                subcategories: [...object.subcategories, e.target.value]
            })
        }
    }

    const handleAdd = () => {
        setObject({
            ...object,
            subcategories: [...object.subcategories, input]
        })
    }

    const handleSave = () => {
        dispatch(setBrandSubcategories(object))
        dispatch(saveBrand(brandInfo))
    }

    return (
        <div>
            {
                brandInfo.categories.map(x => {
                    return (
                        <div>
                            <div>
                                <h3>{x.name}</h3>
                                <button value={x.name} onClick={handleEdit}>EDIT</button>
                            </div>
                            <select onChange={handleSelect}>
                                <option selected value="">-subcategorías-</option>
                                {
                                    subcategories.map(e => {
                                        return (
                                            <option value={e}>{e}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>
                                <input value={input} type="text" onChange={() => setInput(e.target.value)} />
                                <button onClick={handleAdd}>AGREGAR</button>
                            </div>
                            <div>
                                {
                                    x.subcategories.map(e => {
                                        return (
                                            <div>
                                                <span>{e}</span>
                                                <button value={e} onClick={handleX}>X</button>
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
