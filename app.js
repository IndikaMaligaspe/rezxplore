const express = require("express");
const app = express();
const cors = require("cors");
const rateLimit = require("./middleware/rateLimit");
const morgan = require("morgan"); // Useing morgan for logging
const YAML = require("yamljs");

// Swagger setup
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = YAML.load("docs/rezxplore_full_openapi_final.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
// app.use(logger);
app.use(rateLimit);

// Routes
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", require("./routes/availability"));
app.use("/", require("./routes/booking"));
app.use("/", require("./routes/cancellation"));
app.use("/", require("./routes/product"));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 Swagger UI: http://localhost:${PORT}/api-docs`);
});

// npm install express cors joi express-rate-limit swagger-ui-express swagger-jsdoc
