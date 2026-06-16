# expressify-TODO-web-

A Todo Backend API built with **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. This project demonstrates how to build a type-safe REST API with proper request validation, database management, and a clean project structure.

The application allows users to register and manage their todos efficiently while leveraging Prisma's modern ORM capabilities and Zod's runtime validation for reliable data handling.

---

## Overview

Managing tasks is one of the most common requirements in modern applications. This project provides a backend service that enables:

- User registration and management
- Todo creation and retrieval
- Data validation before database operations
- Type-safe API development with TypeScript
- Efficient database communication through Prisma ORM

The project is designed to serve as a learning resource for developers who want to understand how Express, Prisma, PostgreSQL, and TypeScript work together in a real-world backend application.

---

## Features

### User Management
- Register new users through a dedicated signup endpoint
- Store user information securely in PostgreSQL
- Validate incoming user data before database insertion

### Todo Management
- Create todos linked to specific users
- Fetch all todos associated with a user
- Maintain proper relationships between users and todos

### Database Integration
- PostgreSQL database support
- Prisma ORM for database queries and schema management
- Easy migration handling with Prisma Migrate

### Input Validation
- Request validation using Zod
- Prevent invalid data from reaching the database
- Structured error handling for invalid requests

### Type Safety
- Fully written in TypeScript
- Improved developer experience with static type checking
- Reduced runtime errors through compile-time validation

### Clean Architecture
- Organized folder structure
- Separation of concerns
- Easy to scale and maintain

---

## Tech Stack

### Backend Framework
- **Express.js** – Lightweight and flexible Node.js framework for building REST APIs.

### Language
- **TypeScript** – Adds static typing to JavaScript, making code more maintainable and reliable.

### Database
- **PostgreSQL** – Powerful open-source relational database.

### ORM
- **Prisma** – Modern ORM that provides type-safe database access and migration support.

### Validation
- **Zod** – TypeScript-first schema validation library for validating API requests.

### Environment Management
- **dotenv** – Loads environment variables from `.env` files.

### Runtime
- **Node.js** – JavaScript runtime environment.

---

## Project Structure

backend/
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   └── index.ts
│
├── validation/
│   └── userValidation.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
