import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {productCreate} from "../../../redux/actions/Crud.actions.js"
import { getBrands, getCategories, getSubCategories} from "../../../redux/actions/brand.actions.js";



const CreateProduct = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        subcategory: "",
        price: "",
        color: [],
        size: [],
    })
    
    // const {color, size} = useSelector(state => state.prodcuts)
    const {brands, categories, subcategories} = useSelector(state => state.brand)
    
    
    useEffect(() => {
        dispatch(getBrands())
         dispatch(getCategories())
         dispatch(getSubCategories())
    },[])
    
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = (e) => {
        dispatch(productCreate(form))
        setForm({
            name: "",
            brand: "",
            category: "",
            subcategory: "",
            price: "",
            color: [],
            size: [],
        })

    }


    const handleSelect = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div>
            <form>
                <div>
                    <label>Nombre</label>
                    <input
                    name="name"
                    type="text"
                    placeholder="Nombre.."
                    value={form.name}
                    onChange={handleChange} />
                </div>

                <div>
                    <label>Precio</label>
                    <input
                    name="price"
                    type="number"
                    placeholder="Precio.."
                    value={form.price}
                    onChange={handleChange} />
                </div>

                 <div>
                    <label>Color</label>
                    <input
                    name="color"
                    type="text"
                    placeholder="Precio.."
                    value={form.color}
                    onChange={handleChange} />
                </div>

                <div>
                    <label>Size</label>
                    <input
                    name="size"
                    type="text"
                    placeholder="Talle..."
                    value={form.size}
                    onChange={handleChange} />
                </div> 

                <div>
                    <select onChange={handleSelect}>
                       <option selected value="">Selecciona la Marca</option>
                        {brands?.map(e => {
                            return (
                                <option value={e.name}>{e.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <select>
                        <option selected value="">Selecciona la Categoria</option>
                        {
                            categories?.map(e => {
                                return(
                                    <option name="category" value={e.name}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <select>
                        <option selected value="">Selecciona la SubCategoria</option>
                        {
                            subcategories?.map(e => {
                                return(
                                    <option name="subcategory" value={e.name}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button onClick={handleClick}>Crear</button>                

            </form>
        </div>
    )

}

export default CreateProduct;