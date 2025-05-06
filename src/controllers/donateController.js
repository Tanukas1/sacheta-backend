const Donation = require('../models/donateModel');
const sendMail = require('../utils/mail');

async function donateRoutes(req, res) {
  const data = req.body;

  try {
    const donation = new Donation(data); 
    await donation.save(); 

    const htmlContent = `
      <h2>New Donation Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.mobileNo}</p>
      <p><strong>Citizenship:</strong> ${data.citizenship}</p>
      <p><strong>Donation Type:</strong> ${data.donationType}</p>
      <p><strong>Birthdate:</strong> ${data.birthdate || 'N/A'}</p>
      ${data.receiveCertificate ? `
        <p><strong>PAN Number:</strong> ${data.panNumber}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Pin Code:</strong> ${data.pinCode}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <p><strong>Preference State:</strong> ${data.preferenceState}</p>
      ` : ''}
    `;

    await sendMail(data.email, 'Thank You for Donating!', htmlContent);

    res.status(200).json({ message: 'Donation saved and email sent' });
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { donateRoutes };
