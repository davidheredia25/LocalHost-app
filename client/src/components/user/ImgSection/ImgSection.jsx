import React from 'react';
import shoes from './img/shoes.jpg';
import clothing from './img/clothing.jpg';
import ace from './img/ace.jpg';
import style from './ImgSection.module.scss';


const ImgSection = () => {
    return (

        <div className={style.ctn}>
            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img className={style.imgSec} src={shoes} alt="Zpatillas" />
                </div>

                <p className={style.title}> ZAPATILLAS</p>
            </div>

            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img className={style.imgSec} src={clothing} alt="Indumentaria" />
                </div>
                <p className={style.title}> INDUMENTARIA</p>
            </div>

            <div className={style.ctnImg}>
                <div className={style.fondo}>
                    <img className={style.imgSec} src={ace} alt="Ascesorios" />
                </div>
                <p className={style.title}> ACCESORIOS</p>

            </div>

        </div>

    )
}

export default ImgSection;


