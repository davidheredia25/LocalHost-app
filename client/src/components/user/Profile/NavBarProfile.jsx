import React from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/NavBarProfile.module.scss';
import { useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';


const NavBarProfile = () => {
    const { user } = useSelector(state => state.login);
    let User;
    if (user.image) User = user
    else User = user.user;
    return (

        <div className={style.ctnNavBar}>
            {
                User.image !== "" ? (
                   <img className={style.iconUser} src={User.image} alt=''/>
                ) : 
                    (
                        <BsPersonCircle className={style.iconUser} />
                    )
            }

            <h1 className={style.name}>Hola! {User.fristName} {User.lastName}</h1>
            <ul className={style.ctnUl}>
                <Link className={style.link} to="/profile"><li><button className={style.btn}> Mis Datos</button> </li></Link>
                <Link className={style.link} to="/profile/misordenes"><li><button className={style.btn}> Mis ordenes</button> </li> </Link>
                <Link className={style.link} to="/profile/favoritos"><li><button className={style.btn}> Productos favoritos</button> </li> </Link>
            </ul>
        </div>
    )
}

export default NavBarProfile;