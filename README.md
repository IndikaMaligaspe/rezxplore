# RezXplore Distribution API

This is the backend service for the RezXplore Activity and Experiences Distribution Platform. It exposes RESTful APIs for products, availability, bookings, and cancellations.

---

## 🚀 Project Features

- Express.js REST API
- Sequelize ORM with MySQL
- Sequelize CLI with migrations and seeders
- API Key authentication
- Modular service + controller architecture
- Easily extendable for suppliers and OTA integrations

---

## 📖 API Documentation

Swagger UI available at:  
🔗 http://localhost:3000/docs

---

## ⚙️ Prerequisites

- Node.js (v16+ recommended)
- MySQL database running (with a user and database created)

---

## 📦 Installation

```bash
# Install dependencies

##Environment Setup
npm install

PORT=3000
DB_USER=root
DB_PASS=your_password
DB_NAME=rezxplore
DB_HOST=127.0.0.1

##Sequelize Setup
npx sequelize-cli init

##Migrate the Database
npx sequelize-cli db:migrate
##Seed the Database
npx sequelize-cli db:seed:all

npm install cors
npm install swagger-ui-express yamljs
npm install joi

##Start the Server
npm start
npm run dev

```

## API Documentation

- Visit http://localhost:3000/api-docs
- Swagger UI powered by your OpenAPI YAML spec.

## Authentication

- All endpoints require x-api-key header. You can manage keys via DB or .env.

## Features

- OpenAPI 3.0 support

- Sequelize ORM + MySQL

- Real-time inventory slot tracking

- Booking and cancellation management

- API key-based authentication

- Swagger documentation

- Rate limiting and logging middleware

- Role and permission system
