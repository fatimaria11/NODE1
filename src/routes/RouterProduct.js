const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.productList)
router.post('/', ProductController.productCreate)

module.exports = router