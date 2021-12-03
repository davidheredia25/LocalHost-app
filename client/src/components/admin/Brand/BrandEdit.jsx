import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExistentBrand } from "../../../redux/actions/brand.actions";
import CategoryForm from "./CategoryForm";
import SubcategoryForm from "./SubcategoryForm";

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
                <h3>Editar Marca:</h3>
                <select onChange={handleSelect}>
                    <option selected value="">-selecciona una marca-</option>
                    {
                        brands?.map(x => {
                            return <option value={x.name}>{x.name.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
            <CategoryForm />
            <SubcategoryForm />
        </div>
    )
}

export default BrandEdit;