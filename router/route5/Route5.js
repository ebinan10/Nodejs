const express = require('express')
const  Ward = require('../../controller/Controller5/Controller5')

const router= express.Router()

router.post('/create', Ward.CreateWard)

module.exports = router;