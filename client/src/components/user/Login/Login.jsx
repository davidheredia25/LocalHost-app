import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import Google from "../LoginGoogle/LoginGoogle";
import { Button ,TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Imagen from './1.png';
import { loginLocal } from "../../../redux/actions/login.actions";
import {loginAuth} from "../../../redux/actions/login.actions";
import { Join } from "../../../redux/actions/cart.actions";
import { useNavigate } from "react-router-dom";

 
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emptyCart= JSON.parse(localStorage.getItem('cart'));
  const {user} = useSelector(state => state.login)
  let User;
  if(user?.email) User = user
  else User = user?.user;
  let userId = User?._id;
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({})

  let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  let validateContraseña = /^.{4,12}$/

  const validateLogin = () => {
    let errors = {};
    if (!validateEmail.test(input.email)) {
      errors.email = "Email requerido";
    }
    if (!validateContraseña.test(input.password)) {
      errors.contraseña = "Desde 4 a 14 digitos";
    }
    return errors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!error.email && !error.password) {
        dispatch(loginLocal(input))
        navigate("/")
    }
    else { alert("The form is required"); }
    setInput({
      email: "",
      password: "",
    })
  }

  

 

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validateLogin({
      ...input,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <div className={style.container}>
        <div className={style.test}>
        <div className={style.imagen}> 
           <img className={style.image} src={Imagen} alt='' /> 
        </div>
        <div className={style.contenedor}>
      <form className={style.form} onSubmit={handleSubmit}>
        <p className={style.titleLogin}>INGRESAR</p>
        <div className={style.username}>

         {/*} <input
            className={style.input}
            type="text"
            name='email'
            placeholder="Su usuario o email..."
            value={input.email}
            onChange={handleChange}
  /> */}
          <TextField id="standard-basic" type="text"
            name='email' value={input.email}
            onChange={handleChange}
             style={{'width': '250px'}} 
              label={<EmailIcon/> }
               variant="standard" />
          <p className={style.error}>{error.email}</p>
        </div>
        <div className={style.password}>
          
          {/*<input
            className={style.input}
            type="password"
            name='contraseña'
            placeholder="Su contraseña..."
            value={input.contraseña}
            onChange={handleChange}
          />*/}
          <TextField id="standard-basic"  type="password"
            name='password' 
            value={input.password}
            onChange={handleChange}
             style={{'width': '250px'}} 
             label={<VpnKeyIcon/>}variant="standard" />
          <p className={style.error}>{error.password}</p>
        </div>
        <div className={style.ctnGoogle}>
          <Button 
           onClick={handleSubmit}
          variant='contained' size="x-large" style={{'backgroundColor': '#000000', 'width': 200}}  type="submit" className={style.btn}>
            INGRESÁ
          </Button>
          <div className={style.google}>
          <Google  className={style.btnGoogle}/>
          </div>
        </div>
        <div className={style.link}>
         <p> No tenes cuenta? <Link to="/register">Registrate</Link></p>
         <p>  Olvidaste tu contraseña? <Link to="/forgot">Cambiala ahora</Link></p>
        </div>
  </form>
  </div>
  </div>
  </div>
  
  );
};


export default Login;