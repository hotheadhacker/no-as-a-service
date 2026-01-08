const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const fs = require("fs");

const app = express();
app.use(cors());
app.set("trust proxy", true);
const PORT = process.env.PORT || 3000;

// Load roasts from JSON
const roasts = JSON.parse(fs.readFileSync("./roasts.json", "utf-8"));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers["cf-connecting-ip"] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: {
    error: "Too many requests, please try again later. (120 reqs/min/IP)",
  },
});

app.use(limiter);

// Random roast endpoint
app.get("/roast", (req, res) => {
  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  res.json({ roast });
});

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Roast-as-a-Service is running on port ${PORT}`);
});
