const jobsheetController = require('../controllers/jobsheet');
const express = require('express');
const router = express.Router();

router.post('/one', jobsheetController.submitOne);
router.post('/many', jobsheetController.submitMany)

module.exports = router;