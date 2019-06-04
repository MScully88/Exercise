const express = require('express');
const router = express.Router();
const dataController = require('../models/controller');

/* GET products */
router.get('/', dataController);

module.exports = router;
  