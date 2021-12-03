import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandName } from "../../../../redux/actions/brand.actions";
import CategoryCreate from "./CategoryCreate";

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
                        <CategoryCreate />
                    </>
                    : null
            }
            <div>
                <span>Nombre de la marca: {brandInfo.name}</span>
                <span>Categorías:</span>
                {
                    brandInfo.categories.map(e => {
                        return (
                            <div>
                                <h5>{e.name}</h5> {/*  se muestran las categorias de la marca. */}
                                {
                                    e.subcategories?.map(x => <p>{x}</p>) //se muestran las subcategorias de las categorias mapeadas anteriormente.
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