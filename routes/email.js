const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: 'hosein.abedi2000@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

router.get('/gmail', (req, res) => {
    try{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({"message": "Email sent successfully"});
    }catch(e){
        res.status(500).json({"message": "Error sending email"});
    }
});

module.exports = router;