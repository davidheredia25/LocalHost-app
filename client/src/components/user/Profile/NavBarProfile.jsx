import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/NavBarProfile.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';
import { editDateUser } from '../../../redux/actions/login.actions';


const NavBarProfile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.login);
    let User;
    if (user.image) User = user
    else User = user.user;

    const [input, setInput] = useState({
        image: ''
    })

    const onChangeFile = (e) => {
        const file = e.target.files[0]
        // setInput({
        //     ...input,
        //     image: file
        // })
        console.log(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDateUser(User._id, input));
    }

    return (

        <div className={style.ctnNavBar}>
            {


                User.image !== "" ? (
                    <img className={style.iconUser} src={User.image} alt={User.fristName} />
                ) :


                    (
                        <BsPersonCircle className={style.iconUser} />
                    )
            }
            <div>
                <input
                    type='file'
                    name="image"
                    // value={input.image}
                    onChange={onChangeFile}
                    accept="image/*"
                />
                <button className={style.btn} onClick={handleSubmit}  >Aceptar</button>
            </div>
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