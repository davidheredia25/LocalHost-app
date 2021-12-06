import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExistentBrand } from "../../../../redux/actions/brand.actions";
import CategoryForm from "../CategoryForm"
import style from '../Styles/BrandEdit.module.scss'

const BrandEdit = () => {

    const dispatch = useDispatch();

    const { brands } = useSelector(state => state.brand)

    const handleSelect = (e) => {
        e.preventDefault();
        dispatch(setExistentBrand(e.target.value));
    }

    return (
        <div>
            <div>
                <h1 className={style.titleSup}>Editar Marca</h1>
                <select className={style.input} onChange={handleSelect}>
                    <option selected value="">-Selecciona una marca-</option>
                    {
                        brands?.map(x => {
                            return <option value={x.name}>{x.name.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
            <CategoryForm />
        </div>
    )
}

export default BrandEdit;