const express = require('express');
const State = require('../../controller/Controller3/Controller3')

const router = express.Router()

router.post('/create', State.createState)

module.exports = router;