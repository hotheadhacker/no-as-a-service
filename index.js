const express = require('express');
const rateLimit = require('express-rate-limit');
const { NoService } = require('./noservice');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize NoService
const noService = new NoService();

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const reason = noService.getRandomReason();
  res.json({ reason });
});

// Get all reasons endpoint
app.get('/reasons', (req, res) => {
  const reasons = noService.getAllReasons();
  res.json({ reasons });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
