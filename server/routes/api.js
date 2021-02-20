const express = require('express');
const router = express.Router();
const RequestCtrl = require('../controllers/RequestCtrl')
const usersCtrl = require('../controllers/users')

router.get('/requestPickup', RequestCtrl.pickupDetails)
router.get('/seed', RequestCtrl.seed)
router.post('/signup', usersCtrl.signup);

module.exports = router