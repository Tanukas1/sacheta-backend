const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  alternateMobileNo: { type: String },
  citizenship: { type: String, required: true },
  donationType: { type: String, required: true },
  birthdate: { type: Date },
  receiveCertificate: { type: Boolean, default: false },
  panNumber: { type: String },
  address: { type: String },
  pinCode: { type: String },
  city: { type: String },
  state: { type: String },
  preferenceState: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", donationSchema);
