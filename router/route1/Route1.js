const express = require('express');
const LGA = require('../../controller/Controller1/Controller1')

const router = express.Router()

router.post('/create', LGA.createLga)

module.exports = router;