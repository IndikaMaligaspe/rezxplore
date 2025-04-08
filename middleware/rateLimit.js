// middleware/rateLimit.js

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ⏳ 15 minutes
  max: 100, // 🚫 limit each IP to 100 requests per windowMs
  standardHeaders: true, // ✅ Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // ❌ Disable the `X-RateLimit-*` headers
});

module.exports = limiter;
