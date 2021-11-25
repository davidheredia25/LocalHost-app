import React, { useState } from "react";
import { useDispatch } from "react-redux";

const BrandForm = ({ brands }) => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        dispatch(setBrandName(input))
        setInput("")
    }

    const handleSelect = (e) => {
        dispatch(setBrandName(e.target.value))
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