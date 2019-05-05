const express = require('express')
const Category = require('../models/Category')
const Offer = require('../models/Offer')
const authCheck = require('../middleware/auth-check')

const router = new express.Router()

router.post('/create', authCheck, (req, res) => {
  const categoryObj = req.body
      const validationResult = validateCategoryCreateForm(categoryObj)
      if (!validationResult.success) {
      return res.status(200).json({
          success: false,
          message: validationResult.message,
          errors: validationResult.errors
      })
      }

      Category
      .create(categoryObj)
      .then((createdCategory) => {
          res.status(200).json({
          success: true,
          message: 'Category added successfully.',
          data: createdCategory
          })
      })
      .catch((err) => {
          let message = 'Something went wrong :( Check the form for errors.'
          if (err.code === 11000) {
          message = 'Category with the given name already exists.'
          }
          return res.status(200).json({
          success: false,
          message: message
          })
      })
});

router.get('/all', (req, res) => {
  Category
    .find()
    .then(categories => {
      res.status(200).json(categories)
  })
})

router.get('/:name', async (req,res)=>{
  const name = req.params.name;
  try{
    let category = await Category.findOne({name});

    let offers = await Offer.find({category:category._id})
                          .sort([['dateCreated', -1]])
                          .populate('category')
                          .populate({
                            path: 'comments',
                            populate: { path: 'author' }
                          });
  
    return res.status(200).json(offers);
  }
  catch(err){
    return res.status(200).json({
      success: false,
      message: err
  })
  }
  
})

function validateCategoryCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Category name must be at least 3 symbols.'
  }

  if (payload.imageUrl.length < 14 || !(payload.imageUrl.startsWith('https://') || payload.imageUrl.startsWith('http://'))) {
    isFormValid = false
    errors.imageUrl = 'Category image URL must be at least 14 characters long and must be valid URL.'
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

module.exports = router
