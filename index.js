const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Use the adminRoutes for '/api/admin'
app.use('/api/admin', adminRoutes);



// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
