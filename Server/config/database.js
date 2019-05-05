<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');

module.exports = config => {
  mongoose.connect(config.dbPath,{
      useNewUrlParser: true
    });
  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;
    User.seedAdminUser().then(() => {
      console.log('Database ready');
    }).catch((reason) => {
      console.log('Something went wrong');
      console.log(reason);
    });
  });
  db.on('error', reason => {
    console.log(reason);
  });
=======
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');

module.exports = config => {
  mongoose.connect(config.dbPath,{
      useNewUrlParser: true
    });
  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;
    User.seedAdminUser().then(() => {
      console.log('Database ready');
    }).catch((reason) => {
      console.log('Something went wrong');
      console.log(reason);
    });
  });
  db.on('error', reason => {
    console.log(reason);
  });
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');

module.exports = config => {
  mongoose.connect(config.dbPath,{
      useNewUrlParser: true
    });
  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;
    User.seedAdminUser().then(() => {
      console.log('Database ready');
    }).catch((reason) => {
      console.log('Something went wrong');
      console.log(reason);
    });
  });
  db.on('error', reason => {
    console.log(reason);
  });
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
};