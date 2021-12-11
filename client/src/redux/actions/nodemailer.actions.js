import axios from "axios";


export const ENVIAR_MAIL = "ENVIAR_MAIL";

export const enviarMail = () => async (dispatch) => {
    const res = await axios.post("/user/nodemailer")
    return dispatch({
        type: ENVIAR_MAIL,
        payload: res.data
    })

}