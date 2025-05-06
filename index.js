// index.js
const express = require('express');
require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

// Connect to DB and start server
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server failed to start", err);
  }
})();
