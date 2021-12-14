const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;
const User = require("../../../models/User");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "tincho20012017@gmail.com",
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    
    // accessToken: accessToken,
  },
});

const sendConfirmationMail = async (email, template) => {
  console.log('body sendConfirmationMail: ', email, template);
  try {
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();
    const mailOptions = {
      from: "VSClothes <tincho20012017@gmail.com>",
      to: `${email}`,
      subject: "Recuperación de contraseña",
      html: `${template}`,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

const sendConfirmationEmail = async (req, res) => {
  try {
    //  const { email } = req.body;
    sendConfirmationMail()
      .then((res) => {
        res.status(200).send("enviado");
      })
      .catch((error) => console.log(error.message));
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
                href="http://localhost:4000/user/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
};

module.exports = {
  sendConfirmationMail,
  getTemplate,
  sendConfirmationEmail
};
