import { rateLimit } from 'express-rate-limit';

// request limit config
export const rateLimitConfig = rateLimit({
     windowMs: 15 * 60 * 1000,
     max: 100,
     message: 'Too many requests',
});
