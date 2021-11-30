const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require('../../../models/User');


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
    postUser
  }