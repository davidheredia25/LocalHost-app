import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enviarMail } from "../../../redux/actions/nodemailer.actions"



const NodeMailer = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("E-mail enviado, por favor revise su correo")
        dispatch(enviarMail(email))
        setEmail("")
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
                            <form handleSubmit={handleSubmit}>
                                <div>
                                    <input type="text"
                                        value={email}
                                        name="email"
                                        placeholder="Ingrese su email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type="submit" onClick={handleSubmit} >Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default NodeMailer;