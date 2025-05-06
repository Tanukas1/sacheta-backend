// controllers/adminauthController.js
const Admin = require('../models/adminModel');
const generateToken = require('../config/generateToken');

async function adminRegister(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    console.log("Registration attempt:", req.body);
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    const admin = await Admin.create({ email, password });
    const token = generateToken(admin._id);
    console.log("Admin registered successfully:", admin);

    res.status(201).json({
      message: "Admin registered successfully!",
      _id: admin._id,
      email: admin.email,
      token,
    });
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
}


module.exports = { adminRegister};
