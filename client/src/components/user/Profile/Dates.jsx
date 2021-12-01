import React from 'react';
import style from './Styles/Dates.module.scss'
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from 'react-redux';


const Dates = () => {

    const {user}=useSelector(state => state.user)

    
    return (
        <div className={style.ctnSup}>
            <h3 className={style.titlePrin}>Mis datos <BsPencilSquare className={style.icon} /></h3>
            <div className={style.ctnDetail} >
                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Nombre:</p>
                        <p className={style.user}> {user?.user?.fristName}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Apellido:</p>
                        <p className={style.user}> {user?.user?.lastName}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Email:</p>
                        <p className={style.user}> {user?.user?.email}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Documento:</p>
                        <p className={style.user}>{user?.user?.document}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Telefono:</p>
                        <p className={style.user}>{user?.user?.telephone} </p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Fecha de nacimiento:</p>
                        <p className={style.user}> {user?.user?.dateOfBirth}</p>
                    </div>
                </div>

                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Direccion:</p>
                        <p className={style.user}> {user?.user?.direction}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Piso:</p>
                        <p className={style.user}> {user?.user?.floor}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Departamento:</p>
                        <p className={style.user}> {user?.user?.department}</p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Estado/Provincia:</p>
                        <p className={style.user}>{user?.user?.location}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Ciudad:</p>
                        <p className={style.user}>{user?.user?.city} </p>
                    </div>

                    <div className={style.data}>
                        <p className={style.title1} >Codigo Postal:</p>
                        <p className={style.user}>{user?.user?.postalCode} </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dates;