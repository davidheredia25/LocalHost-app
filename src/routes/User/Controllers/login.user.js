const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require('../../../models/User');
const { OAuth2Client } = require("google-auth-library");
const config = require("../../../config.js");
const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);
 

const loginGoogle = async (req, res) => {
  const { tokenId } = req.body;
  try {
    client
      .verifyIdToken({ idToken: tokenId, audience: config.GOOGLE_CLIENT_ID })
      .then((response) => {
        const { email_verified, email } = response.payload;
        if (email_verified) {
          User.findOne({ email }).exec(async (err, user) => {
              if (err) {
                return res.status(400).json({
                  error: "Something went wrong",
                });
              } else {
                // console.log('user loginGoogle', user);
                if (user) {
                  const { _id } = user;
                  const token = jwt.sign({ user: { _id: _id, email } }, "top_secret");
                  user.token = token;
                  await user.save();
                  return res.json(user);
                } else {
                  const { email, picture, name } = response.payload;
                  // console.log('email', email);
                  let contraseña = email + "top_secret";
                  let newUser = new User({
                    email: email,
                    password: contraseña,
                    fristName: name,
                    image: picture
                  });
                  await newUser.save();
                  // console.log('newUser loginGoogle: ', newUser);
                  const token = jwt.sign({ user: newUser }, "top_secret");
                  // console.log('newUser datos loginGoogle: ', newUser.email, newUser._id);
                  let find = await User.findById(newUser._id);
                  // console.log('find loginGoogle: ', find);
                  if (find !== null) return res.json(find);

                  return res.send('Hubo un problema');  

                }
              }
          });
        }
      })
      .catch((err) => console.log("ERROR googleLogin"));
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (req, res) => {
  // console.log("req postUser", req);
  try {
    // Obtener la data del usuario: name, email
    const { fristName, lastName, email } = req.body;
    // console.log('body postUser: ', fristName, lastName, email);
    // Verificar que el usuario no exista
    let verificacion = await verificacionEmail(email);
    // console.log('user postUser:', verificacion.user);

    if (verificacion.bool) {
      // Generar el código
      const code = uuidv4();
      //   Generar token
      const token = jwt.sign({ user: { email } }, "top_secret", {
        expiresIn: "1h",
      });
      verificacion.user.token = token;

      // Obtener un template
      const template = getTemplate(fristName, token);
      // console.log('template postUser: ', template);

      // Enviar el email
      await sendConfirmationMail(verificacion.user.email, template);
      await verificacion.user.save();

      res.json({
        message: "Se registro correctamente",
        user: req.user,
      });
    }
    res.send(verificacion.message)
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al registrar usuario",
    });
  }
};

const confirm = async (req, res) => {
  try {
    // Obtener el token
    const { token } = req.params;

    // Verificar la data
    const data = await getTokenData(token);
    if (data === null) {
      return res.json({
        success: false,
        msg: "Error al obtener data",
      });
    }

    const { user, code } = data;
    // Verificar existencia del usuario
    let usuario = await User.findOne({ email: user.email }) || null;

    if (usuario === null) {
      return res.json({
        success: false,
        msg: "Usuario no existe",
      });
    }

    // Actualizar usuario
    usuario.status = "VERIFIED";
    await usuario.save();

    // Redireccionar a la confirmación
    return res.json("bien");
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
    });
  }
};

const postLogin = async (req, res, next) => {
  console.log('req postLogin: ', req);
  try {
    passport.authenticate("login", async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error("error");
          return error;
        }
        req.login(user, { session: false }, async (err) => {
          try {
            if (err) return next(err);

            const body = { 
              _id: user._id, 
              email: user.email, 
              fristName: user.fristName, 
              lastName: user.lastName, 
              document: user.document, 
              telephone: user.telephone, 
              image: user.image, 
              floor: user.floor, 
              departament: user.departament, 
              direction: user.direction, 
              location: user.location, 
              city: user.city, 
              postalCode: user.postalCode, 
              dateOfBirth: user.dateOfBirth, 
              ticket: user.ticket 
            };
            const token = jwt.sign({ user: body }, "top_secret");
            return res.json({ token });
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  } catch (error) {
    console.log(error);
  }
};

const profileAuthenticate = (req, res, next) => {
  console.log('token profile', req.query.secret_token);
  console.log('req profile', req);
  res.json({
    message: "Dale que sos vos",
    user: req.user,
    token: req.query.secret_token
  });
};


module.exports = {
  postLogin,
  profileAuthenticate,
  postUser,
  loginGoogle,
  confirm
};