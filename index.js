const express = require("express");
const rateLimit = require("express-rate-limit");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync("./reasons.json", "utf-8"));

// Rate limiter: 10 requests per minute per IP
// const limiter = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   max: 10,
//   message: { error: "Too many requests, please try again later." }
// });

// app.use(limiter);

// Random rejection reason endpoint
app.get("/no", (req, res) => {
  const category = req.query.category;

  let filtered = reasons;

  if (category) filtered = reasons.filter((r) => r.category === category);

  if (filtered.length == 0)
    return res
      .status(404)
      .json({ error: "No reasons found for the given category." });

  const reason = filtered[Math.floor(Math.random() * filtered.length)];
  res.json({ reason: reason.reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
