const express = require('express')
const app = express()
require('dotenv').config()
const DBConnect = require('./configs/mongooseConfig')
DBConnect()
const categoryRoute = require('./routes/category-route')
const userRoute = require('./routes/user-route')
const newsRoute = require('./routes/news-route')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// User related routes
app.use("/api/users",userRoute)

//category related routes
app.use("/api/categories", categoryRoute)

//news related routes
app.use("/api/news", newsRoute)

app.listen(process.env.PORT || process.env.port,()=>{
    console.log("Server is running on port ",process.env.PORT || process.env.port) 
})