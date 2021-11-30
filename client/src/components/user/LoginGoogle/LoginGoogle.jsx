import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom'


const LoginGoogle = () => {

    const navigate = useNavigate();
    
    const googleResponse = (response) => {
        console.log(response);
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