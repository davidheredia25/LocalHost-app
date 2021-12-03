import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandName } from "../../../redux/actions/brand.actions";
import CategoryForm from "./CategoryForm";
import SubcategoryCreate from "./SubcategoryCreate";

const BrandCreate = () => {

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
                    </>
                    : null
            }
            <div>
                <span>{brandInfo.name}</span>
                {
                    brandInfo.categories.map(e => {
                        return (
                            <div>
                                <h5>{e.name}</h5>
                                {
                                    e.subcategories?.map(x => <p>{x}</p>)
                                }
                            </div>
                        )
                    })
                }
            </div>
         
        </div>
    )
}

export default BrandCreate;