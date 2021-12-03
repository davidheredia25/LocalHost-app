import React from 'react';
import Dates from './Dates';
import style from './Styles/Profile.module.scss'
import NavBarProfile from './NavBarProfile';


const Profile = () => {
    return (
        <div className={style.ctnSup}>

            <NavBarProfile />
            <Dates />
        </div>

    )
}

export default Profile;