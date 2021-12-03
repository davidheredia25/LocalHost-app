import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom'
import { loginGoogle } from '../../../redux/actions/login.actions'
import { useDispatch, useSelector } from 'react-redux';


const LoginGoogle = () => {

    const navigate = useNavigate(); 
    const dispatch = useDispatch()

    const googleResponse = (response) => {
        const { tokenId } = response;
       dispatch(loginGoogle({tokenId}))
       console.log("tokennn", tokenId) //esto esta trayendo bien.
         navigate("/") 
    }
    const googleFailure = (err) => {
        console.log(err);
        console.log("Google Sing In was unsuccessful :(");
      };
    

    return (
        <div>
            <GoogleLogin
                clientId='679193945552-3660h90h8jf6f72hdb4hhplmdq3bn720.apps.googleusercontent.com'
                onSuccess={googleResponse}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}


export default LoginGoogle;