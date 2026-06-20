# ShopEasy API Test Cases — DummyJSON Execution
**Assignment 2 | QA Excellence | API Testing Concepts**

---

## Overview

| Item | Detail |
|------|--------|
| Case Study | ShopEasy E-Commerce Order Management API |
| Live Test Target | DummyJSON — `https://dummyjson.com` |
| Auth Method | Bearer Token (JWT via `POST /auth/login`) |
| Total Endpoints | 12 |
| Total Test Cases | 24 (1 positive + 1 negative per endpoint) |
| Tester | Gopalakrishna Ratnala |
| Date | June 2026 |

---

## Module 1 — Authentication

### TC-A01-P | Login — Valid credentials → 200 + accessToken

| Field | Value |
|-------|-------|
| **TC ID** | TC-A01-P |
| **Module** | Authentication |
| **ShopEasy Concept** | `POST /auth/login` |
| **DummyJSON Endpoint** | `POST /auth/login` |
| **Pre-conditions** | Test user `emilys` exists in DummyJSON |
| **Request Body** | `{ "username": "emilys", "password": "emilyspass", "expiresInMins": 60 }` |
| **Expected Status** | 200 OK |
| **Assertions** | `accessToken` is a non-empty string · `id` and `username` present · token saved to collection variable |
| **Type** | ✅ Positive |

---

### TC-A01-N | Login — Wrong password → 400 Unauthorized

| Field | Value |
|-------|-------|
| **TC ID** | TC-A01-N |
| **Module** | Authentication |
| **DummyJSON Endpoint** | `POST /auth/login` |
| **Request Body** | `{ "username": "emilys", "password": "WRONG_PASSWORD_123" }` |
| **Expected Status** | 400 Bad Request |
| **Assertions** | No `accessToken` in response · `message` or `error` field present |
| **Type** | ❌ Negative |

---

### TC-A02-P | Register User — Valid payload → 201 + id

| Field | Value |
|-------|-------|
| **TC ID** | TC-A02-P |
| **Module** | Authentication |
| **ShopEasy Concept** | `POST /auth/register` |
| **DummyJSON Endpoint** | `POST /users/add` |
| **Request Body** | `{ "firstName": "QA", "lastName": "Tester", "age": 28, "email": "qa.tester@shopeasy-test.com", "username": "qa_tester_{{timestamp}}", "password": "Test@1234" }` |
| **Expected Status** | 201 Created |
| **Assertions** | `id` is a number · `firstName` equals `"QA"` · `lastName` equals `"Tester"` · `newUserId` saved to variable |
| **Type** | ✅ Positive |

---

### TC-A02-N | Register User — Empty body → 400 Bad Request

| Field | Value |
|-------|-------|
| **TC ID** | TC-A02-N |
| **Module** | Authentication |
| **DummyJSON Endpoint** | `POST /users/add` |
| **Request Body** | `{}` |
| **Expected Status** | 400 Bad Request (real API); DummyJSON mock returns 200 or 201 even for empty body (no payload validation) |
| **Assertions** | Response is one of 200, 201, 400, or 422 — DummyJSON mock behavior documented |
| **Type** | ❌ Negative |

---

## Module 2 — Product Catalog

### TC-P01-P | List Products — Pagination → 200 + paginated results

| Field | Value |
|-------|-------|
| **TC ID** | TC-P01-P |
| **Module** | Product Catalog |
| **ShopEasy Concept** | `GET /products?page=1&limit=10` |
| **DummyJSON Endpoint** | `GET /products?limit=5&skip=0` |
| **Expected Status** | 200 OK |
| **Assertions** | `products` is a non-empty array · `total`, `skip`, `limit` fields present · `limit === 5` · `skip === 0` · each product has `id`, `title`, `price > 0` · saves first `productId` |
| **Type** | ✅ Positive |

---

### TC-P01-N | List Products — limit=0 → boundary behavior

| Field | Value |
|-------|-------|
| **TC ID** | TC-P01-N |
| **Module** | Product Catalog |
| **DummyJSON Endpoint** | `GET /products?limit=0` |
| **Expected Status** | 200 (DummyJSON treats limit=0 as no-limit, returning all products; real API should return 400 or empty) |
| **Assertions** | Status 200 · `products` is an array (DummyJSON returns all 194 products — boundary behavior documented) |
| **Type** | ❌ Negative |

---

### TC-P02-P | Get Product by ID — Valid ID → 200

| Field | Value |
|-------|-------|
| **TC ID** | TC-P02-P |
| **Module** | Product Catalog |
| **ShopEasy Concept** | `GET /products/{id}` |
| **DummyJSON Endpoint** | `GET /products/{{productId}}` |
| **Expected Status** | 200 OK |
| **Assertions** | `id` matches requested ID · `title`, `price`, `category`, `stock` all present · `price > 0` |
| **Type** | ✅ Positive |

---

### TC-P02-N | Get Product by ID — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-P02-N |
| **Module** | Product Catalog |
| **DummyJSON Endpoint** | `GET /products/99999` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` field present |
| **Type** | ❌ Negative |

---

### TC-P03-P | Search Products — Keyword match → 200 + results

| Field | Value |
|-------|-------|
| **TC ID** | TC-P03-P |
| **Module** | Product Catalog |
| **ShopEasy Concept** | Filter products by keyword |
| **DummyJSON Endpoint** | `GET /products/search?q=phone` |
| **Expected Status** | 200 OK |
| **Assertions** | `products` array is non-empty · `total > 0` · at least one product title/description/category relates to "phone" |
| **Type** | ✅ Positive |

---

### TC-P03-N | Search Products — Gibberish query → 200 + empty

| Field | Value |
|-------|-------|
| **TC ID** | TC-P03-N |
| **Module** | Product Catalog |
| **DummyJSON Endpoint** | `GET /products/search?q=xyzxyzxyz123nonexistent` |
| **Expected Status** | 200 OK |
| **Assertions** | `products` array is empty · `total === 0` |
| **Type** | ❌ Negative |

---

### TC-P04-P | Filter by Category — Valid category → 200 + filtered

| Field | Value |
|-------|-------|
| **TC ID** | TC-P04-P |
| **Module** | Product Catalog |
| **ShopEasy Concept** | `GET /products?category=electronics` |
| **DummyJSON Endpoint** | `GET /products/category/smartphones` |
| **Expected Status** | 200 OK |
| **Assertions** | `products` array non-empty · every product has `category === "smartphones"` |
| **Type** | ✅ Positive |

---

### TC-P04-N | Filter by Category — Invalid category → 200 empty or 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-P04-N |
| **Module** | Product Catalog |
| **DummyJSON Endpoint** | `GET /products/category/invalid-xyz-category` |
| **Expected Status** | 200 with empty products array (DummyJSON mock); real API: 404 Not Found |
| **Assertions** | Status 200 or 404 · If 200: `products` array is empty · If 404: `message` or `error` present |
| **Type** | ❌ Negative |

---

## Module 3 — Shopping Cart

### TC-C01-P | Add to Cart — Valid products → 201 + cart

| Field | Value |
|-------|-------|
| **TC ID** | TC-C01-P |
| **Module** | Shopping Cart |
| **ShopEasy Concept** | `POST /cart/items` |
| **DummyJSON Endpoint** | `POST /carts/add` |
| **Request Body** | `{ "userId": 1, "products": [{"id": 1, "quantity": 2}, {"id": 5, "quantity": 1}] }` |
| **Expected Status** | 201 Created |
| **Assertions** | `id` present (saved as `cartId`) · `products` array non-empty · `total > 0` |
| **Type** | ✅ Positive |

---

### TC-C01-N | Add to Cart — Empty products → 400

| Field | Value |
|-------|-------|
| **TC ID** | TC-C01-N |
| **Module** | Shopping Cart |
| **DummyJSON Endpoint** | `POST /carts/add` |
| **Request Body** | `{ "userId": 1, "products": [] }` |
| **Expected Status** | 400 Bad Request |
| **Assertions** | `message` or `error` field present |
| **Type** | ❌ Negative |

---

### TC-C02-P | View Cart — Valid ID → 200 + cart details

| Field | Value |
|-------|-------|
| **TC ID** | TC-C02-P |
| **Module** | Shopping Cart |
| **ShopEasy Concept** | `GET /cart` |
| **DummyJSON Endpoint** | `GET /carts/1` |
| **Expected Status** | 200 OK |
| **Assertions** | `id === 1` · `products`, `total`, `discountedTotal` present · `total > 0` |
| **Type** | ✅ Positive |

---

### TC-C02-N | View Cart — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-C02-N |
| **Module** | Shopping Cart |
| **DummyJSON Endpoint** | `GET /carts/99999` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` present |
| **Type** | ❌ Negative |

---

### TC-C03-P | Update Cart — Change quantities → 200 + updated

| Field | Value |
|-------|-------|
| **TC ID** | TC-C03-P |
| **Module** | Shopping Cart |
| **ShopEasy Concept** | Update cart item quantity |
| **DummyJSON Endpoint** | `PUT /carts/1` |
| **Request Body** | `{ "merge": true, "products": [{"id": 1, "quantity": 5}] }` |
| **Expected Status** | 200 OK |
| **Assertions** | `products` array non-empty · `total > 0` (recalculated) |
| **Type** | ✅ Positive |

---

### TC-C03-N | Update Cart — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-C03-N |
| **Module** | Shopping Cart |
| **DummyJSON Endpoint** | `PUT /carts/99999` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` present |
| **Type** | ❌ Negative |

---

### TC-C04-P | Delete Cart — Valid ID → 200 + isDeleted: true

| Field | Value |
|-------|-------|
| **TC ID** | TC-C04-P |
| **Module** | Shopping Cart |
| **ShopEasy Concept** | `DELETE /cart/items/{itemId}` |
| **DummyJSON Endpoint** | `DELETE /carts/1` |
| **Expected Status** | 200 OK |
| **Assertions** | `isDeleted === true` · `deletedOn` timestamp present |
| **Type** | ✅ Positive |

---

### TC-C04-N | Delete Cart — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-C04-N |
| **Module** | Shopping Cart |
| **DummyJSON Endpoint** | `DELETE /carts/99999` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` present |
| **Type** | ❌ Negative |

---

## Module 4 — User Management

### TC-U01-P | Get User Profile — Valid ID → 200

| Field | Value |
|-------|-------|
| **TC ID** | TC-U01-P |
| **Module** | User Management |
| **ShopEasy Concept** | `GET /users/{id}` (customer profile) |
| **DummyJSON Endpoint** | `GET /users/1` |
| **Expected Status** | 200 OK |
| **Assertions** | `id` matches requested ID · `firstName`, `lastName`, `email` present · `email` contains `@` |
| **Type** | ✅ Positive |

---

### TC-U01-N | Get User Profile — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-U01-N |
| **Module** | User Management |
| **DummyJSON Endpoint** | `GET /users/99999` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` present |
| **Type** | ❌ Negative |

---

### TC-U02-P | Update User Profile — Valid fields → 200

| Field | Value |
|-------|-------|
| **TC ID** | TC-U02-P |
| **Module** | User Management |
| **ShopEasy Concept** | `PUT /users/{id}` (profile update) |
| **DummyJSON Endpoint** | `PUT /users/1` |
| **Request Body** | `{ "firstName": "QA_Updated" }` |
| **Expected Status** | 200 OK |
| **Assertions** | `firstName === "QA_Updated"` · `id` unchanged |
| **Type** | ✅ Positive |

---

### TC-U02-N | Update User Profile — Invalid ID → 404

| Field | Value |
|-------|-------|
| **TC ID** | TC-U02-N |
| **Module** | User Management |
| **DummyJSON Endpoint** | `PUT /users/99999` |
| **Request Body** | `{ "firstName": "ShouldFail" }` |
| **Expected Status** | 404 Not Found |
| **Assertions** | `message` or `error` present |
| **Type** | ❌ Negative |

---

## Test Execution Summary

| Module | TCs | Positive | Negative | Status Codes |
|--------|-----|----------|----------|--------------|
| Authentication | 4 | 2 | 2 | 200, 201, 400 |
| Product Catalog | 8 | 4 | 4 | 200, 400, 404 |
| Shopping Cart | 8 | 4 | 4 | 200, 400, 404 |
| User Management | 4 | 2 | 2 | 200, 404 |
| **Total** | **24** | **12** | **12** | |

---

*Prepared by: Gopalakrishna Ratnala | QA Excellence — Assignment 2 | June 2026*
