// pesquisar rotas: w3scool, mdn
//métodos de requisição

const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/LoginController')

router.post('/', LoginController.Login)

module.exports = router
