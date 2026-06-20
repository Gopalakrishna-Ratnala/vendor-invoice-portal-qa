# Assignment 2 — API Testing Concepts
**QA Excellence | ShopEasy E-Commerce API Challenge**

---

## Overview

This assignment implements the **ShopEasy API Automation Challenge** from the QA Excellence slides — testing an e-commerce Order Management API with Postman and Newman.

**Live test environment:** [DummyJSON](https://dummyjson.com) — a publicly available e-commerce REST API used as the executable stand-in for the ShopEasy test environment. DummyJSON provides the same API concepts (Auth, Products, Cart, Users) in a real, always-live environment.

> **Why DummyJSON?** The ShopEasy API (`api.shopeasy-test.com`) is a fictional case study from the slides. DummyJSON mirrors the same e-commerce domain and modules, enabling real test execution, actual Newman runs, and a genuine HTML report — which is required by the assignment challenge.

---

## ShopEasy → DummyJSON Module Mapping

| ShopEasy Module | ShopEasy Concept | DummyJSON Endpoint |
|----------------|------------------|--------------------|
| 🔐 Auth | User Login | `POST /auth/login` |
| 🔐 Auth | User Registration | `POST /users/add` |
| 📦 Products | List Products (pagination) | `GET /products?limit=5&skip=0` |
| 📦 Products | Get Product by ID | `GET /products/{id}` |
| 📦 Products | Search Products | `GET /products/search?q=phone` |
| 📦 Products | Filter by Category | `GET /products/category/smartphones` |
| 🛒 Cart | Add to Cart | `POST /carts/add` |
| 🛒 Cart | View Cart | `GET /carts/{id}` |
| 🛒 Cart | Update Cart quantities | `PUT /carts/{id}` |
| 🛒 Cart | Remove from Cart | `DELETE /carts/{id}` |
| 👤 Users | Get User Profile | `GET /users/{id}` |
| 👤 Users | Update User Profile | `PUT /users/{id}` |

---

## Files in This Folder

| File | Description |
|------|-------------|
| `01_API_Test_Cases.md` | All 24 test cases documented (TC-A01 to TC-U02) |
| `ShopEasy_DummyJSON_Collection.json` | Postman collection — import this into Postman |
| `ShopEasy_DummyJSON_Environment.json` | Postman environment — import and select before running |
| `Newman_Run_Instructions.md` | Step-by-step guide to run Newman and generate HTML report |
| `report.html` | Actual Newman test execution report |

---

## Test Summary

| Module | Endpoints | Test Cases |
|--------|-----------|------------|
| 🔐 Authentication | Login, Register | TC-A01-P/N, TC-A02-P/N (4) |
| 📦 Product Catalog | List, Get by ID, Search, Category filter | TC-P01 to TC-P04 P/N (8) |
| 🛒 Shopping Cart | Add, View, Update, Delete | TC-C01 to TC-C04 P/N (8) |
| 👤 User Management | Get, Update | TC-U01-P/N, TC-U02-P/N (4) |
| **Total** | **12 endpoints** | **24 test cases** |

**Status codes covered:** 200, 201, 400, 404

---

## Key Features

**Auto Bearer Token (Bonus):** The collection pre-request script automatically fetches and caches the JWT token from `POST /auth/login` before any protected request. Token is reused for 55 minutes — no manual copy-paste needed.

**Test chaining:** `productId` from TC-P01 is saved and passed to TC-P02. `cartId` from TC-C01 is saved for TC-C02. All managed via `pm.collectionVariables`.

**Collection-level guards:** Every request is checked for response time (`< 3000ms`) and `Content-Type: application/json`.

---

## Quick Start — Newman

```bash
# Install Newman + HTML reporter (one-time)
npm install -g newman newman-reporter-htmlextra

# Run the full suite + generate HTML report
newman run ShopEasy_DummyJSON_Collection.json \
  -e ShopEasy_DummyJSON_Environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export report.html \
  --reporter-htmlextra-title "ShopEasy API Test Report — Gopalakrishna Ratnala"
```

See `Newman_Run_Instructions.md` for detailed steps.

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 2 | June 2026*
