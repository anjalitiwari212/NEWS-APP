const {validateNews,newsModel} = require('../models/news-model')

module.exports.createNews =  async (req,res)=>{
    try{
    const {name,role} = req.user
    if(role == 0 ) return res.status(401).send("You do not have permission")

    const {headline,content,category,link} = req.body
    const image = "public/images/uploads/"+req.file.filename
    const createdAt = new Date()

    const error = validateNews({headline,content,author:name,createdAt,category,link,image})
    if(error) return res.status(400).send(error)
  
    const news =  await newsModel.create({headline,content,author:name,createdAt,category,link,image})
    res.status(201).send(news)
}
  catch(err){
    console.error("news-controller",err.message)
    res.status(500).send(err)
}   
}

module.exports.getNews =  async (req,res)=>{
 try{
  const news = await newsModel.find()
  res.send(news)
 } 
 catch(err){
  res.status(500).send(err)
 }
}

module.exports.getNewsByID =  async (req,res)=>{
  try{
    const {id} = req.params
    const news = await newsModel.findById(id)
    if(!news) return res.status(404).send("News not found")
    res.send(news)
   } 
   catch(err){
    res.status(500).send(err)
   }
}
 