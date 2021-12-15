import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enviarMail } from "../../../redux/actions/nodemailer.actions"



const NodeMailer = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        alert("Se ha enviado un mensaje a su correo, por favor revise")
        dispatch(enviarMail(email));
    }

    return (
        <div class="container p-5">
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-5 col-lg-5">
                    <div class="card">
                        <div class="card-header text-center">
                            <h2>Ingresar su e-mail</h2>
                        </div>
                        <div class="card-body">
                            <form handleSubmit={handleSubmit}>
                                <div>
                                    <input type="text"
                                        value={email}
                                        name="email"
                                        class="form-control"
                                        placeholder="Ingrese su email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button
                                    class="btn btn-primary btn-block"
                                    type="submit" onClick={handleSubmit} >Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NodeMailer;