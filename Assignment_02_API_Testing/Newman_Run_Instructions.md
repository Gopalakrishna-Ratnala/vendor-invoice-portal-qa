# Newman Run Instructions
**ShopEasy API Testing — QA Excellence Assignment 2**

Newman is the CLI runner for Postman collections. It lets you run all 24 test cases from the terminal and generate an HTML report — no GUI needed.

---

## Prerequisites

| Requirement | Version | Install |
|-------------|---------|---------|
| Node.js | ≥ 16.x | https://nodejs.org |
| Newman | Latest | `npm install -g newman` |
| HTML Reporter | Latest | `npm install -g newman-reporter-htmlextra` |

Verify installations:
```bash
node --version
newman --version
```

---

## Step 1 — Install Newman & HTML Reporter

```bash
npm install -g newman newman-reporter-htmlextra
```

---

## Step 2 — Run the Collection

Navigate to the `Assignment_02_API_Testing` folder in your terminal:

```bash
cd /path/to/vendor-invoice-portal-qa/Assignment_02_API_Testing
```

Run Newman with the HTML reporter:

```bash
newman run ShopEasy_DummyJSON_Collection.json \
  -e ShopEasy_DummyJSON_Environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export report.html \
  --reporter-htmlextra-title "ShopEasy API Test Report — Gopalakrishna Ratnala" \
  --reporter-htmlextra-darkTheme
```

---

## Step 3 — View the Report

After the run completes, open the generated report:

```bash
# macOS
open report.html

# Windows
start report.html

# Linux
xdg-open report.html
```

The HTML report shows:
- Pass/fail status for each of the 24 test cases
- Request/response details for every call
- Response times
- Failure details with expected vs actual values

---

## Command Options Reference

| Flag | Purpose |
|------|---------|
| `-e ShopEasy_DummyJSON_Environment.json` | Load environment variables |
| `--reporters cli,htmlextra` | Output to terminal AND HTML |
| `--reporter-htmlextra-export report.html` | HTML report file path |
| `--reporter-htmlextra-title "..."` | Custom report title |
| `--reporter-htmlextra-darkTheme` | Dark theme for the report |
| `--delay-request 500` | Add 500ms delay between requests (useful for rate-limited APIs) |
| `--bail` | Stop on first failure |
| `--iteration-count 3` | Run the collection 3 times |

---

## Running with Delay (for Rate-Limited Environments)

```bash
newman run ShopEasy_DummyJSON_Collection.json \
  -e ShopEasy_DummyJSON_Environment.json \
  --delay-request 500 \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export report.html
```

---

## CI/CD Integration (GitHub Actions Example)

Add this to `.github/workflows/api-tests.yml`:

```yaml
name: ShopEasy API Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  api-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Newman
        run: npm install -g newman newman-reporter-htmlextra

      - name: Run ShopEasy API Tests
        run: |
          newman run Assignment_02_API_Testing/ShopEasy_DummyJSON_Collection.json \
            -e Assignment_02_API_Testing/ShopEasy_DummyJSON_Environment.json \
            --reporters cli,htmlextra \
            --reporter-htmlextra-export report.html

      - name: Upload Test Report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: newman-html-report
          path: report.html
```

---

## Expected Output (CLI)

When all tests pass, Newman prints:

```
┌─────────────────────────┬────────────────────┬────────────────────┐
│                         │           executed │             failed │
├─────────────────────────┼────────────────────┼────────────────────┤
│              iterations │                  1 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│                requests │                 24 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│            test-scripts │                 48 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│      prerequest-scripts │                 25 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│              assertions │                112 │                  0 │
├─────────────────────────┴────────────────────┴────────────────────┤
│ total run duration: ~6s                                           │
│ total data received: ~25kb                                        │
│ average response time: ~200ms                                     │
└───────────────────────────────────────────────────────────────────┘
```

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| `newman: command not found` | Run `npm install -g newman` again; check PATH |
| `Error: connect ECONNREFUSED` | DummyJSON is down; check `https://dummyjson.com` is reachable |
| Token errors on all requests | The pre-request script auto-fetches the token; check `username`/`password` variables in the environment file |
| Response time assertion fails | DummyJSON cold-start can be slow; threshold is set to 5000ms to accommodate this |
| HTML report not generated | Ensure `newman-reporter-htmlextra` is installed: `npm install -g newman-reporter-htmlextra` |

---

*Gopalakrishna Ratnala | QA Excellence — Assignment 2 | June 2026*
