const passport = require("passport");
const githubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

githubStrategy.prototype.tokenParams = function(options) {
    return options;
  };
passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_URL_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  })
)
passport.serializeUser((user, done) => {
    // Podés guardar solo el ID o el perfil entero, según tu lógica
    done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
    // Normalmente recuperarías el usuario desde la base de datos usando el ID
    done(null, obj);
  });

const ruta = require("express").Router();
const controlador = require('./controlador');

ruta.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
ruta.get('/github/callback',  passport.authenticate('github', { failureRedirect: '/login' }), controlador.authCallbackGithub );

module.exports = ruta;