const express = require('express')
const router = express.Router()
const {createNews,getNews,getNewsByID} = require('../controllers/news-controller')
const {verifyRequest} = require('../middlewares/verifyRequest')
const upload = require('../utils/multerSetup')

// create news route

router.post("/", verifyRequest,upload.single('image'), createNews)
router.get('/',getNews)
router.get('/:id',getNewsByID)

module.exports = router