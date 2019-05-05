<<<<<<< HEAD
<<<<<<< HEAD
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const offerRoutes = require('../routes/offer')
const statsRoutes = require('../routes/stats')
const categoryRoutes = require('../routes/category')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/offer', offerRoutes)
  app.use('/stats', statsRoutes)
  app.use('/category', categoryRoutes)

=======
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const offerRoutes = require('../routes/offer')
const statsRoutes = require('../routes/stats')
const categoryRoutes = require('../routes/category')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/offer', offerRoutes)
  app.use('/stats', statsRoutes)
  app.use('/category', categoryRoutes)

>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const offerRoutes = require('../routes/offer')
const statsRoutes = require('../routes/stats')
const categoryRoutes = require('../routes/category')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/offer', offerRoutes)
  app.use('/stats', statsRoutes)
  app.use('/category', categoryRoutes)

>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
}