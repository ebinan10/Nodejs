const express = require('express');
const Controller = require('../../controller/state/Controller')

const router = express.Router()

router.post('/create', Controller.createController)

module.exports = router;