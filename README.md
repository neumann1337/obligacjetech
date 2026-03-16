### Obligacje.tech – Polish Treasury Bonds Calculator

![](Images/1.png)

A full-stack web application designed to simulate and analyze profits from Polish Treasury Bonds (OTS, DOS, TOZ, COI, EDO). The tool provides precise net profit calculations, accounting for compound interest (capitalization), capital gains tax (Belka tax), and inflation indexing.

# Key Features

Advanced Profit Calculator: Simulates daily, monthly, and yearly returns using compound interest logic.

![](Images/3.png)

Data Visualization: Custom SVG charts implementation (Linear Growth & ROI Pie Chart) without external chart libraries.

![](Images/4.png)
![](Images/5.png)

Market Data Integration: Real-time data integration with NBP API (FX rates, gold prices).

![](Images/9.png)

Educational Hub: Interactive knowledge base regarding bond types and investment strategies.

![](Images/6.png)
![](Images/7.png)

Security: Backend implementation of rate limiting (Bucket4j) and strict input validation.

# Tech Stack

Frontend

Next.js 16.1.2 (App Router)

TypeScript

Tailwind CSS

Lucide React

Custom SVG Charts (zero-dependency implementation)

Backend

Java Spring Boot 3.2

Maven

Bucket4j (Rate Limiting)

Spring Validation

JSON-based storage

# How to Run Locally

Prerequisites: Node.js 18+, JDK 17+, Maven.

1. Start Backend (Java)

cd backend
mvn clean spring-boot:run

The server will start on port 8080.

2. Start Frontend (Next.js)

cd frontend

Create local environment file

echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:8080/api" > .env.local

npm install
npm run dev

The application will be available at http://localhost:3000.

# Security & Architecture

The project follows a REST API architecture with separation of concerns.

Decoupling: Backend is completely separated from the presentation layer.

CORS: Configured for secure local and production communication.

Rate Limiting: Protects calculation endpoints from abuse using a token-bucket algorithm.

Error Handling: Unified JSON error responses provided to the frontend.

# Purpose

This project was created as a portfolio and educational full-stack application to demonstrate:

Backend security best practices

REST API design

Complex financial calculation logic

Frontend data visualization techniques

# Author

Bartłomiej Neumann
