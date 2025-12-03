const express = require("express");
const rateLimit = require("express-rate-limit");

const { PORT, DEFAULT_LANG } = require("./constants");
const { loadReasons } = require("./utils");

const app = express();
app.set("trust proxy", true);

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers["cf-connecting-ip"] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: {
    error: "Too many requests, please try again later. (120 reqs/min/IP)",
  },
});

app.use(limiter);

// Random rejection reason endpoint
app.get("/no", (req, res) => {
  const lang = req.query.lang || DEFAULT_LANG;
  const list = loadReasons(lang);

  if (!Array.isArray(list) || list.length === 0) {
    const fallback = loadReasons(DEFAULT_LANG);

    if (!fallback || fallback.length === 0) {
      return res.status(204).json({ reason: null });
    }

    const reason = fallback[Math.floor(Math.random() * fallback.length)];

    return res.json({ reason });
  }

  const reason = list[Math.floor(Math.random() * list.length)];

  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
