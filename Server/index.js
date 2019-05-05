<<<<<<< HEAD
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
require('./config/database')(config);
const app = require('express')();
require('./config/express')(app);
=======
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
require('./config/database')(config);
const app = require('express')();
require('./config/express')(app);
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
app.listen(config.port, console.log("Listening on port " + config.port + "..."));