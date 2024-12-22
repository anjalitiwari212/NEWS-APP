const {validateNews,newsModel} = require('../models/news-model')

module.exports.createNews = async (req,res)=>{
    try{
    const {name,role} = req.user
    if(role == 0 ) return res.status(401).send("You do not have permission")

    const {headline,content,category} = req.body
    const createdAt = new Date()

    const error = validateNews({headline,content,author:name,createdAt,category})
    if(error) return res.status(400).send(error)

    const news =  await newsModel.create({headline,content,author:name,createdAt,category})
    res.status(201).send(news)
}
  catch(err){
    console.error("news-controller",err.message)
    res.status(500).send(err)
}   
}
