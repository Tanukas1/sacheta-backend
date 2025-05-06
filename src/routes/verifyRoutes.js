const express = require('express');
const { verifyDonationController } = require('../controllers/verifyDonationController');
const router = express.Router();
// const upload = require('../multer/upload');

router.post('/verify-donation', verifyDonationController);

// router.post("/verify", verify.single("image"), (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded or invalid file type." });
//     }
  
//     res.status(200).json({
//       message: "File uploaded successfully",
//       filePath: `/uploads/${req.file.filename}`,
//     });
//   });

module.exports = router;
