import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setSection } from "../../redux/actions/admin.actions";
import style from "./Admin.module.css";
import { BsChevronDown } from 'react-icons/bs';

const AdminIndex = () => {

    const dispatch = useDispatch()

    const [button, setButton] = useState({
        product: false,
        brand: false
    })

    const handleClick = (e) => {
        setButton({
            [e.target.name]: !button[e.target.name]
        })
    }

    const onClick = (e) => {
        dispatch(setSection(e.target.value))
    }

    return (
        <div className={style.indexContainer}>
            <button className={style.btnNav} value="users" onClick={onClick}>Usuarios</button>
            <button  className={style.btnNav}  name="product" onClick={handleClick}>Productos <BsChevronDown  /></button>
            {
                button.product
                    ?
                    <div className={style.subsection}>
                        <button className={style.btnSub} onClick={onClick} value="productcreate">Crear</button>
                        <button className={style.btnSub} onClick={onClick} value="productedit">Editar/Eliminar</button>
                    </div>
                    :
                    null
            }
            <button className={style.btnNav} name="brand" onClick={handleClick}>Marcas <BsChevronDown /></button>
            {
                button.brand
                    ?
                    <div className={style.subsection}>
                        <button className={style.btnSub} onClick={onClick} value="brandcreate">Nueva</button>
                        <button className={style.btnSub} onClick={onClick} value="brandedit">Editar</button>
                    </div>
                    :
                    null
            }
        </div>
    )
}


export default AdminIndex;