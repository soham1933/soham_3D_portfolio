import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// POST — Save contact and send emails
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({ name, email, message });
    await contact.save();

    // Setup mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Email to the sender
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest,\nSoham`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Contact saved and emails sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

// GET — View all contact entries
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch contacts" });
  }
});

export default router;
