const express = require('express');
const rateLimit = require('express-rate-limit');
const { readReasons } = require('./reasons.js');

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

/**
 * Shuffle an array into a new array
 * @param {any[]} array Array of items
 * @returns {any[]} The shuffled array
 */
const toShuffled = (array) => [...array].toSorted(() => Math.random() > 0.5 ? 1 : -1);

// Load reasons from JSON
const reasons = readReasons();
// A copy of the "reasons" deck to pluck items from.
let decks = {};
for (const [key, value] of Object.entries(reasons)) {
  decks[key] = toShuffled(value);
}

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

function parseLanguages(langHeader) {
  const langs = new Set();
  for (const group of langHeader.split(';')) {
    for (const item of group.split(',')) {
      const spec = item.trim();
      if (spec.startsWith('q=')) continue;
      if (spec === '*') continue;
      langs.add(spec);
      if (spec.indexOf('-') !== -1) {
        langs.add(spec.split('-')[0]);
      }
    }
  }
  return [...langs];
}

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  let language = 'default';
  for (const lang of parseLanguages(req.headers['accept-language'])) {
    if (lang in decks) {
      language = lang;
    }
  }
  const deck = decks[language];
  // Deck is empty; reshuffle
  if (deck.length === 0) {
    deck = toShuffled(reasons[language]);
  }
  const reason = deck.shift();
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.info(`No-as-a-Service is running on port ${PORT}`);
});
