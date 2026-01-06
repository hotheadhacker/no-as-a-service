const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.use(cors());
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load reasons from reasons directory (JSON files, one per language)
const langs = fs.readdirSync('./reasons');
const reasons = {};
langs.forEach(lang => {
  const langReasons = JSON.parse(fs.readFileSync(`./reasons/${lang}`, 'utf-8'));
  reasons[lang.replace('.json', '')] = langReasons;
});

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
  // Determine language from query parameter or default to 'en'
  const lang = req.query.lang && reasons[req.query.lang] ? req.query.lang : 'en';
  const languageReasons = reasons[lang];
  const reason = languageReasons[Math.floor(Math.random() * languageReasons.length)]; 
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
