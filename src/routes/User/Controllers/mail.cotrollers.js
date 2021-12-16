const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;
const User = require("../../../models/User");

const sendConfirmationMail = async ( email, template ) => {
  console.log("body sendConfirmationMail: ", email, template);
  try {
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const sendConfirmationEmail = async (req, res) => {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "vsclothes2@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });
        const mailOptions = {
          from: "VSClothes <vsclothes2@gmail.com>",
          to: `${email}`,
          subject: "Usuario registrado exitosamente",
          html: `${template}`,
        };
        const result = await transporter.sendMail(mailOptions);
        console.log(result);
        res.status(200).json("Enviado");
      } catch (error) {
        console.log(error);
      }
    };
    sendConfirmationMail()
      .then((res) => {
        res.status(200).send("enviado");
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};
// --------------------------------------------------------

const getTemplate = (name, token) => {
  return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        <div id="email___content">
            // <img src="" alt="">
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
};
