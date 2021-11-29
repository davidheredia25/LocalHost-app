import React from 'react';
import shoes from './img/shoes.jpg';
import clothing from './img/clothing.jpg';
import ace from './img/ace.jpg';
import style from './ImgSection.module.scss';
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/products.actions";
import { setFilterCategory } from "../../../redux/actions/filters.actions";
import { useNavigate } from "react-router-dom";

const ImgSection = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.id))
        navigate("/catalogo")
    }

    return (

        <div className={style.ctn}>
            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img onClick={handleClick} id="zapatillas" className={style.imgSec} src={shoes} alt="Zpatillas" />
                </div>

                <p className={style.title}> ZAPATILLAS</p>
            </div>

            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img onClick={handleClick} id="indumentaria" className={style.imgSec} src={clothing} alt="Indumentaria" />
                </div>
                <p className={style.title}> INDUMENTARIA</p>
            </div>

            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img onClick={handleClick} id="accesorios" className={style.imgSec} src={ace} alt="Ascesorios" />
                </div>
                <p className={style.title}> ACCESORIOS</p>

            </div>

        </div>

    )
}

export default ImgSection;


