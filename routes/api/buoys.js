const express = require('express');
const router = express.Router();
const buoysCtrl = require('../../controllers/api/buoys');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const BASE_URL = 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/';
const apikey = process.env.REACT_APP_PLANET_OS_KEY;

// GET /api/buoys/:id
router.get('/buoys/:id', buoysCtrl.show);


module.exports = router;