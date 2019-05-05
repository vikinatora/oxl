<<<<<<< HEAD
const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const encryption = require('../util/encryption');

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const salt = encryption.generateSalt();
  const hashedPass = encryption.generateHashedPassword(salt, password);
  User.create({username, hashedPass, salt}).then(() => {
    return done(null)
  })
})
=======
const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const encryption = require('../util/encryption');

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const salt = encryption.generateSalt();
  const phoneNumber = req.body['phoneNumber'];
  const hashedPass = encryption.generateHashedPassword(salt, password);
  User.create({username, phoneNumber, hashedPass, salt}).then(() => {
    return done(null)
  })
})
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
