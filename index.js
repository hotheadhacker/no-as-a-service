const crypto = require('crypto');
const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(compression());
app.set('trust proxy', true);

// load the reasons file
let reasons = [];
fs.readFile('./reasons.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Could not load reasons.json:', err);
    process.exit(1);
  }
  reasons = JSON.parse(data);
  console.log(`Loaded ${reasons.length} reasons`);
});

// rate limiting - 120 req/min per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  keyGenerator: (req) => req.headers['cf-connecting-ip'] || req.ip,
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

// just using crypto.randomInt since it's built-in and secure
function getRandomIndex(max) {
  return crypto.randomInt(0, max);
}

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    reasons_loaded: reasons.length,
    uptime: process.uptime()
  });
});

app.get('/no', (req, res) => {
  // check if reasons are loaded yet
  if (reasons.length === 0) {
    return res.status(503).json({ error: "Service initializing, please try again" });
  }

  const reason = reasons[getRandomIndex(reasons.length)];

  // don't cache random responses
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });

  res.json({ reason });
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found. Try GET /no" });
});

app.listen(PORT, () => {
  console.log(`No-as-a-Service running on port ${PORT}`);
});
