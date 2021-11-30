import React from 'react';
import NavBarProfile from './NavBarProfile';
import style from './Styles/Favorites.module.scss';

const Favorites = () => {
    return (
        <div className={style.ctnSup}>
            <NavBarProfile />
            <div className={style.ctnDetail}>
                <h1 className={style.titlePrin}> Productos Favoritos</h1>
            </div>
        </div>
    )
}

export default Favorites;