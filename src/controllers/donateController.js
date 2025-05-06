// controllers/donateController.js

const Donation = require('../models/donateModel');

// POST: Create a new donation
async function createDonation(req, res) {
  const {
    fullName,
    email,
    mobileNo,
    alternateMobileNo,
    citizenship,
    donationType,
    birthdate,
    receiveCertificate,
    panNumber,
    address,
    pinCode,
    city,
    state,
    preferenceState
  } = req.body;

  if (!fullName || !email || !mobileNo || !citizenship || !donationType) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  try {
    const donation = await Donation.create({
      fullName,
      email,
      mobileNo,
      alternateMobileNo,
      citizenship,
      donationType,
      birthdate,
      receiveCertificate,
      panNumber,
      address,
      pinCode,
      city,
      state,
      preferenceState
    });

    res.status(201).json({
      message: 'Donation received successfully!',
      donation
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

//GET: fetch all donate

async function getDonations(req, res) {
  try {
    const donations = await Donation.find();
    res.json({
      message: 'Donations retrieved successfully!',
      donations
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donations', error });
  }
}

// GET: Fetch donation by ID
async function getDonationById(req, res) {
  const { id } = req.params;
  try {
    const donation = await Donation.findById(id);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found!' });
    }
    res.json({
      message: 'Donation retrieved successfully!',
      donation
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donation', error });
  }
}

// 👇 All functions exported together
module.exports = {
  createDonation,
  getDonations,
  getDonationById
};
