const mongoose = require('mongoose')
const AutoIncrement = require("mongoose-sequence")(mongoose)
const propertySchema = new mongoose.Schema({
  propertyno: Number,
  images: {
    type: Array,

  },

  Title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  purpose: {
    type: String,
    enum: ['sale', 'rent'],
    required: true
  },
  location: {
    type: String,
    required: true
  },

  washrooms: {
    type: String,
    required: true
  },
  landArea: {
    type: String,
    required: true
  },
  bedrooms: {
    type: String,
    required: true
  },
  kitchen: {
    type: String,
    required: true
  },
  storeroom: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
   owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Users'
   }

})

propertySchema.plugin(AutoIncrement, { inc_field: 'propertyno' });
const properties = mongoose.model('Properties', propertySchema);
module.exports = properties;
