const express = require('express');
const router = express.Router();
const led = require('../controller/led.controller');


// routes
router.post('/on', led.onLed);
router.post('/off', led.offLed);

module.exports = router;
