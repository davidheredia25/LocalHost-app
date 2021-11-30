import React from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/NavBarProfile.module.scss';
import img from './Image.jpeg'


const NavBarProfile = () => {
    return (

        <div className={style.ctnNavBar}>
            <img className={style.imgUser} src={img} alt={img} />
            <ul className={style.ctnUl}>
                <Link className={style.link} to="/profile"><li className={style.text}>Mis Datos</li></Link>
                <Link className={style.link} to="/profile/misordenes"><li className={style.text}>Mis Ordenes</li></Link>
                <Link className={style.link} to="/profile/favoritos"><li className={style.text}>Productos favoritos</li></Link>
            </ul>
        </div>
    )
}

export default NavBarProfile;