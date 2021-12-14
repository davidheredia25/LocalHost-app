const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;



const sendConfirmationEmail = async (req, res) => {
  
    try {

        const { email } = req.body;
    const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

 async function sendConfirmationMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "tincho20012017@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });
        const mailOptions = {
          from: "VSClothes <tincho20012017@gmail.com>",
          to: "lautarorangil@gmail.com",
          subject: "Recuperación de contraseña",
          text: "aguante messiiii",
        };

        const result = await transporter.sendConfirmationMail(mailOptions);
        console.log(result);
        res.status(200).json("Enviado")
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
}
    } catch (err) {
        console.log(err);
    }
};
// --------------------------------------------------------

const getTemplate = (name, token) => {
  return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${name}</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:4000/src/user/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
};

module.exports = {  
    sendConfirmationMail,
    getTemplate,
};
