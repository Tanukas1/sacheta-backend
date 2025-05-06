const mongoose = require("mongoose");

const verifyDonationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  donationAmount: { type: String, required: true },
  screenshot: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("VerifyDonation", verifyDonationSchema);
