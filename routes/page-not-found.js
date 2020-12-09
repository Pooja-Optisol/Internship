// const path = require('path');
const express = require('express');
const router = express.Router();
const pageNotFoundController = require('../controllers/error');
router.use(pageNotFoundController.pageNotFound);
module.exports = router;