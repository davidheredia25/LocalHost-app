import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands, getCategories, getSubcategories } from "../../../redux/actions/brand.actions";
import { productEdit } from "../../../redux/actions/Crud.actions";

const DivParaModal = () => {
    
    const [form, setForm] = useState({
        name: "",
        price: "",
        brand: "",
        category: "",
        type: "",
        color: [],
        size: [],
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSubcategories())
    }, [])

    const { brands, categories, subcategories } = useSelector(state => state.brand)
    const { product } = useSelector(state => state.products)

    const handleSelectBrand = (e) => {
        setForm({
            ...form,
            brand: e.target.value
        })
    }

    const handleSelectCategory = (e) => {
        setForm({
            ...form,
            category: e.target.value
        })
    }

    const handleSelectType = (e) => {
        setForm({
            ...form,
            type: e.target.value
        })
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveEdition = () => {
        /*  dispatch(productEdit({ id: product._id, form })) 
            closeModal()
        */
    }

    return (
        <div>
            <div>
                <p>Nombre:</p>
                <input name="name" type="text" value={form.name} onChange={handleInputChange} />
            </div>
            <div>
                <p>Precio:</p>
                <input name="price" type="number" value={form.price} onChange={handleInputChange} />
            </div>
            <div>
                <p>Marca:</p>
                <select onChange={handleSelectBrand}>
                    <option selected value="">selecciona marca</option>
                    {
                        brands?.map(x => {
                            return (
                                <option value={x.name}>{x.name.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <p>Categoría:</p>
                <select onChange={handleSelectCategory}>
                    <option selected value="">selecciona categoría</option>
                    {
                        categories?.map(x => {
                            return (
                                <option value={x.name}>{x.name.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <p>Tipo:</p>
                <select onChange={handleSelectType}>
                    <option selected value="">selecciona tipo</option>
                    {
                        subcategories?.map(x => {
                            return (
                                <option value={x.name}>{x.name.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
            </div>
            <button onClick={handleSaveEdition}>GUARDAR</button>
        </div>
    )
}

export default DivParaModal;