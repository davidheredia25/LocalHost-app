import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setSection } from "../../redux/actions/admin.actions";
import style from "./Admin.module.css";

const AdminIndex = () =>{

    const dispatch = useDispatch()

    const [button, setButton] = useState ({
        product:false,
        brand:false
    })

    const handleClick = (e) =>{
        setButton({
            [e.target.name]: !button[e.target.name]
        })
    }

    const onClick = (e) => {
        dispatch(setSection(e.target.value))
    }

    return (
        <div className={style.indexContainer}>
            <button value="users"onClick={onClick}>Users</button>
            <br/>
            <button name="product"  onClick={handleClick}>Products</button>
            {
                button.product
                ?
                <div className={style.subsection}>
                    <button onClick={onClick} value="productcreate">Crear</button>
                    <button onClick={onClick} value="productedit">Editar/Eliminar</button>
                </div>
                :
             null
            }
            <br/>
            <button  name="brand"  onClick={handleClick}>Brands</button>
            {
                button.brand
                ?
                <div className={style.subsection}>
                    <button onClick={onClick} value="brandcreate">Nueva</button>
                    <button onClick={onClick} value="brandedit">Editar</button>
                </div>
                :
             null
            }
        </div>
    )
}


export default AdminIndex;