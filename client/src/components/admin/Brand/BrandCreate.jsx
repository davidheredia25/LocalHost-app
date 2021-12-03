import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandName } from "../../../redux/actions/brand.actions";
import CategoryForm from "./CategoryForm";
import SubcategoryForm from "./SubcategoryForm";

const BrandCreate = () => {

    useEffect(() => {
        dispatch()
    })

    const dispatch = useDispatch();
    const { brandInfo } = useSelector(state => state.brand);

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        dispatch(setBrandName(input));
        setInput("");
    }

    return (
        <div>
            <div>
                <h3>Añadir Marca:</h3>
                <input name="brand" value={input} type="text" onChange={handleChange} />
                <button onClick={handleClick}>GUARDAR</button>
            </div>
            {
                brandInfo.name ?
                    <>
                        <CategoryForm />
                        <SubcategoryForm />
                    </>
                    : null
            }
         
        </div>
    )
}

export default BrandCreate;