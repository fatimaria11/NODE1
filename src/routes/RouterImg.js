const express = require('express')
const router = express.Router()
const ImgController = require('../controllers/ImgController')

router.post('/', ImgController.ImgCreate)

module.exports = router