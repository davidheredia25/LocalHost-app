import React from 'react';
import shoes from './img/shoes.jpg';
import clothing from './img/clothing.jpg';
import ace from './img/ace.jpg';
import style from './ImgSection.module.scss';


const ImgSection = () => {
    return (

        <div className={style.ctn}>
            <div className={style.ctnImg}>
                <div className={style.ctnTitle}>
                    <p className={style.title}> ZAPATILLAS</p>
                </div>
                <img className={style.imgSec} src={shoes} alt="Zpatillas" />
            </div>

            <div className={style.ctnImg}>
                <div className={style.ctnTitle}>
                    <p className={style.title}> ACCESORIOS</p>
                </div>
                <img className={style.imgSec} src={ace} alt="Ascesorios" />
            </div>

            <div className={style.ctnImg}>
                <div className={style.ctnTitle}>
                    <p className={style.title}> INDUMENTARIA</p>
                </div>
                <img className={style.imgSec} src={clothing} alt="Indumentaria" />
            </div>

            

        </div>

    )
}

export default ImgSection;


