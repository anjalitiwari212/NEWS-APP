const mongoose = require('mongoose');
const Joi = require('joi');

// Define the schema for the News model
const newsSchema = new mongoose.Schema({
  headline: {type: String,required: true},
  content: {type: String,required: true},
  author: {type: String,required: true},
  createdAt: {type: Date,default: Date.now},
  category: {type: String,required: true}
});

function validateNews(data){
    const schema = Joi.object({
        headline: Joi.string().required(),
        content: Joi.string().required(),
        author: Joi.string().required(),
        createdAt: Joi.date().default(()=>new Date()),
        category: Joi.string().required()
      });
     const {error} =  schema.validate(data)
     return error?.message
}

// Create a model using the schema
const newsModel = mongoose.model('New', newsSchema);

module.exports = {validateNews,newsModel};
