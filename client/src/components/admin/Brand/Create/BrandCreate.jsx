import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBrand } from "../../../../redux/actions/brand.actions";
import style from '../Styles/BrandCreate.module.scss';

const BrandCreate = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        brand: "",
        logo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSave = () => {
        dispatch(createBrand(form))
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
                    <button onClick={handleSave}>GUARDAR</button>
                </div>
            </div>
        </div>
    )
}

export default BrandCreate;