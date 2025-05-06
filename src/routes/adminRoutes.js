const express = require('express');
const { adminRegister } = require('../../src/controllers/adminauthController'); 
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin Registration Route
router.post('/register', adminRegister);


module.exports = router; 
