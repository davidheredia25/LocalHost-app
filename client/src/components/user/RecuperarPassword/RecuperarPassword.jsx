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
        <div>
            <form onSubmit={handleSubmit}>
               <div>
                   <label>Email</label>
                   <input type="text"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    />
               </div>
               <div>
                   <label>Password</label>
                   <input type="text"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    />
               </div>
               <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RecuperarPassword;