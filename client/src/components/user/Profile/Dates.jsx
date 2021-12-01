import React from 'react';
import style from './Styles/Dates.module.scss'
import { BsPencilSquare } from "react-icons/bs";


const Dates = () => {
    
    return (
        <div className={style.ctnSup}>
            <h3 className={style.titlePrin}>Mis datos <BsPencilSquare className={style.icon} /></h3>
            <div className={style.ctnDetail} >
                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Nombre:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Apellido:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Email:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Documento:</p>
                        <p className={style.user}>David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Telefono:</p>
                        <p className={style.user}> </p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Fecha de nacimiento:</p>
                        <p className={style.user}> David</p>
                    </div>
                </div>

                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Direccion:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Piso:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Departamento:</p>
                        <p className={style.user}> David</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Estado/Provincia:</p>
                        <p className={style.user}>David</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Ciudad:</p>
                        <p className={style.user}>David </p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Codigo Postal:</p>
                        <p className={style.user}>David </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dates;