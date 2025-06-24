require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const axios = require('axios');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

const shouldUseLLM = true;
const model = 'meta-llama/llama-3.3-8b-instruct:free';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req) => req.headers['cf-connecting-ip'] || req.ip,
  message: {
    error: 'Too many requests, please try again later. (120 reqs/min/IP)',
  },
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/no', async (req, res) => {
  if (shouldUseLLM && OPENROUTER_API_KEY) {
    const theme = req.query.theme?.toLowerCase();
    const userMessage = theme
      ? `Give me a excuse to say no to something, related to the theme: ${theme}.`
      : 'Give me a excuse to say no to something.';

    try {
      const llmResponse = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model,
          messages: [
            {
              role: 'system',
              content:
                "You are an API that generates a single, creative, humorous, and random excuse to say 'no'. Your response must contain only the excuse — no greetings, explanations, or additional text.",
            },
            {
              role: 'user',
              content: userMessage,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const reason = llmResponse.data.choices?.[0]?.message?.content?.trim();

      if (reason) {
        return res.json({ reason, theme, source: 'llm' });
      }

      console.warn('LLM response was empty, falling back to local reasons.');
    } catch (err) {
      console.error('LLM error, falling back to local reasons:', err.message);
    }
  }

  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason, source: 'offline' });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
