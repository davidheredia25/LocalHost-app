import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom'
// import { loginGoogle } from '../../../redux/actions/login.actions'
import { useDispatch, useSelector } from 'react-redux';


const LoginGoogle = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const googleResponse = (response) => {
        const { tokenId } = response;
        // dispatch(loginGoogle(tokenId))
        navigate("/")
    }

    return (
        <div>
            <GoogleLogin
                clientId='679193945552-3660h90h8jf6f72hdb4hhplmdq3bn720.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={googleResponse}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}


export default LoginGoogle;