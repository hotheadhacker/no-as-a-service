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
  // If the requested language is not specified or not available, then check Accept-Language header
  // If no match found, default to 'en'
  let lang = 'en';
  if (req.query.lang && reasons[req.query.lang]) {
    lang = req.query.lang;
  } else {
    if (req.headers['accept-language']) {
      // Extract languages from header (ignore quality values)
      // e.g. "en-US,en;q=0.9,fr;q=0.8" -> ["en", "en", "fr"]
      const acceptedLangs = req.headers['accept-language'].split(',').map(l => l.split(';')[0].trim()).map(l => l.split('-')[0]);
      console.log(acceptedLangs);
      // Find the first accepted language that we have reasons for
      for (const al of acceptedLangs) {
        if (reasons[al]) {
          lang = al;
          break;
        }
      }
    }
  }
  const languageReasons = reasons[lang];
  const reason = languageReasons[Math.floor(Math.random() * languageReasons.length)]; 
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Language', lang);
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
