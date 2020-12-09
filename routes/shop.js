// const path = require('path');
const express = require('express');
const router = express.Router();
// const rootDir = require('../utils/path');
// const adminData = require('./admin');
const shopDBController = require('../controllers/shop');
router.get('/', shopDBController.getIndex);
module.exports = router;