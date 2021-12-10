import axios from "axios";

export const ENVIAR_MAIL = "ENVIAR_MAIL";

export const enviarMail = (input) => async (dispatch) => {
  try {
      const res = await axios.post("/user/nodemailer", input);
      return dispatch({
      type: ENVIAR_MAIL,
      payload: res.data,
    });
  } catch (error) {
      console.log(error)
  }
};
