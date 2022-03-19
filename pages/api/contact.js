import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const emailPost = await transporter.sendMail({
      from: email,
      to: "omaar_5@hotmail.com",
      subject: `Contact Form Submission from ${name}`,
      html: `
          <h1>You have a new contact form submission</h1><br /><strong>Name: ${name}</strong><br />
          <strong>Email: ${email}</strong><br />
          <strong>Message: ${message}</strong><br />
          `,
    });

    console.log("Message Sent", emailPost.messageId);
  } catch (error) {
    console.log("🚀 ~ file: contact.js ~ line 27 ~ error", error);
  }

  res.status(200).json(req.body);
};
