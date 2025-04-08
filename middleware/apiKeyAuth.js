// middleware/apiKeyAuth.js

const db = require("../models");
const { User } = db;

module.exports = async function apiKeyAuth(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ message: "API key required" });
  }

  try {
    const user = await User.findOne({
      where: { api_key: apiKey },
      include: ["Role"],
    });

    if (!user) {
      return res.status(403).json({ message: "Invalid API key" });
    }

    // attach authenticated user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("API Key Auth Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
