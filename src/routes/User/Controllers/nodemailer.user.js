
/* 
    Esta función lo único que hace es enviar un link al mail del user
    enviándole un link para entrar al form de recuperación de contraseña
*/

const nodemailer = async (res, req) => {
    
  const { CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, REDIRECT_URI } = process.env;

  try {
      //voy a recibir el email por body para verificar si existe user.
    const { email } = req.body; 
    // const contentHTML = `
    //             <h1>Formulario de nodemailer</h1>
    //             <ul>
    //                  </li>
    //                 <li>Email: ${email} </li>
    //                 <li>Password: ${password} </li>
    //             </ul>`;

    const link = "http://localhost:3000/user/login/password";

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
            user: "tincho20012017@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });
        const mailOptions = {
          from: "VSClothes <tincho20012017@gmail.com>",
          to: email,
          subject: "Recuperación de contraseña",
          text: link,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    sendMail()
      .then((res) => {
        res.status(200).send("enviado");
      })
      .catch((error) => console.log(error.message));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  nodemailer,
};
