const express = require('express')
const  User = require('../../controller/Controller4/Controller4')

const router= express.Router()

router.post('/create', User.createUser)

router.get('/', User.getUser)

module.exports = router;