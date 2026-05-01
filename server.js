const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// IMPORTANT: Render uses dynamic PORT
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// in-memory storage
let reservations = [];

// HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// CREATE RESERVATION
app.post("/reserve", (req, res) => {
  const { name, phone, date, time, guests, occasion, notes } = req.body;

  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const reservation = {
    id: Date.now(),
    name,
    phone,
    date,
    time,
    guests,
    occasion,
    notes,
    createdAt: new Date(),
  };

  reservations.push(reservation);

  console.log("NEW RESERVATION:", reservation);

  res.json({
    success: true,
    message: "Reservation saved",
    data: reservation,
  });
});

// VIEW RESERVATIONS
app.get("/reservations", (req, res) => {
  res.json({
    total: reservations.length,
    reservations,
  });
});

// CLEAR ALL (optional)
app.delete("/reservations", (req, res) => {
  reservations = [];
  res.json({ message: "Cleared" });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
