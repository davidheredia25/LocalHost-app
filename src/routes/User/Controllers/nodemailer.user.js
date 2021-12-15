const nodemailer = require("nodemailer");
const {google} = require("googleapis");

/* 
    Esta función lo único que hace es enviar un link al mail del user
    enviándole un link para entrar al form de recuperación de contraseña
*/

const enviarMail = async (req, res) => {
    
  const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;
  
  const {email}  = req.body;
  
  try {
      //voy a recibir el email por body para verificar si existe user.
   if(email){

    const HTML = `
        <h1> Hola </h1>
        <h4> Para recuperar su contraseña, por favor haga click en el siguiente link</h4>
        <h4><a href="http://localhost:3000/user/login/password"> Click Aquí </a></h4>
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
  enviarMail,
};