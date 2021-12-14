import axios from "axios";

export const enviarMail = (email) => async () =>  {
    try {
        await axios.post("/user/nodemailer", { email })
    }
    catch (err) {
        console.log(err)
    }
}