const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

const availableLanguages = {
  'en': 'en.json',
  'de': 'de.json',
  'fr': 'fr.json',
};

// Default language
const defaultLanguage = 'en';

// Load reasons based on language
function getReasons(lang) {
  try {
    const languageFile = availableLanguages[lang] || availableLanguages[defaultLanguage];
    const filePath = path.join(__dirname, 'reasons', languageFile);
    
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    
    // Fallback to English if file doesn't exist
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'reasons', availableLanguages[defaultLanguage]), 'utf-8'));
  } catch (error) {
    console.error(`Error loading language file: ${error}`);
    // Return a single reason as emergency fallback
    return ["Sorry, I can't do that right now."];
  }
}

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
  // Parse Accept-Language header
  const acceptLanguage = req.headers['accept-language'];
  let lang = defaultLanguage;
  
  if (acceptLanguage) {
    // Extract language code (e.g., 'en-US' -> 'en')
    const requestedLanguages = acceptLanguage.split(',')
      .map(langQ => {
        const [language, qValue] = langQ.trim().split(';');
        return language.substring(0, 2).toLowerCase(); // Get primary language tag
      });
    
    // Find the first requested language that's available
    lang = requestedLanguages.find(l => availableLanguages[l]) || defaultLanguage;
  }
  
  // Load reasons for the selected language
  const reasons = getReasons(lang);
  
  // Pick a random reason
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});