const { addUser } = require('../Controller/userController')

const router = require('express').Router()


router.post('/registeruser',addUser)   


module.exports = router