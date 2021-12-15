const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const enviarMailTicket = async (req, res) => {
    
  const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;
  const { name, email, ticket }  = req.body;
  
  try {
   if(email){

    const HTML = `
        <h1> Hola ${name} </h1>
        <h3> Su pago se realizó exitosamente </h3>
        <h5> Le envíamos su facturación, muchas gracias por confiar en nosotros. </h5>
        <p> ${ticket} </p>
            `;

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
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
          to: email,
          subject: "Recuperación de contraseña",
          html: HTML,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log(result);
        res.status(200).json("Enviado")
      } catch (error) {
        console.log(error);
      }
    }

    sendMail()
      .then((res) => {
        res.status(200).send("enviado");
      })
      .catch((error) => console.log(error.message));
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    enviarMailTicket,
};