const express = require('express');
const { donateRoutes } = require('../../src/controllers/donateController');
const router = express.Router();

// Correct route path: should start with '/'.
router.post('/submit-donation', donateRoutes);

module.exports = router;
