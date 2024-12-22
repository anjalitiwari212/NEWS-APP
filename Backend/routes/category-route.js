const express = require('express')
const router = express.Router()
const {createCategory} = require('../controllers/category-controller')
const {verifyRequest} = require('../middlewares/verifyRequest')

//Create category route
router.post('/', verifyRequest, createCategory)

module.exports = router