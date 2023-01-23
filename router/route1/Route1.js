const express = require('express');
const Controller = require('../../controller/Controller1/Controller1')

const router = express.Router()

router.post('/create', Controller.createLga)

module.exports = router;