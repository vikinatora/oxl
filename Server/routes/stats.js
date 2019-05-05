<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express')
const Offer = require('../models/Offer');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Offer.find({}).then((offer) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        offers: offer,
        users: users
      })
    })
  })
})

module.exports = router
=======
const express = require('express')
const Offer = require('../models/Offer');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Offer.find({}).then((offer) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        offers: offer,
        users: users
      })
    })
  })
})

module.exports = router
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const express = require('express')
const Offer = require('../models/Offer');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Offer.find({}).then((offer) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        offers: offer,
        users: users
      })
    })
  })
})

module.exports = router
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
