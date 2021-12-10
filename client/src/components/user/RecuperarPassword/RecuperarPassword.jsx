import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {forgotPassword} from "../../../redux/actions/login.actions"


const RecuperarPassword = () => {

    const { user } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: "",
        password: "",
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

    // const validatePassword = (e) => {

    // }    

    return (
        <div class="container p-5">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-5 col-lg-5">
                <div class="card">
                    <div class="card-header text-center">
                        <h1>Formulario de recuperación de contraseña</h1>
                    </div>
                    <div class="card-body">
                        <form action="/nodemailer" method="POST">
                            <div class="form-group">
                                <input type="text" 
                                name="name" 
                                class="form-control" 
                                placeholder="Ingrese su nombre"
                                autofocus />
                            </div>
                            <div class="form-group">
                                <input type="text" 
                                name="email" 
                                class="form-control" 
                                placeholder="Ingrese su e-mail" />
                            </div>
                            <button class="btn btn-primary btn-block"> Enviar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RecuperarPassword;