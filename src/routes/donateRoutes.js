const express = require('express');
const { donateRoutes } = require('../controllers/donateController');
const router = express.Router();

router.post('/submit-donation', donateRoutes);

module.exports = router;
