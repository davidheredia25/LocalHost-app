import React, {useState}from "react";
import {useDispatch} from 'react-redux';
import { registerLocal } from "../../../redux/actions/login.actions";
import {Link} from "react-router-dom"



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
    
    return (<div>
        <form onSubmit={handleSubmit}>

            <div>
                <label>Nombre</label>
                <input type="text"
                name="fristName"
                placeholder="Ingrese su Nombre"
                value={values.fristName}
                onChange={handleOnChange} />
            </div>

            <div>
                <label>Apellido</label>
                <input type="text"
                name="lastName"
                placeholder="Ingrese su Apellido"
                value={values.lastName}
                onChange={handleOnChange} />
            </div>

            <div>
                <label>Email</label>
                <input type="text"
                name="email"
                placeholder="Ingrese su Mail"
                value={values.email}
                onChange={handleOnChange} />
            </div>

            <div>
                <label>Contraseña</label>
                <input type="text"
                name="password"
                placeholder="Ingrese su password"
                value={values.password}
                onChange={handleOnChange} />
            </div>
            <button type="submit" > REGISTRARSE</button>
        </form>   

        <div>
                    Ya tenes cuenta?  <Link to="/login">Ingresá</Link>
                </div>
    </div>)
}


export default Register;