import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandSubcategories } from "../../../redux/actions/brand.actions";

const SubcategoryCreate = () => {
    
    const dispatch = useDispatch();
    const { subcategories } = useSelector(state => state.brand);
    const [input, setInput] = useState("");

    const handleSelect = (e) => {
       dispatch(setBrandSubcategories(e.target.value))
    }

    const handleAdd = () => {
        dispatch(setBrandSubcategories(input))
    }

    return (
        <div>
            <select onChange={handleSelect}>
                <option selected value="">-subcategorías-</option>
                {
                    subcategories?.map(e => {
                        return (
                            <option value={e}>{e}</option>
                        )
                    })
                }
            </select>
            <div>
                <input 
                    value={input} 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={handleAdd}>AGREGAR</button>
            </div>
        </div>
    )
}

export default SubcategoryCreate;