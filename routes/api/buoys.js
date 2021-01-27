const express = require('express');
const router = express.Router();
const buoysCtrl = require('../../controllers/api/buoys');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/buoys/:id
router.get('/buoys/:id', buoysCtrl.show);

module.exports = router;