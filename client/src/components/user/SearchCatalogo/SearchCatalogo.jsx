import React, { useState } from "react";
import { getProducts } from "../../../redux/actions/products.actions";
import { useDispatch } from "react-redux";

const SearchCatalogo = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("")

    const handleFilter = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getProducts({name:input}))
        setInput("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    value={input}
                    onChange={handleFilter}
                    placeholder="Buscar..."
                />
                
                <button>🔎</button>

            </form >
        </div>
    )
}


export default SearchCatalogo;