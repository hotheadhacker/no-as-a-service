const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.set('trust proxy', true);
/**
 * Parse a string arg to an int, with a default / fallback value, and an optionally clamped range
 * @param {string} value
 * @param {number} def 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} the parsed, clamped integer, or the default
 */
const intArg = (value, def = 0, min = -Infinity, max = Infinity) => {
  const parsed = parseInt(value);
  if (isNaN(parsed)) return def;
  return Math.min(max, Math.max(min, value));
};

const PORT = intArg(process.env.PORT, 3000, 1024, 65535);
const LIMIT_RATE = intArg(process.env.LIMIT_RATE, 10, 0);

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

// Rate limiter: default is 10 requests per minute per IP
if (LIMIT_RATE !== 0) {
  console.info(`Applying rate limit of ${LIMIT_RATE} per IP per minute`);
  app.use(rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: LIMIT_RATE,
    keyGenerator: (req, res) => {
      return req.headers['cf-connecting-ip'] || req.ip; // Fallback if header missing (or for non-CF)
    },  
    message: { error: `Too many requests, please try again later. (${LIMIT_RATE} reqs/min/IP)` }
  }));
} else {
  console.info(`Rate limit disabled`);
}

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.info(`No-as-a-Service is running on port ${PORT}`);
});
