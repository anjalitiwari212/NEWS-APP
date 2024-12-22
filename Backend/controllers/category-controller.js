const {validateCategory,categoryModel} = require('../models/category-model')

module.exports.createCategory = async (req, res) => {
   try{
   const {name} = req.body
   const {role} = req.user
   if(role == 0) return res.status(401).send("You do not have permission")
   
   const createdAt = new Date()
   
   const error = validateCategory({name,createdAt})
   if(error) return res.status(400).send(error)

   let category = await categoryModel.findOne({name})
   if(category) return res.status(409).send("Category already exists")
    
   category = await categoryModel.create({name,createdAt})
   res.status(201).send(category)
}
 catch(err){
    console.log("category-controller",err.message)
    res.status(500).send(err)
 }
}