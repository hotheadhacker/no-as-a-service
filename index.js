const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.use(cors());
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const languages = ['en', 'pt-br']

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers['cf-connecting-ip'] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const lang = req.query.lang

  // Empty reasons
  let reasons;

  // Verifies if the language is avaible, returning it
  if (lang && typeof lang === "string" && languages.includes(lang.toLowerCase())) {
    reasons = JSON.parse(fs.readFileSync(`./reasons-${lang.toLowerCase()}.json`, 'utf-8'));
  } else { // Returns english as default language
    reasons = JSON.parse(fs.readFileSync(`./reasons-en.json`, 'utf-8'));
  }

  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
