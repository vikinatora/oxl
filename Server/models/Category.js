<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Category already exists.']},
    imageUrl: {type:mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref:'Offer' }],
},{usePushEach:true})

let Category = mongoose.model('Category', categorySchema)

=======
const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Category already exists.']},
    imageUrl: {type:mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref:'Offer' }],
},{usePushEach:true})

let Category = mongoose.model('Category', categorySchema)

>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Category already exists.']},
    imageUrl: {type:mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref:'Offer' }],
},{usePushEach:true})

let Category = mongoose.model('Category', categorySchema)

>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
module.exports = Category