import React from 'react';
import NavBarProfile from './NavBarProfile';
import style from './Styles/Favorites.module.scss';
import Card from '../Card/Card';

const Favorites = () => {

    const favorites = JSON.parse(localStorage.getItem('favorites')) 
   

    return (
        <div className={style.ctnSup}>
            <NavBarProfile />
            <div className={style.ctnDetail}>
                <h1 className={style.titlePrin}> Productos Favoritos</h1>
            </div>
            <div className={style.cardFav}> 
            {
                favorites?.length?
                favorites.map(x => {
                    return(
                     <Card className={style.Card} key={x._id} product={x} favorites={favorites}  />
                    )
                }) : <p>no tenes ninguno Pa</p>
            }
            </div>
        </div>
    )
}

export default Favorites;