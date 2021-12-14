import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBrand, createCategory, createSubcategory } from "../../../../redux/actions/brand.actions";
import style from '../Styles/BrandCreate.module.scss';

const BrandCreate = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        brand: "",
        logo: ""
    });

    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleCreateBrand = () => {
        dispatch(createBrand(form))
    }

    const handleCreateCategory = (e) => {
        dispatch(createCategory(e.target.value))
        setCategory("")
    }

    const handleCreateSubcategory = (e) => {
        dispatch(createSubcategory(e.target.value))
        setSubcategory("")
    }
    
    return (
        <div>
            <h1 className={style.titleSup}>Crear nueva marca</h1>
            <div className={style.ctnNameBrand}>
                <div>
                    <h3 className={style.titleInput}>Nombre:</h3>
                    <input name="brand" value={form.brand} type="text" onChange={handleChange} />
                    <h3 className={style.titleInput}>Logo:</h3>
                    <input name="logo" value={form.logo} type="text" onChange={handleChange} />
                </div>
                <div>
                    <h3>{form.brand}</h3>
                    {
                        form.logo &&
                            <img src={form.logo} alt="img not found" />
                    }
                    <button onClick={handleCreateBrand}>CREAR MARCA</button>
                </div>
            </div>
            <h1 className={style.titleSup}>Crear nueva categoría</h1>
            <div className={style.ctnNameBrand}>
                <div>
                    <h3 className={style.titleInput}>Nombre:</h3>
                    <input 
                        name="category" 
                        value={category} 
                        type="text" 
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </div>
                <div>
                    <button onClick={handleCreateCategory}>CREAR CATEGORÍA</button>
                </div>
            </div>
            <h1 className={style.titleSup}>Crear nueva subcategoría</h1>
            <div className={style.ctnNameBrand}>
                <div>
                    <h3 className={style.titleInput}>Nombre:</h3>
                    <input 
                        name="type" 
                        value={subcategory} 
                        type="text"
                        onChange={(e) => setSubcategory(e.target.value)} 
                    />
                </div>
                <div>
                    <button onClick={handleCreateSubcategory}>CREAR SUBCATEGORÍA</button>
                </div>
            </div>
        </div>
    )
}

export default BrandCreate;