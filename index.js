const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.use(cors());
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

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

// Select a rejection reason. If idx is supplied, return that specific entry;
// otherwise return a random one.
function generateReason(reasons, idx) {
  if (idx !== undefined && idx !== null) {
    const id = parseInt(idx, 10);
    if (isNaN(id) || id < 0 || id >= reasons.length) {
      throw new Error('Reason not found');
    }
    return reasons[id];
  }

  // No index supplied — return a random reason
  return reasons[Math.floor(Math.random() * reasons.length)];
}

// Rejection reason endpoint — accepts an optional ?idx query parameter
app.get('/no', (req, res) => {
  const idx = req.query.idx; // optional index query param
  try {
    const reason = generateReason(reasons, idx);
    res.json({ reason });
  } catch (e) {
    return res.status(404).json({ error: e.message });
  }
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`No-as-a-Service is running on port ${PORT}`);
  });
}

module.exports = { app, generateReason };
