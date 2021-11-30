const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require('../../../models/User');
const { OAuth2Client } = require("google-auth-library");
const config = require("../../../config.js");
const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);


const loginGoogle = async (req, res) => {
  const { tokenId } = req.body;
  client
  .verifyIdToken({ idToken: tokenId, audience: config.GOOGLE_CLIENT_ID })
  .then((response) => {
    const { email_verified, email, picture, name } = response.payload;
    if (email_verified) {
      User.findOne({ email }).exec(async (err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Something went wrong",
          });
        } else {
          if (user) {
            const { _id } = user;

            const token = jwt.sign({ user: { id: _id, email } }, "top_secret");

            //  const userFront = {
            //    id: _id,
            //    email: email,
            //    imagen: picture,
            //    nombre: name,
            //    token
            //  }

            user.token = token;
            await user.save();

            return res.json(user);
          } else {
            let contraseña = email + "top_secret";
            let newUser = new User({
              email,
              contraseña,
              nombre: name,
            });
            newUser.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: "Something went wrong...",
                });
              }
              const token = jwt.sign({ user: newUser }, "top_secret");
              const { _id, email } = newUser;
              res.json({
                id: _id,
                email: email,
                imagen: picture,
                nombre: name,
                token,
              });
            });
          }
        }
      });
    }
  })
  .catch((err) => console.log("ERROR googleLogin"));
};




const postLogin = async (req, res) => {
    passport.authenticate("login", async (err, user, info) => {
        try {
        if (err || !user) {
            const error = new Error("New Error");
          return error;
        }
        
        req.login(user, { session: false }, async (err) => {
          if (err) return err;
          
          const body = { id: user._id, email: user.email };
          const token = jwt.sign({ user: body }, "top_secret");
          
          return res.json(user);
        });
    } catch (error) {
        console.log(error);
      }
    })(req, res);
  };
  



  const profileAuthenticate = (req, res) => {
      res.json({
          message: "Dale que sos vos",
      user: req.user,
      token: req.query.secret_token,
    });
};

const postUser = async (req, res) => {
    res.json({ message: "Se registro correctamente", user: req.user });
  };



  


  module.exports = {
    postLogin,
    profileAuthenticate,
    postUser,
    loginGoogle
  }