const express = require('express')
const authCheck = require('../middleware/auth-check');
const Offer = require('../models/Offer');
const Category = require('../models/Category');
const User = require('../models/User');


const router = new express.Router()

function validateOfferForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''
  
  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Name must be more than 3 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, async (req, res) => {
  const offer = req.body
  const validationResult = validateOfferForm(offer)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }
  let user = await User.findOne({username:offer.creator})
  offer.creator = user._id;
  let offerDb = await Offer.create(offer);
  await offerDb.save();
  user.offers.push(offerDb._id);
  await user.save();

  let category = await Category.findById(offer.category)
  category.offers.push(offerDb._id)
  await category.save();

  res.status(200).json({
    success: true,
    message: 'Offer added successfully.',
    offerDb
  })  
})

router.get('/newest/:count',(req, res) => {
  let count = +req.params.count;
  Offer.find()
    .populate('creator')
    .sort({dateCreated: -1})
    .limit(count)
    .then((offers) => {
      return res.status(200).json(offers)
    })
})

router.get('/hottest/:count',(req, res) => {
  let count = +req.params.count;
  Offer.find()
    .populate('creator')
    .sort({views: -1})
    .limit(count)
    .then((offers) => {
      return res.status(200).json(offers)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  Offer.findById(id)
    .populate('creator')
    .then((offer) => {
      if (!offer) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }
      offer.views = offer.views + 1;
      offer.save();

      res.status(200).json(offer)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  Furniture.find({creator: user})
    .then((furniture) => {
      return res.status(200).json(furniture)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Furniture.findById(id)
    .then((furniture) => {
      if (!furniture) {
        return res.status(200).json({
          success: false,
          message: 'Furniture does not exists!'
        })
      }

      if ((furniture.creator.toString() != user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Furniture.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Furniture deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, async(req, res) => {
  const id = req.params.id;
  const offer = req.body;

  let user = await User.findOne({username:offer.creator})
  offer.creator = user._id;

  if (!offer) {
    return res.status(404).json({
      success: false,
      message: 'Offer does not exists!'
    })
  }

  const validationResult = validateOfferForm(offer)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Offer.findByIdAndUpdate(id, offer)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Offer edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Furniture.findById(id)
    .then(furniture => {
      if (!furniture) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        make: furniture.make,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        image: furniture.image
      }

      if (furniture.material) {
        response.material = furniture.material
      }

      res.status(200).json(response)
    })
})

module.exports = router
