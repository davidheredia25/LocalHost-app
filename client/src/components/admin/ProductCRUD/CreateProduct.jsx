import React, {useEffect, useSelector} from "react";
import { useDispatch, useSelector } from "react-redux";
import {productCreate} from "../../../redux/actions/Crud.actions.js"


const CreateProduct = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        color: [],
        size: [],
    })
    
    // const {color, size} = useSelector(state => state.prodcuts)


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
            price: "",
            color: [],
            material: "",
            size: [],
            sexo: "",
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
                    <label>Categoria</label>
                    <input
                    name="category"
                    type="text"
                    placeholder="Marca.."
                    value={form.brand}
                    onChange={handleChange} />
                </div>

                <div>
                    <label>Marca</label>
                    <input
                    name="brand"
                    type="text"
                    placeholder="Marca.."
                    value={form.brand}
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
                    <label>Material</label>
                    <input
                    name="material"
                    type="text"
                    placeholder="Material.."
                    value={form.material}
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
                    <label>Sexo</label>
                    <input
                    name="sexo"
                    type="text"
                    placeholder="Sexo..."
                    value={form.sexo}
                    onChange={handleChange} />
                </div>

                <button onClick={handleClick}>Crear</button>                

            </form>
        </div>
    )

}
