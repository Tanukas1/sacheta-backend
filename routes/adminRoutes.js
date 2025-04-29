const express = require('express');
const { adminRegister } = require('../controllers/adminauthController'); 
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin Registration Route
router.post('/register', adminRegister);

// Protected route example
router.get('/dashboard', protectAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router; // Exporting the router
