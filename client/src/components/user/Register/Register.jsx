import React, {useState}from "react";
import {useDispatch} from 'react-redux';
import { registerLocal } from "../../../redux/actions/login.actions";
import {Link} from "react-router-dom";
import { Button ,TextField } from '@mui/material';
import style from './Register.module.scss';
import Imagen from './1.png';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';



const Register = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        fristName : '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleOnChange = e => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerLocal(values))

    }
    
    return (
    <div className={style.container}>
        <div className={style.test}>
            <div className={style.check}>
                <img className={style.image} src={Imagen} alt='' />
            </div>
            <div className={style.contenedor}>
             <form onSubmit={handleSubmit}>
             <p className={style.titleLogin}>REGISTRO</p>
                <div>
                    <TextField 
                    variant="standard"
                    type="text"
                    name="fristName"
                    label="Nombre"
                    value={values.fristName}
                    onChange={handleOnChange} 
                    style={{'width': '250px'}} 
                    />
                </div>

                <div>
                    
                    <TextField 
                    variant="standard"
                    type="text"
                    name="lastName"
                    label="Apellido"
                    value={values.lastName}
                    onChange={handleOnChange}
                    style={{'width': '250px'}}  />
                </div>

                <div>
                    
                    <TextField
                    variant="standard"
                    type="text"
                    name="email"
                    label={<EmailIcon/>}
                    value={values.email}
                    onChange={handleOnChange}
                    style={{'width': '250px'}}  />
                    
                </div>

                <div className={style.text}>
                
                    <TextField 
                    variant="standard"
                    type="text"
                    name="password"
                    label={<VpnKeyIcon/>}
                    value={values.password}
                    onChange={handleOnChange}
                    style={{'width': '250px'}}  />
                </div>
                <div className={style.button}>
                <Button variant='contained' size="x-large" style={{'backgroundColor': '#000000', 'width': 200}} type="submit" > REGISTRARSE</Button>
                </div>
            </form>   

            <div>
                        Ya tenes cuenta?  <Link to="/login">Ingresá</Link>
                    </div>
        </div>
        </div>
  </div>
    )
}


export default Register;