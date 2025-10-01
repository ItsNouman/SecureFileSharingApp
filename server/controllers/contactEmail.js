// controllers/contactEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function sendContactEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MJ_APIKEY_PUBLIC,   // your Gmail
      pass: process.env.MJ_APIKEY_PRIVATE,  // your Gmail App Password
    },
  });

  const to = process.env.CONTACT_TO || process.env.MJ_APIKEY_PUBLIC; // default to your inbox

  const mailOptions = {
    from: `"${name || "Website Visitor"}" <${process.env.MJ_APIKEY_PUBLIC}>`,
    replyTo: email, // lets you reply directly from Gmail
    to,
    subject: "New message from SecureShare contact form",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New contact form message</h3>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendContactEmail;
