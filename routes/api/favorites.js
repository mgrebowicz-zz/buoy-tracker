var express = require('express');
var router = express.Router();
var favoritesCtrl = require('../../controllers/api/favorites');

/* POST /api/favorites */
router.post('/', favoritesCtrl.create);

module.exports = router;