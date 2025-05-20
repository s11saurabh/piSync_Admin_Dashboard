const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const errorController = require('../controllers/errorController');

router.get('/devices', deviceController.getAllDevices);
router.get('/devices/:id', deviceController.getDeviceById);
router.post('/devices/:id/sync', deviceController.syncDevice);

router.get('/errors', errorController.getAllErrors);
router.get('/errors/recent', errorController.getRecentErrors);
router.get('/devices/:id/errors', errorController.getDeviceErrors);

module.exports = router;