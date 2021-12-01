import React from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/NavBarProfile.module.scss';
import img from './Image.jpeg'


const NavBarProfile = () => {
    return (

        <div className={style.ctnNavBar}>
            <img className={style.imgUser} src={img} alt={img} />
            <h1 className={style.name}>Hola! David Heredia</h1>
            <ul className={style.ctnUl}>
                <Link className={style.link} to="/profile"><li><button className={style.btn}> Mis Datos</button> </li></Link>
                <Link className={style.link} to="/profile/misordenes"><li><button className={style.btn}> Mis ordenes</button> </li> </Link>
                <Link className={style.link} to="/profile/favoritos"><li><button className={style.btn}> Productos favoritos</button> </li> </Link>
            </ul>
        </div>
    )
}

export default NavBarProfile;