const VerifyDonation = require('../models/verifyDonationModel'); 

async function verifyDonationController(req, res) {
  const {
    fullName,
    email,
    mobileNo,
    donationAmount
  } = req.body;

  const screenshot = req.file ? req.file.filename : null;

  if (!fullName || !email || !mobileNo || !donationAmount || !screenshot) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const donation = await VerifyDonation.create({
      fullName,
      email,
      mobileNo,
      donationAmount,
      screenshot
    });

    res.status(201).json({
      message: 'Donation verification submitted successfully!',
      donation
    });
  } catch (error) {
    console.error("❌ Error saving verification:", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

module.exports = { verifyDonationController };
