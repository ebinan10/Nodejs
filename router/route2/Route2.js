const express = require('express');
const Controller1 = require('../../controller/Controller2/Controller2');
const Controller2 = require('../../controller/Controller2/Controller6');
const router = express.Router();

router.post('/create', Controller1.createPollingUnit);

router.post('/info', Controller2.unitInfo);

router.post('/find', Controller1.getPollingUnit);

router.post('/result', Controller1.getLocalGovtResullt);

module.exports = router;