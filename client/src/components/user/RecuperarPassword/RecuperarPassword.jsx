import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {forgotPassword} from "../../../redux/actions/login.actions"


const RecuperarPassword = () => {

    const { user } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        password: "",
        passwordDos: ""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(forgotPassword(input))
    }

    return (
        <div class="container p-5">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-5 col-lg-5">
                <div class="card">
                    <div class="card-header text-center">
                        <h2>Formulario de recuperación de contraseña</h2>
                    </div>
                    <div class="card-body">
                        <form action="/user/nodemailer" method="POST">
                            <div class="form-group">
                                <input type="text" 
                                name="password" 
                                class="form-control" 
                                placeholder="Ingrese su contraseña"
                                onChange={handleChange}
                                autofocus />
                            </div>
                            <div class="form-group">
                                <input type="text" 
                                name="passwordDos" 
                                class="form-control" 
                                placeholder="Ingrese otra vez su contraseña"
                                onChange={handleChange}
                                />
                            </div>
                            <button class="btn btn-primary btn-block" onClick={handleSubmit} > Enviar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RecuperarPassword;