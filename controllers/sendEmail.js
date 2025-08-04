// sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

// If you're no longer using Mailjet, you can remove the Mailjet-related code.

const sendEmail = async (receiverEmail, fileID, senderName = "Encrypt Share") => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MJ_APIKEY_PUBLIC,   // same as your old env variable
        pass: process.env.MJ_APIKEY_PRIVATE   // Gmail app password
      },
    });

    const mailOptions = {
      from: `"${senderName}" <${process.env.MJ_APIKEY_PUBLIC}>`,
      to: receiverEmail,
      subject: "Here is your File ID!",
      text: `Dear user, here is your File ID: ${fileID}`,
      html: `<h3>Dear user,</h3><br/> 
             Download page: <a href='http://localhost:5173/download'>download page link</a><br />
             Here is your File ID: <strong>${fileID}</strong><br /><br />
             <b>Because of our security policy we don't share passwords. You need to ask the sender for it.</b>`
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, data: info };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

module.exports = sendEmail;
