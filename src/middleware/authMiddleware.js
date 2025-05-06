const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const protectAdmin = async (req, res, next) => {
  let token;

  // Check if the token is in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get the token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get the admin from the token
      req.admin = await Admin.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protectAdmin };
