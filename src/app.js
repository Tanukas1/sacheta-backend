const express = require('express');
const cors = require('cors');

const app = express();

// Middleware

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());


// Routes
const adminRoutes = require('./routes/adminRoutes');
const donateRoutes = require('./routes/donateRoutes');

app.use('/api/admin', adminRoutes);
app.use('/api/donation', donateRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running!" });
});

module.exports = app;
