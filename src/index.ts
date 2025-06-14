import express from "express"
import rateLimit from "express-rate-limit"
import reasons from "./reasons";
import morgan from "morgan";
// import fs from "fs"

const app = express();
const PORT = process.env.PORT || 3000;
app.set('trust proxy', true);
app.use(express.json());
app.use(morgan('dev')); //helps to check who's hitting the server

// Load reasons from JSON (No need)
// const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    const cfIp = req.headers['cf-connecting-ip'];
    if (typeof cfIp === 'string') {
      return cfIp;
    } else if (Array.isArray(cfIp) && cfIp.length > 0) {
      return cfIp[0];
    }
    return req.ip || '';
  },
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

const allStatusCodes = [400, 409, 412, 413, 417, 418, 422, 425, 429];
const earlyMorningStatusCodes = [413, 409, 412, 417, 422, 425];

// Random rejection reason endpoint
app.get('/no', (req, res) => {
  const getReasons = reasons[Math.floor(Math.random()*reasons.length)];   // const reason = reasons[Math.floor(Math.random() * reasons.length)];
  const reason = getReasons.reason;
  
  const now  = new Date();
  const hours = now.getHours();
  const statusPool = hours < 7 ? earlyMorningStatusCodes : allStatusCodes;
  const getRandomStatus = statusPool[Math.floor(Math.random()*statusPool.length)];
  
  res.status(getRandomStatus).json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
