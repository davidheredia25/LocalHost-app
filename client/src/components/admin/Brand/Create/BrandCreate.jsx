import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandName } from "../../../../redux/actions/brand.actions";
import style from '../Styles/BrandCreate.module.scss';
import CategoryForm from "../CategoryForm";

const BrandCreate = () => {

    const dispatch = useDispatch();
    const { brandInfo } = useSelector(state => state.brand);

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = () => {
        dispatch(setBrandName(input));
        setInput("");
    }

    const handleX = () => {
        dispatch(setBrandName(""));
    }

    return (
        <div  >
            <h1 className={style.titleSup}>Crear nueva marca</h1>
            <div className={style.ctnNameBrand}>
                {
                    brandInfo.name !== ""
                        ?
                        <div>
                            <p className={style.nameBrand}> Tu marca: {brandInfo.name.toUpperCase()}   <button className={style.btnX} onClick={handleX}>X</button></p>
                        </div>
                        :
                        <div>
                            <h3 className={style.titleInput}>Nueva Marca:</h3>
                            <input name="brand" value={input} type="text" onChange={handleChange} />
                            <button className={style.btnMas} onClick={handleAdd}>+</button>
                        </div>
                }
            </div>
            {
                brandInfo.name ?
                    <CategoryForm />
                    : null
            }
        </div>
    )
}

export default BrandCreate;