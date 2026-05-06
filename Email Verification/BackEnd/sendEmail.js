const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "smpt.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MY_EMAIL,
    to: email,
    test: message,
  });
};

module.exports = sendEmail;