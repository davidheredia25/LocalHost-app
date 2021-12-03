import React from "react";
import { useDispatch } from "react-redux";
import { setExistentBrand } from "../../../redux/actions/brand.actions"

const BrandEdit = () => {

    const dispatch = useDispatch();

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
            
        </div>
    )
}