const express = require('express')
const  Controller = require('../../controller/Controller5/Controller5')

const router= express.Router()

router.post('/create', Controller.CreateController)

module.exports = router;