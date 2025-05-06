const nodemailer = require('nodemailer');

const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '8c2a15001@smtp-brevo.com',  
      pass: 'KCHAb3Etp7NGB8sx',        
    },
  });

  const mailOptions = {
    from: '"Sacheta Foundation" <8c2a15001@smtp-brevo.com>',
    to: '"tanukashyap89@gmail.com"',
    subject: "Test Mail Shoot",
    text: "This is a test email sent via Node.js",
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (err) {
    console.error('Error sending email:', err);
  }
};

module.exports = sendMail;
