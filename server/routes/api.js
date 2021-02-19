const express = require('express');
const router = express.Router();
const RequestCtrl = require('../controllers/RequestCtrl')

router.get('/requestPickup', RequestCtrl.pickupDetails)
router.get('/seed', RequestCtrl.seed)

module.exports = router