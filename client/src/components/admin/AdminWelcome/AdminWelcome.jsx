import React from "react";
import {useSelector} from "react-redux";
import style from "./AdminWelcome.module.css"

const AdminWelcome = () => {

    const {user} = useSelector(state => state.login)
    return (
        <div>
            <h1 className={style.h1}>Bienvenido {user?.fristName} a tu panel de administrador!</h1>
        </div>
    )
}

export default AdminWelcome;