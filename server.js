// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ----- MongoDB Model -----
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// ----- API Routes -----

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          message,
          to_name: "Soham Bandbe",
          to_email: process.env.OWNER_EMAIL,
        },
      }),
    });

    if (!response.ok) {
      console.error("EmailJS error:", await response.text());
      return res.status(500).json({ success: false, message: "Email send failed" });
    }

    res.json({ success: true, message: "Message sent and saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET /api/contact
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

// ----- Serve React App -----
app.use(express.static(path.join(__dirname, "dist")));

// Use a safe catch-all route without extra parameters to avoid PathError
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ----- MongoDB Connection -----
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// ----- Start Server -----
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
