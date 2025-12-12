const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
   ticket:{
    type: String,
    require: true,
   },
   desc:{
    type: String,
    require: true,
   },
   date:{
    type: Date,
    default: Date.now
   }
  });

  const tickets = mongoose.model('tickets', ticketSchema)
  module.exports = tickets