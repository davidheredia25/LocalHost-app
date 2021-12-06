import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands, getCategories, getSubcategories } from "../../../../redux/actions/brand.actions";
import { productEdit } from "../../../../redux/actions/Crud.actions";
import style from '../Style/DivParaModal.module.scss'

const DivParaModal = ({ handleClose, product }) => {

    const [form, setForm] = useState({
        name: product.name,
        price: product.price,
        brand: product.brand.name,
        category: product.category.name,
        type: product.type.name,
        color: [],
        talle: [],
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSubcategories())
    }, [])

   /*  useEffect(() => {
           if (product) {
             setForm({
                name: product.name,
                price: product.price,
                brand: product.brand,
                category: product.category,
                type: product.type,
                color: product.color,
                talle: product.talle,
             })
           }
    }, [product]) */

    const { brands, categories, subcategories } = useSelector(state => state.brand)

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

    const closeModal = () => {
        handleClose()
    }

    const handleSaveEdition = () => {
        /*  dispatch(productEdit({ id: product._id, form })) 
            closeModal()
        */
        closeModal()
    }

    return (
        <div className={style.formu}>
            <h1 class={style.titleModal}>Editar datos</h1>
            <div className={style.ctnGrid}>
                <div className={style.InputForm} >
                    <label className={style.text}>Nombre</label >
                    <input className={style.input} name="name" type="text" value={form.name} onChange={handleInputChange} />
                </div>

                <div className={style.InputForm} >
                    <label className={style.text}>Precio</label >
                    <input className={style.input} name="price" type="number" value={form.price} onChange={handleInputChange} />
                </div>
            </div>


            <div className={style.ctnGrid}>
                <div className={style.InputForm} >
                    <p className={style.text}>Marca</p>
                    <p className={style.text1} >{form.brand.toUpperCase()}</p>
                    <select className={style.input1} onChange={handleSelectBrand}>
                        <option selected value={form.brand}>Seleccione marca</option>
                        {
                            brands?.map(x => {
                                return (
                                    <option value={x.name}>{x.name.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className={style.InputForm} >
                    <p className={style.text}>Categoría</p>
                    <p className={style.text1}>{form.category.toUpperCase()}</p>
                    <select className={style.input1} onChange={handleSelectCategory}>
                        <option selected value={form.category}>Seleccione categoría</option>
                        {
                            categories?.map(x => {
                                return (
                                    <option value={x.name}>{x.name.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className={style.InputForm}>
                    <p className={style.text}>Tipo</p>
                    <p className={style.text1}>{form.type.toUpperCase()}</p>
                    <select className={style.input1} onChange={handleSelectType}>
                        <option selected value={form.type}>seleccione tipo</option>
                        {
                            subcategories?.map(x => {
                                return (
                                    <option value={x}>{x.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

            <div className={style.ctnBtn}>
                <button className={style.btn} onClick={handleSaveEdition} >GUARDAR</button>
                <button className={style.btn} onClick={closeModal} >CANCELAR</button>
            </div>

        </div>
    )
}

export default DivParaModal;