import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {enviarMail} from "../../../redux/actions/nodemailer.actions"



const NodeMailer = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        email : "",
    })

    const handleSubmit = () => {
        dispatch(enviarMail(input))
    }

    return (
        <div>
            <form handleSubmit={handleSubmit}>
                <div>
                    <input type="text"
                    value={input.email}
                    name="email"
                    placeholder="Ingrese su email" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default NodeMailer;