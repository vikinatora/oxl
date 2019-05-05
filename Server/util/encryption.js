<<<<<<< HEAD
<<<<<<< HEAD
const crypto = require('crypto');

module.exports = {
  generateSalt: () =>
    crypto.randomBytes(128).toString('base64'),
  generateHashedPassword: (salt, password) =>
    crypto.createHmac('sha256', salt).update(password).digest('hex')
=======
const crypto = require('crypto');

module.exports = {
  generateSalt: () =>
    crypto.randomBytes(128).toString('base64'),
  generateHashedPassword: (salt, password) =>
    crypto.createHmac('sha256', salt).update(password).digest('hex')
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const crypto = require('crypto');

module.exports = {
  generateSalt: () =>
    crypto.randomBytes(128).toString('base64'),
  generateHashedPassword: (salt, password) =>
    crypto.createHmac('sha256', salt).update(password).digest('hex')
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
};