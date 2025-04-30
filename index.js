const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons-en.json', 'utf-8'));
const reasonpt = JSON.parse(fs.readFileSync('./reasons-ptbr.json', 'utf-8'));

// Rate limiter: 10 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { error: "Too many requests, please try again later." }
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason });
});

app.get('/no/pt', (req, res) => {
  const reasonpt = reasonpt[Math.floor(Math.random() * reasonpt.length)];
  res.json({ reasonpt });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
