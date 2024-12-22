const express = require('express')
const router = express.Router()
const {createNews} = require('../controllers/news-controller')
const {verifyRequest} = require('../middlewares/verifyRequest')
// create news route
router.post("/", verifyRequest, createNews)

module.exports = router