const mongoose = require('mongoose')
const AutoIncrement = require("mongoose-sequence")(mongoose)
const propertySchema = new mongoose.Schema({
  propertyno: Number,
  propertyImages: {
    type: Array,

  },

  Title: {
    type: String,
  },
  Price: {
    type: String,
  },
  Type: {
    type: String,
  },
  city: {
    type: String
  },
  Purpose: {
    type: String,
  },
  DetailLocation: {
    type: String,
  },

  "Bedroom(s)": {
    type: String,
  },
  Area: {
    type: String,
  },
  "Bedroom(s)": {
    type: String,
  },
  kitchen: {
    type: String,
  },
  storeroom: {
    type: String,
  },

  Description: {
    type: String,
  },
  postedBy:{
      type:String,
   }

}, { strict: false })

propertySchema.plugin(AutoIncrement, { inc_field: 'propertyno' });
const properties = mongoose.model('Properties', propertySchema);
module.exports = properties;
