import React, { useState } from "react";
import { useSelector } from "react-redux";

const BrandForm = () => {

    const { brands } = useSelector(state => state.brand)
    const [input, setInput] = useState("")

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        set
    }

    return (
        <div>
            <div>
                <h3>Añadir Marca:</h3>
                <input name="brand" value={input} type="text" onChange={handleChange} />
                <button onClick={handleClick}></button>
            </div>
            <div>
                <h3>Editar Marca:</h3>
                <select>
                    <option selected value="">-selecciona una marca-</option>
                    {
                        brands?.map(x => {
                            return <option value={x.name}>{x.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}