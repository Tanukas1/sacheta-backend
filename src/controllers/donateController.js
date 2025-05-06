const Donation = require('../models/donateModel.js');

async function donateRoutes(req, res) {
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
    console.log("✅ Donation attempt:", req.body);

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

    console.log("✅ Donation submitted successfully:", donation);

    res.status(201).json({
      message: 'Donation received successfully!',
      donation
    });
  } catch (error) {
    console.error("❌ Error during donation submission:", error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
}

module.exports = { donateRoutes };
