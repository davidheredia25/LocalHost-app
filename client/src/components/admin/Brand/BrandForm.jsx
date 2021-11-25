import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBrandName, setExistentBrand } from "../../../redux/actions/brand.actions";

const BrandForm = ({ brands }) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // Al seleccionar una marca existente la seteo con sus categorías y subcategorías preexistentes
    const handleSelect = (e) => {
        dispatch(setExistentBrand(e.target.value));
    }

    // El input sólo setea brandInfo.name ""
    const handleClick = () => {
        dispatch(setBrandName(input));
        setInput("");
    }

    return (
        <div>
            <div>
                <h3>Añadir Marca:</h3>
                <input name="brand" value={input} type="text" onChange={handleChange} />
                <button onClick={handleClick}>SET</button>
            </div>
            <div>
                <h3>Editar Marca:</h3>
                <select onChange={handleSelect}>
                    <option selected value="">-selecciona una marca-</option>
                    {
                        brands?.lenght?.map(x => {
                            return <option value={x.name}>{x.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default BrandForm;