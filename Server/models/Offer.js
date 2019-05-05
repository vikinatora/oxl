<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  name: {
    type:mongoose.Schema.Types.String,
    required:true,
  },

  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: mongoose.Schema.Types.Date,
    default: Date.now()
  },
  views:{
    type: mongoose.Schema.Types.Number,
    default: 0
  },
  purchased: {
    type:Boolean,
    default: false
  }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
=======
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  name: {
    type:mongoose.Schema.Types.String,
    required:true,
  },

  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: mongoose.Schema.Types.Date,
    default: Date.now
  },
  views:{
    type: mongoose.Schema.Types.Number,
    default: 0
  },
  purchased: {
    type:Boolean,
    default: false
  }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
=======
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  name: {
    type:mongoose.Schema.Types.String,
    required:true,
  },

  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: mongoose.Schema.Types.Date,
    default: Date.now
  },
  views:{
    type: mongoose.Schema.Types.Number,
    default: 0
  },
  purchased: {
    type:Boolean,
    default: false
  }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
