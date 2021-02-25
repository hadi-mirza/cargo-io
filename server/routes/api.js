const express = require('express');
const router = express.Router();
const RequestCtrl = require('../controllers/RequestCtrl')
const usersCtrl = require('../controllers/users')

router.get('/view-all', RequestCtrl.allRequests)
router.get('/seed', RequestCtrl.seed)
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/request-pickup', RequestCtrl.addRequest);
router.get('/request-pickup/:id', RequestCtrl.show);

module.exports = router