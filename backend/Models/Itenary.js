const mongoose = require('mongoose')

const ItenarySchema = new mongoose.Schema({
  availability: {
    type: String,
    trim: true,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required:true
  },
  location:{
    type: String,
    required: true
  },
  description:{
    type:String,
    required: true
  }
},{timestamps:true})


module.exports = mongoose.model("Itenary",ItenarySchema)