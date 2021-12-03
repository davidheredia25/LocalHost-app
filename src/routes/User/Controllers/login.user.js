const express = require('express');
const router = express.Router();


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
              console.log(email, name)
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


const postUser = async (req, res, next) => {
  res.json({ 
    message: "Se registro correctamente", 
    user: req.user 
  });
};



const postLogin = async (req, res, next) => {
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
          
          const body = { id: user._id, email: user.email, fristName: user.fristName, lastName: user.lastName, document: user.document, telephone: user.telephone, image: user.image, floor: user.floor, departament: user.departament, direction: user.direction, location: user.location, city: user.city, postalCode: user.postalCode, dateOfBirth: user.dateOfBirth, ticket: user.ticket  };
          const token = jwt.sign({ user: body }, "top_secret");
          return res.json({token});
          } catch (error) {
            console.log(error);
          }
        });
    } catch (error) {
      return next(error)
        // console.log(error)
        ;
      }
    })(req, res, next);
    } catch(error) {
      console.log(error);
    }
  };
  



  const profileAuthenticate = (req, res, next) => {
    console.log('token profile', req.query.secret_token);
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
    loginGoogle
  }