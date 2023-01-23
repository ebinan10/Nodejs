const express = require('express');
const PollingUnit = require('../../controller/Controller2/Controller2');
const PollingUnitDetail = require('../../controller/Controller2/Controller6');
const router = express.Router();

router.post('/create', PollingUnit.createPollingUnit);

router.post('/info', PollingUnitDetail.unitInfo);

router.post('/find', PollingUnit.getPollingUnit);

router.post('/result', PollingUnit.getLocalGovtResullt);

module.exports = router;