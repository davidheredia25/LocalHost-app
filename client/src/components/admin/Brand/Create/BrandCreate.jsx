import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandName } from "../../../../redux/actions/brand.actions";
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
        <div>
            <div>
            {
                brandInfo.name !== "" 
                    ?
                    <div>
                        <h2>{brandInfo.name}</h2>
                        <button onClick={handleX}>X</button>
                    </div>
                    :
                    <div>
                        <h3>Nueva Marca:</h3>
                        <input name="brand" value={input} type="text" onChange={handleChange} />
                        <button onClick={handleAdd}>+</button>
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