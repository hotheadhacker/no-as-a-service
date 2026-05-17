import express, { Express, Request, Response} from 'express'
import rateLimit, { RateLimitInfo, RateLimitRequestHandler } from 'express-rate-limit';
import { readFileSync } from 'node:fs'
import cors from 'cors'
import 'dotenv/config';

// Types and Interfaces
interface ReasonResponse<T> {
  reason: T
};

type Reasons<T> = T[];

// API 
const app: Express = express();

app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

const PORT: number = Number(process.env.PORT) || 3000;

// Load reasons from JSON
const reasons: Reasons<string> = JSON.parse(readFileSync(`reasons.json`, 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter: RateLimitRequestHandler = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req: Request): string => {
    const ip = req.headers['cf-connecting-ip'] || req.ip;
    const client = Array.isArray(ip) ? ip[0] : ip;
    return client as string;
  },
  message: {
    error: "Limite de requisições atingido, tente novamente mais tarde. (120 reqs/min/IP)"
  }
});

app.use(limiter);

app.get('/', ({}: Request, res: Response<string>) => {
  res.send('This is the API root. <br> Add /no in the URL to access the endpoint')
})

// Random rejection reason endpoint
app.get('/no', ({}: Request, res: Response<ReasonResponse<string>>) => {
  const reason: ReasonResponse<string> = {
    reason: reasons[Math.floor(Math.random() * reasons.length)]!
  };

  res.json(reason);
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service rodando na porta ${PORT}`);
});

