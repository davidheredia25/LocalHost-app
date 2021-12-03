import React from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/NavBarProfile.module.scss';
import { useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';


const NavBarProfile = () => {

    const { user } = useSelector(state => state.login)
    return (

        <div className={style.ctnNavBar}>
            <div > <BsPersonCircle className={style.iconUser}  /> </div>

            <h1 className={style.name}>Hola! {user?.user?.fristName} {user?.user?.lastName}</h1>
            <ul className={style.ctnUl}>
                <Link className={style.link} to="/profile"><li><button className={style.btn}> Mis Datos</button> </li></Link>
                <Link className={style.link} to="/profile/misordenes"><li><button className={style.btn}> Mis ordenes</button> </li> </Link>
                <Link className={style.link} to="/profile/favoritos"><li><button className={style.btn}> Productos favoritos</button> </li> </Link>
            </ul>
        </div>
    )
}

export default NavBarProfile;