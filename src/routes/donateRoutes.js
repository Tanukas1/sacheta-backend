const express = require('express');
const router = express.Router();
const {
  createDonation,
  getDonations,
  getDonationById
} = require('../controllers/donateController');

router.post('/submit-donation', createDonation);
router.get('/donation', getDonations);
router.get('/donations/:id', getDonationById);

module.exports = router;
