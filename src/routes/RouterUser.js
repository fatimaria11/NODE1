const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const UsersValidation = require('../middlewere/UsersValidation')

router.get('/', UsersController.userList)
router.post('/',UsersValidation.UserCreateValidation, UsersController.userCreate)
router.put('/:id', UsersController.userUpdate)
router.delete('/:id', UsersController.userDelete)

module.exports = router