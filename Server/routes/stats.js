
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
