import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {enviarMail} from "../../../redux/actions/nodemailer.actions"



const NodeMailer = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(enviarMail(email))
    }

    return (
        <div>
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
    )
}


export default NodeMailer;