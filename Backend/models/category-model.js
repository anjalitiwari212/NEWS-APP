const mongoose = require('mongoose')
const Joi = require('joi')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createdAt: {type:Date, default: new Date()}
})

function validateCategory(data){
    const schema = Joi.object({
        name: Joi.string().required(),
        createdAt: Joi.date().default(()=>new Date())
    })
    const {error} =  schema.validate(data)
    return error?.message
}

const categoryModel = mongoose.model('Category', categorySchema)

module.exports = {categoryModel, validateCategory}