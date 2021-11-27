import React from 'react';
import style from './BrandsHome.module.scss'
import adidas from './Iconos/adidas.ico';
import nike from './Iconos/nike.ico';
import champion from './Iconos/champion.ico';
import converse from './Iconos/converse.ico';
import jordan from './Iconos/jordan.ico';
import newBalance from './Iconos/newBalance.ico';
import theNortFace from './Iconos/theNortFace.ico';
import vans from './Iconos/vans.ico';
import puma from './Iconos/puma.ico';



const BrandsHome = () => {
    return (
        <div className={style.ctnBrands}>
            <img className={style.imgIcon} src={adidas} />
              <img className={style.imgIcon} src={nike} />
            <img className={style.imgIcon} src={champion} />
            <img className={style.imgIcon} src={converse} />
            <img className={style.imgIcon} src={jordan} />
            <img className={style.imgIcon} src={newBalance} />
            <img className={style.imgIcon} src={theNortFace} />
            <img className={style.imgIcon} src={vans} />
            <img className={style.imgIcon} src={puma} />
        </div>
    )
}

export default BrandsHome;