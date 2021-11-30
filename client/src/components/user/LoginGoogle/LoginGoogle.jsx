import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom'
import { loginGoogle } from '../../../redux/actions/login.actions'
import { useDispatch } from 'react-redux';


const LoginGoogle = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const googleResponse = (response) => {
        const { tokenId } = response;
        dispatch(loginGoogle(tokenId))
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