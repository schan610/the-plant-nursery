const SENDGRID_USER = process.env.SENDGRID_USER;
const SENDGRID_PASSWORD = process.env.SENDGRID_PASSWORD;
const nodemailer = require("nodemailer");

// api sends any messages to business email using nodemailer and sendgrid as the smtp transport

export default async function (req, res) {
  // data = message and user data
  const data = req.body;

  // Create transport via SMTP transport with Sendgrid
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
      user: SENDGRID_USER,
      pass: SENDGRID_PASSWORD,
    },
  });

  await transporter.sendMail({
    ...data,
    to: "plantnursery.service@gmail.com",
    from: "plantnursery.service@gmail.com",
    html: `<div>
    <p>Sender name: ${data.name}</p>
    <p>Sender email: ${data.email}</p>
    <p>Sender message: ${data.text}</p>
    </div>`,
  });

  res.send();
}
