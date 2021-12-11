import axios from "axios";

export const enviarMail = async (email) => {
    try {
        await axios.post("/user/nodemailer", { email })
    }
    catch (err) {
        console.log(err)
    }
}