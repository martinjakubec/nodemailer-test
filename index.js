require('dotenv').config();

console.log(process.env.GMAIL_PASSWORD);
const nodemailer = require('nodemailer');

const transporterOptions = {
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transporterOptions);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready');
  }
});

const mailOptions = {
  to: 'mail to',
  subject: 'Hello, this is a nodemailer test',
  text: 'Hello, the magnificent world of mailing systems!'
}


// only decomment the next line if you actually want to send the email, unless you want to have a full inbox of spam :') 
// transporter.sendMail(mailOptions);