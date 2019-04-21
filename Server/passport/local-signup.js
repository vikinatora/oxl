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
